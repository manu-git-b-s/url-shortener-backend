# URL Shortener Node.js Project

Welcome to the URL Shortener Project! This repository contains the source code and documentation for a Node.js application built with Express.js for shortening URLs. The project utilizes various libraries and tools including bcrypt, jsonwebtoken, cors, dotenv, mongoose, and nodemailer.

## Features

- **URL Shortening**: Allows users to shorten long URLs into shorter, more manageable links.
- **User Authentication**: Implements user authentication using bcrypt for password hashing and jsonwebtoken for generating and verifying authentication tokens.
- **Custom Short URLs**: Allows users to customize the shortened URLs if desired.
- **Link Expiry**: Provides the option to set expiration times for shortened links.
- **Statistics**: Tracks the number of times a shortened URL has been clicked.
- **Cross-Origin Resource Sharing (CORS)**: Implements CORS to allow requests from authorized domains.
- **Environment Variables**: Utilizes dotenv for managing environment variables securely.
- **Database Integration**: Integrates with MongoDB using mongoose for storing user data and shortened URLs.
- **Email Notifications**: Uses nodemailer to send email notifications for account registration and password resets.

## Dependencies

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemailer](https://nodemailer.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [cors](https://www.npmjs.com/package/cors)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

To get started with the URL Shortener Project, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using `git clone https://github.com/manu-git-b-s/url-shortener-backend.git`.

2. **Install Dependencies**: Install the necessary dependencies by running `npm install`.

3. **Set Environment Variables**: Create a `.env` file in the root directory and define environment variables such as database connection URI, JWT secret, and email configuration.

4. **Database Setup**: Set up a MongoDB database either locally or using a cloud service like MongoDB Atlas. Update the `.env` file with the appropriate database connection URI.

5. **Start the Server**: Start the server by running `npm start` or `npm run dev` if using nodemon for development. The application will be accessible at the specified port (default is 3000).

6. **Testing**: Test the application by navigating to the provided URL and using the shortening functionality. Verify that shortened URLs work as expected.

7. **Customization**: Customize the project as needed to integrate it with your existing applications or to add additional features.

## API Endpoints

- `POST /api/url/createURL`: Shorten a long URL.
- `POST /api/url/all-urls`: Get All Url's of a user.
- `POST /api/url/today`: Get All Url's of a user created today.
- `POST /api/url/monthly`: Get All Url's of a user created in a month.
- `POST /api/click-count`: Updates the no of times a link is clicked.
- `POST /register`: Register a new user.
- `GET /list-all-users`: List all users.
- `POST /login`: Log in with existing credentials.
- `POST /forgotPassword`: Request a password reset.
- `POST /resetPassword`: Reset password using the provided token.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/feature-name`).
6. Create a new Pull Request.

## Support

For any questions or issues, please open an issue on the GitHub repository or contact [manupriyan722@gmail.com].

## Deployed Render Link

[URL Shortener](https://url-shortener-backend-ok26.onrender.com)
