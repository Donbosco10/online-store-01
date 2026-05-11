# Issues for Version 1.0

This document lists all issues decomposed by milestone and area/app, following the proposed label scheme (e.g., `milestone`, `frontend`, `backend`, `testing`, `ci`, `devops`, `deployment`, `security`).

---

## Milestone 1: Setup Base for All Apps with Test Suite

### Main Issue
- **Title:** Setup Base for All Apps with Test Suite
- **Labels:** milestone, project-setup
- **Description:** Establish the project foundation with directory structure and testing setup.

#### Sub-Issues
1. **Define the Directory Structure**  
   _Labels: project-setup_  
   Create frontend/backend folders and subfolders as specified.
2. **Set Up the Frontend Application**  
   _Labels: frontend, project-setup_  
   Initialize with Vite, install dependencies, create App component, configure Vite.
3. **Set Up the Backend Application**  
   _Labels: backend, project-setup_  
   Initialize with Express.js, install dependencies, create server.js.
4. **Install Testing Tools**  
   _Labels: frontend, backend, testing_  
   Install Vitest, @testing-library/react, Jest, Supertest, Sinon.
5. **Write Sample Tests**  
   _Labels: frontend, backend, testing_  
   Create sample Button component test and sample API route test.

---

## Milestone 2: Set CI Pipeline for Automated Tests in GitHub

### Main Issue
- **Title:** Set CI Pipeline for Automated Tests in GitHub
- **Labels:** milestone, ci, testing
- **Description:** Automate tests with a CI pipeline for every pull request.

#### Sub-Issues
1. **Create a Workflow Directory**  
   _Labels: ci_  
   Create .github/workflows folder.
2. **Define the CI Workflow**  
   _Labels: ci, testing_  
   Add ci.yml with steps for checkout, setup, install, test, coverage.
3. **Configure Branch Protection Rules**  
   _Labels: ci, devops_  
   Enable branch protection in GitHub settings.

---

## Milestone 3: Set Up Docker for Deployment and CI/CD Pipeline

### Main Issue
- **Title:** Set Up Docker for Deployment and CI/CD Pipeline
- **Labels:** milestone, devops, deployment
- **Description:** Containerize the application for consistent deployment and CI/CD.

#### Sub-Issues
1. **Write Dockerfiles**  
   _Labels: devops, deployment_  
   Dockerfile for frontend (Node.js + nginx) and backend (Node.js).
2. **Create a Docker Compose File**  
   _Labels: devops, deployment_  
   docker-compose.yml for both containers, env vars.
3. **Update the CI Pipeline**  
   _Labels: ci, devops_  
   Add Docker build/test steps, push images to registry.

---

## Milestone 4: Configure CloudClusters VPS for Deployment Using Docker

### Main Issue
- **Title:** Configure CloudClusters VPS for Deployment Using Docker
- **Labels:** milestone, devops, deployment
- **Description:** Deploy the application to a staging environment on a VPS.

#### Sub-Issues
1. **Provision a VPS**  
   _Labels: devops, deployment_  
   Set up VPS, configure SSH.
2. **Install Docker**  
   _Labels: devops_  
   Install Docker and Docker Compose, verify installation.
3. **Deploy the Application**  
   _Labels: devops, deployment_  
   Copy docker-compose.yml, start app, configure env vars.

---

## Milestone 5: Domain Mapping and SSL Configuration for Staging Server

### Main Issue
- **Title:** Domain Mapping and SSL Configuration for Staging Server
- **Labels:** milestone, devops, security
- **Description:** Map a domain and secure it with SSL for the staging server.

#### Sub-Issues
1. **Purchase a Domain**  
   _Labels: devops_  
   Buy or use existing domain.
2. **Configure DNS**  
   _Labels: devops_  
   Set DNS records to VPS IP.
3. **Set Up SSL**  
   _Labels: devops, security_  
   Install Certbot, generate/configure SSL, set up renewal.

---

## Milestone 6: Build Features Step by Step and Release Iteratively

### Main Issue
- **Title:** Build Features Step by Step and Release Iteratively
- **Labels:** milestone, frontend, backend, testing, devops
- **Description:** Develop and release features incrementally for stability and feedback.

#### Sub-Issues
1. **Plan Features**  
   _Labels: planning_  
   Create GitHub issues for each feature.
2. **Develop Features**  
   _Labels: frontend, backend, testing_  
   Implement features, write tests.
3. **Merge and Deploy**  
   _Labels: devops, deployment_  
   Merge to main, deploy to staging.
4. **Iterate Based on Feedback**  
   _Labels: planning, feedback_  
   Collect feedback, refine features, fix bugs.

---

_This document is for planning and tracking. Use the labels as described when creating GitHub issues._
