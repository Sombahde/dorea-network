# DOREA NETWORK — SESSION.md

## Purpose

This document defines the authoritative session architecture for Dorea Network.

Sessions are foundational runtime structures that:
- preserve moment history
- coordinate runtime continuity
- support replayability
- maintain governance visibility
- enable telemetry correlation
- capture the unfolding history of grace moments

This document defines:
- session philosophy
- versioning behavior
- execution package structure
- replay behavior
- runtime ownership rules
- session lifecycle rules

If implementation conflicts with this document:
- THIS DOCUMENT IS CORRECT

---

# CORE SESSION PRINCIPLE

A session is not:
- browser state
- frontend navigation
- temporary application context
- authentication continuity

A session IS:
- the canonical runtime memory of grace moments unfolding across time.

Every moment execution creates a new version of the session.

---

# SESSION EXECUTION MODEL

Every capability in Dorea executes through the same runtime lifecycle:

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

The complete execution becomes:
- a versioned session snapshot
- a replayable runtime artifact
- an immutable operational memory record

---

# SESSION PHILOSOPHY

Sessions represent:
- evolving member context
- unfolding moments of grace
- runtime decision history
- community participation history
- continuity of care

Sessions preserve:
- operational continuity
- governance visibility
- auditability
- replayability
- runtime explainability

---

# VERSIONED SESSION MODEL

Every completed moment creates:
- a new session version

Sessions are:
- append-only
- immutable historically
- replayable
- telemetry-linked

The current session state is always:
- derived from historical session versions

The runtime must NEVER:
- overwrite historical session versions
- mutate historical execution packages
- destroy historical telemetry linkage

---

# SESSION STRUCTURE

A session contains:
- runtime identity
- member context
- current state
- historical versions
- telemetry references
- governance metadata

Example conceptual structure:

```plaintext
Session
  session_id
  member_id
  current_version
  current_state
  created_at
  updated_at
```

---

# SESSION VERSION STRUCTURE

Each version represents:
- one completed moment execution package

Example conceptual structure:

```plaintext
SessionVersion
  version_id
  session_id
  moment_id
  moment_type
  execution_package
  telemetry_summary
  policy_version
  timestamp
```

---

# EXECUTION PACKAGE PHILOSOPHY

The execution package is the atomic operational unit of the runtime.

Each execution package captures:
- what happened
- why it happened
- what decisions occurred
- what actions were taken
- what outcomes resulted

The execution package represents:
- the complete operational memory of a moment

---

# EXECUTION PACKAGE STRUCTURE

Each execution package should preserve:

```plaintext
Observe Snapshot
Orient Snapshot
Decision Snapshot
Action Snapshot
Telemetry Summary
Outcome
Participants
Duration
Policy Version
Timestamp
```

This package must remain:
- immutable
- replayable
- auditable
- explainable

---

# SESSION OWNERSHIP

Sessions are runtime-owned.

The runtime is the single authority for:
- session progression
- version creation
- execution continuity
- telemetry linkage
- replay state

The frontend must NEVER:
- own canonical session state
- orchestrate session progression
- mutate historical session versions

Frontend may only:
- render runtime state
- cache temporary display state

---

# SESSION LIFECYCLE

## Session Creation

Sessions are created when:
- a member joins
- an invitation is accepted
- a new interaction begins

The runtime initializes:
- session identity
- governance context
- initial telemetry state

---

## Session Evolution

Each completed moment:
- advances the session
- creates a new immutable version
- appends operational history

The runtime derives:
- current state
- active context
- continuity state

from historical versions.

---

## Session Replay

Sessions must support:
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

## Session Closure

Sessions may:
- remain active indefinitely
- become dormant
- archive historically

Historical session versions must NEVER be destroyed unless governance policy explicitly permits archival or retention expiration.

---

# TELEMETRY RELATIONSHIP

Telemetry is attached to:
- moments
- session versions
- execution packages

Telemetry provides:
- observability
- auditability
- governance visibility
- runtime diagnostics

Logs are separate from telemetry.

Telemetry answers:
- what happened
- why it happened
- what the runtime decided

Logs answer:
- what technically failed

---

# OODA RELATIONSHIP

OODA operates against:
- current session state
- historical session versions
- governance policy
- runtime telemetry

The session provides:
- continuity context
- prior participation history
- escalation history
- historical grace interactions

---

# CONTRACT RELATIONSHIP

Contracts execute within:
- session context
- runtime orchestration
- versioned history

Contracts may:
- create new session versions
- trigger escalation
- invoke providers
- generate telemetry

Contracts must NEVER:
- bypass session progression
- mutate historical versions
- create parallel session authorities

---

# SESSION GOVERNANCE

Sessions must preserve:
- dignity
- privacy
- explainability
- trust boundaries
- governance visibility

The runtime must support:
- private moments
- pastoral escalation
- anonymous participation where appropriate
- governance review workflows

---

# SESSION CONSISTENCY RULES

There must only be:
- one session authority
- one canonical session history
- one runtime progression model

The architecture must NEVER support:
- fragmented session state
- frontend-owned orchestration
- hidden session branches
- duplicate runtime histories

---

# FUTURE CAPABILITIES

The session architecture must support future:
- policy replay
- simulation
- adaptive governance
- participation analytics
- continuity modeling
- multi-community runtime federation

without redesigning the session model.

---

# ENGINEERING PRINCIPLE

The session is the unfolding operational story of grace moments processed through the runtime.

The session is not:
- application state

The session is:
- runtime memory.

Every moment becomes:
- a replayable execution package
- preserved through immutable session versioning
- observable through telemetry
- governed through runtime orchestration

---

# FINAL PRINCIPLE

The runtime coordinates moments of grace.

The session remembers them.