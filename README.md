# Entertainment App

The Entertainment App is a robust full-stack application engineered to deliver an extensive and personalized collection of movies and TV shows. By leveraging the Personal API for comprehensive media data retrieval, the app provides users with detailed information and an enriched media consumption experience. This platform integrates user authentication, advanced media exploration, and personalized bookmarking features, ensuring a seamless and engaging user experience.

## Deployment

- **Frontend:** :- https://meek-gaufre-c77449.netlify.app/
- **Backend:** :- https://entertainmentappbe.onrender.com


## Features

- **User Authentication:** Utilizes JWT for secure login and registration, ensuring user data protection.
- **Media Exploration:** Allows users to discover trending movies and TV shows, with detailed views available for each media item.
- **Bookmarks:** Enables users to bookmark their favorite media, creating a personalized list of favorites accessible at any time.
- **Detailed Media Information:** Provides in-depth details about movies and TV shows, including cast, genres, ratings, and more.


## Getting Started For Backend

### Backend Setup

1.  **Clone the Repository:** Start by cloning the Entertainment App repository to your local machine.

    ```sh
    git clone https://github.com/MrButtons26/EntertainmentAppBE.git
    ```


2.  **Install Dependencies:** Install the necessary dependencies using npm.

    ```sh
    npm install
    ```

3.  **Configure Environment Variables:** Create a `.env` file based on the provided `.env.example` file. Provide your MongoDB URI and TMDB API key in the `.env` file.

    ```
    PORT= "Network Port to provide accesibility to the server."
    DATABASE_URL= "Mongodb connection string our url "
    JWT_SECRET= "Secret token for JWT for signing and veryfiying user"
    AUTHORIZATION="TMDB API authentication key"
    ```

4.  **Start the Server:** Run the backend server.

    ```sh
    node index.js
    ```



### Backned Technologies
- Node js 
- Express js
- jsonwebtoken
- bcrypt
- MongoDB 
- Mongoose 
- dotenv
- cors

### Backend Project Structure

- **Controllers:** Contains logic for handling API requests.
- **Models:** Defines the schema for database collections.
- **Router:** API routes for handling requests to different endpoints.


<pre>
    |-- controllers
        |-- authController.js 
        |-- bookmarkMarksController.js 
        |-- languageController.js 
        |-- recommendController.js 
        |-- movieController.js 
        |-- searchController.js
        |-- tvController.js
    |-- models 
        |-- userModel.js 
    |-- router
        |-- bookMarksRoutes.js 
        |-- languageRouter.js 
        |-- moviesRouter.js 
        |-- recommendRouter.js 
        |-- searchRouter.js 
        |-- tvRoutes.js 
        |-- userRouter.js 
|-- .env
|-- .gitignore
|-- .app.js
|-- index.js
|-- package.json
|-- package-lock.json
</pre>

## Getting Started For Frontend

### Frontend Setup

1. **Navigate to the Frontend Directory:** Move into the frontend directory of the project.

   ```sh
   ```

2. **Install Dependencies:** Install the necessary dependencies using npm.

   ```sh
   npm install
   ```

3. **Configure Base Url or API end points :** This is our api endpoins, comming from backend

   ```
   const baseUrl = "Enter Your own backend api endpoints",
   ```

4. **Start the Application:** Run the frontend application.

   ```sh
   npm run dev
   ```

5. **Access the Application:** Open your web browser and navigate to the specified URL (default: http://localhost:5173) to access the Entertainment App.

### Frontend Technologies 

- Vite
- Npm
- HTML
- CSS
- Tailwind CSS
- React.js
- React Query
- Javascript
- Context API
- React hook form
- React Loader Spinner

### Frontend Project Structure

- **Assets:** Contains dummy image .
- **Components:** Reusable components code .
- **Context:** State mangement accross applicaton for authenticatin & bookmark.
- **Pages:** Five main pages, Home, Movie, Tv, Bookmark, Profile.
- **Utils:** Contains baseUrl of api & function to fetch media

<pre>
|-- src
    |-- assets 
    |-- Components
        |-- AutoScrollCarousel.jsx  
        |-- Loader.jsx  
        |-- Navbar2.jsx  
        |-- NormalCard.jsx  
        |-- Rates.jsx  
        |-- RatingSection.jsx  
        |-- SearchBar.jsx  
        |-- SingleCard.jsx  
    |-- context
        |-- Context.jsx
        |-- State.jsx
    |-- Pages
        |-- BookMarkHelp.jsx
        |-- BookMarks.jsx
        |-- Home.jsx
        |-- Login.jsx
        |-- MovieDisplay.jsx
        |-- Movies.jsx
        |-- Register.jsx
        |-- SearchPage.jsx
        |-- TvShowDisplay.jsx
        |-- TvShows.jsx
    |-- Stylesheets
        |-- LoaderStyle.css
    |-- App.jsx 
    |-- main.jsx 
|-- .eslintrc.cjs
|--.gitignore
|-- index.css 
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- tailwind.cofig.js
|-- vite.config.js 
</pre>

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.


## Thank You 