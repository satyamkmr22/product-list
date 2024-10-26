# Product Management System

This project is a full-stack application designed to manage product information, utilizing **PostgreSQL** for the database, **Node.js and Express.js** for backend API operations, and **React** for the frontend user interface. The application is hosted on **Vercel** (frontend) and **Render** (backend).

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

---

## Prerequisites

Ensure the following software is installed on your machine before starting:

1. **PostgreSQL** – Required for database management.
2. **Node.js and NPM** – Needed for running backend and frontend development.

---

## Setup Instructions

### Backend Setup

1. **Clone the Repository**:
   - Start by cloning this repository:
     ```bash
     git clone <repository-url>
     cd <repository-name>
     ```

2. **Install Backend Dependencies**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     npm install
     ```

3. **Database Configuration**:
   - Open PostgreSQL and create a new database:
     ```sql
     CREATE DATABASE contacts_db;
     ```
   - Set up a user for the database if not already done, and assign a password.

4. **Environment Variables**:
   - In the `backend` folder, create a `.env` file and enter your database configuration as follows:
     ```plaintext
     DB_USER=your_postgres_user
     DB_HOST=localhost
     DB_NAME=contacts_db
     DB_PASS=your_password
     DB_PORT=5432
     ```
   - Replace `your_postgres_user`, `contacts_db`, `your_password`, and `5432` with your specific PostgreSQL credentials and port.

5. **Insert Dummy Data**:
   - Run the following command to insert dummy data into the PostgreSQL database:
     ```bash
     node insertDummyData.js
     ```
   - This step will populate the database with initial product records.

6. **Start the Backend Server**:
   - Use this command to start the backend server:
     ```bash
     node index.js
     ```
   - The backend server will now be accessible at `http://localhost:3001` (or another port if specified).

---

### Frontend Setup

1. **Navigate to the Frontend Folder**:
   - Move to the `frontend` directory:
     ```bash
     cd ../frontend
     ```

2. **Install Frontend Dependencies**:
   - Install the necessary npm packages:
     ```bash
     npm install
     ```

3. **Start the Frontend Application**:
   - Run the following command to start the frontend application:
     ```bash
     npm start
     ```
   - The React app should now be running at `http://localhost:3000`.

---

## Usage

After completing the setup, you can access the application:

- **Backend**: The API server runs on `http://localhost:3001`.
- **Frontend**: The user interface is accessible at `http://localhost:3000`.
- **Hosted Application**:
  - **Frontend (Vercel)**: To be updated soon!..
  - **Backend (Render)**: To be updated soon!..

### Basic Features:
- **View Products**: See a list of available products with details like name, description, price, and quantity.
- **Add New Product**: Submit a new product entry through a form.
- **Edit Product**: Update details for an existing product.
- **Delete Product**: Remove a product from the list.

---

## Project Structure

Here is an overview of the main project folders and files:

**Backend (Node.js + Express + PostgreSQL)**:
- **\_\_tests\_\_**: Contains API test files.
  - `productRoutes.test.js`: Test cases for product API routes.
- **config**: Configuration files for the backend.
  - `db.js`: PostgreSQL database connection configuration.
  - `sequelize.js`: Sequelize ORM configuration for PostgreSQL.
- **controllers**: Contains business logic for handling API requests.
  - `productController.js`: Business logic for product operations.
- **models**: Database models.
  - `Product.js`: Defines the Product model schema for queries.
- **routes**: API route definitions.
  - `productRoutes.js`: API routes for CRUD operations.
- `insertDummyData.js`: Script to populate the database with dummy data.
- `index.js`: Main entry point for the backend server.
- `server.js`: Additional setup for server management.

**Frontend (React)**:
- **public**: Contains public assets and the main HTML template.
  - `index.html`: HTML template for the React app.
  - `logofile.avif`, `manifest.json`, `robots.txt`: Additional assets.

- **src**: Main source folder for the frontend application.
  - **api**:
    - `productApi.js`: Contains API requests for product data management.
  - **assets**: Images and other media files.
    - `bg.jpg`, `pm.jpeg`: Background and product images.
  - **components**: UI components for product management.
    - `AddProduct.js`: Component for adding a new product.
    - `LandingPage.js`: Landing page component.
    - `ProductList.js`: Component for displaying the list of products.
  - **css**: Stylesheets for components.
    - `AddProduct.css`, `App.css`, `ContactList.css`, `index.css`, `LandingPage.css`, `ProductList.css`: CSS files for styling different components.
  - `AddProductPage.js`: Main page to add a product.
  - `App.js`: Combines all components for the main application view.
  - `index.js`: Entry point for the React app.
  - `reportWebVitals.js`, `setupTests.js`: Files for performance monitoring and testing.

---

## API Endpoints

**Base URL**: `http://localhost:3001`

| Method | Endpoint         | Description                   |
|--------|-------------------|-------------------------------|
| GET    | `/api/products`  | Retrieve all products        |
| POST   | `/api/products`  | Add a new product            |
| PUT    | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product           |

--- 

## Testing

- **API Tests**: The backend includes test cases for API endpoints.
  - Run the tests using a test runner like `jest` by executing:
    ```bash
    npm test
    ```

--- 

## Notes

- Make sure PostgreSQL is running on your local machine.
- If the application requires modifications for different environments, update the `.env` file accordingly.
- Ensure backend and frontend are started separately; each runs on a different port.

---

## Author

**Satyam**  
Head of Web & App Team, Antaragni'24  
[Antaragni, IIT Kanpur](https://antaragni.in)
