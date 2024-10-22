# full-stack app for checking city details and changing photos
This is a full-stack application with Angular JS, Express JS and MySQL.

The cities-database.sql file provides the SQL commands needed to create and populate the cities_db database.
You can use this file to easily set up the database schema and seed it with initial data for use in your project.
To import the database, execute the SQL commands in a MySQL environment.

This application displays a list of cities along with their images and relevant information.
Users have the ability to change a city's photo, which updates the database and remains persistent even after refreshing the page.
By clicking on the "Details" button, users can navigate to a detailed view of the city.

The "Upload Image" button is only enabled when no image is currently associated with the city.
If an image is already present, the button is disabled to prevent unnecessary uploads.
When a user selects a new image, the application prepares to upload it, and the change will be reflected in the database upon confirmation.

## Technologies Used
- **Express.js**: For the backend
- **Angular.js**: Web framework for JavaScript
- **Typescript**: For static typing
- **Material UI**: For styling
- **Leaflet**: For creating interactive maps
- **Multer**: Middleware for handling file uploads
- **MySQL**: Relational database management system
