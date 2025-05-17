# Setup Instructions: Cloud-Agnostic DevOps Dashboard

## Prerequisites

- Node.js and npm
- Docker and Docker Compose
- Kubernetes cluster (Minikube/kind/Cloud-based)
- kubectl configured
- Ingress controller (if deploying on cluster)
- Helm (optional)

## 1. Start Locally (Dev Mode)

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## 2. Dockerized Deployment

```bash
docker-compose up --build
```

## 3. Kubernetes Deployment

```bash
kubectl apply -f k8s/
```

Access the dashboard via NodePort or Ingress based on your cluster setup.

## Notes

- Backend: Tracks deployments by querying Kubernetes API or integrated CI/CD tools.
- Frontend: Displays real-time deployment metrics.
- Modify `.env` for cluster-specific configs.
