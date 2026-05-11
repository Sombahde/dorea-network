# DOREA NETWORK — RUNTIME_RULES.md

## Purpose

This document defines the operational runtime rules for Dorea Network.

These rules govern:
- orchestration behavior
- execution consistency
- session progression
- moment processing
- OODA execution
- telemetry generation
- provider interaction
- runtime boundaries

This document exists to ensure:
- runtime consistency
- architectural integrity
- operational predictability
- governance enforcement

If implementation conflicts with this document:
- THIS DOCUMENT IS CORRECT

---

# CORE RUNTIME PRINCIPLE

Every capability in Dorea executes through the same governed runtime lifecycle:

```plaintext
Moment
  ↓
Observe
  ↓
Orient
  ↓
Decide
  ↓
Act
  ↓
Telemetry
```

There are no alternate execution paths.

---

# RUNTIME OWNERSHIP RULES

## Rule 1 — Runtime Owns Orchestration

The runtime is the single orchestration authority.

The runtime owns:
- moment progression
- session advancement
- OODA execution
- contract enforcement
- telemetry generation
- provider invocation
- surface projection

The frontend must NEVER:
- orchestrate moments
- determine flow
- advance sessions
- compute decisions

---

## Rule 2 — Runtime Owns Session State

Sessions are runtime-owned.

The runtime is the only authority allowed to:
- create sessions
- advance session versions
- mutate current state
- append execution history

Frontend may only:
- render runtime state
- cache temporary display state

---

## Rule 3 — Runtime Owns Decision Execution

All decisions must execute through:
- OODA
- runtime orchestration
- contract governance

No provider or surface may:
- independently compute decisions
- bypass OODA
- override runtime governance

---

# MOMENT EXECUTION RULES

## Rule 4 — Everything Is A Moment

Every capability in Dorea must execute as:
- a bounded moment
- processed through OODA
- preserved through telemetry

Examples:
- invitation
- onboarding
- prayer
- encouragement
- contribution
- sponsorship
- escalation
- follow-up

There are no special-case flows.

---

## Rule 5 — Moments Must Be Contract-Driven

Every moment must:
- declare a contract
- define execution boundaries
- define telemetry requirements
- define OODA behavior

Moments must NEVER:
- contain hidden orchestration
- hardcode routing logic
- bypass runtime validation

---

## Rule 6 — Moments Must Be Independently Executable

Every moment must:
- execute independently
- support isolated testing
- support replayability
- support telemetry reconstruction

Moments must NEVER:
- directly orchestrate other moments
- mutate historical execution packages
- create alternate session branches

---

# SESSION RULES

## Rule 7 — Every Moment Creates A Session Version

Every completed moment execution must:
- create a new immutable session version
- append operational history
- preserve execution telemetry

Sessions are:
- append-only
- immutable historically
- replayable
- telemetry-backed

See:
- SESSION.md

---

## Rule 8 — Session Versions Are Immutable

Historical session versions must NEVER:
- be overwritten
- be mutated
- be deleted silently
- lose telemetry linkage

The runtime derives:
- current state
- continuity state
- active context

from immutable historical versions.

---

## Rule 9 — Sessions Must Support Replay

The runtime must support:
- historical replay
- operational reconstruction
- governance review
- policy analysis
- simulation

Replay must reconstruct:
- observe state
- orient state
- decisions
- actions
- outcomes

---

# OODA RULES

## Rule 10 — OODA Is Mandatory

Every moment must process through:
- Observe
- Orient
- Decide
- Act

There are no direct action paths.

---

## Rule 11 — Need Always Remains Primary

OODA may evaluate:
- urgency
- participation
- trust
- reserve impact
- governance policy

But:
- participation must never reduce eligibility for grace
- need remains primary

---

## Rule 12 — OODA Decisions Must Be Explainable

Every decision must support:
- explainability
- auditability
- replayability
- telemetry reconstruction

Black-box decision behavior is prohibited.

---

## Rule 13 — Human-In-The-Loop Must Preserve Runtime Integrity

Human intervention may occur during:
- Observe
- Orient
- Decide
- Act

But HITL actions must:
- generate telemetry
- preserve session continuity
- remain replayable
- remain observable

