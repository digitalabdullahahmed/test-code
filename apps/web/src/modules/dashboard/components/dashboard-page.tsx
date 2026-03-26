type DashboardStat = {
  label: string;
  value: string;
};

const dashboardStats: DashboardStat[] = [
  { label: 'Web app', value: 'ready' },
  { label: 'API', value: 'ready' },
  { label: 'Shared contracts', value: 'ready' },
];

export function DashboardPage() {
  return (
    <section className="dashboard-grid">
      {dashboardStats.map((stat) => (
        <article className="dashboard-card" key={stat.label}>
          <p className="eyebrow">{stat.label}</p>
          <h2>{stat.value}</h2>
        </article>
      ))}
    </section>
  );
}
