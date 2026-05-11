# DOREA NETWORK — DELIVERY_PIPELINE.md

## Purpose

This document defines the authoritative engineering delivery pipeline for Dorea Network.

The delivery pipeline governs:
- local development
- Claude implementation workflows
- Codex QA workflows
- GitHub source control
- deployment validation
- runtime integrity verification
- environment progression

This document exists to:
- preserve architectural integrity
- prevent implementation drift
- ensure replayability
- maintain governance visibility
- enforce runtime doctrine

If implementation conflicts with this document:
- THIS DOCUMENT IS CORRECT

---

# CORE DELIVERY PRINCIPLE

The engineering pipeline must preserve:
- runtime integrity
- session integrity
- telemetry integrity
- replayability
- governance visibility
- architectural consistency

Deployment speed must NEVER override:
- explainability
- replayability
- observability
- governance

---

# DELIVERY PIPELINE OVERVIEW

The Dorea delivery pipeline is:

```plaintext
Local Development
        ↓
Claude Implementation
        ↓
Visual Studio Review
        ↓
GitHub Commit
        ↓
Claude Architecture Review
        ↓
Codex QA Validation
        ↓
Deployment Validation
        ↓
Vercel Deployment (Surface)
        ↓
Railway Deployment (Runtime)
```

The runtime remains:
- authoritative

The surfaces remain:
- thin renderers

---

# PRIMARY ENGINEERING STACK

## Local Development

Primary local environment:

```plaintext
Windows
Visual Studio Code
Claude
GitHub
```

---

## Source Control

GitHub is:
- the canonical source of truth

All runtime behavior must ultimately resolve to:
- GitHub-controlled source

---

## Deployment Targets

### Vercel

Purpose:
- surface deployment
- frontend hosting
- browser/mobile/tablet rendering

Vercel must NEVER:
- own orchestration
- own OODA
- own session progression

---

### Railway

Purpose:
- runtime hosting
- orchestration
- OODA execution
- telemetry
- session management
- contract execution

Railway hosts:
- the system of authority

---

# DEVELOPMENT PHILOSOPHY

Development is:
- runtime-first
- contract-driven
- telemetry-first
- replayability-focused

The build process prioritizes:
1. Runtime integrity
2. Session integrity
3. Telemetry continuity
4. Replayability
5. Governance visibility
6. Surface rendering

Frontend-first development is prohibited.

---

# LOCAL DEVELOPMENT FLOW

## Step 1 — Architectural Alignment

Before implementation:
- review markdown doctrine files
- confirm runtime alignment
- confirm contract behavior
- confirm OODA expectations

Required files:
- MISSION.md
- CONTEXT.md
- ARCHITECTURE.md
- SESSION.md
- RUNTIME_RULES.md
- DATA_MODEL.md
- OODA_POLICY.md

---

## Step 2 — Claude Implementation

Claude is responsible for:
- implementation generation
- architecture preservation
- runtime alignment
- contract alignment
- orchestration consistency

Claude must:
- follow doctrine files
- avoid architectural drift
- preserve replayability

---

## Step 3 — Visual Studio Review

Visual Studio Code is used for:
- manual review
- architecture inspection
- file organization
- local testing
- implementation refinement

Review should validate:
- runtime consistency
- session progression
- telemetry continuity
- replayability

---

## Step 4 — Local Validation

Before GitHub commit:
- local runtime validation must pass

Minimum validation includes:
- moment execution
- session version creation
- telemetry generation
- replayability validation
- provider abstraction validation

---

# SOURCE CONTROL PHILOSOPHY

## GitHub Is Canonical

GitHub represents:
- canonical runtime source
- deployment authority
- architectural history

Direct production mutation outside GitHub is prohibited.

---

# BRANCHING MODEL

Recommended branches:

```plaintext
main
develop
feature/*
moment/*
governance/*
```

---

## Main Branch

`main` represents:
- production-authoritative runtime state

Only validated code may enter:
- main

---

## Develop Branch

`develop` represents:
- integration-ready runtime evolution

---

