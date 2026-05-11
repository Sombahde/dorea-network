# DOREA NETWORK — API_CONTRACTS.md

## Purpose

This document defines the API contract philosophy and runtime API structure for Dorea Network.

The API layer exists to expose:
- runtime capabilities
- moment execution
- session continuity
- OODA processing
- telemetry recording
- replay access
- provider-safe execution

The API layer does NOT own:
- orchestration
- decisions
- sessions
- contracts
- governance
- continuity logic

The API is a transport boundary.

The runtime remains the authority.

If implementation conflicts with this document:
- THIS DOCUMENT IS CORRECT

---

# CORE API PRINCIPLE

APIs expose runtime behavior.

APIs do not define runtime behavior.

The API layer must NEVER:
- bypass the runtime
- compute OODA decisions
- mutate sessions directly
- invoke providers directly
- bypass telemetry
- create hidden workflows

All meaningful requests must pass through:

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

---

# NATURAL RHYTHMS PRINCIPLE

Grace must remain available within the natural rhythms of daily life.

The API must support:
- mobile-first access
- low-friction requests
- conversational interaction
- cards
- tiles
- asynchronous participation
- interruption tolerance

The API should make mobile continuity easy.

The API must never require frontend complexity to preserve continuity.

---

# EVERY REQUEST IS ACKNOWLEDGED

Every valid request entering the runtime must:
- receive acknowledgment

The API must return:
- acknowledgment state
- session reference
- moment reference
- next expected action
- surface response

No request should disappear silently.

If processing cannot complete immediately:
- the API must still return acknowledgment
- telemetry must record the received request
- continuity handling must proceed through the runtime

---

# DOREA-SPECIFIC BACKEND

This backend is dedicated to:
- Dorea Network
- Dorea moments of grace
- Dorea continuity of care
- Dorea member participation
- Dorea governance
- Dorea telemetry and replay

This API is NOT intended to become:
- a generic workflow API
- a generalized orchestration platform
- a multi-product backend
- a public agent marketplace API

Generalized runtime patterns exist only to support:
- Dorea operational continuity

---

# ENDPOINT PHILOSOPHY

Endpoints should be:
- simple
- runtime-centered
- moment-oriented
- session-aware
- telemetry-visible
- mobile-friendly

Endpoints should avoid:
- CRUD-first design
- frontend workflow ownership
- direct provider operations
- hidden side effects

The preferred endpoint pattern is:

```plaintext
/api/runtime/*
/api/moments/*
/api/sessions/*
/api/telemetry/*
/api/replay/*
/api/governance/*
```

---

# API RESPONSE PHILOSOPHY

API responses should return:
- runtime state
- surface projection
- session continuity
- acknowledgment
- telemetry correlation
- next action guidance

API responses should NOT require the frontend to infer:
- orchestration state
- next workflow step
- OODA decision
- escalation behavior

The frontend renders.

The runtime decides.

---

# STANDARD REQUEST ENVELOPE

All runtime-bound requests should use a consistent envelope:

```json
{
  "request_id": "req_123",
  "community_id": "community_123",
  "member_id": "member_123",
  "session_id": "session_123",
  "moment_type": "prayer_request",
  "payload": {},
  "surface": {
    "type": "mobile",
    "channel": "conversation"
  },
  "metadata": {
    "correlation_id": "corr_123",
    "client_timestamp": "2026-05-11T12:00:00Z"
  }
}
```

---

# STANDARD RESPONSE ENVELOPE

All runtime-bound responses should use a consistent response envelope:

```json
{
  "acknowledged": true,
  "request_id": "req_123",
  "correlation_id": "corr_123",
  "session_id": "session_123",
  "session_version": 4,
  "moment_id": "moment_123",
  "status": "accepted",
  "runtime": {
    "current_phase": "telemetry",
    "next_expected_action": "render_surface"
  },
  "surface": {
    "type": "card",
    "title": "You are not alone.",
    "body": "Your request has been received. Dorea will help preserve continuity while the community responds.",
    "actions": []
  },
  "telemetry": {
    "event_id": "telemetry_123"
  }
}
```

---

# MOMENT EXECUTION API

## Endpoint

```plaintext
POST /api/runtime/moment
```

## Purpose

Executes a Dorea moment through the runtime.

This endpoint must:
- create or load session context
- execute OODA
- apply contract behavior
- generate telemetry
- produce a surface response
- create a session version when complete

---

## Request Contract

```json
{
  "community_id": "community_123",
  "member_id": "member_123",
  "session_id": "session_123",
  "moment_type": "prayer_request",
  "payload": {
    "message": "I need prayer tonight.",
    "urgency": "private"
  },
  "surface": {
    "type": "mobile",
    "mode": "conversation"
  }
}
```

---

## Response Contract

```json
{
  "acknowledged": true,
  "session_id": "session_123",
  "session_version": 5,
  "moment_id": "moment_456",
  "status": "completed",
  "ooda": {
    "observe_status": "completed",
    "orient_status": "completed",
    "decide_status": "completed",
    "act_status": "completed"
  },
  "surface": {
    "type": "conversation",
    "message": "Your request has been received. You are not alone."
  },
  "telemetry": {
    "correlation_id": "corr_456",
    "event_count": 6
  }
}
```

---

# SESSION CONTRACTS

