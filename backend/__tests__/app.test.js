const request = require('supertest');
const app = require('../server');

describe('Simple CMS Backend API Tests', () => {
  
  describe('Health Endpoints', () => {
    test('GET /health should return 200', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'healthy');
      expect(response.body).toHaveProperty('timestamp');
    });

    test('GET /ready should return 200', async () => {
      const response = await request(app).get('/ready');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'ready');
    });
  });

  describe('Metrics Endpoint', () => {
    test('GET /metrics should return prometheus metrics', async () => {
      const response = await request(app).get('/metrics');
      expect(response.status).toBe(200);
      expect(response.type).toBe('text/plain');
      expect(response.text).toContain('http_requests_total');
    });
  });

  describe('Posts API', () => {
    test('GET /api/posts should return array', async () => {
      const response = await request(app).get('/api/posts');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });

    test('POST /api/posts should create post', async () => {
      const newPost = {
        title: 'Test Post',
        content: 'Test Content'
      };
      
      const response = await request(app)
        .post('/api/posts')
        .send(newPost);
      
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.title).toBe(newPost.title);
      expect(response.body.content).toBe(newPost.content);
    });
  });

  describe('Error Handling', () => {
    test('GET /invalid-route should return 404', async () => {
      const response = await request(app).get('/invalid-route');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Not Found');
    });
  });
});