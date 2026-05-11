# Development Milestones (GitHub Issue Format)

This document outlines the step-by-step milestones for the development of the online store application. Each milestone is formatted as a GitHub issue with detailed context, tasks, and test criteria. The steps for each milestone have been further elaborated to ensure clarity and avoid any issues during implementation. This document is designed to be understandable even for non-technical stakeholders.

---

## **Milestone 1: Setup Base for All Apps with Test Suite**

### **Title**
Setup Base for All Apps with Test Suite

### **Description**
The foundation of the project must be established with a clear directory structure and a robust testing setup. This ensures that the codebase is maintainable and testable from the start.

### **Tasks**
1. **Define the Directory Structure**:
   - Create a folder for the frontend application (e.g., `frontend`).
   - Create a folder for the backend application (e.g., `backend`).
   - Inside the `frontend` folder, create subfolders for:
     - `components`: To store reusable UI components.
     - `pages`: To store individual pages of the application.
     - `redux`: To manage application state.
     - `utils`: To store utility functions.
   - Inside the `backend` folder, create subfolders for:
     - `controllers`: To handle business logic.
     - `models`: To define database schemas.
     - `routes`: To define API endpoints.
     - `middlewares`: To handle request/response processing.
2. **Set Up the Frontend Application**:
   - Use `Vite` to initialize the frontend project.
   - Install necessary dependencies such as `react`, `react-dom`, and `vite`.
   - Create a basic `App` component to display a welcome message.
   - Configure `vite.config.js` for development and production builds.
3. **Set Up the Backend Application**:
   - Use `Express.js` to initialize the backend project.
   - Install necessary dependencies such as `express`, `dotenv` (for environment variables), and `cors` (to handle cross-origin requests).
   - Create a basic `server.js` file to start the backend server and display a welcome message on the root API endpoint.
4. **Install Testing Tools**:
   - For the frontend, install `vitest` (testing framework) and `@testing-library/react` (for testing React components).
   - For the backend, install `jest` (testing framework), `supertest` (for testing API endpoints), and `sinon` (for mocking/stubbing).
5. **Write Sample Tests**:
   - Frontend: Create a sample component (e.g., `Button`) and write a test to check if it renders correctly.
   - Backend: Create a sample API route (e.g., `/api/health`) and write a test to check if it returns the expected response.

### **Test Criteria**
- [ ] Verify that the directory structure matches the defined structure in the tasks.
- [ ] Ensure the frontend server starts successfully and displays the welcome message.
- [ ] Ensure the backend server starts successfully and the root API endpoint returns the expected response.
- [ ] Run the frontend test suite and confirm that all tests pass, including the sample component test.
- [ ] Run the backend test suite and confirm that all tests pass, including the sample API route test.
- [ ] Generate code coverage reports for both frontend and backend, and verify that they include the sample tests.

---

## **Milestone 2: Set CI Pipeline for Automated Tests in GitHub**

### **Title**
Set CI Pipeline for Automated Tests in GitHub

### **Description**
Automating tests ensures code quality and prevents regressions. A CI pipeline will run tests on every pull request.

### **Tasks**
1. **Create a Workflow Directory**:
   - In the root of the repository, create a folder named `.github/workflows`.
2. **Define the CI Workflow**:
   - Inside the `.github/workflows` folder, create a file named `ci.yml`.
   - Add the following steps to the workflow:
     - **Checkout Code**: Use GitHub Actions to clone the repository.
     - **Set Up Node.js**: Install Node.js on the runner machine.
     - **Install Dependencies**: Run `npm install` in both the `frontend` and `backend` folders to install required packages.
     - **Run Tests**: Execute the test commands for both the frontend and backend.
     - **Generate Code Coverage Reports**: Ensure that code coverage reports are generated and uploaded as artifacts.
3. **Configure Branch Protection Rules**:
   - In the GitHub repository settings, enable branch protection rules to require passing tests before merging pull requests.

### **Test Criteria**
- [ ] Verify that the CI pipeline runs automatically on every pull request.
- [ ] Confirm that the pipeline installs dependencies and runs tests for both frontend and backend without errors.
- [ ] Ensure that failing tests in the pipeline block the merge process.
- [ ] Verify that code coverage reports are generated and uploaded as artifacts in the pipeline.
- [ ] Confirm that branch protection rules are enforced, requiring the CI pipeline to pass before merging.

---

## **Milestone 3: Set Up Docker for Deployment and CI/CD Pipeline**

