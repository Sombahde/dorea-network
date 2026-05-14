# MVP_REQUIREMENTS.md

# Dorea Network — MVP Requirements

## Purpose

This document defines the functional and operational requirements for the Dorea MVP.

The MVP exists to validate the core Dorea mission:

> No one is left alone.

The MVP focuses on:
- acknowledgment
- continuity
- human follow-through
- visibility of unresolved needs
- lightweight ministry coordination

This document intentionally avoids future-state platform complexity unless required for MVP validation.

---

# MVP Objectives

The MVP must prove that a mobile-first continuity and care coordination system can help churches:

- acknowledge needs consistently
- reduce silent isolation
- improve follow-through
- increase visibility into unresolved care requests
- create lightweight human accountability
- support pastors and volunteers without overwhelming them

---

# Primary Users

## 1. Members

People requesting:
- prayer
- emotional support
- practical help
- escalation assistance

Members may also:
- respond to requests
- encourage others
- participate in follow-up

---

## 2. Volunteers

Trusted individuals responsible for:
- acknowledgment
- follow-up
- practical coordination
- escalation support

---

## 3. Pastors / Leaders

Responsible for:
- oversight
- unresolved request visibility
- escalation handling
- volunteer coordination
- governance moderation

---

# Supported MVP Moments

The MVP supports ONLY the following moment types:

1. Prayer Request
2. Emotional Support
3. Practical Need
4. Escalation / Urgent Concern

All additional moments are deferred.

---

# Core MVP Functional Requirements

## FR-1 — Request Submission

Members must be able to submit a request from a mobile interface.

Required fields:
- request type
- short description
- optional detailed message
- urgency level
- permission visibility level

Acceptance Criteria:
- submission completes in under 30 seconds
- interface requires minimal typing
- confirmation displayed immediately

---

## FR-2 — Immediate Acknowledgment

Every request must receive immediate acknowledgment.

Acknowledgment may be:
- automated system acknowledgment
- human acknowledgment
- both

Acceptance Criteria:
- acknowledgment delivered within 60 seconds
- acknowledgment status visible to requester
- acknowledgment recorded in audit history

---

## FR-3 — Human Ownership Assignment

Each request must have an assigned human owner.

Owners may include:
- volunteer
- pastor
- ministry leader
- escalation coordinator

Acceptance Criteria:
- unassigned requests visible in admin queue
- ownership status visible
- reassignment supported

---

## FR-4 — Follow-Up Continuity

The system must support ongoing follow-up until request resolution.

Acceptance Criteria:
- reminders generated automatically
- unresolved requests remain visible
- follow-up timestamps recorded
- requests cannot silently expire

---

## FR-5 — Escalation Path

Urgent requests must support escalation.

Examples:
- self-harm concern
- abuse concern
- immediate safety concern
- emergency practical need

Acceptance Criteria:
- escalation routes to designated leaders
- escalation visibility restricted appropriately
- escalation events audited

---

## FR-6 — Request Resolution

Requests must support explicit resolution.

Acceptance Criteria:
- requests marked resolved manually
- resolution timestamps stored
- follow-up history preserved
- reopened requests supported

---

## FR-7 — Mobile-First Experience

The MVP must prioritize mobile usage.

Acceptance Criteria:
- all critical workflows functional on mobile
- responsive design required
- minimal navigation complexity
- low-friction interaction model

---

## FR-8 — Visibility Dashboard

Leaders and volunteers must have visibility into unresolved needs.

Dashboard must show:
- open requests
- aging requests
- escalation status
- ownership status
- unresolved duration

Acceptance Criteria:
- dashboard usable on mobile
- unresolved requests clearly visible
- filters remain simple

---

# Non-Functional Requirements

## NFR-1 — Simplicity

The MVP must prioritize simplicity over extensibility.

The system should:
- minimize onboarding complexity
- minimize configuration burden
- minimize governance setup overhead

---

## NFR-2 — Human-Centered Design

AI may assist with:
- reminders
- routing
- acknowledgment
- visibility

AI must NOT replace:
- discernment
- pastoral care
- human accountability
- trusted relationships

---

## NFR-3 — Lightweight Governance

Governance must remain lightweight during MVP.

The MVP should avoid:
- complex role hierarchies
- advanced policy engines
- federation governance
- adaptive rule systems

---

## NFR-4 — Privacy Protection

Sensitive requests must be protected appropriately.

Minimum expectations:
- role-based visibility
- restricted escalation access
- minimal data collection
- secure authentication

---

## NFR-5 — Operational Sustainability

The MVP must remain manageable for small church teams.

The system must avoid:
- excessive moderation requirements
- heavy administrative overhead
- constant manual triage burden

---

# Deferred Requirements

The following are explicitly deferred beyond MVP:

- federation between churches
- advanced replay engines
- deep telemetry analytics
- generalized agent marketplace
- adaptive governance systems
- advanced recommendation engines
- multi-community orchestration
- high-scale infrastructure optimization
- advanced AI autonomy
- rich social networking features

---

# MVP Success Metrics

The MVP is successful if pilot communities demonstrate:

- >95% acknowledgment reliability
- reduced unresolved requests
- improved follow-up consistency
- positive pastoral trust
- sustainable volunteer engagement
- increased visibility into community needs
- reduced perception of isolation among members

---

# Pilot Constraints

Initial pilot limits:

- 1–2 churches maximum
- limited member count
- lightweight onboarding
- low governance complexity
- limited operational staffing
- short feedback loops

The pilot prioritizes:
- learning
- emotional usefulness
- operational clarity
- ministry viability

NOT:
- scale
- optimization
- feature completeness

---

# Out of Scope

The MVP is NOT intended to prove:

- generalized AI ministry automation
- autonomous governance systems
- large-scale federation
- social engagement optimization
- advanced predictive behavioral systems
- enterprise analytics architecture

---

# Final Requirement Principle

Every requirement should be evaluated against this question:

> Does this directly help ensure that no one is left alone?

If not:
- defer it
- simplify it
- or remove it from MVP scope.