import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-letter">I</span>
              <span className="logo-text">Inspire Software</span>
            </div>
            <p className="footer-tagline">
              Inspire Software helps organizations close the gap between vision and results. 
              One platform for strategy, performance, and engagement.
            </p>
            <Link href="/contact" className="footer-cta-button">
              Request a Demo
            </Link>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/platform">Platform</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/implementation">Implementation</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Trust & Security</h4>
            <ul className="footer-links">
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/ai-trust">AI Trust</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link href="/resources/evaluation-kit">Evaluation Kit</Link></li>
              <li><Link href="/customers">Customers</Link></li>
              <li><Link href="/coaching">Coaching</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Inspire Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
