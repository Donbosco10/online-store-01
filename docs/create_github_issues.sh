#!/bin/bash
# Script to create milestones and issues in Donbosco10/online-store-01 using GitHub CLI
gh_repo="Donbosco10/online-store-01"

# --- Create Milestones ---

gh api repos/$gh_repo/milestones -f title="Setup Base for All Apps with Test Suite" -f description="Establish the project foundation with directory structure and testing setup."
gh api repos/$gh_repo/milestones -f title="Set CI Pipeline for Automated Tests in GitHub" -f description="Automate tests with a CI pipeline for every pull request."
gh api repos/$gh_repo/milestones -f title="Set Up Docker for Deployment and CI/CD Pipeline" -f description="Containerize the application for consistent deployment and CI/CD."
gh api repos/$gh_repo/milestones -f title="Configure CloudClusters VPS for Deployment Using Docker" -f description="Deploy the application to a staging environment on a VPS."
gh api repos/$gh_repo/milestones -f title="Domain Mapping and SSL Configuration for Staging Server" -f description="Map a domain and secure it with SSL for the staging server."
gh api repos/$gh_repo/milestones -f title="Build Features Step by Step and Release Iteratively" -f description="Develop and release features incrementally for stability and feedback."

# --- Create Issues ---

# Milestone 1
milestone1="Setup Base for All Apps with Test Suite"
gh issue create --repo $gh_repo --title "Setup Base for All Apps with Test Suite" --body "Establish the project foundation with directory structure and testing setup." --label "milestone,project-setup" --milestone "$milestone1"
gh issue create --repo $gh_repo --title "Define the Directory Structure" --body "Create frontend/backend folders and subfolders as specified." --label "project-setup" --milestone "$milestone1"
gh issue create --repo $gh_repo --title "Set Up the Frontend Application" --body "Initialize with Vite, install dependencies, create App component, configure Vite." --label "frontend,project-setup" --milestone "$milestone1"
gh issue create --repo $gh_repo --title "Set Up the Backend Application" --body "Initialize with Express.js, install dependencies, create server.js." --label "backend,project-setup" --milestone "$milestone1"
gh issue create --repo $gh_repo --title "Install Testing Tools" --body "Install Vitest, @testing-library/react, Jest, Supertest, Sinon." --label "frontend,backend,testing" --milestone "$milestone1"
gh issue create --repo $gh_repo --title "Write Sample Tests" --body "Create sample Button component test and sample API route test." --label "frontend,backend,testing" --milestone "$milestone1"

# Milestone 2
milestone2="Set CI Pipeline for Automated Tests in GitHub"
gh issue create --repo $gh_repo --title "Set CI Pipeline for Automated Tests in GitHub" --body "Automate tests with a CI pipeline for every pull request." --label "milestone,ci,testing" --milestone "$milestone2"
gh issue create --repo $gh_repo --title "Create a Workflow Directory" --body "Create .github/workflows folder." --label "ci" --milestone "$milestone2"
gh issue create --repo $gh_repo --title "Define the CI Workflow" --body "Add ci.yml with steps for checkout, setup, install, test, coverage." --label "ci,testing" --milestone "$milestone2"
gh issue create --repo $gh_repo --title "Configure Branch Protection Rules" --body "Enable branch protection in GitHub settings." --label "ci,devops" --milestone "$milestone2"

# Milestone 3
milestone3="Set Up Docker for Deployment and CI/CD Pipeline"
gh issue create --repo $gh_repo --title "Set Up Docker for Deployment and CI/CD Pipeline" --body "Containerize the application for consistent deployment and CI/CD." --label "milestone,devops,deployment" --milestone "$milestone3"
gh issue create --repo $gh_repo --title "Write Dockerfiles" --body "Dockerfile for frontend (Node.js + nginx) and backend (Node.js)." --label "devops,deployment" --milestone "$milestone3"
gh issue create --repo $gh_repo --title "Create a Docker Compose File" --body "docker-compose.yml for both containers, env vars." --label "devops,deployment" --milestone "$milestone3"
gh issue create --repo $gh_repo --title "Update the CI Pipeline" --body "Add Docker build/test steps, push images to registry." --label "ci,devops" --milestone "$milestone3"

# Milestone 4
milestone4="Configure CloudClusters VPS for Deployment Using Docker"
gh issue create --repo $gh_repo --title "Configure CloudClusters VPS for Deployment Using Docker" --body "Deploy the application to a staging environment on a VPS." --label "milestone,devops,deployment" --milestone "$milestone4"
gh issue create --repo $gh_repo --title "Provision a VPS" --body "Set up VPS, configure SSH." --label "devops,deployment" --milestone "$milestone4"
gh issue create --repo $gh_repo --title "Install Docker" --body "Install Docker and Docker Compose, verify installation." --label "devops" --milestone "$milestone4"
gh issue create --repo $gh_repo --title "Deploy the Application" --body "Copy docker-compose.yml, start app, configure env vars." --label "devops,deployment" --milestone "$milestone4"

# Milestone 5
milestone5="Domain Mapping and SSL Configuration for Staging Server"
gh issue create --repo $gh_repo --title "Domain Mapping and SSL Configuration for Staging Server" --body "Map a domain and secure it with SSL for the staging server." --label "milestone,devops,security" --milestone "$milestone5"
gh issue create --repo $gh_repo --title "Purchase a Domain" --body "Buy or use existing domain." --label "devops" --milestone "$milestone5"
gh issue create --repo $gh_repo --title "Configure DNS" --body "Set DNS records to VPS IP." --label "devops" --milestone "$milestone5"
gh issue create --repo $gh_repo --title "Set Up SSL" --body "Install Certbot, generate/configure SSL, set up renewal." --label "devops,security" --milestone "$milestone5"

# Milestone 6
milestone6="Build Features Step by Step and Release Iteratively"
gh issue create --repo $gh_repo --title "Build Features Step by Step and Release Iteratively" --body "Develop and release features incrementally for stability and feedback." --label "milestone,frontend,backend,testing,devops" --milestone "$milestone6"
gh issue create --repo $gh_repo --title "Plan Features" --body "Create GitHub issues for each feature." --label "planning" --milestone "$milestone6"
gh issue create --repo $gh_repo --title "Develop Features" --body "Implement features, write tests." --label "frontend,backend,testing" --milestone "$milestone6"
gh issue create --repo $gh_repo --title "Merge and Deploy" --body "Merge to main, deploy to staging." --label "devops,deployment" --milestone "$milestone6"
gh issue create --repo $gh_repo --title "Iterate Based on Feedback" --body "Collect feedback, refine features, fix bugs." --label "planning,feedback" --milestone "$milestone6"

echo "All milestones and issues have been created in $gh_repo."
