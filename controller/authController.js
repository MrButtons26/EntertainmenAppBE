const User = require(`../model/userModel`);
const jwt = require(`jsonwebtoken`);
const { promisify } = require(`util`);
exports.signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const query = User.create({ userName, email, password });
    const newUser = await query;
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "90d",
    });
    res.status(201).json({
      status: `success`,
      data: {
        _id: newUser._id,
        token,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: `failed`,
      data: {
        error: e,
      },
    });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({
      status: `failed`,
      data: {
        error: `Email and password cannot be empty`,
      },
    });
  }
  const user = await User.findOne({ email }).select(`+password`);
  console.log(user);
  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: `failed`,
      data: {
        error: `Incorrect email or password`,
      },
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "265d",
  });
  res.status(201).json({
    status: `success`,
    token,
  });
};

exports.protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const id = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    console.log(e);
    res.status(401).json({
      status: `Please log in `,
    });
  }
};
