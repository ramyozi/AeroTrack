# Git Commit History

Suggested commit sequence for building the project history.

---

#### Commit 1

**Files:**
- README.md
- .env.example
- .gitignore
- package.json

**Message:**
`chore: initialize aerotrack project structure`

**Description:** Set up root project with documentation and configuration files.

---

#### Commit 2

**Files:**
- backend/api-gateway/package.json
- backend/api-gateway/tsconfig.json
- backend/api-gateway/nest-cli.json
- backend/api-gateway/src/main.ts
- backend/api-gateway/src/app.module.ts

**Message:**
`feat: scaffold api gateway service`

**Description:** Create NestJS API Gateway with base configuration and CORS setup.

---

#### Commit 3

**Files:**
- backend/microservices/aircraft-service/package.json
- backend/microservices/aircraft-service/tsconfig.json
- backend/microservices/aircraft-service/nest-cli.json
- backend/microservices/aircraft-service/src/main.ts
- backend/microservices/aircraft-service/src/app.module.ts
- backend/microservices/aircraft-service/src/aircraft/aircraft.module.ts
- backend/microservices/aircraft-service/src/aircraft/entities/aircraft.entity.ts
- backend/microservices/aircraft-service/src/aircraft/dto/create-aircraft.dto.ts
- backend/microservices/aircraft-service/src/aircraft/dto/update-aircraft.dto.ts
- backend/microservices/aircraft-service/src/aircraft/aircraft.service.ts
- backend/microservices/aircraft-service/src/aircraft/aircraft.controller.ts

**Message:**
`feat: add aircraft fleet management microservice`

**Description:** Implement aircraft service with CRUD operations, DTOs, and seed data.

---

#### Commit 4

**Files:**
- backend/microservices/maintenance-service/package.json
- backend/microservices/maintenance-service/tsconfig.json
- backend/microservices/maintenance-service/nest-cli.json
- backend/microservices/maintenance-service/src/main.ts
- backend/microservices/maintenance-service/src/app.module.ts
- backend/microservices/maintenance-service/src/maintenance/maintenance.module.ts
- backend/microservices/maintenance-service/src/maintenance/entities/maintenance.entity.ts
- backend/microservices/maintenance-service/src/maintenance/dto/create-maintenance.dto.ts
- backend/microservices/maintenance-service/src/maintenance/dto/update-maintenance.dto.ts
- backend/microservices/maintenance-service/src/maintenance/maintenance.service.ts
- backend/microservices/maintenance-service/src/maintenance/maintenance.controller.ts

**Message:**
`feat: add maintenance tracking microservice`

**Description:** Implement maintenance service with scheduling, priority management, and filtering.

---

#### Commit 5

**Files:**
- backend/api-gateway/src/aircraft/aircraft.module.ts
- backend/api-gateway/src/aircraft/aircraft.controller.ts
- backend/api-gateway/src/aircraft/aircraft.service.ts
- backend/api-gateway/src/maintenance/maintenance.module.ts
- backend/api-gateway/src/maintenance/maintenance.controller.ts
- backend/api-gateway/src/maintenance/maintenance.service.ts

**Message:**
`feat: implement gateway routing to microservices`

**Description:** Add proxy modules in the API Gateway to route requests to aircraft and maintenance services.

---

#### Commit 6

**Files:**
- frontend/package.json
- frontend/tsconfig.json
- frontend/next.config.js
- frontend/tailwind.config.ts
- frontend/postcss.config.js
- frontend/src/app/globals.css
- frontend/src/app/layout.tsx
- frontend/src/types/aircraft.ts
- frontend/src/types/maintenance.ts
- frontend/src/services/api.ts

**Message:**
`feat: scaffold frontend with next.js and tailwindcss`

**Description:** Set up Next.js application with TailwindCSS, API client, and TypeScript types.

---

#### Commit 7

**Files:**
- frontend/src/components/layout/Sidebar.tsx
- frontend/src/components/aircraft/AircraftCard.tsx
- frontend/src/components/maintenance/MaintenanceTable.tsx
- frontend/src/components/dashboard/DashboardStats.tsx
- frontend/src/components/dashboard/RecentMaintenance.tsx

**Message:**
`feat: implement ui components for dashboard and fleet views`

**Description:** Create reusable components for navigation, aircraft cards, maintenance table, and dashboard statistics.

---

#### Commit 8

**Files:**
- frontend/src/services/aircraft.service.ts
- frontend/src/services/maintenance.service.ts
- frontend/src/hooks/useAircraft.ts
- frontend/src/hooks/useMaintenance.ts

**Message:**
`feat: add api service layer and custom hooks`

**Description:** Implement service functions and React hooks for data fetching.

---

#### Commit 9

**Files:**
- frontend/src/app/page.tsx
- frontend/src/app/aircraft/page.tsx
- frontend/src/app/maintenance/page.tsx

**Message:**
`feat: implement application pages with data integration`

**Description:** Create dashboard, fleet, and maintenance pages with API integration and filtering.

---

#### Commit 10

**Files:**
- docker-compose.yml
- backend/api-gateway/Dockerfile
- backend/microservices/aircraft-service/Dockerfile
- backend/microservices/maintenance-service/Dockerfile
- frontend/Dockerfile

**Message:**
`chore: add docker configuration for all services`

**Description:** Add Dockerfiles and docker-compose for containerized deployment.

---

#### Commit 11

**Files:**
- docs/architecture.md
- docs/setup.md
- docs/deployment.md
- docs/git-commits.md

**Message:**
`docs: add project documentation`

**Description:** Add architecture overview, setup guide, deployment instructions, and contribution guidelines.
