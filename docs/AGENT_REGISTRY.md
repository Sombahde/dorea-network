# DOREA NETWORK — AGENT_REGISTRY.md

## Purpose

This document defines the runtime agent registry architecture for Dorea Network.

The Agent Registry is the authoritative runtime system responsible for:
- agent registration
- activation governance
- execution boundaries
- orchestration routing
- version management
- permission enforcement
- lifecycle visibility

The Agent Registry exists to ensure:
- agents remain bounded
- runtime orchestration remains consistent
- governance visibility remains intact
- replayability remains possible
- continuity remains trustworthy

The registry is:
- runtime-controlled
- governance-aware
- telemetry-visible
- replayable
- versioned

The Agent Registry is intentionally dedicated to:
- the Dorea Network operational domain
- Dorea moments of grace
- Dorea continuity execution
- Dorea runtime orchestration

If implementation conflicts with this document:
- THIS DOCUMENT IS CORRECT

---

# CORE REGISTRY PRINCIPLE

Agents cannot self-govern.

Agents cannot self-register.

Agents cannot self-expand.

The runtime registry defines:
- what agents exist
- what agents may do
- what moments agents may own
- what providers agents may access
- what activation boundaries agents must obey

The runtime remains:
- the orchestration authority

---

# NATURAL RHYTHMS PRINCIPLE

Grace must remain available within the natural rhythms of daily life.

The registry exists partly to ensure:
- continuity remains stable
- agent behavior remains predictable
- runtime orchestration remains calm and trustworthy

The registry prevents:
- chaotic orchestration
- runaway automation
- uncontrolled runtime expansion
- hidden execution behavior

---

# EVERY REQUEST IS ACKNOWLEDGED

The registry helps preserve:
- bounded continuity execution

The registry ensures:
- valid runtime agents exist for continuity moments
- requests route correctly
- escalation remains operational
- no runtime behavior disappears silently

---

# REGISTRY PHILOSOPHY

The Agent Registry is:
- operational governance infrastructure

The registry exists to preserve:
- bounded runtime behavior

NOT:
- autonomous agent ecosystems

The registry intentionally prioritizes:
- explainability
- governance visibility
- replayability
- operational consistency

---

# AGENT REGISTRATION

All agents must be:
- runtime registered

Agents may NOT execute unless:
- registered
- versioned
- activated
- contract-bound
- telemetry-capable

Registration requires:
- governance approval
- execution boundaries
- orchestration permissions
- replay compatibility

---

# REGISTRY ENTRY MODEL

Each registered agent should contain:

```plaintext
agent_id
agent_name
agent_type
agent_version
status
moment_scope
permissions
provider_access
contract_bindings
activation_policy
telemetry_policy
orchestration_rules
created_at
updated_at
```

---

# REGISTRY EXAMPLE

```json
{
  "agent_id": "prayer_agent",
  "agent_name": "Prayer Continuity Agent",
  "agent_version": "1.0.0",
  "status": "active",
  "moment_scope": [
    "prayer_request",
    "prayer_followup"
  ],
  "permissions": [
    "acknowledge_request",
    "notify_prayer_group"
  ],
  "provider_access": [
    "sms_provider",
    "email_provider"
  ],
  "activation_policy": {
    "requires_runtime_orchestration": true,
    "requires_session": true
  }
}
```

---

# AGENT LIFECYCLE

All agents follow a governed lifecycle:

```plaintext
Draft
  ↓
Registered
  ↓
Validated
  ↓
Activated
  ↓
Operational
  ↓
Paused
  ↓
Deprecated
  ↓
Archived
```

Agents must NEVER:
- bypass lifecycle governance

---

# DRAFT STATE

Draft agents:
- may exist in development
- may not execute production moments
- may not access providers
- may not mutate runtime state

Draft agents remain:
- isolated from production continuity

---

# REGISTERED STATE

Registered agents:
- exist in the registry
- possess identity
- possess versioning
- possess execution boundaries

Registered agents are not yet:
- active

---

# VALIDATED STATE

Validated agents must pass:
- contract validation
- telemetry validation
- replay validation
- orchestration validation
- permission validation

Validation exists to preserve:
- runtime stability

---

# ACTIVATED STATE

Activated agents may:
- participate in runtime orchestration

Activation requires:
- governance approval
- runtime compatibility
- orchestration compatibility
- telemetry readiness

---

# OPERATIONAL STATE

Operational agents:
- may execute moments
- may generate telemetry
- may invoke approved providers
- may participate in OODA

Operational agents remain:
- runtime-governed

---

# PAUSED STATE

Paused agents:
- remain registered
- may not execute
- preserve historical replay compatibility

Pause exists to support:
- maintenance
- governance review
- operational stability

