# DOREA NETWORK — DATA_MODEL.md

## Purpose

This document defines the canonical data model for Dorea Network.

The data model supports:
- MOAA runtime orchestration
- versioned session execution
- OODA reasoning
- telemetry-backed governance
- contract-driven moments
- invitation-based participation
- community-administered grace coordination

This document defines:
- primary entities
- relationships
- execution package structures
- telemetry structures
- governance entities
- provider entities

If implementation conflicts with this document:
- THIS DOCUMENT IS CORRECT

---

# CORE DATA MODEL PRINCIPLE

The primary operational unit of Dorea is:
- the moment execution package

All entities exist to support:
- runtime continuity
- session evolution
- telemetry reconstruction
- governance visibility
- replayability

---

# PRIMARY ENTITY OVERVIEW

Core entities:

```plaintext
Community
Member
Invitation
Session
SessionVersion
Moment
Contract
ExecutionPackage
TelemetryEvent
Policy
Provider
Contribution
GraceResponse
GovernanceAction
```

---

# COMMUNITY ENTITY

## Purpose

Represents:
- a governed grace community

Examples:
- church
- ministry
- mission network
- trusted support group

---

## Structure

```plaintext
Community
  community_id
  name
  description
  governance_model
  status
  created_at
  updated_at
```

---

## Responsibilities

Communities govern:
- membership
- contracts
- policies
- escalation philosophy
- trust boundaries

---

# MEMBER ENTITY

## Purpose

Represents:
- a participant in the network

Members may:
- request grace
- provide grace
- sponsor
- pray
- encourage
- govern
- follow up

There are no permanent:
- donor
- recipient

roles.

---

## Structure

```plaintext
Member
  member_id
  community_id
  display_name
  phone_number
  email
  status
  trust_level
  participation_summary
  governance_role
  created_at
  updated_at
```

---

## Governance Roles

Examples:
- member
- pastor
- elder
- prayer_team
- sponsor
- administrator

Governance roles are:
- community-defined
- runtime-observable

---

# INVITATION ENTITY

## Purpose

Represents:
- invitation-based trust propagation

Invitation is:
- relational extension
- portable grace
- community trust propagation

---

## Structure

```plaintext
Invitation
  invitation_id
  community_id
  inviter_member_id
  recipient_phone
  invitation_token
  qr_code_reference
  invitation_status
  accepted_at
  created_at
  expires_at
```

---

## Invitation Status Examples

```plaintext
pending
accepted
expired
revoked
```

---

# SESSION ENTITY

## Purpose

Represents:
- the canonical runtime memory of grace moments unfolding across time

Sessions are:
- runtime-owned
- versioned
- append-only
- replayable

See:
- SESSION.md

---

## Structure

```plaintext
Session
  session_id
  community_id
  member_id
  current_version
  current_state
  active_moment_id
  status
  created_at
  updated_at
```

---

# SESSION VERSION ENTITY

## Purpose

Represents:
- one immutable moment execution snapshot

Every completed moment creates:
- a new session version

---

## Structure

```plaintext
SessionVersion
  version_id
  session_id
  moment_id
  execution_package_id
  telemetry_summary_id
  policy_version
  created_at
```

---

# MOMENT ENTITY

## Purpose

Represents:
- a bounded runtime interaction

Everything in Dorea is:
- a moment

---

## Example Moment Types

```plaintext
invitation
onboarding
prayer_request
encouragement
benevolence_request
contribution
sponsorship
mission_support
capital_project
follow_up
escalation
```

---

## Structure

```plaintext
Moment
  moment_id
  community_id
  moment_type
  contract_id
  status
  created_by_member_id
  created_at
```

---

# CONTRACT ENTITY

## Purpose

Represents:
- community-defined behavioral governance

Contracts define:
- how the community responds
- escalation behavior
- continuity expectations
- follow-up patterns
- allowed actions

---

## Structure

```plaintext
Contract
  contract_id
  community_id
  contract_name
  contract_type
  observe_rules
  orient_rules
  decision_rules
  action_rules
  telemetry_rules
  version
  status
  created_by_member_id
  created_at
  updated_at
```

---

# EXECUTION PACKAGE ENTITY

## Purpose

Represents:
- the complete operational memory of a moment execution

Execution packages are:
- atomic
- immutable
- replayable
- telemetry-backed

---

## Structure

```plaintext
ExecutionPackage
  execution_package_id
  session_id
  version_id
  moment_id

  observe_snapshot
  orient_snapshot
  decision_snapshot
  action_snapshot

  outcome
  participants
  duration_ms

  policy_version
  contract_version

  created_at
```

