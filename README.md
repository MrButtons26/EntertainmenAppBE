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

1.  **Clone the Repository:** Start by cloning the EntertainmentAppBE repository to your local machine.

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
- axios
- validator

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

1. **Clone the Repository:** Start by cloning the EntertainmentAppFE repository to your local machine.

   ```sh
   https://github.com/MrButtons26/EntertainmentAppFE.git
   ```
2. **Navigate to the Frontend Directory:** Move into the frontend directory of the project.

   ```sh
   cd vite-project
   ```
   
3. **Install Dependencies:** Install the necessary dependencies using npm.

   ```sh
   npm install
   ```

4. **Start the Application:** Run the frontend application.

   ```sh
   npm run dev
   ```

### Frontend Technologies 

- Vite
- HTML
- CSS
- Tailwind CSS
- React.js
- React Query
- Javascript
- React hook form
- React Router Dom
- React redux toolkit
- axios
  
### Frontend Project Structure

- **public:** Images and SVG.
- **services:** API requests to the backend .
- **components:** Reusable components for React.
- **Pages:** Pages for different Routes of the website.

<pre>
|-- public
    |-- noImage.jpg
    |-- vite.svg
|-- services
    |-- getAllBookmarks.js
    |-- getAllMovies.js
    |-- getTvShows.js
    |-- login.js
    |-- signUp.js
    |-- trendingMovies.js
|-- src
    |-- assets 
    |-- Components
        |-- Navbar.jsx  
        |-- SearchBar.jsx  
    |-- context
        |-- Context.jsx
        |-- State.jsx
    |-- Pages
        |-- Bookmark.jsx
        |-- Home.jsx
        |-- Login.jsx
        |-- MovieDisplay.jsx
        |-- Movies.jsx
        |-- PageNotFound.jsx
        |-- SearchPage.jsx
        |-- Tv.jsx
        |-- TvDisplay.jsx
    |-- App.css
    |-- App.jsx 
    |-- index.css
    |-- main.jsx 
    |-- store.jsx
    |-- userSlice.jsx
|-- .eslintrc.cjs
|--.gitignore
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

