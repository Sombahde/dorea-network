# DOREA NETWORK — SESSION_STATE.md

## Purpose

This document defines the session state architecture for Dorea Network.

Sessions are one of the foundational runtime constructs within Dorea.

A session represents:
- the continuity memory of a moment unfolding through time

Sessions preserve:
- acknowledgment history
- continuity history
- OODA execution lineage
- telemetry correlation
- replayability
- escalation history
- relational persistence

The session model exists because:

> People often struggle in private moments of isolation before those struggles become publicly visible.

Dorea exists to preserve:
- continuity during those hidden moments

Sessions ensure:
- the runtime remembers
- continuity persists
- silence does not erase operational awareness

If implementation conflicts with this document:
- THIS DOCUMENT IS CORRECT

---

# CORE SESSION PRINCIPLE

Sessions are:
- immutable continuity records

Sessions preserve:
- the unfolding history of a moment

Sessions are NOT:
- mutable workflow objects
- frontend state containers
- temporary request storage

Sessions are:
- runtime-owned continuity memory

---

# NATURAL RHYTHMS PRINCIPLE

Grace must remain available within the natural rhythms of daily life.

The session model must support:
- interruption
- asynchronous participation
- delayed responses
- re-engagement
- dormant continuity
- ordinary life pauses

Sessions exist to preserve:
- continuity through interruption

---

# EVERY REQUEST IS ACKNOWLEDGED

Every acknowledged request must:
- exist within session continuity

Acknowledgment begins:
- session lineage

No request should:
- disappear silently
- lose continuity visibility
- become operationally forgotten

Sessions preserve:
- acknowledgment permanence

---

# SESSION PHILOSOPHY

Sessions preserve:
- continuity history through time

The session model intentionally prioritizes:
- replayability
- explainability
- continuity persistence
- immutable lineage

The architecture intentionally avoids:
- destructive updates
- hidden mutations
- invisible orchestration
- transient-only execution

The session is:
- the operational memory of grace unfolding

---

# SESSION LIFECYCLE

Sessions typically progress through:

```plaintext
Created
  ↓
Acknowledged
  ↓
Active
  ↓
Follow-Up
  ↓
Escalated (optional)
  ↓
Dormant
  ↓
Archived
```

Sessions remain:
- replayable throughout the entire lifecycle

---

# SESSION OWNERSHIP

Sessions are owned by:
- the runtime

NOT:
- agents
- frontends
- providers
- users directly

Agents may:
- participate in session execution

The runtime preserves:
- session authority

---

# IMMUTABILITY PRINCIPLE

Sessions are:
- historically immutable

The runtime must NEVER:
- overwrite historical execution state
- mutate historical session versions
- erase continuity lineage

Instead:
- new session versions are appended

---

# VERSIONED SESSION MODEL

Every meaningful runtime change creates:
- a new session version

Examples:
- acknowledgment created
- escalation triggered
- follow-up initiated
- continuity resumed
- provider action completed
- governance override applied

Versioning preserves:
- replayability
- explainability
- continuity lineage

---

# SESSION VERSION STRUCTURE

Recommended structure:

```plaintext
session_id
session_version
parent_version
created_at
created_by
runtime_phase
moment_type
status
```

---

# SESSION STATE PRINCIPLE

Session state represents:
- the operational continuity snapshot at a specific version

The runtime reconstructs continuity through:
- ordered version history

The latest version represents:
- current operational state

Historical versions preserve:
- execution truth

---

# CORE SESSION SCHEMA

Recommended base session schema:

```json
{
  "session_id": "session_123",
  "session_version": 5,
  "community_id": "community_123",
  "member_id": "member_123",
  "moment_id": "moment_456",
  "moment_type": "prayer_request",
  "status": "active",
  "created_at": "2026-05-11T12:00:00Z",
  "updated_at": "2026-05-11T12:30:00Z",
  "runtime_state": {},
  "continuity_state": {},
  "telemetry_state": {},
  "surface_state": {},
  "governance_state": {}
}
```

---

# SESSION STATE DOMAINS

Sessions should separate state into bounded domains.

Recommended domains:

```plaintext
runtime_state
continuity_state
telemetry_state
surface_state
governance_state
provider_state
replay_state
```

This prevents:
- orchestration leakage
- uncontrolled state growth
- replay ambiguity

---

# RUNTIME STATE

Runtime state preserves:
- orchestration context

Examples:
- current OODA phase
- active agent
- execution queue
- contract bindings
- pending actions

---

## Example Runtime State

```json
{
  "current_phase": "decide",
  "active_agent": "prayer_agent",
  "contract_id": "prayer_contract_v1",
  "pending_actions": [
    "notify_prayer_group"
  ]
}
```

---

# CONTINUITY STATE

Continuity state preserves:
- relational persistence

Examples:
- acknowledgment status
- follow-up cadence
- dormant detection
- re-engagement timers
- escalation visibility

---

## Example Continuity State

