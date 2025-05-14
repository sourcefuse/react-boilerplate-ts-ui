import {Helmet} from 'react-helmet-async';
/**
 * The `CSPMeta` function generates a Content Security Policy (CSP) meta tag using environment
 * variables that start with the prefix `VITE_CSP_`. It converts these variable names into
 * standard CSP directive keys by stripping the prefix and formatting them.
 * If the value is `'true'`, only the directive key is added (for flags like `block-all-mixed-content`).
 * If the value includes `'env:VITE_*'`, it dynamically resolves the referenced environment variable.
 * The resulting CSP string is injected into the document head using a Helmet meta tag.
 */

const CSPMeta = () => {
  const env = import.meta.env;
  const directives: string[] = [];
  Object.entries(env).forEach(([key, rawValue]) => {
    if (!key.startsWith('VITE_CSP_')) return;

    const directiveKey = key
      .replace(/^VITE_CSP_/, '')
      .replace(/_/g, '-')
      .toLowerCase();

    const value = rawValue?.trim();

    if (!value) return;
    if (value === 'true') {
      directives.push(`${directiveKey};`);
      return;
    }
    const parts = value
      .split(' ')
      .map((p: string) => {
        if (p.startsWith('env:')) {
          const envVarKey = p.slice(4);
          return env[envVarKey] ?? null;
        }
        return p;
      })
      .filter(Boolean);

    if (parts.length > 0) {
      directives.push(`${directiveKey} ${parts.join(' ')};`);
    }
  });

  const csp = directives.join(' ').trim();

  return (
    <Helmet>
      <meta httpEquiv="Content-Security-Policy" content={csp} />
    </Helmet>
  );
};

export default CSPMeta;