There are no hidden manual overrides.

---

# TELEMETRY RULES

## Rule 14 — Every Meaningful Action Generates Telemetry

If it matters:
- log it

Telemetry must capture:
- moment execution
- OODA state
- decisions
- actions
- outcomes
- governance interaction
- participant involvement

---

## Rule 15 — Telemetry Is Operational Memory

Telemetry preserves:
- runtime meaning
- operational continuity
- governance visibility
- replayability

Telemetry is NOT technical logging.

Logs capture:
- failures
- retries
- stack traces
- provider issues

Telemetry captures:
- operational execution

---

## Rule 16 — Telemetry Must Correlate To Sessions

All telemetry must correlate to:
- session_id
- version_id
- moment_id
- execution package

Telemetry without session linkage is invalid.

---

# PROVIDER RULES

## Rule 17 — Providers Are Execution Utilities

Providers:
- execute actions
- perform integrations
- deliver communications
- process transactions

Providers are NOT:
- orchestrators
- workflow engines
- decision systems

Examples:
- Stripe
- SMS gateways
- email systems
- push notification systems

---

## Rule 18 — Providers Must Be Abstracted

Providers must:
- remain interchangeable
- remain environment-configurable
- remain runtime-controlled

Provider logic must NEVER:
- define orchestration
- bypass telemetry
- mutate sessions directly

---

# SURFACE RULES

## Rule 19 — The Frontend Is A Renderer

The frontend:
- renders runtime responses
- captures interaction
- displays continuity of care

The frontend is NOT:
- the runtime
- the orchestrator
- the session authority

---

## Rule 20 — Surface Logic Must Remain Thin

The frontend must NEVER:
- compute OODA
- manage orchestration
- determine flow
- create execution packages
- own telemetry generation

The runtime owns all operational behavior.

---

# GOVERNANCE RULES

## Rule 21 — Communities Govern Behavior

Communities define:
- contracts
- escalation philosophy
- participation rules
- membership boundaries
- care behavior

The runtime operationalizes:
- continuity
- orchestration
- consistency

---

## Rule 22 — Growth Is Community-Governed

The runtime must NEVER:
- optimize for growth
- perform viral mechanics
- implement engagement manipulation
- create acquisition funnels

Growth occurs through:
- invitation
- trust
- relationships
- governance discretion

---

## Rule 23 — Invitation Is Trust Propagation

Invitation is:
- relational extension
- portable grace
- trust propagation

Grace Cards and QR invitations must:
- remain community-governed
- preserve dignity
- avoid gamification

---

# EXECUTION PACKAGE RULES

## Rule 24 — The Execution Package Is Atomic

Every completed moment execution produces:
- one execution package
- one session version
- one telemetry summary

The execution package represents:
- the canonical operational memory of the moment

---

## Rule 25 — Execution Packages Must Be Replayable

Execution packages must preserve:
- observe snapshot
- orient snapshot
- decision snapshot
- action snapshot
- telemetry summary
- outcomes
- participants
- policy version

Execution packages must remain:
- immutable
- auditable
- explainable

---

# ENGINEERING RULES

## Rule 26 — There Is Only One Runtime

There must only be:
- one orchestrator
- one execution pipeline
- one session authority
- one progression model

The architecture must NEVER support:
- fragmented runtimes
- duplicated orchestration
- alternate execution engines

---

## Rule 27 — Runtime Behavior Must Be Policy-Driven

Behavior should evolve through:
- contracts
- governance rules
- policy configuration
- OODA tuning

NOT:
- hardcoded branching
- scattered business logic
- frontend workflows

---

## Rule 28 — Logs Are For Troubleshooting Only

Logs exist for:
- diagnostics
- debugging
- provider visibility
- operational troubleshooting

Logs are NOT:
- operational memory
- governance history
- canonical execution records

Telemetry owns operational history.

---

# FINAL PRINCIPLE

Dorea Network is a governed runtime system coordinating moments of grace through contract-driven execution, OODA reasoning, immutable session versioning, and telemetry-backed operational continuity.

The runtime coordinates the moments.

The session remembers them.

Telemetry explains them.