# myFlix Client

The myFlix Client is a React-based front-end application that interfaces with the myFlix API to provide users with a comprehensive movie database experience. Users can register, log in, browse movies, and manage their favorite selections.

## Features

- **User Registration and Authentication**: Users can create an account and log in to access personalized features.
- **Movie Catalog**: Browse a list of movies fetched from the myFlix API, each displayed with its title and image.
- **Movie Details**: View detailed information about a selected movie, including description, genre, and director.
- **Favorite Movies**: Add or remove movies from your list of favorites.
- **User Profile Management**: Update personal information and view your favorite movies list.

## Technologies Used

- **Front-end**: React, React Bootstrap, React Router
- **State Management**: React Redux
- **Build Tool**: Parcel
- **Authentication**: JSON Web Token (JWT)

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/barendgabriel/myFlix-client.git
   cd myFlix-client
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and configure the following variables:

   ```
   REACT_APP_API_URL=<your_api_url>
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   The application will run at `http://localhost:1234`.

## Deployment

The application can be deployed using services like Netlify or Vercel. Ensure that the environment variables are correctly configured on the hosting platform.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

This project was developed as part of the CareerFoundry Full-Stack Web Development program.
