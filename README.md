# Employee-Management-System

A ***modern full-stack Employee Management System*** built using Spring Boot (Java) for the backend and React (Vite) for the frontend. It allows users to create, view, update, and delete employee records with seamless UI and powerful backend integration.



## Overview

The Employee Management System is designed to streamline employee record management within an organization. It enables users to perform core CRUD operations through a responsive frontend and secure RESTful backend services.



**The project is developed using** 

* React (Vite) for the frontend, 
* Spring Boot (Java) for the backend, and 
* MySQL as the relational database. 

It follows clean architecture and industry best practices to ensure scalability and maintainability.



### Features

\- Create, Read, Update, and Delete (CRUD) employee records

\- Responsive UI using Bootstrap

\- Client-side routing with React Router

\- RESTful API communication using Axios

\- DTO and Mapper layers for clean data transfer

\- Centralized exception handling

\- Search and filter functionality

\- Export employee data to Excel with timestamp

\- Backend API testing using Postman



### Project Structure



Employee-Management-System

│

├── emps-backend (Spring Boot)

│ └── src

│ ├── main

│ │ ├── java/com/example/emps\_backend

│ │ │ ├── controller

│ │ │ ├── service

│ │ │ ├── repository

│ │ │ ├── entity

│ │ │ ├── dto

│ │ │ ├── mapper

│ │ │ └── exception

│ │ └── resources

│ │ ├── static

│ │ └── templates

│ └── test

│ └── java/com/example/emps\_backend

│

├── emps-frontend (React + Vite)

│ ├── public

│ └── src

│ ├── assets

│ ├── components

│ └── services

│

└── README.md



### Tech Stack



##### Frontend

\- React (Vite)

\- React Router

\- Axios

\- Bootstrap

##### 

##### Backend

\- Spring Boot

\- Spring Data JPA

\- RESTful APIs

\- Lombok



##### Database

\- MongoDB



##### Tools

\- Postman

\- Git \& GitHub

\- IntelliJ IDEA / VS Code



### Architecture

The backend follows a layered architecture:

* Controller Layer – Handles HTTP requests and responses
* Service Layer – Implements business logic
* Repository Layer – Manages database operations
* Entity Layer – Defines database models
* DTO \& Mapper – Ensures clean and secure data transfer
* Exception Layer – Centralized error handling



The frontend is structured with reusable components and service files for scalable UI development and API communication.



##### Steps to Running the project

Backend

1\. Open the backend project in IntelliJ IDEA

2\. Configure MySQL database in `application.properties`

3\. Run the Spring Boot application
    mvn spring-boot:run



###### Frontend

1\. Navigate to the frontend folder
    cd emps-frontend

2\. Install dependencies:
    npm install

Start the development server: 
    npm run dev



#### Future Enhancements

* Authentication and Authorization (JWT)



* Role-based access control



* Admin dashboard with analytics



* Cloud deployment



* HR system integration



***Author***

***Priya Dharshini B***

***Full Stack Developer | React | Spring Boot | MySQL***



