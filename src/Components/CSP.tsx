import { Helmet } from 'react-helmet-async';
/**
 * CSPMeta generates a Content Security Policy (CSP) meta tag using environment variables (VITE_CSP_*).
 * - You can reference other env vars in CSP directives using env:VITE_SOME_KEY (e.g., env:APP_API_BASE_URL or env:AUTH_API_BASE_URL).
 *   Example: VITE_CSP_CONNECT_SRC='self env:APP_API_BASE_URL env:AUTH_API_BASE_URL' will expand to connect-src 'self' <APP_API_BASE_URL> <AUTH_API_BASE_URL>;
 * - Validates and warns for missing critical directives.
 * - Provides secure defaults for critical directives if missing.
 * - Supports reporting directives.
 * - Documents where nonce/hash support can be added in the future.
 */

const DEFAULT_CSP = {
  'default-src': "'self'",
  'script-src': "'self'",
  'style-src': "'self'",
  'img-src': "'self' data:",
  'connect-src': "'self'",
  'object-src': "'none'",
  'base-uri': "'self'",
  'form-action': "'self'",
  'block-all-mixed-content': true,
};

const CRITICAL_DIRECTIVES = ['default-src', 'script-src', 'object-src'];

function getCspDirectives(env: Record<string, string | boolean>) {
  const directives: string[] = [];
  let hasCritical = { 'default-src': false, 'script-src': false, 'object-src': false };

  Object.entries(env).forEach(([key, rawValue]) => {
    if (!key.startsWith('VITE_CSP_')) return;

    const directiveKey = key
      .replace(/^VITE_CSP_/, '')
      .replace(/_/g, '-')
      .toLowerCase();

    let value = typeof rawValue === 'string' ? rawValue.trim() : rawValue;
    if (!value) return;

    if (value === 'true' || value === true) {
      directives.push(`${directiveKey};`);
    } else {
      const parts = (value as string)
        .split(' ')
        .map((p: string) => {
          if (p.startsWith('env:')) {
            const envVarKey = p.slice(4);
            return env[envVarKey] ?? null;
          }
          // --- FUTURE: Add nonce/hash support here ---
          // If p === 'nonce-{SOME_NONCE}', replace with actual nonce value
          // If p === 'sha256-...', allow hash values
          return p;
        })
        .filter(Boolean);
      if (parts.length > 0) {
        directives.push(`${directiveKey} ${parts.join(' ')};`);
      }
    }
    if (CRITICAL_DIRECTIVES.includes(directiveKey)) {
      hasCritical[directiveKey] = true;
    }
  });

  // Add defaults for missing critical directives
  CRITICAL_DIRECTIVES.forEach((dir) => {
    if (!hasCritical[dir]) {
      // eslint-disable-next-line no-console
      console.warn(`[CSP] Missing critical directive "${dir}", using secure default: ${DEFAULT_CSP[dir]}`);
      if (DEFAULT_CSP[dir] === true) {
        directives.push(`${dir};`);
      } else {
        directives.push(`${dir} ${DEFAULT_CSP[dir]};`);
      }
    }
  });

  // Add reporting directives if present
  if (env.VITE_CSP_REPORT_URI) {
    directives.push(`report-uri ${env.VITE_CSP_REPORT_URI};`);
  }
  if (env.VITE_CSP_REPORT_TO) {
    directives.push(`report-to ${env.VITE_CSP_REPORT_TO};`);
  }

  return directives.join(' ').trim();
}

const CSPMeta = () => {
  const env = import.meta.env;
  const csp = getCspDirectives(env);

  return (
    <Helmet>
      <meta httpEquiv="Content-Security-Policy" content={csp} />
    </Helmet>
  );
};

export default CSPMeta;