---

# TELEMETRY EVENT ENTITY

## Purpose

Represents:
- operational runtime memory

Telemetry captures:
- what happened
- why it happened
- what decisions occurred
- what actions were taken

Telemetry is NOT:
- technical logging

---

## Structure

```plaintext
TelemetryEvent
  telemetry_event_id
  community_id
  session_id
  version_id
  moment_id
  execution_package_id

  telemetry_type
  telemetry_payload

  created_at
```

---

## Example Telemetry Types

```plaintext
moment_started
moment_completed
decision_generated
contribution_processed
prayer_escalated
follow_up_triggered
governance_override
provider_invoked
```

---

# POLICY ENTITY

## Purpose

Represents:
- runtime governance configuration

Policies define:
- OODA behavior
- reserve protection
- escalation thresholds
- participation weighting
- continuity rules

---

## Structure

```plaintext
Policy
  policy_id
  community_id
  policy_name
  policy_version
  policy_payload
  status
  created_by_member_id
  created_at
```

---

# PROVIDER ENTITY

## Purpose

Represents:
- execution utilities

Providers are:
- abstracted
- replaceable
- runtime-controlled

Examples:
- Stripe
- Twilio
- email systems
- push notification systems

---

## Structure

```plaintext
Provider
  provider_id
  provider_type
  provider_name
  provider_configuration
  status
  created_at
```

---

# CONTRIBUTION ENTITY

## Purpose

Represents:
- moments of financial grace participation

Contributions are:
- participation moments
- not financial products

The runtime avoids:
- banking terminology
- lending terminology
- debt terminology

---

## Structure

```plaintext
Contribution
  contribution_id
  community_id
  member_id
  moment_id
  provider_id

  contribution_type
  contribution_amount
  contribution_status

  created_at
```

---

## Example Contribution Types

```plaintext
general_grace
benevolence
mission_support
capital_project
sponsorship
```

---

# GRACE RESPONSE ENTITY

## Purpose

Represents:
- community response to moments of need

Examples:
- prayer response
- encouragement
- sponsorship response
- follow-up care
- grace participation

---

## Structure

```plaintext
GraceResponse
  grace_response_id
  session_id
  moment_id
  responding_member_id

  response_type
  response_payload

  created_at
```

---

# GOVERNANCE ACTION ENTITY

## Purpose

Represents:
- Human-in-the-Loop governance actions

Governance actions must always:
- generate telemetry
- preserve replayability
- remain observable

---

## Structure

```plaintext
GovernanceAction
  governance_action_id
  community_id
  member_id
  session_id
  moment_id

  governance_action_type
  governance_payload

  created_at
```

---

# RELATIONSHIP MODEL

## Community Relationships

```plaintext
Community
  → Members
  → Policies
  → Contracts
  → Sessions
  → Moments
```

---

## Session Relationships

```plaintext
Session
  → SessionVersions
  → ExecutionPackages
  → TelemetryEvents
```

---

## Moment Relationships

```plaintext
Moment
  → Contract
  → ExecutionPackage
  → TelemetryEvents
  → GraceResponses
```

---

# TELEMETRY MODEL

Telemetry must correlate to:
- community_id
- session_id
- version_id
- moment_id
- execution_package_id

Telemetry without runtime correlation is invalid.

---

# EVENT SOURCING PHILOSOPHY

Dorea uses:
- append-only historical progression

The runtime derives:
- current state
- continuity state
- participation state

from:
- immutable historical execution packages

Historical operational memory must NEVER be silently destroyed.

---

# PRIVACY MODEL

The architecture must support:
- private moments
- pastoral escalation
- anonymous encouragement
- governance review
- trust boundaries

The system must NEVER:
- expose hardship publicly
- gamify participation
- rank grace behavior socially

---

# FEED MODEL

The network may expose:
- anonymous grace activity
- encouragement activity
- community participation summaries

Feeds must NEVER:
- expose identities
- expose sensitive hardship details
- expose transactional behavior
- create performance dynamics

Feeds exist to:
- encourage hope
- reinforce continuity
- demonstrate grace unfolding

---

# FUTURE MODEL SUPPORT

The data model must support future:
- multi-community federation
- simulation
- policy replay
- advanced telemetry analysis
- adaptive governance
- grace domain expansion

without redesigning:
- sessions
- execution packages
- telemetry structure
- runtime orchestration

---

# FINAL PRINCIPLE

The data model exists to preserve the unfolding operational history of grace moments coordinated through the runtime.

The runtime coordinates the moments.

The session remembers them.

Telemetry explains them.

The community gives them meaning.