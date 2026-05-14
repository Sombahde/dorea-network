# API_MVP.md

# Dorea Network — MVP API Contract

## Purpose

This document defines the minimal API surface required for the Dorea MVP.

The MVP API exists to support the core loop:

> Need → Acknowledgment → Human Owner → Follow-up → Resolution

The API should remain intentionally small, mobile-first, and operationally focused.

The MVP API is NOT intended to support:
- federation
- advanced replay engines
- generalized agent orchestration
- policy simulation
- broad analytics
- marketplace behavior
- complex multi-community routing

---

# API Design Principles

The MVP API should prioritize:

- simplicity
- predictable contracts
- mobile responsiveness
- low operational complexity
- human ownership
- clear request status
- privacy-aware access

The API should NOT optimize for:
- future federation
- abstract runtime purity
- enterprise extensibility
- deep analytics
- autonomous orchestration

---

# Base Path

```text
/api/mvp
```

All MVP endpoints should be scoped under this base path until post-pilot expansion.

---

# Authentication

All authenticated endpoints require a valid user session or bearer token.

MVP roles:

```text
member
volunteer
pastor
admin
```

Role permissions should remain simple and explicit.

---

# Standard Response Format

All API responses should use a consistent envelope.

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

Error response:

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "REQUEST_NOT_FOUND",
    "message": "Request not found."
  }
}
```

---

# Core Entities

The API operates primarily on:

- Community
- Member
- Request
- Assignment
- FollowUp
- Escalation
- AuditEvent

These entities are defined in:

```text
/docs/mvp/DATA_MODEL_MVP.md
```

---

# Endpoint Summary

## Member / Session

```text
GET  /api/mvp/me
POST /api/mvp/onboarding/accept
PATCH /api/mvp/me/notification-preferences
```

## Requests

```text
POST /api/mvp/requests
GET  /api/mvp/requests
GET  /api/mvp/requests/:requestId
PATCH /api/mvp/requests/:requestId/status
POST /api/mvp/requests/:requestId/acknowledge
POST /api/mvp/requests/:requestId/resolve
```

## Assignments

```text
POST /api/mvp/requests/:requestId/assign
PATCH /api/mvp/requests/:requestId/reassign
```

## Follow-Up

```text
POST /api/mvp/requests/:requestId/follow-ups
GET  /api/mvp/requests/:requestId/follow-ups
```

## Escalation

```text
POST /api/mvp/requests/:requestId/escalate
GET  /api/mvp/escalations
PATCH /api/mvp/escalations/:escalationId/status
```

## Dashboard

```text
GET /api/mvp/dashboard/open-requests
GET /api/mvp/dashboard/unresolved
GET /api/mvp/dashboard/escalations
```

## Audit

```text
GET /api/mvp/requests/:requestId/audit-events
```

---

# Member / Session APIs

## GET /api/mvp/me

Returns current authenticated member context.

### Response

```json
{
  "success": true,
  "data": {
    "member": {
      "id": "uuid",
      "community_id": "uuid",
      "first_name": "Scott",
      "last_name": "Lee",
      "email": "scott@example.com",
      "role": "member",
      "status": "active",
      "notification_preferences": {
        "sms": true,
        "email": true,
        "push": true
      }
    }
  },
  "error": null
}
```

---

## POST /api/mvp/onboarding/accept

Accepts the community participation agreement.

### Request

```json
{
  "community_id": "uuid",
  "accepted": true,
  "notification_preferences": {
    "sms": true,
    "email": true,
    "push": true
  }
}
```

### Response

```json
{
  "success": true,
  "data": {
    "onboarding_status": "accepted"
  },
  "error": null
}
```

---

## PATCH /api/mvp/me/notification-preferences

Updates lightweight notification preferences.

### Request

```json
{
  "sms": true,
  "email": false,
  "push": true
}
```

---

# Request APIs

## POST /api/mvp/requests

Creates a new request.

### Request

```json
{
  "request_type": "prayer_request",
  "title": "Please pray for my family",
  "description": "We are going through a difficult time.",
  "urgency_level": "medium",
  "visibility_level": "leaders"
}
```

### Supported `request_type`

```text
prayer_request
emotional_support
practical_need
escalation
```

### Supported `urgency_level`

```text
low
medium
high
urgent
```

### Supported `visibility_level`

```text
private
leaders
community
```

### Required System Behavior

On successful creation, the system must:

1. Create the request
2. Immediately acknowledge the request
3. Create an audit event
4. Surface the request in the appropriate queue
5. Trigger assignment workflow if applicable

### Response

```json
{
  "success": true,
  "data": {
    "request": {
      "id": "uuid",
      "community_id": "uuid",
      "member_id": "uuid",
      "request_type": "prayer_request",
      "title": "Please pray for my family",
      "description": "We are going through a difficult time.",
      "urgency_level": "medium",
      "visibility_level": "leaders",
      "status": "open",
      "acknowledgment_status": "acknowledged",
      "assigned_member_id": null,
      "created_at": "2026-05-14T10:00:00Z",
      "acknowledged_at": "2026-05-14T10:00:05Z",
      "resolved_at": null,
      "last_follow_up_at": null
    },
    "message": "Your request has been received. You are not alone."
  },
  "error": null
}
```

---

## GET /api/mvp/requests

Returns requests visible to the current user.

### Query Parameters

```text
status
request_type
urgency_level
assigned_to_me
```

### Response

```json
{
  "success": true,
  "data": {
    "requests": []
  },
  "error": null
}
```

---

## GET /api/mvp/requests/:requestId

Returns request detail.

### Response

```json
{
  "success": true,
  "data": {
    "request": {},
    "assignment": {},
    "follow_ups": [],
    "escalation": null
  },
  "error": null
}
```

---

## POST /api/mvp/requests/:requestId/acknowledge

Acknowledges a request.

### Required Behavior

- Sets `acknowledgment_status` to `acknowledged`
- Sets `acknowledged_at`
- Creates an audit event
- Does NOT resolve the request

### Response

```json
{
  "success": true,
  "data": {
    "acknowledgment_status": "acknowledged",
    "acknowledged_at": "2026-05-14T10:01:00Z"
  },
  "error": null
}
```

---

## PATCH /api/mvp/requests/:requestId/status

Updates request status.

### Request

```json
{
  "status": "active"
}
```

Supported statuses:

```text
open
assigned
active
escalated
resolved
```

---

## POST /api/mvp/requests/:requestId/resolve

Marks a request resolved.

### Request

```json
{
  "resolution_note": "Pastor followed up and confirmed support is complete."
}
```

### Response

```json
{
  "success": true,
  "data": {
    "status": "resolved",
    "resolved_at": "2026-05-14T12:00:00Z"
  },
  "error": null
}
```

---

# Assignment APIs

## POST /api/mvp/requests/:requestId/assign

Assigns a human owner to a request.

### Request

```json
{
  "assigned_to_member_id": "uuid",
  "assignment_reason": "Prayer team volunteer assigned."
}
```

### Required Behavior

- Creates assignment record
- Updates request `assigned_member_id`
- Updates request status to `assigned`
- Creates audit event

---

## PATCH /api/mvp/requests/:requestId/reassign

Reassigns ownership.

### Request

```json
{
  "assigned_to_member_id": "uuid",
  "assignment_reason": "Escalated to pastor."
}
```

---

# Follow-Up APIs

## POST /api/mvp/requests/:requestId/follow-ups

Creates a follow-up entry.

### Request

```json
{
  "follow_up_type": "call",
  "notes": "Called member and prayed with them."
}
```

Supported follow-up types:

```text
message
call
prayer
update
```

### Required Behavior

- Creates follow-up record
- Updates request `last_follow_up_at`
- Creates audit event
- Keeps request visible until resolved

---

## GET /api/mvp/requests/:requestId/follow-ups

Returns follow-up history for a request.

---

# Escalation APIs

## POST /api/mvp/requests/:requestId/escalate

Escalates a request.

### Request

```json
{
  "escalation_reason": "Urgent safety concern."
}
```

### Required Behavior

- Creates escalation record
- Updates request status to `escalated`
- Restricts visibility if needed
- Notifies authorized leaders
- Creates audit event

---

## GET /api/mvp/escalations

Returns active escalations visible to authorized leaders.

---

## PATCH /api/mvp/escalations/:escalationId/status

Updates escalation status.

### Request

```json
{
  "escalation_status": "acknowledged"
}
```

Supported escalation statuses:

```text
open
acknowledged
resolved
```

---

# Dashboard APIs

## GET /api/mvp/dashboard/open-requests

Returns open requests requiring attention.

### Response

```json
{
  "success": true,
  "data": {
    "open_requests": []
  },
  "error": null
}
```

---

## GET /api/mvp/dashboard/unresolved

Returns unresolved or aging requests.

### Response

```json
{
  "success": true,
  "data": {
    "unresolved_requests": [
      {
        "id": "uuid",
        "title": "Need help with transportation",
        "request_type": "practical_need",
        "status": "assigned",
        "assigned_member_id": "uuid",
        "created_at": "2026-05-14T10:00:00Z",
        "last_follow_up_at": null,
        "age_hours": 12
      }
    ]
  },
  "error": null
}
```

---

## GET /api/mvp/dashboard/escalations

Returns escalation queue for authorized leaders.

---

# Audit APIs

## GET /api/mvp/requests/:requestId/audit-events

Returns audit trail for a request.

### Response

```json
{
  "success": true,
  "data": {
    "audit_events": [
      {
        "id": "uuid",
        "event_type": "request_created",
        "member_id": "uuid",
        "created_at": "2026-05-14T10:00:00Z"
      }
    ]
  },
  "error": null
}
```

---

# Minimal Event Types

The MVP supports only these audit event types:

```text
request_created
request_acknowledged
request_assigned
request_reassigned
follow_up_created
request_escalated
escalation_acknowledged
request_resolved
```

---

# Role Access Summary

| Endpoint Area | Member | Volunteer | Pastor | Admin |
|---|---:|---:|---:|---:|
| Submit request | Yes | Yes | Yes | Yes |
| View own requests | Yes | Yes | Yes | Yes |
| View assigned requests | No | Yes | Yes | Yes |
| View unresolved queue | No | Yes | Yes | Yes |
| Assign/reassign | No | Limited | Yes | Yes |
| Escalations | No | Limited | Yes | Yes |
| Audit events | Own only | Assigned only | Yes | Yes |

---

# MVP Non-Goals

The MVP API does NOT include:

- federation APIs
- replay APIs
- policy simulation APIs
- agent marketplace APIs
- recommendation APIs
- engagement scoring APIs
- social graph APIs
- public feed ranking APIs
- advanced analytics APIs

---

# Final API Principle

Every endpoint should answer:

> Does this endpoint directly help ensure that no one is left alone?

If not:
- defer it
- simplify it
- or remove it from MVP scope.