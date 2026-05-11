# DOREA NETWORK — REPOSITORY_STRUCTURE.md

## Purpose

This document defines the authoritative repository structure for Dorea Network.

This repository is intentionally dedicated to:
- the Dorea Network runtime
- Dorea moments of grace
- Dorea governance
- Dorea continuity of care
- Dorea operational orchestration

This repository is NOT intended to become:
- a generalized orchestration framework
- a multi-product runtime platform
- a generic workflow engine
- a reusable agent marketplace

The architecture exists specifically to support:
- Dorea Network

Generalized runtime concepts exist only to support:
- Dorea operational continuity

If implementation conflicts with this document:
- THIS DOCUMENT IS CORRECT

---

# CORE REPOSITORY PRINCIPLE

The repository structure reflects:
- Dorea operational philosophy

Folder boundaries preserve:
- runtime authority
- governance authority
- telemetry consistency
- replayability
- frontend thinness
- contract-driven execution

The repository is intentionally:
- runtime-centered
- Dorea-specific
- moment-oriented
- telemetry-first
- operationally simple

---

# HIGH-LEVEL REPOSITORY STRUCTURE

```plaintext
/dorea-network
│
├── /docs
├── /src
├── /tests
├── /scripts
├── /config
├── /infra
├── /supabase
├── /public
├── package.json
├── README.md
└── .env
```

---

# /docs

## Purpose

Authoritative doctrine and architecture.

This folder defines:
- mission
- governance
- runtime philosophy
- contracts
- telemetry philosophy
- replay philosophy
- operational rules

---

## Rules

The `/docs` folder is:
- authoritative

Implementation must align with:
- documented doctrine

---

# /src

## Purpose

Primary Dorea runtime implementation.

The `/src` folder contains:
- the operational Dorea system

---

# /src STRUCTURE

```plaintext
/src
  /runtime
  /dorea
  /surface
  /providers
  /api
  /data
  /shared
```

---

# /src/runtime

## Purpose

Canonical Dorea runtime authority.

The runtime coordinates:
- moment execution
- OODA progression
- session advancement
- telemetry generation
- contract interpretation
- orchestration lifecycle

The runtime is:
- the system of authority

---

# /src/runtime STRUCTURE

```plaintext
/src/runtime
  /orchestrator
  /ooda
  /sessions
  /telemetry
  /contracts
  /replay
  /simulation
```

---

# /src/runtime/orchestrator

## Purpose

Central execution authority.

---

## Responsibilities

```plaintext
moment orchestration
execution coordination
session progression
execution package generation
```

---

## Rules

Only the orchestrator may:
- advance moments
- coordinate execution
- finalize session versions

---

# /src/runtime/ooda

## Purpose

Observe → Orient → Decide → Act execution pipeline.

---

## Responsibilities

```plaintext
observe processing
orientation logic
decision coordination
action execution
```

---

## Rules

All moments must execute through:
- OODA

No direct action execution is allowed.

---

# /src/runtime/sessions

## Purpose

Immutable session architecture.

---

## Responsibilities

```plaintext
session versioning
execution package persistence
session reconstruction
continuity tracking
```

---

## Rules

Sessions are:
- append-only
- immutable historically
- replayable

Only the runtime may:
- mutate session state

---

# /src/runtime/telemetry

## Purpose

Operational memory and replayability.

---

## Responsibilities

```plaintext
telemetry event generation
correlation tracking
execution tracing
audit visibility
```

---

## Rules

Telemetry is:
- operational memory

NOT:
- debug logging

Every meaningful runtime action must generate telemetry.

---

# /src/runtime/contracts

## Purpose

Contract execution infrastructure.

---

## Responsibilities

```plaintext
contract validation
contract registration
contract versioning
contract interpretation
```

---

## Rules

Contracts define:
- behavior

The runtime executes:
- behavior

---

# /src/runtime/replay

## Purpose

Historical execution replay.

---

## Responsibilities

```plaintext
execution replay
session replay
telemetry reconstruction
policy replay
```

---

# /src/runtime/simulation

## Purpose

Future operational simulation support.

---

## Responsibilities

```plaintext
policy simulation
reserve simulation
governance scenario simulation
continuity analysis
```

---

# /src/dorea

## Purpose

Dorea-specific operational domain implementation.

This folder contains:
- Dorea moments
- Dorea governance
- Dorea feeds
- Dorea participation logic
- Dorea escalation models

This is:
- the Dorea operational domain layer

---

# /src/dorea STRUCTURE

```plaintext
/src/dorea
  /moments
  /governance
  /feed
  /members
  /invitations
  /participation
  /policies
```

---

# /src/dorea/moments

## Purpose

Dorea grace moments.

Everything in Dorea is:
- a moment

---

## Example Structure

```plaintext
/src/dorea/moments
  /prayer
  /encouragement
  /benevolence
  /sponsorship
  /mission-support
  /capital-projects
  /follow-up
  /invitation
```

---

## Rules

Moments must:
- remain bounded
- remain independently executable
- remain contract-driven

Moments must NEVER:
- orchestrate other moments directly
- bypass runtime orchestration

---

# /src/dorea/governance

## Purpose

Dorea Human-in-the-Loop governance systems.

---

## Responsibilities

```plaintext
pastoral escalation
moderation
governance review
approval workflows
override handling
```

---

## Rules

Governance authority remains:
- human

The runtime operationalizes:
- approved governance behavior

