const express = require('express');
const cors = require('cors');
const promClient = require('prom-client');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Prometheus Setup
const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

// Custom Metrics
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5],
  registers: [register]
});

const httpRequestTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register]
});

const activeConnections = new promClient.Gauge({
  name: 'active_connections',
  help: 'Number of active connections',
  registers: [register]
});

// Middleware
app.use(cors());
app.use(express.json());

// Metrics Middleware
app.use((req, res, next) => {
  activeConnections.inc();
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const route = req.route ? req.route.path : req.path;
    
    httpRequestDuration
      .labels(req.method, route, res.statusCode)
      .observe(duration);
    
    httpRequestTotal
      .labels(req.method, route, res.statusCode)
      .inc();
    
    activeConnections.dec();
  });
  
  next();
});

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Readiness Check
app.get('/ready', (req, res) => {
  // Add database check or other dependencies
  res.status(200).json({ 
    status: 'ready',
    database: 'connected'
  });
});

// Metrics Endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// API Routes
app.get('/api/posts', (req, res) => {
  // Mock data for demo
  res.json([
    { id: 1, title: 'First Post', content: 'Hello World' },
    { id: 2, title: 'Second Post', content: 'DevOps Demo' }
  ]);
});

app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  res.status(201).json({ 
    id: Date.now(), 
    title, 
    content,
    created_at: new Date().toISOString()
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message 
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    console.log(`📊 Metrics available at http://localhost:${PORT}/metrics`);
    console.log(`💚 Health check at http://localhost:${PORT}/health`);
  });
}

module.exports = app;