# Netflix Clone

This project is a Netflix clone website where users can view movie details by fetching data from The Movie Database (TMDB) API. Additionally, the project features user authentication using Firebase, allowing users to sign up, log in, and log out.

## Features

- Browse and view movie details from TMDB.
- User authentication (sign up, log in, and log out) using Firebase.
- Responsive design.
- Smooth UI interactions and navigation.

## Technologies Used

- **Frontend**: React.js, React Router
- **Backend Services**: Firebase Authentication, Firebase Firestore
- **API**: The Movie Database (TMDB) API
- **Styling**: CSS
- **Notifications**: react-toastify

## Getting Started

### Prerequisites

Ensure that you have the following installed on your machine:

- Node.js & npm
- Firebase account (for authentication and Firestore setup)
- TMDB API key

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**:

   Run the following command in the project directory:

   ```bash
   npm install
   ```

3. **Create a Firebase project**:

   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new Firebase project.
   - Set up **Firebase Authentication** and enable **Email/Password** sign-in method.
   - Set up **Firestore** for storing user information.

4. **Get the TMDB API key**:

   - Visit [The Movie Database (TMDB)](https://www.themoviedb.org/).
   - Create an account and generate an API key from the developer settings.

5. **Create a `.env` file**:

   In the root of the project, create a `.env` file to store your Firebase and TMDB API credentials.

   ```bash
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
   REACT_APP_TMDB_API_KEY=your-tmdb-api-key
   ```

6. **Start the development server**:

   After setting up the environment variables, start the development server:

   ```bash
   npm start
   ```

   The application should now be running at `http://localhost:3000`.

### Firebase Authentication Setup

To enable user authentication, this project uses Firebase Authentication. Users can sign up, log in, and log out from the website. User data is stored in Firebase Firestore.

### TMDB API Setup

The app fetches movie data from the TMDB API. The API allows users to browse movies, view popular titles, and see detailed information about each movie.

### Folder Structure

```
netflix-clone/
│
├── public/                   # Public assets
├── src/                      # Main application code
│   ├── assets/               # Static files (images, CSS)
│   ├── components/           # React components
│   │   ├── Auth/             # Authentication related components
│   │   └── Movies/           # Movie display components
│   ├── firebase.js           # Firebase configuration and functions
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point
│   ├── TitleCard.js          # Movie card component
│   └── ...                   # Other files
├── .env                      # Environment variables
├── README.md                 # Project documentation
└── package.json              # Project dependencies
```

