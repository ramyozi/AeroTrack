# Architecture

## Overview

AeroTrack follows a microservices architecture pattern with a dedicated API Gateway handling client requests and routing them to the appropriate backend service.

## System Design

```
┌─────────────────┐
│   Frontend       │
│   (Next.js)      │
│   Port 3003      │
└────────┬─────────┘
         │ HTTP
┌────────▼─────────┐
│   API Gateway     │
│   (NestJS)        │
│   Port 3000       │
└──┬────────────┬──┘
   │            │
   │ HTTP       │ HTTP
   │            │
┌──▼──────┐  ┌──▼──────────────┐
│ Aircraft │  │ Maintenance     │
│ Service  │  │ Service         │
│ :3001    │  │ :3002           │
└──────────┘  └─────────────────┘
```

## Services

### API Gateway (Port 3000)

The gateway is the single entry point for all client requests. It:

- Routes requests to the appropriate microservice
- Handles CORS configuration
- Applies global validation pipes
- Provides a unified API surface under `/api`

**Endpoints proxied:**
- `GET/POST/PUT/DELETE /api/aircraft/*` → Aircraft Service
- `GET/POST/PUT /api/maintenance/*` → Maintenance Service

### Aircraft Service (Port 3001)

Manages the aircraft fleet registry.

**Domain:**
- Aircraft registration and metadata
- Fleet status tracking (active, in maintenance, grounded, retired)
- Flight hours tracking

**Endpoints:**
| Method | Path | Description |
|--------|------|-------------|
| GET | /aircraft | List all aircraft (optional status filter) |
| GET | /aircraft/:id | Get aircraft details |
| POST | /aircraft | Register new aircraft |
| PUT | /aircraft/:id | Update aircraft data |
| DELETE | /aircraft/:id | Remove aircraft |

### Maintenance Service (Port 3002)

Manages maintenance records, schedules, and operations.

**Domain:**
- Maintenance scheduling and tracking
- Work order management
- Compliance deadline monitoring

**Endpoints:**
| Method | Path | Description |
|--------|------|-------------|
| GET | /maintenance | List records (optional filters) |
| GET | /maintenance/:id | Get record details |
| POST | /maintenance | Create maintenance record |
| PUT | /maintenance/:id | Update record |
| GET | /maintenance/aircraft/:id/upcoming | Get upcoming maintenance for aircraft |

## Communication Pattern

Services communicate via synchronous REST calls through the API Gateway. The gateway uses `@nestjs/axios` to proxy requests to downstream services.

```
Client Request → API Gateway Controller → Gateway Service (HttpService) → Microservice
```

## Data Model

### Aircraft
- `id` — Unique identifier
- `registration` — Aircraft registration code (e.g., F-GKXA)
- `model` — Aircraft model (e.g., A320-214)
- `manufacturer` — Manufacturer (Airbus, Boeing)
- `yearOfManufacture` — Manufacturing year
- `totalFlightHours` — Cumulative flight hours
- `status` — Current status (active, in_maintenance, grounded, retired)
- `lastMaintenanceDate` — Date of last maintenance
- `nextMaintenanceDue` — Next scheduled maintenance date

### Maintenance Record
- `id` — Unique identifier
- `aircraftId` — Reference to aircraft
- `type` — Maintenance type (scheduled, unscheduled, inspection, overhaul)
- `status` — Current status (pending, in_progress, completed, cancelled)
- `priority` — Priority level (low, medium, high, critical)
- `description` — Work description
- `scheduledDate` — Planned date
- `completedDate` — Completion date (nullable)
- `estimatedDuration` — Estimated hours
- `technician` — Assigned technician

## Design Decisions

1. **In-memory storage** — Chosen for simplicity. Can be replaced with a database (PostgreSQL recommended) without changing the service interfaces.

2. **REST communication** — Simple and sufficient for the current scale. Can migrate to message queues (RabbitMQ/Kafka) for event-driven patterns if needed.

3. **Monorepo structure** — All services in one repository for easier development. Can be split into separate repos as the team grows.

4. **Next.js API rewrites** — Frontend proxies `/api/*` requests to the gateway, avoiding CORS complexity in development.
