# Deployment Guide

## Docker Deployment

### Build and run with Docker Compose

```bash
docker-compose up --build
```

This starts all services in containers:

| Service | Container Port | Host Port |
|---------|---------------|-----------|
| API Gateway | 3000 | 3000 |
| Aircraft Service | 3001 | 3001 |
| Maintenance Service | 3002 | 3002 |
| Frontend | 3003 | 3003 |

### Production build

```bash
docker-compose -f docker-compose.yml up --build -d
```

## Manual Deployment

### Build all services

```bash
# Backend services
cd backend/api-gateway && npm run build
cd backend/microservices/aircraft-service && npm run build
cd backend/microservices/maintenance-service && npm run build

# Frontend
cd frontend && npm run build
```

### Start in production mode

```bash
# Backend services
cd backend/api-gateway && npm run start:prod
cd backend/microservices/aircraft-service && npm run start:prod
cd backend/microservices/maintenance-service && npm run start:prod

# Frontend
cd frontend && npm run start
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| PORT | varies | Service port |
| FRONTEND_URL | http://localhost:3003 | Allowed CORS origin |
| AIRCRAFT_SERVICE_URL | http://localhost:3001 | Aircraft service URL |
| MAINTENANCE_SERVICE_URL | http://localhost:3002 | Maintenance service URL |

## Cloud Deployment Considerations

- Each microservice can be deployed independently
- Use environment variables to configure service URLs
- Add a reverse proxy (Nginx) in front of the API Gateway for production
- Consider adding health check endpoints for container orchestration
- Add database persistence (PostgreSQL) before deploying to production
