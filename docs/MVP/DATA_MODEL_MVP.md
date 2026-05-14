# DATA_MODEL_MVP.md

# Dorea Network — MVP Data Model

## Purpose

This document defines the minimal data model required for the Dorea MVP.

The MVP data model exists to support:

- acknowledgment
- continuity
- human ownership
- follow-up visibility
- escalation handling
- operational accountability

The MVP intentionally avoids:
- broad canonical enterprise modeling
- speculative future-state entities
- generalized federation structures
- excessive normalization
- analytics-first architecture

The model should remain intentionally small and operationally focused.

---

# MVP Data Principles

The MVP data model prioritizes:

- simplicity
- clarity
- operational usefulness
- privacy minimization
- mobile responsiveness
- low administrative overhead

The model is intentionally designed to support:

> Need → Acknowledgment → Human Owner → Follow-up → Resolution

---

# MVP Core Entities

The MVP initially requires only the following core entities:

1. Member
2. Request
3. Assignment
4. FollowUp
5. Escalation
6. AuditEvent
7. Community

Additional entities are intentionally deferred.

---

# Entity — Community

Represents a participating church or ministry community.

---

## Fields

| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary identifier |
| name | String | Community/church name |
| status | Enum | active, inactive |
| created_at | Timestamp | Creation timestamp |

---

## MVP Notes

The MVP supports:
- limited pilot communities
- no federation
- no cross-community orchestration

---

# Entity — Member

Represents a participant within a community.

Members may be:
- requesters
- volunteers
- pastors
- leaders

---

## Fields

| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary identifier |
| community_id | UUID | Parent community |
| first_name | String | Minimal identity |
| last_name | String | Minimal identity |
| email | String | Login/contact |
| phone | String | Optional |
| role | Enum | member, volunteer, pastor, admin |
| status | Enum | active, inactive |
| notification_preferences | JSON | Lightweight preferences |
| created_at | Timestamp | Creation timestamp |

---

## MVP Constraints

The MVP intentionally avoids:
- complex profile systems
- social graph modeling
- advanced relationship mapping
- demographic enrichment

---

# Entity — Request

Represents a submitted need or support request.

This is the core MVP entity.

---

## Supported Request Types

- prayer_request
- emotional_support
- practical_need
- escalation

---

## Fields

| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary identifier |
| community_id | UUID | Parent community |
| member_id | UUID | Request creator |
| request_type | Enum | Supported MVP moments |
| title | String | Short summary |
| description | Text | Optional detail |
| urgency_level | Enum | low, medium, high, urgent |
| visibility_level | Enum | private, leaders, community |
| status | Enum | open, assigned, active, escalated, resolved |
| acknowledgment_status | Enum | pending, acknowledged |
| assigned_member_id | UUID | Current owner |
| created_at | Timestamp | Request creation |
| acknowledged_at | Timestamp | Acknowledgment timestamp |
| resolved_at | Timestamp | Resolution timestamp |
| last_follow_up_at | Timestamp | Most recent follow-up |

---

## MVP Constraints

The MVP intentionally avoids:
- advanced workflow states
- AI-generated classifications
- predictive routing complexity
- excessive metadata expansion

---

# Entity — Assignment

Tracks ownership assignment history.

Assignments support:
- accountability
- visibility
- continuity

---

## Fields

| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary identifier |
| request_id | UUID | Related request |
| assigned_to_member_id | UUID | Assigned owner |
| assigned_by_member_id | UUID | Assigning leader |
| assignment_reason | String | Optional |
| created_at | Timestamp | Assignment timestamp |
| active | Boolean | Current assignment flag |

---

## MVP Constraints

The MVP intentionally avoids:
- multi-owner orchestration
- assignment marketplaces
- automated optimization engines

---

# Entity — FollowUp

Represents human follow-up activity related to a request.

---

## Fields

| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary identifier |
| request_id | UUID | Related request |
| member_id | UUID | Follow-up actor |
| follow_up_type | Enum | message, call, prayer, update |
| notes | Text | Optional summary |
| created_at | Timestamp | Follow-up timestamp |

---

## MVP Constraints

The MVP intentionally avoids:
- conversation threading systems
- social feeds
- engagement scoring
- sentiment analytics

---

# Entity — Escalation

Represents urgent escalation events.

Examples:
- self-harm concern
- abuse concern
- immediate safety concern

---

## Fields

| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary identifier |
| request_id | UUID | Related request |
| escalated_by_member_id | UUID | Triggering user |
| escalation_reason | String | Short reason |
| escalation_status | Enum | open, acknowledged, resolved |
| restricted_visibility | Boolean | Privacy flag |
| created_at | Timestamp | Escalation timestamp |
| resolved_at | Timestamp | Resolution timestamp |

---

## MVP Constraints

The MVP does NOT replace:
- emergency response systems
- licensed counseling systems
- law enforcement workflows

---

# Entity — AuditEvent

Provides lightweight operational accountability.

The MVP uses audit events for:
- visibility
- continuity
- operational traceability

NOT:
- surveillance
- behavioral optimization
- engagement scoring

---

## Fields

| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary identifier |
| community_id | UUID | Parent community |
| request_id | UUID | Optional related request |
| member_id | UUID | Acting user |
| event_type | Enum | request_created, acknowledged, assigned, escalated, resolved |
| event_data | JSON | Lightweight event metadata |
| created_at | Timestamp | Event timestamp |

---

## MVP Constraints

The MVP intentionally avoids:
- deep replay engines
- advanced telemetry pipelines
- high-volume event streaming
- predictive analytics frameworks

---

# Minimal Relationships

## Relationship Summary

```text
Community
 └── Members
 └── Requests

Request
 └── Assignment
 └── FollowUps
 └── Escalations
 └── AuditEvents
```

---

# MVP Status Definitions

## Request Status

| Status | Meaning |
|---|---|
| open | Newly submitted |
| assigned | Human owner assigned |
| active | Follow-up underway |
| escalated | Elevated concern |
| resolved | Completed |

---

## Acknowledgment Status

| Status | Meaning |
|---|---|
| pending | Awaiting acknowledgment |
| acknowledged | Acknowledged successfully |

---

# Data Retention Philosophy

The MVP should minimize retained sensitive data whenever possible.

Principles:
- collect minimally
- store intentionally
- restrict visibility
- avoid unnecessary enrichment

The MVP intentionally avoids:
- behavioral profiling
- engagement prediction
- psychological scoring
- advertising-oriented data collection

---

# Privacy Principles

Sensitive requests must support:
- role-based access
- restricted escalation visibility
- minimal exposure
- secure authentication

The MVP prioritizes:
- trust
- confidentiality
- emotional safety

---

# Deferred Data Concepts

The following data concepts are intentionally deferred beyond MVP:

- federation schemas
- cross-community identity systems
- advanced governance entities
- recommendation engines
- generalized runtime contracts
- replay engine storage
- telemetry warehouse models
- advanced analytics schemas
- marketplace entities
- AI strategy objects

---

# Database Philosophy

The MVP database exists to support:
- continuity
- accountability
- acknowledgment
- follow-up visibility

NOT:
- platform abstraction
- enterprise extensibility
- generalized orchestration

The data model should remain:
- understandable
- lightweight
- maintainable
- operationally practical

---

# Final Data Principle

Every entity should answer:

> Does this directly help ensure that no one is left alone?

If not:
- defer it
- simplify it
- or remove it from MVP scope.