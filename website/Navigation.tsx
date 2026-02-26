'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-brand">
          <Link href="/" className="nav-logo">
            <span className="logo-letter">I</span>
            <span className="logo-text">Inspire</span>
          </Link>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/solutions" className="nav-link">Solutions</Link>
          <Link href="/platform" className="nav-link">Platform</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/security" className="nav-link">Security</Link>
          <Link href="/ai-trust" className="nav-link">AI Trust</Link>
          <Link href="/integrations" className="nav-link">Integrations</Link>
          <Link href="/implementation" className="nav-link">Implementation</Link>
          <Link href="/customers" className="nav-link">Customers</Link>
          <Link href="/coaching" className="nav-link">Coaching</Link>
          <Link href="/resources/evaluation-kit" className="nav-link-highlight">Evaluation Kit</Link>
          <Link href="/contact" className="nav-button">Request a Demo</Link>
        </div>
      </div>
    </nav>
  );
}