---

# /src/dorea/feed

## Purpose

Anonymous grace continuity feeds.

---

## Responsibilities

```plaintext
grace feed generation
anonymous event projection
community encouragement visibility
```

---

## Rules

Feeds must NEVER:
- expose identities
- expose hardship publicly
- gamify participation
- rank members socially

---

# /src/dorea/members

## Purpose

Member participation and continuity behavior.

---

## Responsibilities

```plaintext
member profiles
participation preferences
availability rules
delegated participation authority
```

---

# /src/dorea/invitations

## Purpose

Invitation trust propagation.

---

## Responsibilities

```plaintext
QR invitations
trust lineage
invitation flows
grace card management
```

---

## Rules

Invitation is:
- relational trust propagation

NOT:
- growth optimization

---

# /src/dorea/participation

## Purpose

Community participation orchestration.

---

## Responsibilities

```plaintext
response coordination
community engagement
follow-up participation
continuity workflows
```

---

# /src/dorea/policies

## Purpose

Dorea-specific policy behavior.

---

## Responsibilities

```plaintext
reserve policies
escalation thresholds
participation weighting
continuity tuning
```

---

# /src/surface

## Purpose

Frontend rendering surfaces.

Supported surfaces:
- mobile
- browser
- tablet

The frontend is:
- a rendering layer only

---

# /src/surface STRUCTURE

```plaintext
/src/surface
  /mobile
  /browser
  /tablet
  /shared
```

---

# /src/surface/mobile

## Purpose

Primary Dorea user experience.

Mobile supports:
- prayer
- encouragement
- support requests
- invitations
- continuity participation

---

# /src/surface/browser

## Purpose

Governance and operational visibility.

Browser supports:
- administration
- replay
- governance
- telemetry review
- escalation visibility

---

# /src/surface/tablet

## Purpose

Expanded pastoral and participation workflows.

---

# /src/providers

## Purpose

External provider abstraction layer.

Examples:
- Stripe
- SMS
- email
- push notifications

---

## Responsibilities

```plaintext
provider adapters
provider abstraction
provider failover
```

---

## Rules

Providers are:
- utilities only

Providers must NEVER:
- orchestrate moments
- own sessions
- compute OODA
- bypass telemetry

---

# /src/api

## Purpose

Runtime transport and API boundaries.

---

## Responsibilities

```plaintext
REST endpoints
webhooks
authentication boundaries
runtime transport
```

---

## Rules

APIs expose:
- runtime functionality

APIs must NEVER:
- bypass orchestration

---

# /src/data

## Purpose

Persistence and storage interaction.

---

## Responsibilities

```plaintext
repositories
database access
query handling
storage persistence
```

---

## Rules

Persistence must preserve:
- replayability
- immutable history
- telemetry correlation

---

# /src/shared

## Purpose

Safe shared utilities.

---

## Responsibilities

```plaintext
shared types
constants
DTOs
cross-runtime interfaces
```

---

# /tests

## Purpose

Runtime validation and architectural QA.

---

# /tests STRUCTURE

```plaintext
/tests
  /unit
  /integration
  /runtime
  /telemetry
  /replay
  /governance
  /surface
  /contracts
  /providers
```

---

# TESTING RULES

Testing must validate:
- OODA execution
- replayability
- telemetry completeness
- immutable sessions
- frontend thinness
- provider abstraction
- contract integrity

---

# /infra

## Purpose

Infrastructure and deployment configuration.

---

## Responsibilities

```plaintext
Railway configs
Vercel configs
Cloudflare configs
deployment configs
```

---

# /supabase

## Purpose

Supabase persistence and schema definitions.

---

## Responsibilities

```plaintext
schemas
migrations
RLS policies
functions
storage configs
```

---

# /scripts

## Purpose

Operational tooling.

---

## Responsibilities

```plaintext
seed scripts
migration scripts
telemetry tools
deployment utilities
```

---

# /config

## Purpose

Runtime configuration.

---

## Responsibilities

```plaintext
environment config
provider config
runtime config
feature flags
```

---

# /public

## Purpose

Public frontend assets.

---

# DEPENDENCY DIRECTION RULES

## Allowed Direction

```plaintext
surface
  ↓
api
  ↓
runtime
  ↓
dorea domain
  ↓
data/providers
```

---

# FORBIDDEN DEPENDENCIES

The runtime must NEVER depend on:
- frontend frameworks
- UI logic
- browser rendering

Providers must NEVER:
- own orchestration
- advance sessions
- compute OODA

The frontend must NEVER:
- own workflows
- compute decisions
- orchestrate moments

---

# FRONTEND THINNESS PRINCIPLE

The frontend renders:
- runtime state only

The frontend is NOT:
- the system of authority

The runtime owns:
- orchestration
- progression
- sessions
- telemetry
- continuity

---

# ENGINEERING PRINCIPLES

The repository structure exists to preserve:
- Dorea runtime integrity
- replayability
- governance visibility
- operational simplicity
- architectural consistency

The repository intentionally prioritizes:
- Dorea operational clarity

over:
- premature abstraction
- generalized framework engineering

---

# FINAL PRINCIPLE

This repository exists to implement the Dorea Network runtime and operational domain.

The repository structure preserves:
- runtime authority
- governance integrity
- replayability
- telemetry continuity
- contract-driven orchestration

The runtime coordinates the moments.

The session remembers them.

Telemetry explains them.

The repository protects them.