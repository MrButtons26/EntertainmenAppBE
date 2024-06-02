const mongoose = require(`mongoose`);
const validator = require(`validator`);
const bcrypt = require(`bcrypt`);
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, `username is compulsory`],
    trim: [true],
    unique: [true, `username is already taken,Please try another`],
    maxlength: [20, `username must have less than or equal to 20 characters`],
    minlength: [5, `username must have less than or equal to 20 characters`],
    validate: [validator.isAlphanumeric, `Please enter a valid username`],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: [true, `This email is already Registered`],
    lowercase: true,
    validate: [validator.isEmail, `Please enter a valid Email`],
  },
  createdAt: { type: Date, default: Date.now() },
  password: {
    type: String,
    required: [true, `password is compulsory`],
    minlength: 8,
    select: false,
  },
  bookmark_id: [String],
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.pre(`save`, async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
const User = mongoose.model(`User`, userSchema);

module.exports = User;