```json
{
  "acknowledged": true,
  "follow_up_required": true,
  "last_contact_at": "2026-05-11T12:15:00Z",
  "dormant": false,
  "escalation_status": "none"
}
```

---

# TELEMETRY STATE

Telemetry state preserves:
- runtime visibility correlation

Examples:
- correlation IDs
- execution events
- provider traces
- replay references

---

## Example Telemetry State

```json
{
  "correlation_id": "corr_123",
  "event_count": 14,
  "last_event_id": "telemetry_456"
}
```

---

# SURFACE STATE

Surface state preserves:
- current renderable UI state

Examples:
- cards
- tiles
- conversation state
- mobile continuity view

The frontend renders:
- surface state

The frontend must NEVER:
- infer orchestration meaning

---

## Example Surface State

```json
{
  "surface_type": "conversation",
  "current_card": {
    "title": "You are not alone.",
    "body": "Your request has been acknowledged."
  }
}
```

---

# GOVERNANCE STATE

Governance state preserves:
- operational oversight visibility

Examples:
- escalation review
- pastoral intervention
- override actions
- moderation visibility

---

## Example Governance State

```json
{
  "requires_review": false,
  "pastoral_escalation": false,
  "override_applied": false
}
```

---

# PROVIDER STATE

Provider state preserves:
- external provider execution history

Examples:
- SMS delivery
- email delivery
- Stripe execution
- retry attempts

Provider state must remain:
- replayable

---

# REPLAY STATE

Replay state preserves:
- execution reconstruction metadata

Examples:
- replay checkpoints
- version lineage
- execution packages
- OODA snapshots

Replay state exists to preserve:
- operational explainability

---

# DORMANT SESSION MODEL

Sessions may become:
- dormant

Dormancy means:
- continuity remains preserved
- active orchestration pauses

Dormancy does NOT mean:
- abandonment

Dormant sessions remain:
- replayable
- recoverable
- continuity-aware

---

# DORMANT SESSION CONDITIONS

Examples:
- no recent interaction
- no active escalation
- continuity timer expired
- moment stabilized

Dormancy should remain:
- reversible

---

# RE-ENGAGEMENT MODEL

Dormant sessions may later:
- re-activate

Examples:
- renewed prayer request
- continuity follow-up
- escalation trigger
- member response
- pastoral outreach

Re-engagement creates:
- new session versions

Historical continuity remains:
- preserved

---

# SESSION ROUTING

Sessions route through:
- runtime orchestration

Routing may consider:
- moment type
- urgency
- continuity state
- escalation policy
- governance rules

Sessions must NEVER:
- bypass runtime orchestration

---

# SESSION CONTRACTS

Sessions are governed through:
- runtime contracts

Contracts define:
- allowable transitions
- continuity expectations
- escalation rules
- provider behavior
- replay requirements

Contracts preserve:
- bounded execution

---

# SESSION TELEMETRY

All session mutations generate:
- telemetry

Examples:
- session_created
- session_acknowledged
- session_version_created
- continuity_updated
- escalation_triggered
- session_dormant

Telemetry preserves:
- continuity lineage

---

# SESSION REPLAYABILITY

All sessions must remain:
- replayable

Replay must reconstruct:
- OODA execution
- continuity evolution
- provider actions
- governance actions
- version history
- surface evolution

Replay exists to preserve:
- operational truth

---

# SESSION SECURITY PRINCIPLES

Sessions must preserve:
- confidentiality
- privacy
- dignity
- bounded visibility

Sessions must NEVER:
- expose private hardship publicly
- leak sensitive continuity history
- bypass governance boundaries

---

# MOBILE CONTINUITY PRINCIPLE

Sessions exist partly to support:
- mobile continuity

Sessions must support:
- interruption tolerance
- asynchronous participation
- lightweight interaction
- conversational continuity

The session model preserves:
- continuity across ordinary life

---

# ENGINEERING PRINCIPLES

Sessions are:
- the continuity memory of the runtime

The runtime owns:
- session orchestration

Sessions preserve:
- relational persistence

Versioning preserves:
- explainability

Telemetry preserves:
- visibility

Replay preserves:
- historical truth

The architecture intentionally prioritizes:
- continuity over workflow convenience

---

# SUCCESS CRITERIA

The session model succeeds if:
- every request becomes continuity memory
- sessions remain immutable historically
- replay remains reconstructable
- dormant continuity remains recoverable
- escalation history remains visible
- mobile continuity remains stable
- telemetry correlation remains complete
- no continuity disappears silently

---

# FINAL PRINCIPLE

People often struggle in private moments of isolation before those struggles become publicly visible.

Sessions exist so the runtime remembers those moments across time.

Grace must remain available within the natural rhythms of daily life.

Every request should receive acknowledgment.

Sessions preserve continuity.

Versioning preserves history.

Telemetry preserves visibility.

Replay preserves truth.

The runtime remembers quietly so people are not abandoned during silence.