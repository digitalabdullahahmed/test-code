import { Button } from '@/components/ui/button';

export function LoginPage() {
  return (
    <main className="page-shell">
      <section className="auth-card">
        <p className="eyebrow">Authentication</p>
        <h1>Login</h1>
        <p className="hero-copy">
          This route is intentionally thin. Real auth flows will live inside the auth module.
        </p>
        <form className="auth-form">
          <label className="field">
            <span>Email</span>
            <input autoComplete="email" name="email" placeholder="name@example.com" type="email" />
          </label>
          <label className="field">
            <span>Password</span>
            <input
              autoComplete="current-password"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
          </label>
          <Button type="submit">Continue</Button>
        </form>
      </section>
    </main>
  );
}
