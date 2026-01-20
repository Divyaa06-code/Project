# ☁️ Cloud-Agnostic DevOps Dashboard

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-v18+-green.svg)
![React](https://img.shields.io/badge/react-18.x-blue.svg)

A centralized, real-time deployment tracking and infrastructure monitoring platform. This dashboard provides a "single pane of glass" view for DevOps teams operating across multiple cloud environments, eliminating the need to switch between AWS, Azure, and GCP consoles.

## 🚀 The Problem
In a multi-cloud strategy, engineers face **"Console Fatigue."** Checking deployment statuses, health metrics, and logs requires logging into different portals with different UIs. This project abstracts those differences into one unified, cloud-neutral interface.

## ✨ Key Features
* **Multi-Cloud Integration:** Unified views for AWS (EC2/Lambda), Azure (VMs/Functions), and GCP (GCE/Cloud Run).
* **Real-Time Deployment Tracking:** Live status updates for CI/CD pipelines.
* **Unified Health Metrics:** High-level visualization of CPU, Memory, and Disk usage across providers.
* **Cloud-Agnostic Design:** Easily plug in new providers (DigitalOcean, Oracle Cloud) by following our standard service interface.
* **Secure Credential Management:** Support for Environment Variables and Secret Managers to handle Cloud SDK authentication.

## 🏗️ Technical Stack
* **Frontend:** React.js, Tailwind CSS (Styling), Recharts (Data Visualization).
* **Backend:** Node.js, Express.js.
* **Cloud Connectivity:** AWS SDK, Azure SDK for JS, Google Cloud Client Library.
* **Communication:** Axios for REST APIs & WebSockets for live updates.

## 📂 Project Structure
```text
├── client/              # React frontend application
│   ├── src/components/  # UI components (CloudCards, Sidebar, Graphs)
│   ├── src/hooks/       # Custom hooks for fetching cloud data
│   └── src/context/     # State management for multi-cloud data
├── server/              # Node.js backend API
│   ├── services/        # Abstraction layer (awsService, azureService, etc.)
│   ├── routes/          # API Endpoints (e.g., /api/deployments)
│   └── index.js         # Entry point
└── docker-compose.yml   # Docker setup for local development

🛠️ Getting Started
1. Prerequisites
Node.js (v18 or higher)

NPM or Yarn

Access keys for at least one cloud provider (AWS/Azure/GCP)

2. Installation
Bash

# Clone the repository
git clone [https://github.com/Divyaa06-code/Project.git](https://github.com/Divyaa06-code/Project.git)
cd Project

# Install Backend Dependencies
cd server
npm install

# Install Frontend Dependencies
cd ../client
npm install
3. Environment Setup
Create a .env file in the server directory:

Code snippet

PORT=5000
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AZURE_TENANT_ID=your_id
GCP_PROJECT_ID=your_project_id
4. Running the Project
Bash

# Start Backend (from /server)
npm start

# Start Frontend (from /client)
npm start
📈 Roadmap
[ ] Implement OAuth2 for user login.

[ ] Add support for Kubernetes (K8s) cluster monitoring.

[ ] Integrated Cost-Tracker to monitor spending across clouds.

[ ] One-click rollback functionality for failed deployments.
