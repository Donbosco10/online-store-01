# Software Requirements Specification (SRS)

## Version Control
- **Version**: 1.0.0
- **Last Updated**: 25 April 2026
- **Author**: Development Team
- **Change Log**:
  - **1.0.0**: Initial version of the SRS document.

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to define the software requirements for an online store application to sell digital books in PDF format. The application will be built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and will consist of two separate apps:
1. **User App**: For buyers to browse, purchase, and download books.
2. **Admin App**: For a single store seller to manage books, orders, and users.

### 1.2 Scope
The online store application will allow users to browse and purchase digital books. The admin will have the ability to manage the store, including adding books, managing orders, and viewing reports. The application will use Razorpay for payment processing, Cloudflare Buckets for file uploads, and Google OAuth One Tap Login for authentication.

### 1.3 Definitions, Acronyms, and Abbreviations
- **MERN**: MongoDB, Express.js, React.js, Node.js
- **OAuth**: Open Authorization
- **RTK Query**: Redux Toolkit Query
- **UI**: User Interface

### 1.4 References
- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [DaisyUI Documentation](https://daisyui.com/)
- [Razorpay Documentation](https://razorpay.com/)
- [Cloudflare Documentation](https://cloudflare.com/)

---

## 2. Overall Description

### 2.1 Product Perspective
The application will be a web-based platform with two separate apps for users and the admin. It will leverage modern web technologies and cloud services to ensure scalability, security, and performance.

### 2.2 Product Features
#### User App (Buyers)
- **Authentication & Authorization**:
  - Google OAuth One Tap Login.
- **Book Browsing & Search**:
  - Browse books by categories, authors, or tags.
  - Search functionality with filters (price, genre, etc.).
- **Book Details**:
  - View detailed information about a book (title, author, description, price, preview).
- **Shopping Cart**:
  - Add/remove books to/from the cart.
  - Update quantities in the cart.
- **Checkout & Payment**:
  - Razorpay integration for secure payment processing.
  - Order summary and confirmation.
- **Digital Book Delivery**:
  - Instant download link for purchased books.
  - Email confirmation with download link.
- **User Profile**:
  - View and update profile details.
  - View purchase history and re-download purchased books.
- **Reviews & Ratings**:
  - Leave reviews and ratings for purchased books.
  - View reviews from other users.

#### Admin App (Single Store Seller)
- **Authentication**:
  - Admin login with Google OAuth.
- **Dashboard**:
  - Overview of sales, revenue, and user activity.
- **Book Management**:
  - Add, edit, and delete books.
  - Upload book PDFs and cover images to Cloudflare Buckets.
- **Order Management**:
  - View and manage orders.
  - Handle refunds or disputes.
- **User Management**:
  - View and manage user accounts.
- **Reports & Analytics**:
  - Generate sales reports.
  - Analyze user behavior and book performance.

### 2.3 User Classes and Characteristics
- **Buyers**: Users who browse and purchase books.
- **Admin**: A single store seller who manages the store.

### 2.4 Operating Environment
- **Frontend**: React.js with Vite, DaisyUI for styling.
- **Backend**: Node.js with Express.js.
- **Database**: MongoDB (hosted on MongoDB Atlas).
- **Cloud Services**:
  - Cloudflare Buckets for file uploads.
  - Razorpay for payment processing.

### 2.5 Constraints
- The application must support modern web browsers (Chrome, Firefox, Edge).
- The application must ensure secure payment processing and data storage.

---

## 3. Functional Requirements

### 3.1 User App
- **Authentication**:
  - Users must log in using Google OAuth One Tap Login.
- **Book Browsing**:
  - Users can browse books by categories, authors, or tags.
  - Users can search for books using filters.
- **Shopping Cart**:
  - Users can add, remove, and update books in the cart.
- **Checkout**:
  - Users can securely pay using Razorpay.
- **Digital Book Delivery**:
  - Users can download purchased books instantly.
  - Users receive an email confirmation with a download link.
- **Profile Management**:
  - Users can update their profile details.
  - Users can view their purchase history.
- **Reviews**:
  - Users can leave reviews and ratings for books.

### 3.2 Admin App
- **Authentication**:
  - Admin must log in using Google OAuth.
- **Book Management**:
  - Admin can add, edit, and delete books.
  - Admin can upload book PDFs and cover images.
- **Order Management**:
  - Admin can view and manage orders.
  - Admin can handle refunds or disputes.
- **Reports**:
  - Admin can generate sales reports.
  - Admin can analyze user behavior and book performance.

---

## 4. Non-Functional Requirements

### 4.1 Performance Requirements
- The application must handle up to 10,000 concurrent users.
- The application must load pages within 2 seconds under normal conditions.

### 4.2 Security Requirements
- All sensitive data must be encrypted in transit and at rest.
- The application must comply with GDPR for data protection.

### 4.3 Usability Requirements
- The application must have a responsive design for mobile and desktop devices.
- The UI must be intuitive and easy to navigate.

### 4.4 Maintainability Requirements
- The codebase must follow best practices for readability and modularity.
- The application must include unit, integration, and end-to-end tests.

---

## 5. Appendices

### 5.1 References
- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [DaisyUI Documentation](https://daisyui.com/)
- [Razorpay Documentation](https://razorpay.com/)
- [Cloudflare Documentation](https://cloudflare.com/)

## 6. Architecture Overview

### 6.1 System Architecture
The system architecture for the online store application is based on the MERN stack and follows a modular design to ensure scalability, maintainability, and performance. The architecture consists of the following layers:

#### 6.1.1 Frontend
- **Technology**: React.js with Vite
- **Description**: The frontend is responsible for rendering the user interface and handling user interactions. It communicates with the backend via RESTful APIs.
- **Key Features**:
  - Responsive design using DaisyUI and TailwindCSS.
  - State management using Redux Toolkit and RTK Query.
  - Google OAuth One Tap Login integration.

#### 6.1.2 Backend
- **Technology**: Node.js with Express.js
- **Description**: The backend handles business logic, authentication, and communication with the database. It exposes RESTful APIs for the frontend.
- **Key Features**:
  - Secure authentication using JWT and Google OAuth.
  - Payment processing via Razorpay.
  - File uploads to Cloudflare Buckets.

#### 6.1.3 Database
- **Technology**: MongoDB (hosted on MongoDB Atlas)
- **Description**: The database stores all application data, including user information, book details, orders, and reviews.
- **Key Features**:
  - Text indexes for efficient search functionality.
  - Schema validation using Mongoose.

#### 6.1.4 Cloud Services
- **Cloudflare Buckets**: For storing book PDFs and cover images.
- **Razorpay**: For secure payment processing.

### 6.2 Deployment Architecture
The application will be deployed using the following setup:

#### 6.2.1 Frontend Deployment
- **Platform**: Vercel or Netlify
- **Description**: The frontend will be deployed as a static site optimized for performance.

#### 6.2.2 Backend Deployment
- **Platform**: AWS EC2 or Heroku
- **Description**: The backend will be deployed as a Node.js application with load balancing and auto-scaling capabilities.

#### 6.2.3 Database Deployment
- **Platform**: MongoDB Atlas
- **Description**: The database will be hosted in the cloud with high availability and automated backups.

#### 6.2.4 CI/CD Pipeline
- **Tools**: GitHub Actions or CircleCI
- **Description**: A CI/CD pipeline will be set up to automate testing, building, and deployment processes.

### 6.3 Component Diagram
The following diagram provides an overview of the system components and their interactions:

```mermaid
graph TD
    A[Frontend (React.js)] -->|REST API| B[Backend (Node.js)]
    B -->|Database Queries| C[MongoDB Atlas]
    B -->|File Uploads| D[Cloudflare Buckets]
    B -->|Payment Processing| E[Razorpay]
    A -->|OAuth| F[Google OAuth]
```

This architecture ensures a clear separation of concerns, making the system easy to scale and maintain.

## 7. Testing Overview

### 7.1 Testing Objectives
The primary objectives of testing the online store application are:
- To ensure the application meets all functional and non-functional requirements.
- To identify and resolve any defects or issues before deployment.
- To validate the performance, security, and usability of the application.

### 7.2 Testing Levels
The following levels of testing will be conducted:

#### 7.2.1 Unit Testing
- **Description**: Testing individual components or modules of the application.
- **Tools**:
  - Backend: `jest`, `supertest`, `sinon`
  - Frontend: `vitest`, `@testing-library/react`

#### 7.2.2 Integration Testing
- **Description**: Testing the interaction between different modules or components.
- **Tools**:
  - Backend: `mocha`, `chai`
  - Frontend: `msw` (Mock Service Worker)

#### 7.2.3 End-to-End (E2E) Testing
- **Description**: Testing the entire application workflow from start to finish.
- **Tools**:
  - `cypress`

#### 7.2.4 Performance Testing
- **Description**: Testing the application’s performance under various conditions.
- **Tools**:
  - `artillery`, `k6`

#### 7.2.5 Security Testing
- **Description**: Ensuring the application is secure against vulnerabilities.
- **Tools**:
  - `owasp-zap`, `npm audit`

### 7.3 Testing Strategy
- **Automated Testing**: Automated tests will be written for unit, integration, and E2E testing to ensure quick feedback during development.
- **Manual Testing**: Manual testing will be conducted for exploratory testing and usability validation.
- **CI/CD Integration**: Testing will be integrated into the CI/CD pipeline using GitHub Actions or CircleCI to ensure tests are run on every commit.

### 7.4 Test Environment
- **Frontend**: React.js with Vite.
- **Backend**: Node.js with Express.js.
- **Database**: MongoDB (using `mongodb-memory-server` for testing).
- **Cloud Services**:
  - Mocked Cloudflare Buckets for file uploads.
  - Mocked Razorpay for payment processing.

### 7.5 Test Deliverables
- Test Plan Document
- Test Cases and Test Scripts
- Test Reports
- Bug Reports

This testing overview ensures that the application is thoroughly validated at all levels before deployment.

## 8. Product Structure

The product structure outlines the organization of the application into modules and components. This structure ensures clarity in development and facilitates maintainability.

### 8.1 User App (Buyers)
#### 8.1.1 Modules
- **Authentication Module**:
  - Google OAuth One Tap Login.
  - JWT-based session management.
- **Book Browsing Module**:
  - Browse books by categories, authors, or tags.
  - Search functionality with filters.
- **Shopping Cart Module**:
  - Add, remove, and update books in the cart.
- **Checkout Module**:
  - Razorpay integration for payment processing.
  - Order summary and confirmation.
- **Digital Book Delivery Module**:
  - Instant download link for purchased books.
  - Email confirmation with download link.
- **User Profile Module**:
  - View and update profile details.
  - View purchase history.
- **Reviews Module**:
  - Leave reviews and ratings for books.
  - View reviews from other users.

### 8.2 Admin App (Single Store Seller)
#### 8.2.1 Modules
- **Authentication Module**:
  - Google OAuth-based login.
- **Dashboard Module**:
  - Overview of sales, revenue, and user activity.
- **Book Management Module**:
  - Add, edit, and delete books.
  - Upload book PDFs and cover images to Cloudflare Buckets.
- **Order Management Module**:
  - View and manage orders.
  - Handle refunds or disputes.
- **User Management Module**:
  - View and manage user accounts.
- **Reports Module**:
  - Generate sales reports.
  - Analyze user behavior and book performance.

### 8.3 Shared Components
- **API Layer**:
  - RESTful APIs for communication between frontend and backend.
- **Database Layer**:
  - MongoDB for storing user data, book details, orders, and reviews.
- **Cloud Services**:
  - Cloudflare Buckets for file storage.
  - Razorpay for payment processing.

### 8.4 Directory Structure
The following directory structure will be used for the project:

```
/online-store-01
├── /docs
│   └── SRS.md
├── /frontend
│   ├── /src
│   │   ├── /components
│   │   ├── /pages
│   │   ├── /redux
│   │   └── /utils
│   ├── /public
│   └── vite.config.js
├── /backend
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── /middlewares
│   └── server.js
├── /tests
│   ├── /unit
│   ├── /integration
│   └── /e2e
└── package.json
```

This product structure ensures a modular and organized approach to development, making it easier to scale and maintain the application.

## 9. Security Considerations

Security is a critical aspect of the online store application to ensure the safety of user data, transactions, and system integrity. The following security measures will be implemented:

### 9.1 Authentication and Authorization
- **Google OAuth**:
  - Secure user authentication using Google OAuth One Tap Login.
- **JWT (JSON Web Tokens)**:
  - Use JWT for session management with short-lived tokens and refresh tokens.
- **Role-Based Access Control (RBAC)**:
  - Implement RBAC to restrict access to admin-specific features.

### 9.2 Data Security
- **Encryption**:
  - Encrypt sensitive data in transit using HTTPS (TLS 1.3).
  - Encrypt sensitive data at rest, such as user passwords and payment details.
- **Password Hashing**:
  - Use `bcrypt` or `argon2` for hashing user passwords.

### 9.3 Payment Security
- **Razorpay Integration**:
  - Use Razorpay’s secure APIs for payment processing.
  - Ensure PCI DSS compliance for handling payment data.

### 9.4 API Security
- **Rate Limiting**:
  - Implement rate limiting to prevent abuse of APIs.
- **Input Validation**:
  - Validate all user inputs to prevent SQL injection, XSS, and other attacks.
- **CORS (Cross-Origin Resource Sharing)**:
  - Configure CORS policies to restrict access to trusted domains.

### 9.5 File Upload Security
- **Cloudflare Buckets**:
  - Use signed URLs for secure file uploads and downloads.
  - Validate file types and sizes before uploading.

### 9.6 Database Security
- **Access Control**:
  - Restrict database access to authorized services only.
- **NoSQL Injection Prevention**:
  - Sanitize all database queries to prevent NoSQL injection attacks.
- **Backups**:
  - Regularly back up the database and store backups securely.

### 9.7 Application Security
- **Secure Headers**:
  - Use `helmet` to set secure HTTP headers.
- **Content Security Policy (CSP)**:
  - Define a CSP to prevent unauthorized scripts from running.
- **Dependency Management**:
  - Regularly update dependencies and use `npm audit` to identify vulnerabilities.

### 9.8 Monitoring and Incident Response
- **Logging and Monitoring**:
  - Use tools like `winston` or `morgan` for logging application activity.
  - Monitor for suspicious activity and unauthorized access attempts.
- **Incident Response Plan**:
  - Define a plan to respond to security incidents, including data breaches.

### 9.9 Compliance
- **GDPR Compliance**:
  - Ensure the application complies with GDPR for data protection and privacy.
- **PCI DSS Compliance**:
  - Ensure compliance with PCI DSS standards for payment security.

These security measures will ensure the application is robust against potential threats and adheres to industry standards for data protection and privacy.