---

# DEPRECATED STATE

Deprecated agents:
- no longer participate in new runtime execution
- remain replay-compatible
- preserve historical explainability

Historical sessions must remain:
- reconstructable

---

# ARCHIVED STATE

Archived agents:
- preserve historical visibility only

Archived agents may NOT:
- execute moments
- participate in orchestration
- invoke providers

---

# AGENT VERSIONING

All agents must be:
- versioned

Versioning preserves:
- replayability
- operational explainability
- continuity reconstruction
- governance visibility

Historical execution must always remain:
- reproducible

---

# VERSION FORMAT

Recommended format:

```plaintext
major.minor.patch
```

Examples:
- 1.0.0
- 1.2.4
- 2.0.0

---

# VERSIONING RULES

## Major Version

Used when:
- orchestration changes
- contract changes
- OODA behavior changes
- replay structure changes

---

## Minor Version

Used when:
- capabilities expand
- providers expand
- telemetry fields expand

---

## Patch Version

Used when:
- defects are corrected
- stability improves
- no contract changes occur

---

# AGENT PERMISSIONS

Permissions define:
- what an agent may do

Permissions must remain:
- explicit
- bounded
- observable
- replayable

Agents must NEVER:
- self-grant permissions

---

# PERMISSION EXAMPLES

Examples:
- acknowledge_request
- notify_member
- notify_group
- escalate_pastoral
- create_followup
- invoke_provider_sms
- invoke_provider_email

---

# PROVIDER ACCESS

Agents may only access:
- explicitly approved providers

Examples:
- sms_provider
- email_provider
- stripe_provider

Provider access must remain:
- registry-governed

---

# ORCHESTRATION ROUTING

The registry defines:
- how moments route to agents

The runtime uses:
- registry orchestration metadata

Routing may consider:
- moment type
- urgency
- continuity state
- escalation state
- governance policy

---

# ROUTING EXAMPLE

```plaintext
prayer_request
  ↓
prayer_agent

benevolence_request
  ↓
benevolence_agent

continuity_followup
  ↓
continuity_agent
```

---

# ACTIVATION BOUNDARIES

Activation boundaries define:
- what conditions permit execution

Examples:
- requires authenticated session
- requires governance approval
- requires escalation policy
- requires continuity contract
- requires provider availability

Activation boundaries preserve:
- runtime safety

---

# EXECUTION CONSTRAINTS

Agents must NEVER:
- bypass orchestration
- directly invoke other agents
- bypass telemetry
- mutate historical sessions
- bypass contracts
- self-expand scope

The runtime remains:
- the single orchestration authority

---

# TELEMETRY REQUIREMENTS

All registered agents must:
- generate telemetry

Telemetry requirements include:
- execution visibility
- failure visibility
- provider visibility
- routing visibility
- replay correlation

Agents may NOT execute silently.

---

# REPLAY REQUIREMENTS

All agents must remain:
- replay-compatible

Replay must reconstruct:
- version
- permissions
- contracts
- routing behavior
- execution state
- provider actions

Replay preserves:
- operational truth

---

# GOVERNANCE REQUIREMENTS

Governors and pastors may:
- activate agents
- pause agents
- deprecate agents
- review permissions
- review orchestration boundaries

Governance remains:
- human-centered

---

# MOBILE CONTINUITY PRINCIPLE

The registry exists partly to ensure:
- mobile continuity remains stable

Agents must support:
- interruption tolerance
- low-friction acknowledgment
- conversational interaction
- asynchronous continuity

---

# SAFETY PRINCIPLES

Agents must NEVER:
- manipulate loneliness
- maximize engagement
- exploit vulnerability
- fabricate human participation
- optimize emotional dependency
- bypass governance boundaries

The registry exists to preserve:
- bounded trustworthy execution

---

# ENGINEERING PRINCIPLES

The Agent Registry is:
- runtime governance infrastructure

The registry preserves:
- orchestration consistency
- bounded execution
- replayability
- telemetry visibility
- continuity stability

The runtime coordinates:
- all agent execution

---

# SUCCESS CRITERIA

The Agent Registry succeeds if:
- all agents remain bounded
- orchestration remains explainable
- permissions remain explicit
- replay remains reconstructable
- telemetry remains complete
- governance visibility remains intact
- runtime execution remains stable
- mobile continuity remains trustworthy

---

# FINAL PRINCIPLE

Agents coordinate bounded moments of grace within the Dorea runtime.

The Agent Registry preserves:
- operational order
- execution boundaries
- replayability
- continuity stability

Grace must remain available within the natural rhythms of daily life.

Every request should receive acknowledgment.

The runtime governs execution.

The registry governs agents.

Telemetry preserves visibility.

Replay preserves truth.