Sessions are:
- runtime-owned
- immutable historically
- versioned
- replayable

The API may request session state.

The API must NEVER allow:
- direct historical mutation
- frontend-owned session advancement
- destructive session update

---

## Session Read Endpoint

```plaintext
GET /api/sessions/:session_id
```

Returns:
- current session state
- current version
- active moment
- continuity state
- surface projection where appropriate

---

## Session Response Contract

```json
{
  "session_id": "session_123",
  "member_id": "member_123",
  "community_id": "community_123",
  "current_version": 5,
  "status": "active",
  "continuity": {
    "acknowledged": true,
    "follow_up_pending": true,
    "escalation_status": "none"
  }
}
```

---

# OODA PAYLOADS

Every moment execution must preserve OODA state.

## Observe Payload

```json
{
  "phase": "observe",
  "signals": {
    "request_type": "prayer",
    "urgency": "private",
    "surface": "mobile"
  },
  "context": {
    "member_available": true,
    "community_id": "community_123"
  }
}
```

---

## Orient Payload

```json
{
  "phase": "orient",
  "classification": {
    "need_type": "prayer",
    "urgency_level": "low",
    "continuity_need": "acknowledgment"
  },
  "policy": {
    "contract_id": "contract_prayer_v1",
    "escalation_required": false
  }
}
```

---

## Decide Payload

```json
{
  "phase": "decide",
  "decision": {
    "primary_action": "acknowledge",
    "secondary_actions": ["notify_prayer_group"],
    "follow_up_required": true
  },
  "explanation": "Prayer request should be acknowledged immediately and routed according to the prayer continuity contract."
}
```

---

## Act Payload

```json
{
  "phase": "act",
  "actions": [
    {
      "type": "send_acknowledgment",
      "status": "completed"
    },
    {
      "type": "notify_group",
      "status": "queued"
    }
  ]
}
```

---

# TELEMETRY PAYLOADS

Telemetry must correlate every meaningful runtime action.

## Telemetry Event Contract

```json
{
  "event_id": "telemetry_123",
  "event_type": "moment_completed",
  "community_id": "community_123",
  "member_id": "member_123",
  "session_id": "session_123",
  "session_version": 5,
  "moment_id": "moment_456",
  "contract_id": "contract_prayer_v1",
  "correlation_id": "corr_456",
  "runtime_phase": "telemetry",
  "payload": {},
  "created_at": "2026-05-11T12:00:00Z"
}
```

---

# REPLAY PAYLOADS

Replay reconstructs:
- moment execution
- OODA state
- session versions
- telemetry lineage
- contract behavior
- provider actions

## Replay Endpoint

```plaintext
GET /api/replay/sessions/:session_id
```

## Replay Response Contract

```json
{
  "session_id": "session_123",
  "versions": [
    {
      "session_version": 5,
      "moment_id": "moment_456",
      "contract_id": "contract_prayer_v1",
      "execution_package": {
        "observe": {},
        "orient": {},
        "decide": {},
        "act": {},
        "telemetry_summary": {}
      }
    }
  ]
}
```

---

# SURFACE PAYLOADS

The API returns surface-ready projections.

The surface may render:
- cards
- tiles
- conversation messages

The surface must not construct runtime meaning.

---

## Card Payload

```json
{
  "type": "card",
  "title": "You are not alone.",
  "body": "Your request has been received.",
  "actions": [
    {
      "label": "Continue",
      "action": "continue_conversation"
    }
  ]
}
```

---

## Tile Payload

```json
{
  "type": "tile",
  "label": "Prayer",
  "value": "Acknowledged",
  "status": "active"
}
```

---

## Conversation Payload

```json
{
  "type": "conversation",
  "speaker": "Dorea",
  "message": "I’m here with you. Your request has been received."
}
```

---

# PROVIDER API RULES

Provider APIs must be accessed only through:
- runtime provider adapters

The frontend must NEVER call:
- Stripe directly
- SMS providers directly
- email providers directly

Provider execution must generate:
- telemetry

---

# ERROR RESPONSE CONTRACT

Errors must preserve:
- acknowledgment visibility
- correlation
- telemetry
- continuity state

```json
{
  "acknowledged": true,
  "status": "degraded",
  "error": {
    "code": "PROVIDER_TIMEOUT",
    "message": "The request was received, but one provider is delayed."
  },
  "continuity": {
    "preserved": true,
    "next_action": "retry_or_escalate"
  },
  "correlation_id": "corr_123"
}
```

---

# API SECURITY PRINCIPLES

APIs must preserve:
- authentication
- authorization
- contract enforcement
- telemetry correlation
- replayability

APIs must NEVER:
- expose private hardship publicly
- leak sensitive session history
- expose provider secrets
- bypass governance boundaries

---

# SUCCESS CRITERIA

The API contract succeeds if:
- every runtime request is acknowledged
- every moment routes through OODA
- every session remains versioned
- every action generates telemetry
- every response is surface-ready
- every replay is reconstructable
- frontend remains thin
- backend remains dedicated to Dorea Network

---

# FINAL PRINCIPLE

The API is the doorway into the Dorea runtime.

Grace must remain available within the natural rhythms of daily life.

Every request should receive acknowledgment.

The API transports requests.

The runtime coordinates moments.

The session remembers them.

Telemetry explains them.

Replay reconstructs them.