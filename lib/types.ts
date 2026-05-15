// Dorea Network — MVP shared types

export type RequestType =
  | 'prayer_request'
  | 'emotional_support'
  | 'practical_need'
  | 'escalation'

export type UrgencyLevel = 'low' | 'medium' | 'high' | 'urgent'

export type VisibilityLevel = 'private' | 'leaders' | 'community'

export type RequestStatus = 'open' | 'assigned' | 'active' | 'escalated' | 'resolved'

export type AcknowledgmentStatus = 'pending' | 'acknowledged'

export type MemberRole = 'member' | 'volunteer' | 'pastor' | 'admin'

export type AuditEventType =
  | 'request_created'
  | 'request_acknowledged'
  | 'request_assigned'
  | 'request_reassigned'
  | 'follow_up_created'
  | 'request_escalated'
  | 'escalation_acknowledged'
  | 'request_resolved'

// Human-readable labels used in UI
export const REQUEST_TYPE_LABELS: Record<RequestType, string> = {
  prayer_request: 'Prayer Request',
  emotional_support: 'Emotional Support',
  practical_need: 'Practical Need',
  escalation: 'Urgent Concern',
}

export const URGENCY_LABELS: Record<UrgencyLevel, string> = {
  low: 'When you have a moment',
  medium: 'Within a few days',
  high: 'Soon — today if possible',
  urgent: 'Right now',
}

export const VISIBILITY_LABELS: Record<VisibilityLevel, string> = {
  private: 'Only assigned leaders',
  leaders: 'Pastors & volunteers',
  community: 'Our whole community',
}

// Standard API response envelope
export type ApiResponse<T = unknown> =
  | { success: true; data: T; error: null }
  | { success: false; data: null; error: { code: string; message: string } }

export function ok<T>(data: T): ApiResponse<T> {
  return { success: true, data, error: null }
}

export function err(code: string, message: string): ApiResponse<never> {
  return { success: false, data: null, error: { code, message } }
}
