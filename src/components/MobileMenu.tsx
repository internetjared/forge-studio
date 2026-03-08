import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavLink {
  label: string;
  href: string;
}

interface NavCTA {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  cta: NavCTA;
}

export default function MobileMenu({ links, cta }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        style={{
          display: 'flex',
          width: '2.5rem',
          height: '2.5rem',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.5rem',
          border: '1px solid var(--color-border)',
          background: 'transparent',
          cursor: 'pointer',
          color: 'var(--color-text)',
        }}
      >
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          initial={false}
          animate={open ? 'open' : 'closed'}
        >
          <motion.line
            x1="2" y1="5" x2="16" y2="5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={{
              open: { rotate: 45, y: 4, originX: '50%', originY: '50%' },
              closed: { rotate: 0, y: 0 },
            }}
          />
          <motion.line
            x1="2" y1="9" x2="16" y2="9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={{
              open: { opacity: 0, x: -4 },
              closed: { opacity: 1, x: 0 },
            }}
          />
          <motion.line
            x1="2" y1="13" x2="16" y2="13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={{
              open: { rotate: -45, y: -4, originX: '50%', originY: '50%' },
              closed: { rotate: 0, y: 0 },
            }}
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                zIndex: 40,
                backdropFilter: 'blur(4px)',
              }}
            />

            {/* Drawer */}
            <motion.nav
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              aria-label="Mobile navigation"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '18rem',
                background: 'var(--color-surface)',
                borderLeft: '1px solid var(--color-border)',
                zIndex: 50,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Drawer header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.0625rem', color: 'var(--color-text)' }}>
                  Forge Studio
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  style={{
                    display: 'flex',
                    width: '2rem',
                    height: '2rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0.375rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 0',
                        fontSize: '1.25rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--color-border)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.06 + 0.15 }}
                style={{ marginTop: '2rem' }}
              >
                <a
                  href={cta.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.875rem 1.5rem',
                    background: 'var(--color-accent)',
                    color: 'white',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                  }}
                >
                  {cta.label}
                </a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
