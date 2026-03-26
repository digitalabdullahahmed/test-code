type DashboardLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">Workspace</aside>
      <main className="dashboard-content">{children}</main>
    </div>
  );
}
