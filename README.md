# AeroTrack

Aircraft fleet maintenance tracking platform built with a microservices architecture.

## Overview

AeroTrack is a web platform designed for aviation maintenance teams to track and manage aircraft fleet maintenance operations. It provides real-time visibility into fleet status, maintenance schedules, and compliance tracking.

### Problem

Airlines and MRO (Maintenance, Repair & Overhaul) organizations need to ensure strict compliance with maintenance schedules mandated by aviation authorities (EASA, FAA). Manual tracking with spreadsheets leads to missed deadlines, compliance risks, and operational inefficiencies.

### Solution

AeroTrack centralizes fleet and maintenance data into a single platform, providing:

- **Fleet overview** with real-time aircraft status
- **Maintenance tracking** with scheduling and priority management
- **Dashboard** with key operational metrics

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React 18, TailwindCSS |
| API Gateway | NestJS 10 |
| Microservices | NestJS 10 |
| Language | TypeScript 5 |
| Architecture | Microservices (REST) |

## Architecture

```
Client (Next.js) --> API Gateway (:3000) --> Aircraft Service (:3001)
                                         --> Maintenance Service (:3002)
```

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install all dependencies
npm run install:all

# Start all services in development mode
npm run dev
```

See [docs/setup.md](docs/setup.md) for detailed instructions.

## Project Structure

```
aerotrack/
├── frontend/                  # Next.js frontend application
│   └── src/
│       ├── app/               # Next.js App Router pages
│       ├── components/        # React components
│       ├── services/          # API client services
│       ├── hooks/             # Custom React hooks
│       └── types/             # TypeScript type definitions
├── backend/
│   ├── api-gateway/           # NestJS API Gateway (port 3000)
│   └── microservices/
│       ├── aircraft-service/  # Aircraft fleet management (port 3001)
│       └── maintenance-service/ # Maintenance operations (port 3002)
└── docs/                      # Project documentation
```

## Documentation

- [Architecture](docs/architecture.md)
- [Setup Guide](docs/setup.md)
- [Deployment](docs/deployment.md)

## License

MIT
