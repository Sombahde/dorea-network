// Member layout — thin shell, auth is enforced by middleware
export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
