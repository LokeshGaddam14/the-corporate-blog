'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length >= 2) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: scrolled ? 'var(--color-cream)' : 'transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <div className="container-wide" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', height: '64px' }}>
        {/* Logo */}
        <Link
          href="/blog"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
            color: 'var(--color-ink-950)',
            letterSpacing: '-0.03em',
            flexShrink: 0,
          }}
        >
          TCB
          <span style={{ color: 'var(--color-accent)', marginLeft: '2px' }}>.</span>
        </Link>

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--color-border)' }} />

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flex: 1 }}>
          {[
            { href: '/blog', label: 'Articles' },
            { href: '/blog/category/business', label: 'Business' },
            { href: '/blog/category/technology', label: 'Technology' },
            { href: '/blog/category/strategy', label: 'Strategy' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: 'var(--color-ink-600)',
                transition: 'color 0.15s ease',
                display: 'none',
              }}
              className="nav-link"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Search */}
          {searchOpen ? (
            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles..."
                style={{
                  height: '36px',
                  padding: '0 0.75rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-sm)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  width: '220px',
                  outline: 'none',
                  transition: 'border-color 0.15s ease',
                }}
                onBlur={() => { if (!query) setSearchOpen(false); }}
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                style={{ color: 'var(--color-muted)', fontSize: '1.1rem', background: 'none', border: 'none', cursor: 'pointer' }}
              >✕</button>
            </form>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              style={{
                width: '36px', height: '36px', borderRadius: 'var(--radius-full)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'none', border: '1px solid var(--color-border)',
                cursor: 'pointer', color: 'var(--color-muted)',
                transition: 'background 0.15s ease, color 0.15s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          )}

          {/* Write / Admin */}
          <Link
            href="/admin"
            style={{
              height: '36px', padding: '0 1rem',
              backgroundColor: 'var(--color-accent)',
              color: 'white', borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-sm)', fontWeight: 600,
              display: 'flex', alignItems: 'center',
              transition: 'background-color 0.15s ease',
            }}
          >
            Write
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .nav-link { display: block !important; } }
        .nav-link:hover { color: var(--color-ink-950) !important; }
      `}</style>
    </header>
  );
}
