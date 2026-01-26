# 🚀 Simple CMS - Complete DevOps Solution

A full-stack web application with automated software delivery pipeline covering 15+ DevOps topics.

[![CI/CD Pipeline](https://github.com/daniel-tsonkov/simple-cms/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/daniel-tsonkov/simple-cms/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Topics Covered](#topics-covered)
- [Documentation](#documentation)
- [Demo](#demo)
- [Contributing](#contributing)

## 🎯 Overview

Simple CMS is a demonstration project showcasing a complete DevOps pipeline with:

- **Backend**: Node.js + Express
- **Frontend**: Vanilla JavaScript SPA
- **CI/CD**: GitHub Actions
- **GitOps**: ArgoCD
- **Orchestration**: Kubernetes
- **IaC**: Terraform
- **Observability**: Prometheus + Grafana

## ✨ Features

### Application

- ✅ RESTful API with Express
- ✅ SQLite database
- ✅ Health checks & readiness probes
- ✅ Prometheus metrics endpoint
- ✅ Simple web interface

### DevOps Pipeline

- ✅ **Continuous Integration**
  - Automated linting (ESLint)
  - Unit tests (Jest)
  - Secret scanning (TruffleHog)
  - SAST (Semgrep)
  - Code quality checks

- ✅ **Continuous Deployment**
  - Docker image builds
  - Container registry (GHCR)
  - Vulnerability scanning (Trivy)
  - GitOps updates
  - Automated Kubernetes deployments

- ✅ **Infrastructure as Code**
  - Terraform for cluster setup
  - Kubernetes manifests
  - Helm charts for tooling

- ✅ **Observability**
  - Prometheus metrics
  - Grafana dashboards
  - Alert rules
  - Health monitoring

- ✅ **Security**
  - Secret scanning
  - SAST analysis
  - Image vulnerability scanning
  - Non-root containers
  - Resource limits

## 🏗️ Architecture

```
┌─────────────┐
│  Developer  │
└──────┬──────┘
       │ push
       ▼
┌──────────────────────┐
│  GitHub Repository   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  GitHub Actions CI   │
│  - Lint & Test       │
│  - Security Scans    │
│  - Build & Push      │
│  - Update GitOps     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   GitOps Repository  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      ArgoCD          │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Kubernetes        │
│  ┌──────────────┐    │
│  │  simple-cms  │    │
│  └──────────────┘    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Observability      │
│  Prometheus+Grafana  │
└──────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Docker
- kubectl
- Kind
- Helm
- Node.js 18+

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/daniel-tsonkov/simple-cms.git
cd simple-cms
```

2. **Run setup script**

```bash
chmod +x scripts/*.sh
./scripts/setup-env.sh
```

3. **Access services**

- ArgoCD: https://localhost:8080
- Grafana: http://localhost:3001
- Prometheus: http://localhost:9090

For detailed setup instructions, see [docs/setup.md](docs/setup.md)

## 📚 Topics Covered

This project demonstrates knowledge in:

1. **SDLC & Methodologies** ✅
2. **Source Control (Git)** ✅
3. **Branching Strategies** ✅
4. **CI/CD Pipelines** ✅
5. **Continuous Integration** ✅
6. **Continuous Deployment** ✅
7. **GitOps** ✅ _(Deep Dive)_
8. **Containerization (Docker)** ✅
9. **Container Orchestration (Kubernetes)** ✅
10. **Infrastructure as Code (Terraform)** ✅
11. **Configuration Management** ✅
12. **Observability** ✅
13. **Monitoring (Prometheus)** ✅
14. **Visualization (Grafana)** ✅
15. **Security Scanning** ✅
16. **SAST** ✅
17. **Secrets Management** ✅
18. **Testing & Quality** ✅
19. **Immutable Infrastructure** ✅
20. **Automation** ✅

## 📖 Documentation

- [Architecture](docs/architecture.md) - Detailed system design
- [Setup Guide](docs/setup.md) - Step-by-step installation
- [Demo Script](docs/demo-script.md) - Presentation guide

## 🎬 Demo

The project includes a complete demo script for presentations:

- High-level architecture overview
- Live CI/CD pipeline execution
- GitOps deployment with ArgoCD
- Real-time observability metrics
- Deep dive into GitOps patterns

See [docs/demo-script.md](docs/demo-script.md) for the full script.

## 🔧 Local Development

### Run Locally with Docker Compose

```bash
docker-compose up -d
```

Access:

- Backend: http://localhost:3000
- Frontend: http://localhost:8080

### Run Backend Locally

```bash
cd backend
npm install
npm run dev
```

### Run Tests

```bash
cd backend
npm test
npm run lint
```

## 🛡️ Security

Security is built into every layer:

- Secret scanning in CI
- SAST for code analysis
- Container vulnerability scanning
- Non-root container users
- Resource limits and quotas
- Network policies (optional)

## 🎯 Future Improvements

- [ ] Canary deployments
- [ ] Blue-Green deployments
- [ ] Service Mesh (Istio)
- [ ] Policy as Code (OPA)
- [ ] Chaos Engineering (Litmus)
- [ ] DAST scanning
- [ ] Multi-cluster setup
- [ ] Database migrations automation

## 🤝 Contributing

This is an educational project. Feel free to fork and adapt for your own learning!

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 👤 Author

**Daniel Tsonkov**

- GitHub: [@daniel-tsonkov](https://github.com/daniel-tsonkov)
- Project: [simple-cms](https://github.com/daniel-tsonkov/simple-cms)

## 🙏 Acknowledgments

- Anthropic Claude for assistance
- DevOps community for best practices
- Open source tools that make this possible

---

**⭐ If you find this project helpful, please give it a star!**
