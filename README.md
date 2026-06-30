# Task-2-TanviGoyal

## Backend API Project

This project is created as part of my Full Stack Development Internship (Task 2). The main objective of this task is to build a REST API using Node.js and Express.js that performs basic CRUD operations on user data.

## Technologies Used

- Node.js
- Express.js
- CORS
- JavaScript

## Project Structure

```
backend-api
│
├── data
│   └── users.js
├── routes
│   └── users.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Features

- View all users
- View a user by ID
- Add a new user
- Update user details
- Delete a user
- Basic input validation
- JSON request and response handling

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Get all users |
| GET | /users/:id | Get a specific user |
| POST | /users | Add a new user |
| PUT | /users/:id | Update user details |
| DELETE | /users/:id | Delete a user |

## How to Run
Clone the repository:
```bash
git clone https://github.com/goyaltanvi51/Task-2-TanviGoyal.git
```
Go to the project folder:
```bash
cd backend-api
```
Install dependencies:
```bash
npm install
```
Run the project:
```bash
npm start
```
The server will start on:
```
http://localhost:5000
```
## Sample Request
```json
{
  "name": "Amit",
  "email": "amit@gmail.com"
}
```
## Sample Response
```json
{
  "id": 2,
  "name": "Amit",
  "email": "amit@gmail.com"
}
```
## Validation
If required fields are missing, the API returns:
```json
{
  "message": "Name and Email required"
}
```
## Testing
The API was tested using Postman. All endpoints were tested successfully.
## Author
**Tanvi Goyal**
