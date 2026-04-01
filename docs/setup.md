# Setup Guide

## Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (comes with Node.js)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/aerotrack.git
cd aerotrack
```

### 2. Install dependencies

Use the root-level script to install all dependencies at once:

```bash
npm run install:all
```

Or install each service individually:

```bash
# API Gateway
cd backend/api-gateway && npm install

# Aircraft Service
cd backend/microservices/aircraft-service && npm install

# Maintenance Service
cd backend/microservices/maintenance-service && npm install

# Frontend
cd frontend && npm install
```

### 3. Configure environment

Copy the example environment file:

```bash
cp .env.example .env
```

Default values work out of the box for local development.

### 4. Start all services

```bash
npm run dev
```

This starts all services concurrently:

| Service | URL |
|---------|-----|
| API Gateway | http://localhost:3000 |
| Aircraft Service | http://localhost:3001 |
| Maintenance Service | http://localhost:3002 |
| Frontend | http://localhost:3003 |

### 5. Verify

Open http://localhost:3003 in your browser. You should see the AeroTrack dashboard with fleet statistics and maintenance data.

## Development

### Running individual services

```bash
# API Gateway only
cd backend/api-gateway && npm run start:dev

# Aircraft Service only
cd backend/microservices/aircraft-service && npm run start:dev

# Maintenance Service only
cd backend/microservices/maintenance-service && npm run start:dev

# Frontend only
cd frontend && npm run dev
```

### Testing the API

```bash
# Get all aircraft
curl http://localhost:3000/api/aircraft

# Get aircraft by status
curl http://localhost:3000/api/aircraft?status=active

# Get all maintenance records
curl http://localhost:3000/api/maintenance

# Get upcoming maintenance for an aircraft
curl http://localhost:3000/api/maintenance/aircraft/1/upcoming
```

## Troubleshooting

**Port already in use**: Change the port in the service's `main.ts` or set the `PORT` environment variable.

**Connection refused on API calls**: Ensure all backend services are running before the frontend makes API calls.
