import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">Strategy Execution + Performance Management</div>
          <h1>
            Close the gap between <span className="highlight">strategy</span> and results.
          </h1>
          <p className="hero-description">
            Inspire Software is the unified, AI-driven platform that connects OKRs, continuous performance management, 
            and CFR (conversations, feedback, and recognition) — so leaders get real-time visibility and every employee 
            sees how their work drives company success.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="cta-primary">Request a Demo</Link>
            <Link href="/pricing" className="cta-secondary">View Pricing Ranges</Link>
            <Link href="/resources/evaluation-kit" className="cta-link">Open Evaluation Kit →</Link>
          </div>
        </div>
      </section>

      {/* Two Buyer Paths */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">TWO BUYER PATHS. ONE PLATFORM.</div>
          <h2 className="section-title">What problem are you solving first?</h2>
          <p className="section-subtitle">
            Most organizations start with either strategy execution or continuous performance — and grow into the full connected system. 
            Tell us where you're focused.
          </p>
        </div>

        <div className="card-grid-2">
          {/* Strategy Execution Card */}
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Strategy Execution</h3>
            <div className="card-subtitle">For: VP Strategy, Chief of Staff, COO, CEO, CFO</div>
            <p className="card-description">
              OKRs are set but execution is invisible. Strategy stays in the boardroom instead of driving daily work. 
              Inspire gives you real-time visibility from company goals to individual action.
            </p>
            <ul className="card-list">
              <li>Connect company strategy to team and individual OKRs</li>
              <li>See execution progress without relying on status meetings</li>
              <li>Connect strategy to performance reviews and conversations</li>
              <li>Run productive quarterly business reviews with live data</li>
            </ul>
            <Link href="/solutions#strategy-execution" className="card-cta">
              Explore Strategy Execution →
            </Link>
          </div>

          {/* Continuous Performance Card */}
          <div className="card">
            <div className="card-icon">👥</div>
            <h3 className="card-title">Continuous Performance</h3>
            <div className="card-subtitle">For: CHRO, VP HR, Chief People Officer, People Ops</div>
            <p className="card-description">
              Reviews happen once a year. Goals live in one tool, feedback in another, recognition is reactive. 
              Inspire gives HR leaders a continuous performance system employees and managers actually use.
            </p>
            <ul className="card-list">
              <li>Continuous conversations tied directly to OKRs and goals</li>
              <li>360 feedback and structured reviews in one workflow</li>
              <li>Peer recognition that reinforces culture and engagement</li>
              <li>Manager dashboards that surface performance trends early</li>
            </ul>
            <Link href="/solutions#performance-management" className="card-cta">
              Explore Continuous Performance →
            </Link>
          </div>
        </div>
      </section>

      {/* One Platform Section */}
      <section className="container" style={{ background: 'var(--color-grey-50)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">ONE CONNECTED PLATFORM</div>
          <h2 className="section-title">One platform. No silos.</h2>
          <p className="section-subtitle">
            Everything your team needs — strategy, performance, leadership, and AI — in one connected system.
          </p>
        </div>

        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Strategy & OKRs</h3>
            <p className="card-description">
              Vision → company goals → team OKRs → individual objectives. Connected, visible, and tracked in real time.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📊</div>
            <h3 className="card-title">Continuous Performance</h3>
            <p className="card-description">
              Conversations, reviews, 360 feedback, and development plans — all connected to the goals that matter.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🏅</div>
            <h3 className="card-title">Applied Leadership Development</h3>
            <p className="card-description">
              Coaching prompts, feedback habits, and leadership development — embedded in the flow of work so great management 
              becomes a system, not an accident.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🤖</div>
            <h3 className="card-title">AI Insights</h3>
            <p className="card-description">
              AI-generated meeting summaries, review drafts, and performance narratives. Humans stay in control.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/platform" className="button button-primary">
            Explore the Full Platform →
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-label">WHY IT MATTERS</div>
          <h2 className="section-title">The performance gap is real — and costly.</h2>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">14%</div>
            <div className="stat-description">of employees strongly agree performance reviews inspire improvement</div>
            <div className="stat-source">— Gallup</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">58%</div>
            <div className="stat-description">of HR leaders say performance systems fail to drive engagement</div>
            <div className="stat-source">— Deloitte</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">33%</div>
            <div className="stat-description">of organizations successfully execute their strategies</div>
            <div className="stat-source">— Harvard Business Review</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">27%</div>
            <div className="stat-description">of employees ever see the strategic plan</div>
            <div className="stat-source">— Harvard Business Review</div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="container" style={{ background: 'var(--color-grey-50)', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-grey-600)', marginBottom: '2rem', fontWeight: 600 }}>
            Trusted by HR and strategy teams at
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                style={{
                  width: '140px',
                  height: '60px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-grey-200)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-grey-300)',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">CUSTOMER VOICES</div>
          <h2 className="section-title">Hear from teams running Inspire</h2>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial">
            <p className="testimonial-quote">
              "Inspire gave us one place to connect our strategic goals to individual performance. 
              The visibility we gained in the first 90 days was remarkable."
            </p>
            <div>
              <div className="testimonial-author">Sarah K.</div>
              <div className="testimonial-role">Chief People Officer, Mid-market professional services firm</div>
            </div>
          </div>

          <div className="testimonial">
            <p className="testimonial-quote">
              "We were running OKRs in spreadsheets and reviews in a separate tool. 
              Inspire brought it together and the adoption was faster than expected."
            </p>
            <div>
              <div className="testimonial-author">Mike D.</div>
              <div className="testimonial-role">VP Strategy & Operations, Technology company, 400 employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Group Resources */}
      <section className="container" style={{ background: 'var(--color-grey-50)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">MAKE YOUR DECISION WITH CONFIDENCE</div>
          <h2 className="section-title">Everything your buying group needs.</h2>
          <p className="section-subtitle">
            HR, IT, Finance, and Ops all need different answers. We've put them all on the table — no walls, no "contact us to learn more."
          </p>
        </div>

        <div className="card-grid">
          <Link href="/pricing" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-icon">💰</div>
            <h3 className="card-title">Pricing</h3>
            <p className="card-description">$12–$16/user/mo. Published ranges, no walls.</p>
          </Link>

          <Link href="/security" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-icon">🔒</div>
            <h3 className="card-title">Security</h3>
            <p className="card-description">SOC 2 Type II, SSO, SCIM, encryption.</p>
          </Link>

          <Link href="/ai-trust" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-icon">🤖</div>
            <h3 className="card-title">AI Trust</h3>
            <p className="card-description">What AI accesses. What it doesn't. Admin controls.</p>
          </Link>

          <Link href="/integrations" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-icon">🔗</div>
            <h3 className="card-title">Integrations</h3>
            <p className="card-description">Teams, Slack, Jira, Workday, SSO + more.</p>
          </Link>

          <Link href="/implementation" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-icon">📅</div>
            <h3 className="card-title">Implementation</h3>
            <p className="card-description">30/60/90 rollout. Roles defined. Success criteria.</p>
          </Link>

          <Link href="/resources/evaluation-kit" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-icon">📋</div>
            <h3 className="card-title">Evaluation Kit</h3>
            <p className="card-description">Forwardable pack for HR, IT, Finance, and Ops.</p>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Ready to connect strategy and performance?</h2>
        <p className="section-subtitle">
          Most teams see meaningful alignment in their first 90 days. Let's show you how.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="button button-primary">Request a Demo</Link>
          <Link href="/resources/evaluation-kit" className="button button-secondary">View Evaluation Kit</Link>
        </div>
      </section>
    </>
  );
}
