# Backend API
Basic Typescript Express API implementation

## Setup
1. Install dependencies
```bash
npm install
```
2. Start dev server
```bash
npm run dev
```
The server will be available on port 8000, or the port specified in the `.env` file.

## Available Commands
* `npm run dev` - Start development server (hot reload)
* `npm run build` - Build the project
* `npm start` - Start the production server
* `npm test` - Run tests
* `npm run test:watch` - Run tests in watch mode
* `npm run test:coverage` - Run tests with coverage
* `npm run lint` - Run ESLint
* `npm run lint:fix` - Fix ESLint errors
* `mpm run format` - Format code with Prettier
* `npm run format:check` - Dry run of code formatting

## Endpoints
### Health Check
```
GET /health
```
```bash
curl http://localhost:8000/health
```
Response:
```json
{"status": "ok"}
```
