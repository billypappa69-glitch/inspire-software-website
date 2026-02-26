'use client';

import { useState } from 'react';

export default function PricingCalculator() {
  const [userCount, setUserCount] = useState(200);
  const [selectedPackage, setSelectedPackage] = useState<'core' | 'complete'>('core');

  const corePrice = userCount < 1000 ? 12 : userCount < 2000 ? 10 : 0;
  const completePrice = userCount < 1000 ? 16 : userCount < 2000 ? 13.5 : 0;

  const price = selectedPackage === 'core' ? corePrice : completePrice;
  const isEnterprise = userCount >= 2000;
  const monthlyTotal = userCount * price;
  const annualTotal = monthlyTotal * 12;

  return (
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h3 className="card-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Estimate your investment
      </h3>
      <p style={{ textAlign: 'center', color: 'var(--color-grey-600)', marginBottom: '2rem' }}>
        This is a rough estimate based on list pricing. Actual pricing is presented during a sales conversation with your specific configuration.
      </p>

      {/* User Count Slider */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-navy)' }}>
          Number of users: <span style={{ color: 'var(--color-indigo)' }}>{userCount}</span>
        </label>
        <input
          type="range"
          min="60"
          max="5000"
          step="10"
          value={userCount}
          onChange={(e) => setUserCount(parseInt(e.target.value))}
          style={{
            width: '100%',
            height: '8px',
            borderRadius: '4px',
            background: 'var(--color-grey-200)',
            outline: 'none',
            appearance: 'none',
            cursor: 'pointer'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--color-grey-600)' }}>
          <span>60</span>
          <span>5,000</span>
        </div>
      </div>

      {/* Package Selection */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-navy)' }}>
          Select package:
        </label>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <label 
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              border: selectedPackage === 'core' ? '2px solid var(--color-indigo)' : '2px solid var(--color-grey-200)',
              borderRadius: '8px',
              cursor: 'pointer',
              background: selectedPackage === 'core' ? 'rgba(79, 70, 229, 0.05)' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            <input
              type="radio"
              name="package"
              value="core"
              checked={selectedPackage === 'core'}
              onChange={() => setSelectedPackage('core')}
              style={{ marginRight: '0.75rem', cursor: 'pointer', width: '18px', height: '18px' }}
            />
            <div>
              <div style={{ fontWeight: 700, color: 'var(--color-navy)' }}>Inspire Core — ${corePrice}/user/mo</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-grey-600)' }}>OKRs, Goals, Continuous Performance</div>
            </div>
          </label>

          <label 
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              border: selectedPackage === 'complete' ? '2px solid var(--color-indigo)' : '2px solid var(--color-grey-200)',
              borderRadius: '8px',
              cursor: 'pointer',
              background: selectedPackage === 'complete' ? 'rgba(79, 70, 229, 0.05)' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            <input
              type="radio"
              name="package"
              value="complete"
              checked={selectedPackage === 'complete'}
              onChange={() => setSelectedPackage('complete')}
              style={{ marginRight: '0.75rem', cursor: 'pointer', width: '18px', height: '18px' }}
            />
            <div>
              <div style={{ fontWeight: 700, color: 'var(--color-navy)' }}>Inspire Complete — ${completePrice}/user/mo</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-grey-600)' }}>Everything in Core + Applied Leadership + Recognition</div>
            </div>
          </label>
        </div>
      </div>

      {/* Results */}
      <div style={{ 
        padding: '1.5rem', 
        background: 'var(--color-indigo)', 
        color: 'var(--color-white)', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        {isEnterprise ? (
          <>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Enterprise Pricing
            </div>
            <div style={{ fontSize: '1rem', opacity: 0.9 }}>
              Contact Sales for a custom quote tailored to your organization
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>
              Estimated monthly cost
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              ${monthlyTotal.toLocaleString()}
            </div>
            <div style={{ fontSize: '1rem', opacity: 0.9 }}>
              ~${annualTotal.toLocaleString()} billed annually
            </div>
          </>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a href="/contact" className="button button-primary">
          Get a Precise Quote →
        </a>
      </div>
    </div>
  );
}