## Feature Branches

Feature branches should remain:
- small
- bounded
- moment-focused
- replayable independently

Examples:

```plaintext
feature/prayer-moment
feature/session-replay
moment/invitation
governance/policy-engine
```

---

# CLAUDE REVIEW PHASE

Before deployment:
- Claude performs architecture review

Claude validates:
- runtime integrity
- orchestration consistency
- telemetry continuity
- session integrity
- replayability

Claude review exists to:
- detect architectural drift before deployment

---

# CODEX QA PHASE

Codex validates:
- replayability
- OODA integrity
- telemetry completeness
- session immutability
- contract execution consistency
- frontend thinness
- provider abstraction

Codex acts as:
- architectural QA authority

See:
- CODEX_QA.md

---

# DEPLOYMENT VALIDATION

Before deployment:
- the runtime must pass validation gates

---

# REQUIRED VALIDATION GATES

## Runtime Gates

Validate:
- single orchestrator
- universal OODA execution
- session versioning
- telemetry correlation

---

## Replay Gates

Validate:
- execution replay
- telemetry reconstruction
- session reconstruction

---

## Contract Gates

Validate:
- contract execution
- policy binding
- explainability

---

## Surface Gates

Validate:
- frontend thinness
- runtime authority
- no frontend orchestration

---

## Provider Gates

Validate:
- provider abstraction
- no provider-owned orchestration
- runtime-controlled execution

---

# DEPLOYMENT FLOW

## Surface Deployment (Vercel)

Deploy:
- browser frontend
- mobile frontend
- tablet frontend

The surface remains:
- renderer-only

---

## Runtime Deployment (Railway)

Deploy:
- runtime orchestrator
- OODA engine
- telemetry engine
- session engine
- contract engine

Railway deployment represents:
- operational runtime authority

---

# ENVIRONMENT STRATEGY

Recommended environments:

```plaintext
local
development
staging
production
```

---

# LOCAL ENVIRONMENT

Purpose:
- rapid iteration
- architecture validation
- local replay testing

---

# DEVELOPMENT ENVIRONMENT

Purpose:
- integration validation
- provider testing
- telemetry verification

---

# STAGING ENVIRONMENT

Purpose:
- production simulation
- governance validation
- replay verification
- operational QA

---

# PRODUCTION ENVIRONMENT

Purpose:
- governed operational runtime

Production must preserve:
- replayability
- telemetry continuity
- governance visibility

---

# CI/CD PHILOSOPHY

Automation exists to:
- preserve runtime integrity

NOT:
- maximize deployment velocity at the expense of explainability

Automation should validate:
- replayability
- telemetry completeness
- session integrity
- OODA execution
- contract compliance

---

# PROHIBITED ENGINEERING BEHAVIOR

The delivery pipeline must NEVER allow:
- hidden orchestration
- frontend-owned runtime logic
- non-versioned sessions
- missing telemetry
- direct provider orchestration
- black-box decision execution
- destructive historical mutation

---

# REPOSITORY PRINCIPLES

The repository should remain:
- runtime-centered
- modular
- contract-driven
- telemetry-focused
- replayable

Avoid:
- monolithic service structures
- scattered orchestration logic
- tightly coupled frontend/backend logic

---

# DEPLOYMENT SUCCESS CRITERIA

Deployment succeeds when:
- moments execute correctly
- sessions version correctly
- telemetry reconstructs execution
- replay works consistently
- frontends remain thin
- runtime remains authoritative
- governance remains observable

---

# LONG-TERM DELIVERY GOALS

The pipeline must eventually support:
- federation deployment
- multi-community governance
- simulation environments
- policy replay testing
- runtime analytics
- advanced telemetry inspection

without redesigning:
- orchestration
- session architecture
- execution lifecycle

---

# FINAL PRINCIPLE

The Dorea delivery pipeline exists to preserve the integrity, replayability, explainability, governance visibility, and operational continuity of the runtime.

The runtime coordinates the moments.

The session remembers them.

Telemetry explains them.

The delivery pipeline protects them.