### **Title**
Set Up Docker for Deployment and CI/CD Pipeline

### **Description**
Containerizing the application ensures consistent deployment environments and simplifies the CI/CD process.

### **Tasks**
1. **Write Dockerfiles**:
   - For the frontend:
     - Use a Node.js base image to install dependencies and build the application.
     - Use an `nginx` base image to serve the static files.
   - For the backend:
     - Use a Node.js base image to install dependencies and start the server.
2. **Create a Docker Compose File**:
   - Define a `docker-compose.yml` file to run both the frontend and backend containers.
   - Specify environment variables for development and production environments.
3. **Update the CI Pipeline**:
   - Add steps to the CI workflow to build and test Docker images.
   - Push the Docker images to a container registry (e.g., Docker Hub or GitHub Container Registry).

### **Test Criteria**
- [ ] Verify that the Dockerfile for the frontend builds the application and serves it correctly using `nginx`.
- [ ] Verify that the Dockerfile for the backend builds the application and starts the server correctly.
- [ ] Ensure that the `docker-compose.yml` file runs both containers and they communicate as expected.
- [ ] Run the CI pipeline and confirm that Docker images are built and tested successfully.
- [ ] Verify that the Docker images are pushed to the container registry and can be pulled without issues.

---

## **Milestone 4: Configure CloudClusters VPS for Deployment Using Docker**

### **Title**
Configure CloudClusters VPS for Deployment Using Docker

### **Description**
Deploying the application to a staging environment allows for testing in a production-like setup.

### **Tasks**
1. **Provision a VPS**:
   - Set up a virtual private server (VPS) on CloudClusters.
   - Configure SSH access for secure connections.
2. **Install Docker**:
   - Install Docker and Docker Compose on the VPS.
   - Verify the installation by running a test container.
3. **Deploy the Application**:
   - Copy the `docker-compose.yml` file to the VPS.
   - Start the application using `docker-compose up`.
   - Configure environment variables for the staging environment.

### **Test Criteria**
- [ ] Verify that Docker and Docker Compose are installed correctly on the VPS.
- [ ] Confirm that the application starts successfully using `docker-compose`.
- [ ] Ensure that the frontend and backend are accessible from the staging server.
- [ ] Verify that logs and metrics are accessible for debugging.
- [ ] Confirm that the staging environment mirrors the production setup.

---

## **Milestone 5: Domain Mapping and SSL Configuration for Staging Server**

### **Title**
Domain Mapping and SSL Configuration for Staging Server

### **Description**
Mapping a domain and securing it with SSL ensures the staging server is accessible and secure.

### **Tasks**
1. **Purchase a Domain**:
   - Purchase a domain or use an existing one.
2. **Configure DNS**:
   - Set up DNS records to point to the VPS IP address.
3. **Set Up SSL**:
   - Install `Certbot` on the VPS.
   - Generate and configure SSL certificates for the domain.
   - Set up automatic renewal for SSL certificates.

### **Test Criteria**
- [ ] Verify that the domain points to the VPS and is accessible.
- [ ] Confirm that SSL certificates are installed and the server is accessible via HTTPS.
- [ ] Ensure that no SSL/TLS errors appear in the browser.
- [ ] Verify that SSL certificates are renewed automatically without manual intervention.

---

## **Milestone 6: Build Features Step by Step and Release Iteratively**

### **Title**
Build Features Step by Step and Release Iteratively

### **Description**
Developing and releasing features incrementally ensures stability and allows for user feedback.

### **Tasks**
1. **Plan Features**:
   - Create GitHub issues for each feature with detailed context and test criteria.
2. **Develop Features**:
   - Implement features in feature branches.
   - Write unit, integration, and E2E tests for each feature.
3. **Merge and Deploy**:
   - Merge features into the main branch after passing CI checks.
   - Deploy to staging for user acceptance testing (UAT).
4. **Iterate Based on Feedback**:
   - Collect feedback from users and stakeholders.
   - Refine features and fix bugs as needed.

### **Test Criteria**
- [ ] Verify that all tests (unit, integration, and E2E) pass for each feature.
- [ ] Confirm that features work as expected in the staging environment.
- [ ] Ensure that user feedback is collected and addressed in subsequent iterations.
- [ ] Verify that no regressions are introduced during feature development.

---

This document provides a clear and detailed roadmap for the development process, ensuring that each milestone is achieved with proper planning and validation. Each milestone is formatted to be directly usable as a GitHub issue, with elaborated steps to avoid any ambiguity.