/* ============================================================
   Flyingduck — Cybersecurity SaaS Platform
   Main Application (Vanilla JS SPA)
   ============================================================ */

// ========== SVG ICONS (Lucide-style) ==========
const icons = {
  dashboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  alertTriangle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  bug: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>`,
  gitPr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>`,
  gitRepo: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  layers: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  barChart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  trendingUp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  fileText: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
  checkCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  clipboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`,
  package: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevronLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowUp: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  arrowDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  filter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  externalLink: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  xCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  code: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  lock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  activity: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  zap: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  target: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  shieldAlert: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  gitMerge: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1-2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  helpCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  calendar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
};


// ========== MOCK DATA ==========
const mockData = {
  // Applications
  applications: [
    { id: 'app-1', name: 'Global Checkout', team: 'Payments', riskScore: 92, critical: 12, high: 23, medium: 45, low: 31, lastScan: '2h ago', owner: 'Sarah Chen', status: 'critical', language: 'Java', repos: 4, compliance: 67 },
    { id: 'app-2', name: 'Sentinel Identity', team: 'Platform', riskScore: 85, critical: 8, high: 19, medium: 34, low: 22, lastScan: '4h ago', owner: 'Mike Torres', status: 'critical', language: 'Go', repos: 2, compliance: 72 },
    { id: 'app-3', name: 'Frontline CRM', team: 'Frontend', riskScore: 71, critical: 3, high: 15, medium: 28, low: 44, lastScan: '1h ago', owner: 'Emma Wilson', status: 'high', language: 'TypeScript', repos: 3, compliance: 81 },
    { id: 'app-4', name: 'Nexus Data Bus', team: 'Data Eng', riskScore: 64, critical: 2, high: 11, medium: 22, low: 38, lastScan: '6h ago', owner: 'David Kim', status: 'high', language: 'Python', repos: 5, compliance: 78 },
    { id: 'app-5', name: 'Legacy Admin Terminal', team: 'Internal Tools', riskScore: 45, critical: 0, high: 5, medium: 18, low: 29, lastScan: '30m ago', owner: 'Lisa Park', status: 'medium', language: 'Ruby', repos: 1, compliance: 91 },
    { id: 'app-6', name: 'Mobile Gateway API', team: 'Mobile', riskScore: 58, critical: 1, high: 9, medium: 25, low: 33, lastScan: '3h ago', owner: 'James Liu', status: 'high', language: 'Node.js', repos: 2, compliance: 85 },
    { id: 'app-7', name: 'Zenith Analytics', team: 'Data Eng', riskScore: 38, critical: 0, high: 3, medium: 14, low: 21, lastScan: '12h ago', owner: 'Ana Patel', status: 'medium', language: 'Scala', repos: 3, compliance: 93 },
    { id: 'app-8', name: 'NotifyCore', team: 'Platform', riskScore: 29, critical: 0, high: 1, medium: 8, low: 15, lastScan: '1h ago', owner: 'Tom Brown', status: 'low', language: 'Go', repos: 1, compliance: 96 },
  ],

  // Issues
  issues: [
    { id: 'ISS-4521', title: 'SQL Injection in user search endpoint', severity: 'critical', status: 'open', app: 'Global Checkout', file: 'src/controllers/UserController.java', line: 142, assignee: 'Sarah Chen', age: '3d', source: 'SAST', cwe: 'CWE-89', repo: 'payment-gateway-api' },
    { id: 'ISS-4518', title: 'Hardcoded AWS credentials in config', severity: 'critical', status: 'open', app: 'Sentinel Identity', file: 'src/config/aws.go', line: 23, assignee: 'Mike Torres', age: '5d', source: 'Secret Scan', cwe: 'CWE-798', repo: 'auth-service' },
    { id: 'ISS-4515', title: 'XSS vulnerability in comment rendering', severity: 'critical', status: 'in-progress', app: 'Frontline CRM', file: 'src/components/Comment.tsx', line: 67, assignee: 'Emma Wilson', age: '2d', source: 'SAST', cwe: 'CWE-79', repo: 'customer-portal' },
    { id: 'ISS-4510', title: 'Path traversal in file upload handler', severity: 'high', status: 'open', app: 'Global Checkout', file: 'src/handlers/FileUpload.java', line: 89, assignee: null, age: '7d', source: 'SAST', cwe: 'CWE-22', repo: 'payment-gateway-api' },
    { id: 'ISS-4508', title: 'Insecure deserialization in message queue', severity: 'high', status: 'open', app: 'Nexus Data Bus', file: 'src/workers/MessageProcessor.py', line: 156, assignee: 'David Kim', age: '4d', source: 'SAST', cwe: 'CWE-502', repo: 'data-pipeline' },
    { id: 'ISS-4505', title: 'Missing rate limiting on login endpoint', severity: 'high', status: 'in-progress', app: 'Sentinel Identity', file: 'src/routes/auth.go', line: 34, assignee: 'Mike Torres', age: '6d', source: 'DAST', cwe: 'CWE-307', repo: 'auth-service' },
    { id: 'ISS-4502', title: 'Outdated dependency with known RCE', severity: 'high', status: 'open', app: 'Mobile Gateway API', file: 'package.json', line: 15, assignee: 'James Liu', age: '8d', source: 'SCA', cwe: 'CWE-1395', repo: 'mobile-api' },
    { id: 'ISS-4498', title: 'CSRF token not validated on form submit', severity: 'medium', status: 'open', app: 'Frontline CRM', file: 'src/pages/Settings.tsx', line: 203, assignee: null, age: '10d', source: 'DAST', cwe: 'CWE-352', repo: 'customer-portal' },
    { id: 'ISS-4495', title: 'Verbose error messages expose stack trace', severity: 'medium', status: 'open', app: 'Global Checkout', file: 'src/middleware/ErrorHandler.java', line: 45, assignee: 'Sarah Chen', age: '12d', source: 'DAST', cwe: 'CWE-209', repo: 'payment-gateway-api' },
    { id: 'ISS-4490', title: 'Weak password policy configuration', severity: 'medium', status: 'resolved', app: 'Sentinel Identity', file: 'src/config/security.go', line: 12, assignee: 'Mike Torres', age: '15d', source: 'Config', cwe: 'CWE-521', repo: 'auth-service' },
    { id: 'ISS-4485', title: 'Missing Content-Security-Policy header', severity: 'medium', status: 'open', app: 'Frontline CRM', file: 'src/middleware/headers.ts', line: 8, assignee: 'Emma Wilson', age: '14d', source: 'DAST', cwe: 'CWE-1021', repo: 'customer-portal' },
    { id: 'ISS-4480', title: 'Deprecated TLS 1.0 still enabled', severity: 'low', status: 'open', app: 'Legacy Admin Terminal', file: 'config/nginx.conf', line: 22, assignee: null, age: '20d', source: 'Config', cwe: 'CWE-326', repo: 'internal-admin' },
  ],

  // Pull Requests
  pullRequests: [
    { id: 'PR-891', title: 'Fix SQL injection in UserController', repo: 'payment-gateway-api', author: 'Sarah Chen', status: 'review', riskLevel: 'high', issuesFound: 2, issuesFixed: 1, created: '2h ago', branch: 'fix/sql-injection-4521', linesAdded: 45, linesRemoved: 12 },
    { id: 'PR-889', title: 'Update auth middleware security headers', repo: 'auth-service', author: 'Mike Torres', status: 'approved', riskLevel: 'medium', issuesFound: 0, issuesFixed: 3, created: '5h ago', branch: 'feat/security-headers', linesAdded: 128, linesRemoved: 34 },
    { id: 'PR-887', title: 'Sanitize comment input rendering', repo: 'customer-portal', author: 'Emma Wilson', status: 'review', riskLevel: 'high', issuesFound: 1, issuesFixed: 1, created: '1d ago', branch: 'fix/xss-comments', linesAdded: 67, linesRemoved: 8 },
    { id: 'PR-885', title: 'Upgrade lodash to patch CVE-2024-1234', repo: 'mobile-api', author: 'James Liu', status: 'merged', riskLevel: 'low', issuesFound: 0, issuesFixed: 2, created: '2d ago', branch: 'chore/upgrade-lodash', linesAdded: 3, linesRemoved: 3 },
    { id: 'PR-883', title: 'Add rate limiting to auth endpoints', repo: 'auth-service', author: 'Mike Torres', status: 'review', riskLevel: 'medium', issuesFound: 0, issuesFixed: 1, created: '3d ago', branch: 'feat/rate-limiting', linesAdded: 210, linesRemoved: 15 },
    { id: 'PR-881', title: 'Refactor error handling middleware', repo: 'payment-gateway-api', author: 'David Kim', status: 'changes-requested', riskLevel: 'high', issuesFound: 3, issuesFixed: 0, created: '3d ago', branch: 'refactor/error-handling', linesAdded: 340, linesRemoved: 180 },
  ],

  // Repositories (Developer)
  repositories: [
    { 
      id: 'repo-1', name: 'payment-gateway-api', language: 'Java', health: 'critical', openIssues: 14, lastScan: '2h ago', branch: 'main', lastCommit: '45m ago', coverage: 72, stars: 24, riskScore: 84, owner: 'Fintech Core',
      branches: [
        { name: 'main', issues: ['ISS-4521', 'ISS-4495'], pullRequests: ['PR-891', 'PR-881'] },
        { name: 'develop', issues: ['ISS-4510'], pullRequests: [] },
        { name: 'hotfix/patch-v1', issues: [], pullRequests: [] }
      ]
    },
    { 
      id: 'repo-2', name: 'auth-service', language: 'Go', health: 'high', openIssues: 8, lastScan: '4h ago', branch: 'main', lastCommit: '2h ago', coverage: 84, stars: 18, riskScore: 62, owner: 'Sentinel Identity',
      branches: [
        { name: 'main', issues: ['ISS-4518', 'ISS-4490'], pullRequests: ['PR-889'] },
        { name: 'staging', issues: ['ISS-4505'], pullRequests: ['PR-883'] }
      ]
    },
    { 
      id: 'repo-3', name: 'customer-portal', language: 'TypeScript', health: 'medium', openIssues: 5, lastScan: '1h ago', branch: 'develop', lastCommit: '1d ago', coverage: 78, stars: 31, riskScore: 45, owner: 'CX Experience',
      branches: [
        { name: 'main', issues: [], pullRequests: [] },
        { name: 'develop', issues: ['ISS-4515', 'ISS-4498', 'ISS-4485'], pullRequests: ['PR-887'] }
      ]
    },
    { 
      id: 'repo-4', name: 'mobile-api', language: 'Node.js', health: 'medium', openIssues: 3, lastScan: '3h ago', branch: 'main', lastCommit: '3h ago', coverage: 69, stars: 12, riskScore: 38, owner: 'Mobile Core',
      branches: [
        { name: 'main', issues: ['ISS-4502'], pullRequests: ['PR-885'] },
        { name: 'release/v2.1', issues: [], pullRequests: [] }
      ]
    },
    { 
      id: 'repo-5', name: 'data-pipeline', language: 'Python', health: 'high', openIssues: 6, lastScan: '6h ago', branch: 'main', lastCommit: '5h ago', coverage: 61, stars: 8, riskScore: 71, owner: 'Nexus Analytics',
      branches: [
        { name: 'main', issues: ['ISS-4508'], pullRequests: [] },
        { name: 'experimental/v3', issues: [], pullRequests: [] }
      ]
    },
    { 
      id: 'repo-6', name: 'internal-admin', language: 'Ruby', health: 'low', openIssues: 1, lastScan: '30m ago', branch: 'main', lastCommit: '15m ago', coverage: 88, stars: 5, riskScore: 12, owner: 'Identity Ops',
      branches: [
        { name: 'main', issues: ['ISS-4480'], pullRequests: [] }
      ]
    },
    { id: 'repo-7', name: 'payment-gateway-worker', language: 'Java', health: 'success', openIssues: 0, lastScan: '5h ago', branch: 'main', lastCommit: '1d ago', coverage: 94, stars: 8, riskScore: 12, branches: [{name: 'main', issues: [], pullRequests: []}] },
    { id: 'repo-8', name: 'payment-sdk', language: 'TypeScript', health: 'success', openIssues: 0, lastScan: '1d ago', branch: 'main', lastCommit: '2d ago', coverage: 91, stars: 45, riskScore: 8, branches: [{name: 'main', issues: [], pullRequests: []}] },
    { id: 'repo-9', name: 'payment-ui', language: 'TypeScript', health: 'medium', openIssues: 3, lastScan: '2h ago', branch: 'main', lastCommit: '1h ago', coverage: 65, stars: 121, riskScore: 42, branches: [{name: 'main', issues: [], pullRequests: []}] },
    { id: 'repo-10', name: 'auth-ui', language: 'TypeScript', health: 'success', openIssues: 0, lastScan: '3h ago', branch: 'main', lastCommit: '4h ago', coverage: 88, stars: 15, riskScore: 15, branches: [{name: 'main', issues: [], pullRequests: []}] },
  ],

  // Dependencies (Developer)
  dependencies: [
    { name: 'lodash', version: '4.17.15', latest: '4.17.21', severity: 'critical', cves: 3, apps: ['mobile-api', 'customer-portal'], fix: '4.17.21' },
    { name: 'jackson-databind', version: '2.9.8', latest: '2.15.2', severity: 'critical', cves: 5, apps: ['payment-gateway-api'], fix: '2.15.2' },
    { name: 'express', version: '4.17.1', latest: '4.18.2', severity: 'high', cves: 2, apps: ['mobile-api'], fix: '4.18.2' },
    { name: 'django', version: '3.2.10', latest: '4.2.5', severity: 'high', cves: 2, apps: ['data-pipeline'], fix: '4.2.5' },
    { name: 'react', version: '18.2.0', latest: '18.2.0', severity: 'none', cves: 0, apps: ['customer-portal'], fix: null },
    { name: 'axios', version: '0.21.1', latest: '1.5.0', severity: 'medium', cves: 1, apps: ['customer-portal', 'mobile-api'], fix: '1.5.0' },
    { name: 'bcrypt', version: '5.0.1', latest: '5.1.1', severity: 'low', cves: 0, apps: ['auth-service'], fix: null },
    { name: 'cors', version: '2.8.5', latest: '2.8.5', severity: 'none', cves: 0, apps: ['mobile-api'], fix: null },
  ],

  // Compliance frameworks
  frameworks: [
    { name: 'SOC 2 Type II', controls: 64, passed: 58, failed: 4, partial: 2, score: 91 },
    { name: 'ISO 27001', controls: 114, passed: 96, failed: 10, partial: 8, score: 84 },
    { name: 'OWASP Top 10', controls: 10, passed: 7, failed: 2, partial: 1, score: 70 },
    { name: 'PCI DSS 4.0', controls: 78, passed: 65, failed: 8, partial: 5, score: 83 },
    { name: 'NIST CSF', controls: 108, passed: 92, failed: 9, partial: 7, score: 85 },
    { name: 'GDPR', controls: 45, passed: 41, failed: 2, partial: 2, score: 91 },
  ],

  // CVEs (Security Advisor)
  cves: [
    { id: 'CVE-2024-38816', title: 'Spring Framework Path Traversal', severity: 'critical', package: 'spring-webmvc', affected: '< 6.1.13', published: '2024-09-13', exploitAvail: true },
    { id: 'CVE-2024-22259', title: 'Spring Framework URL Parsing Vulnerability', severity: 'high', package: 'spring-web', affected: '< 6.1.5', published: '2024-03-16', exploitAvail: false },
    { id: 'CVE-2024-29041', title: 'Express.js Open Redirect', severity: 'medium', package: 'express', affected: '< 4.19.2', published: '2024-03-25', exploitAvail: true },
    { id: 'CVE-2024-39338', title: 'Axios Server-Side Request Forgery', severity: 'high', package: 'axios', affected: '< 1.7.4', published: '2024-08-12', exploitAvail: false },
    { id: 'CVE-2024-6531', title: 'Bootstrap XSS via Tooltip', severity: 'medium', package: 'bootstrap', affected: '< 5.3.3', published: '2024-07-11', exploitAvail: true },
  ],

  // SDLC Posture (CISO Dashboard)
  sdlcPosture: {
    featureDev: { identified: 2160, resolved: 111, pct: 5, status: 'Poor', pending: 2473, merged: 1074, labels: { pending: 'Fix early for more savings', merged: 'Preventable' } },
    releaseCycle: { identified: 476, resolved: 3, pct: 1, status: 'Poor', pending: 1518, merged: 420, labels: { pending: 'Possible Production Risk', merged: 'Preventable' } },
    production: { identified: 171, resolved: 10, pct: 6, status: 'Poor', pending: 1403, merged: 1403, labels: { pending: 'Production Risk', merged: 'Production Risk' } }
  },

  // Vulnerability Funnel (Security Dashboard)
  vulnFunnel: {
    cvesIdentified: 1240,
    directPkgCVEs: 850,
    reachability: 420,
    exploitability: 180,
    severity: { c: 26, h: 39 },
    fixAvailable: 42
  },

  // PR Summary (Security Dashboard)
  prSummary: {
    total: 603,
    noIssues: 417,
    withIssues: 62,
    buildBlocked: 0,
    scanFailed: 0
  },
};

// Map applications to their repositories for hierarchical views
const appRepoMap = {
  'Global Checkout': ['payment-gateway-api', 'payment-gateway-worker', 'payment-sdk', 'payment-ui'],
  'Sentinel Identity': ['auth-service', 'auth-ui'],
  'Frontline CRM': ['customer-portal', 'customer-api', 'customer-widgets'],
  'Nexus Data Bus': ['data-pipeline', 'data-ingestion', 'data-transform', 'data-export', 'data-scheduler'],
  'Legacy Admin Terminal': ['internal-admin'],
  'Mobile Gateway API': ['mobile-api', 'mobile-gateway'],
  'Zenith Analytics': ['analytics-engine', 'analytics-dashboard', 'analytics-worker'],
  'NotifyCore': ['notification-service'],
};

// ========== STATE MANAGEMENT ==========
const state = {
  role: localStorage.getItem('fd-role') || 'security',
  currentPage: '',
  params: {},
  history: [],
  roleDropdownOpen: false,
};

function setRole(role) {
  state.role = role;
  state.roleDropdownOpen = false;
  state.history = []; // Reset history on role change
  localStorage.setItem('fd-role', role);
  const defaults = { ciso: 'dashboard', security: 'dashboard', developer: 'dashboard' };
  navigateTo(defaults[role]);
  render(); // Force render to refresh role-specific content
}

// ========== ROUTING ==========
function navigateTo(page, params = {}, replaceHistory = false) {
  // Prevent duplicate navigation history
  const isSamePage = state.currentPage === page;
  const isSameParams = JSON.stringify(state.params) === JSON.stringify(params);
  
  if (isSamePage && isSameParams) return;

  // Push current state to history before navigating
  if (!replaceHistory && state.currentPage) {
    state.history.push({ 
      page: state.currentPage, 
      params: JSON.parse(JSON.stringify(state.params)) // Deep copy
    });
    
    // Cap history at 20 items to prevent memory leaks
    if (state.history.length > 20) state.history.shift();
  }
  
  state.currentPage = page;
  state.params = params;
  render();
  
  const content = document.querySelector('.content');
  if (content) content.scrollTop = 0;
}

function goBack() {
  if (state.history.length > 0) {
    const prev = state.history.pop();
    state.currentPage = prev.page;
    state.params = prev.params;
    render();
    
    const content = document.querySelector('.content');
    if (content) content.scrollTop = 0;
  } else {
    // If no history, navigate to the role's default dashboard
    const defaults = { ciso: 'dashboard', security: 'dashboard', developer: 'dashboard' };
    state.currentPage = defaults[state.role] || 'dashboard';
    state.params = {};
    render();
  }
}

// ========== RENDER ENGINE ==========
function render() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderSidebar()}
    <div class="main-area">
      ${renderTopbar()}
      <div class="content content-fade-enter" id="main-content">
        ${renderPage()}
      </div>
    </div>
  `;
}

// ========== SIDEBAR ==========
function getSidebarItems() {
  const items = {
    ciso: [
      { section: 'Overview', items: [
        { id: 'dashboard', label: 'Executive Dashboard', icon: 'dashboard' },
        { id: 'applications', label: 'Applications', icon: 'layers' },
        { id: 'compliance', label: 'Compliance', icon: 'checkCircle' },
      ]},
      { section: 'Analytics', items: [
        { id: 'trends', label: 'Trends & Insights', icon: 'trendingUp' },
        { id: 'reports', label: 'Reports', icon: 'fileText' },
      ]},
    ],
    security: [
      { section: 'Monitor', items: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'issues', label: 'All Issues', icon: 'alertTriangle', badge: 26 },
        { id: 'applications', label: 'Applications', icon: 'layers' },
      ]},
      { section: 'Review', items: [
        { id: 'pull-requests', label: 'Pull Requests', icon: 'gitPr' },
        { id: 'security-advisor', label: 'Security Advisor', icon: 'shieldAlert' },
      ]},
      { section: 'Reporting', items: [
        { id: 'reports', label: 'Reports', icon: 'fileText' },
      ]},
    ],
    developer: [
      { section: 'Workspace', items: [
        { id: 'dashboard', label: 'My Dashboard', icon: 'dashboard' },
        { id: 'repositories', label: 'Repositories', icon: 'gitRepo' },
        { id: 'issues', label: 'My Issues', icon: 'bug', badge: 5 },
      ]},
      { section: 'Code', items: [
        { id: 'pull-requests', label: 'My Pull Requests', icon: 'gitPr' },
        { id: 'dependencies', label: 'Dependencies', icon: 'package' },
      ]},
    ],
  };
  return items[state.role] || [];
}

function renderSidebar() {
  const sections = getSidebarItems();
  return `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="sidebar-logo-icon">${icons.shield}</div>
        <span class="sidebar-logo-text">Flyingduck</span>
      </div>
      <nav class="sidebar-nav">
        ${sections.map(section => `
          <div class="sidebar-section">
            <div class="sidebar-section-label">${section.section}</div>
            ${section.items.map(item => `
              <div class="sidebar-item ${state.currentPage === item.id ? 'active' : ''}" data-nav="${item.id}">
                <span class="icon">${icons[item.icon] || ''}</span>
                <span>${item.label}</span>
                ${item.badge ? `<span class="badge-count">${item.badge}</span>` : ''}
              </div>
            `).join('')}
          </div>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-item" data-nav="settings">
          <span class="icon">${icons.settings}</span>
          <span>Settings</span>
        </div>
        <div class="sidebar-item" data-nav="help">
          <span class="icon">${icons.helpCircle}</span>
          <span>Help & Support</span>
        </div>
      </div>
    </aside>
  `;
}

// ========== TOPBAR ==========
function getRoleMeta(role) {
  const meta = {
    ciso: { label: 'CISO', desc: 'Strategic View', color: 'var(--primary)', initials: 'C' },
    security: { label: 'Security Team', desc: 'Operational View', color: 'var(--high)', initials: 'ST' },
    developer: { label: 'Developer', desc: 'Execution View', color: 'var(--success)', initials: 'D' },
  };
  return meta[role];
}

function getPageTitle() {
  const titles = {
    ciso: {
      dashboard: 'Executive Dashboard',
      applications: 'Applications Risk View',
      'application-detail': 'Application Overview',
      compliance: 'Compliance & Governance',
      trends: 'Trends & Insights',
      reports: 'Reports',
    },
    security: {
      dashboard: 'Security Dashboard',
      issues: 'All Issues',
      'issue-detail': 'Issue Detail',
      applications: 'Applications',
      'application-detail': 'Application Detail',
      'pull-requests': 'Pull Requests',
      'pr-detail': 'PR Detail',
      'security-advisor': 'Security Advisor',
      reports: 'Reports',
    },
    developer: {
      dashboard: 'My Dashboard',
      repositories: 'Repositories',
      'repository-detail': 'Repository Detail',
      issues: 'My Issues',
      'issue-detail': 'Issue Detail',
      'pull-requests': 'My Pull Requests',
      'pr-detail': 'PR Detail',
      dependencies: 'Dependencies',
    },
  };
  return (titles[state.role] && titles[state.role][state.currentPage]) || 'Dashboard';
}

function renderTopbar() {
  const roleMeta = getRoleMeta(state.role);
  const roles = ['ciso', 'security', 'developer'];

  return `
    <header class="topbar">
      <div class="topbar-left">
        <div class="topbar-breadcrumb">
          <span>${getPageTitle()}</span>
        </div>
      </div>
      <div class="topbar-right">
        <div class="topbar-search">
          <span class="search-icon">${icons.search}</span>
          <input type="text" placeholder="Search issues, apps…" id="global-search" />
          <div class="search-shortcut">⌘K</div>
        </div>
        <div class="role-switcher">
          <button class="role-switcher-btn ${state.roleDropdownOpen ? 'open' : ''}" id="role-switcher-btn">
            <div class="role-avatar" style="background: ${roleMeta.color}">${roleMeta.initials}</div>
            <span class="font-medium">${roleMeta.label}</span>
            <span class="chevron">${icons.chevronDown}</span>
          </button>
          <div class="role-dropdown ${state.roleDropdownOpen ? 'open' : ''}" id="role-dropdown">
            ${roles.map(r => {
              const m = getRoleMeta(r);
              return `
                <div class="role-dropdown-item ${state.role === r ? 'active' : ''}" data-role="${r}">
                  <div class="role-avatar" style="background: ${m.color}">${m.initials}</div>
                  <div class="role-info">
                    <div class="role-name">${m.label}</div>
                    <div class="role-desc">${m.desc}</div>
                  </div>
                  <span class="check-icon">${icons.check}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <button class="topbar-icon-btn" id="notif-btn">
          ${icons.bell}
          <span class="notif-dot"></span>
        </button>
        <div class="topbar-user" id="user-avatar">JD</div>
      </div>
    </header>
  `;
}

// ========== PAGE ROUTER ==========
function renderPage() {
  const page = state.currentPage;
  const role = state.role;

  if (role === 'ciso') {
    switch (page) {
      case 'dashboard': return renderCISODashboard();
      case 'applications': return renderCISOApplications();
      case 'application-detail': return renderCISOAppDetail();
      case 'repository-detail': return renderRepoDetail();
      case 'compliance': return renderCompliance();
      case 'trends': return renderTrends();
      case 'reports': return renderReports();
      default: return renderCISODashboard();
    }
  } else if (role === 'security') {
    switch (page) {
      case 'dashboard': return renderSecurityDashboard();
      case 'issues': return renderSecurityIssues();
      case 'issue-detail': return renderSecurityIssueDetail();
      case 'applications': return renderSecurityApplications();
      case 'application-detail': return renderSecurityAppDetail();
      case 'repository-detail': return renderRepoDetail();
      case 'pull-requests': return renderSecurityPRs();
      case 'pr-detail': return renderSecurityPRDetail();
      case 'security-advisor': return renderSecurityAdvisor();
      case 'reports': return renderReports();
      default: return renderSecurityDashboard();
    }
  } else if (role === 'developer') {
    switch (page) {
      case 'dashboard': return renderDevDashboard();
      case 'repositories': return renderDevRepositories();
      case 'repository-detail': return renderRepoDetail();
      case 'issues': return renderDevIssues();
      case 'issue-detail': return renderDevIssueDetail();
      case 'pull-requests': return renderDevPRs();
      case 'pr-detail': return renderDevPRDetail();
      case 'dependencies': return renderDevDependencies();
      default: return renderDevDashboard();
    }
  }
  return '<div class="empty-state"><h3>Page not found</h3></div>';
}

// ========== HELPER FUNCTIONS ==========
function severityBadge(severity) {
  return `<span class="badge badge-${severity}">${severity.charAt(0).toUpperCase() + severity.slice(1)}</span>`;
}

function renderRepoRow(repoName, appName) {
  const repoObj = mockData.repositories.find(r => r.name === repoName) || { language: 'N/A', health: 'medium', openIssues: 0, lastScan: 'N/A', branch: 'main', lastCommit: 'N/A', riskScore: 0 };
  const repoIssues = mockData.issues.filter(i => i.app === appName && i.repo === repoName).length;
  const isCISO = state.role === 'ciso';

  return `
    <div class="repo-card-lite ${isCISO ? '' : 'clickable'}" 
         ${isCISO ? '' : `data-nav="repository-detail" data-id="${repoObj.id || ''}" data-repo="${repoName}"`}
         style="display: grid; grid-template-columns: 1.5fr 1fr 1.5fr 40px; align-items: center; padding: 16px 20px; background: white; border: 1px solid var(--border-light); border-radius: 12px; margin-bottom: 12px; transition: all 0.2s; box-shadow: var(--shadow-sm); ${isCISO ? 'cursor: default;' : 'cursor: pointer;'}">
      
      <div class="flex items-center gap-3">
        <div class="repo-icon-wrapper" style="width:32px; height:32px; display:flex; align-items:center; justify-content:center; background:var(--gray-50); border-radius:var(--radius-md); color:var(--primary)">
          ${icons.gitRepo}
        </div>
        <div>
          <div class="repo-name-text" style="font-weight:700; color:var(--gray-900)">${repoName}</div>
          <div class="text-xs text-muted">${repoObj.language} · ${repoObj.branch}</div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span class="status-dot ${repoObj.health}"></span>
        <span class="text-xs font-bold uppercase" style="color:var(--${repoObj.health})">${repoObj.health} Health</span>
      </div>

      <div class="flex items-center gap-6">
        <div>
          <div class="text-xs text-muted mb-1">Security Health</div>
          <div class="flex items-center gap-2">
            <span class="badge ${repoIssues > 5 ? 'badge-critical' : repoIssues > 0 ? 'badge-warning' : 'badge-success'}">${repoIssues} Issues</span>
            <span class="text-xs font-bold">${repoObj.riskScore}<small class="text-muted">/100</small></span>
          </div>
        </div>
        <div class="border-l pl-6" style="border-color:var(--border-light)">
          <div class="text-xs text-muted">Last Scanned</div>
          <div class="text-xs font-bold mt-1">${repoObj.lastScan}</div>
        </div>
      </div>

      <div class="flex justify-end">
        ${isCISO ? '' : `<span style="color:var(--gray-300)">${icons.chevronRight}</span>`}
      </div>
    </div>
  `;
}

function statusBadge(status) {
  const colors = {
    'open': 'badge-high',
    'in-progress': 'badge-primary',
    'resolved': 'badge-success',
    'closed': 'badge-info',
    'review': 'badge-warning',
    'approved': 'badge-success',
    'merged': 'badge-primary',
    'changes-requested': 'badge-critical',
    'passed': 'badge-success',
    'failed': 'badge-critical',
    'partial': 'badge-warning',
  };
  const cls = colors[status] || 'badge-info';
  const label = status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `<span class="badge ${cls}">${label}</span>`;
}

function riskBadge(level) {
  const map = { critical: 'critical', high: 'high', medium: 'medium', low: 'low' };
  return `<span class="badge badge-${map[level] || 'info'}">${level.charAt(0).toUpperCase() + level.slice(1)}</span>`;
}

function miniSeverityBar(c, h, m, l, showLabel = false) {
  return `
    <div class="flex items-center gap-severity">
      ${showLabel ? `<span class="text-xs font-bold text-critical uppercase tracking-tight mr-1">Critical</span>` : ''}
      <div class="flex items-center gap-dot"><span class="status-dot critical" style="width:8px;height:8px"></span><span class="text-xs font-bold text-gray-900">${c}</span></div>
      <div class="flex items-center gap-dot"><span class="status-dot high" style="width:8px;height:8px"></span><span class="text-xs font-bold text-gray-900">${h}</span></div>
      <div class="flex items-center gap-dot"><span class="status-dot medium" style="width:8px;height:8px"></span><span class="text-xs font-bold text-gray-900">${m}</span></div>
      <div class="flex items-center gap-dot"><span class="status-dot low" style="width:8px;height:8px"></span><span class="text-xs font-bold text-gray-900">${l}</span></div>
    </div>
  `;
}

function makeDonut(segments, size = 140, strokeWidth = 20) {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((a, s) => a + s.value, 0) || 1;
  let offset = 0;
  const paths = segments.map(s => {
    const dash = (s.value / total) * c;
    const o = offset;
    offset += dash;
    return `<circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${s.color}" stroke-width="${strokeWidth}" stroke-dasharray="${dash} ${c - dash}" stroke-dashoffset="${-o}" stroke-linecap="round"/>`;
  });
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${paths.join('')}</svg>`;
}

function makeLineChart(data, color, height = 160, width = 500) {
  if (!data.length) return '';
  const max = Math.max(...data.map(d => d.y)) * 1.1 || 1;
  const min = 0;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d.y - min) / (max - min)) * height;
    return `${x},${y}`;
  });
  const polyline = points.join(' ');
  const areaPoints = `0,${height} ${polyline} ${width},${height}`;
  const gridLines = [0.25, 0.5, 0.75].map(p => {
    const y = height * p;
    return `<line x1="0" y1="${y}" x2="${width}" y2="${y}" class="chart-grid-line"/>`;
  }).join('');

  return `<svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="width:100%;height:${height}px">
    ${gridLines}
    <polygon points="${areaPoints}" fill="${color}" class="chart-area"/>
    <polyline points="${polyline}" stroke="${color}" class="chart-line"/>
    ${data.map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((d.y - min) / (max - min)) * height;
      return `<circle cx="${x}" cy="${y}" class="chart-dot" fill="${color}"/>`;
    }).join('')}
  </svg>`;
}

function makeBarChart(data, height = 160) {
  const max = Math.max(...data.map(d => d.value)) * 1.15 || 1;
  return `<div class="chart-bar" style="height:${height}px">
    ${data.map(d => `
      <div class="chart-bar-col">
        <div class="chart-bar-fill" style="height:${(d.value/max)*100}%;background:${d.color || 'var(--primary)'}"></div>
        <div class="chart-bar-label">${d.label}</div>
      </div>
    `).join('')}
  </div>`;
}

function makeGauge(value, label, size = 120) {
  const r = (size - 16) / 2;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  
  // Dynamic color selection for the gradient
  const stops = value >= 80 ? ['#10B981', '#34D399'] : value >= 60 ? ['#F59E0B', '#FBBF24'] : ['#EF4444', '#F87171'];
  const gradId = `grad-${Math.random().toString(36).substr(2, 9)}`;

  return `
    <div class="gauge-ring" style="width:${size}px;height:${size}px;position:relative;display:flex;align-items:center;justify-content:center">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform: rotate(-90deg)">
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${stops[0]}" />
            <stop offset="100%" stop-color="${stops[1]}" />
          </linearGradient>
        </defs>
        <!-- Background Track -->
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--gray-100)" stroke-width="8" />
        <!-- Progress Arc -->
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" 
          stroke="url(#${gradId})" 
          stroke-width="10" 
          stroke-dasharray="${dash} ${c - dash}" 
          stroke-linecap="round"
          style="transition: stroke-dasharray 0.6s ease-out" />
      </svg>
      <div class="gauge-overlay-text">
        <span class="gauge-overlay-value">${value}%</span>
        <span class="gauge-overlay-label">${label}</span>
      </div>
    </div>`;
}

function makeMultiLineChart(datasets, height = 180, width = 500) {
  // datasets: [{ data: [{y}], color, label }]
  const allVals = datasets.flatMap(d => d.data.map(p => p.y));
  const max = Math.max(...allVals) * 1.1 || 1;
  const gridLines = [0.25, 0.5, 0.75].map(p => {
    const y = height * p;
    return `<line x1="0" y1="${y}" x2="${width}" y2="${y}" class="chart-grid-line"/>`;
  }).join('');

  const lines = datasets.map(ds => {
    const points = ds.data.map((d, i) => {
      const x = (i / (ds.data.length - 1)) * width;
      const y = height - (d.y / max) * height;
      return `${x},${y}`;
    });
    const polyline = points.join(' ');
    const areaPoints = `0,${height} ${polyline} ${width},${height}`;
    const dots = ds.data.map((d, i) => {
      const x = (i / (ds.data.length - 1)) * width;
      const y = height - (d.y / max) * height;
      return `<circle cx="${x}" cy="${y}" r="3" fill="${ds.color}" stroke="white" stroke-width="2"/>`;
    }).join('');
    return `
      <polygon points="${areaPoints}" fill="${ds.color}" opacity="0.06"/>
      <polyline points="${polyline}" stroke="${ds.color}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      ${dots}
    `;
  }).join('');

  return `<svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="width:100%;height:${height}px">
    ${gridLines}
    ${lines}
  </svg>`;
}

function renderSDLCSection(data) {
  const stages = [
    { key: 'featureDev', title: 'Feature Development', icon: icons.code },
    { key: 'releaseCycle', title: 'Release Cycle', icon: icons.zap },
    { key: 'production', title: 'Production Stage', icon: icons.globe }
  ];

  return `
    <div class="sdlc-container">
      ${stages.map(s => {
        const stage = data[s.key];
        return `
          <div class="sdlc-card">
            <div class="sdlc-card-header" style="margin-bottom: var(--space-2)">
              <div class="sdlc-card-title">${s.icon} ${s.title}</div>
              <div class="sdlc-card-identified">${icons.eye} ${stage.identified} identified</div>
            </div>
            <div class="sdlc-resolved-row">
              <div>
                <span class="sdlc-resolved-val">${stage.resolved}</span>
                <span class="sdlc-resolved-label">Resolved (${stage.pct}%)</span>
              </div>
              <div class="sdlc-status-badge">Poor</div>
            </div>
            <div class="sdlc-progress-wrapper" style="margin: var(--space-4) 0">
              <div class="sdlc-progress-fill" style="width:${stage.pct}%"></div>
            </div>
            <div class="sdlc-sub-grid">
              <div class="sdlc-sub-card">
                <div class="sdlc-sub-card-label">${icons.clock} Total Pending</div>
                <div class="sdlc-sub-card-val">${stage.pending}</div>
                <div class="sdlc-sub-card-hint">${stage.labels.pending}</div>
              </div>
              <div class="sdlc-sub-card secondary">
                <div class="sdlc-sub-card-label">${s.key === 'production' ? icons.shieldAlert : icons.gitMerge} ${s.key === 'production' ? 'Production Risk' : 'Issues Merged'}</div>
                <div class="sdlc-sub-card-val" style="color:${s.key === 'production' ? 'var(--critical)' : 'var(--high)'}">${stage.merged || stage.risk}</div>
                <div class="sdlc-sub-card-hint">${stage.labels.merged || stage.labels.risk}</div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ========== CISO PAGES ==========

function renderCISODashboard() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const detectionData = [
    { y: 48 }, { y: 52 }, { y: 45 }, { y: 58 }, { y: 42 }, { y: 55 },
    { y: 60 }, { y: 47 }, { y: 53 }, { y: 44 }, { y: 50 }, { y: 38 },
  ];
  const remediationData = [
    { y: 32 }, { y: 38 }, { y: 40 }, { y: 45 }, { y: 42 }, { y: 48 },
    { y: 52 }, { y: 50 }, { y: 55 }, { y: 51 }, { y: 56 }, { y: 54 },
  ];
  const securityScoreData = [
    { y: 62 }, { y: 64 }, { y: 63 }, { y: 66 }, { y: 68 }, { y: 70 },
    { y: 72 }, { y: 74 }, { y: 73 }, { y: 76 }, { y: 78 }, { y: 81 },
  ];
  const complianceData = [
    { y: 72 }, { y: 73 }, { y: 74 }, { y: 75 }, { y: 76 }, { y: 78 },
    { y: 79 }, { y: 80 }, { y: 81 }, { y: 82 }, { y: 83 }, { y: 84 },
  ];

  const topApps = mockData.applications.slice(0, 5);

  const totalApps = mockData.applications.length;
  const criticalApps = mockData.applications.filter(a => a.status === 'critical').length;
  const avgCompliance = Math.round(mockData.applications.reduce((acc, a) => acc + a.compliance, 0) / totalApps);

  const openBySeverity = [
    { label: 'Critical', value: 26, color: 'var(--critical)' },
    { label: 'High', value: 86, color: 'var(--high)' },
    { label: 'Medium', value: 194, color: 'var(--medium)' },
    { label: 'Low', value: 233, color: 'var(--low)' },
  ];

  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Executive Dashboard</h1>
          <p class="page-subtitle">Strategic security posture & operational overview</p>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary">${icons.calendar} Last 30 days</button>
          <button class="btn btn-primary">${icons.download} Export Report</button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-6">
      <div class="card p-6 flex flex-col justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-4">
          ${icons.layers} Total Applications
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">${totalApps}</div>
        <div class="text-xs text-success font-medium flex items-center gap-1">${icons.arrowUp} 2 added this quarter</div>
      </div>
      <div class="card p-6 flex flex-col justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-4">
          ${icons.shieldAlert} Critical Apps
        </div>
        <div class="text-3xl font-bold text-critical mb-1">${criticalApps}</div>
        <div class="text-xs text-muted font-medium">Needs immediate review</div>
      </div>
      <div class="card p-6 flex flex-col justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-4">
          ${icons.target} Avg Security Score
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">81<span class="text-lg text-muted">/100</span></div>
        <div class="text-xs text-success font-medium flex items-center gap-1">${icons.arrowUp} 5 pts improvement</div>
      </div>
      <div class="card p-6 flex flex-col justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-4">
          ${icons.checkCircle} Avg Compliance
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">${avgCompliance}%</div>
        <div class="text-xs text-success font-medium flex items-center gap-1">${icons.arrowUp} 3% from last scan</div>
      </div>
    </div>

    <div class="card mt-6">
      <div class="card-header">
        <h3>Application Overview</h3>
        <button class="btn btn-ghost btn-sm" data-nav="applications">View all ${icons.chevronRight}</button>
      </div>
      <div class="card-body" style="padding:0">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Application</th>
                <th>Risk</th>
                <th>Compliance</th>
                <th>Primary Language</th>
                <th>Repos</th>
                <th>Vulnerabilities</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.applications.map(app => `
                <tr data-nav="application-detail" data-id="${app.id}">
                  <td><div class="table-cell-main">${app.name}</div><div class="table-cell-sub">${app.owner}</div></td>
                  <td><div class="flex items-center gap-2"><span class="status-dot ${app.status}"></span> <span class="text-bold">${app.riskScore}</span></div></td>
                  <td>
                    <div class="flex items-center gap-2">
                      <div class="progress-mini" style="width:60px;height:4px;background:var(--gray-100);border-radius:2px">
                        <div style="width:${app.compliance}%;height:100%;background:${app.compliance > 80 ? 'var(--success)' : 'var(--warning)'};border-radius:2px"></div>
                      </div>
                      <span class="text-xs">${app.compliance}%</span>
                    </div>
                  </td>
                  <td><span class="tag">${app.language}</span></td>
                  <td><span class="text-sm">${app.repos}</span></td>
                  <td>${miniSeverityBar(app.critical, app.high, app.medium, app.low)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mt-6">
      <div class="card-header"><h3>SDLC Security Posture</h3></div>
      <div class="card-body">
        ${renderSDLCSection(mockData.sdlcPosture)}
      </div>
    </div>

    <div class="three-col mt-6">
      <div class="card" style="display:flex; flex-direction:column">
        <div class="card-header">
          <h3>Open Issues by Severity</h3>
        </div>
        <div class="card-body" style="flex:1; display:flex; flex-direction:column; justify-content:space-between">
          ${makeBarChart(openBySeverity, 240)}
          <div class="chart-legend mt-4">
            ${openBySeverity.map(d => `<div class="chart-legend-item"><div class="chart-legend-dot" style="background:${d.color}"></div> ${d.label} (${d.value})</div>`).join('')}
          </div>
        </div>
      </div>
      <div class="card" style="display:flex; flex-direction:column">
        <div class="card-header"><h3>Issue Aging Distribution</h3></div>
        <div class="card-body" style="flex:1; display:flex; flex-direction:column; justify-content:space-between">
          ${makeBarChart([
            { label: '0-1d', value: 12, color: 'var(--success)' },
            { label: '1-3d', value: 28, color: '#22C55E' },
            { label: '3-7d', value: 45, color: 'var(--medium)' },
            { label: '7-14d', value: 32, color: 'var(--high)' },
            { label: '14-30d', value: 18, color: '#EF4444' },
            { label: '30d+', value: 8, color: '#991B1B' },
          ], 240)}
          <div class="text-xs text-muted mt-2" style="text-align:center">At-risk backlog trends</div>
        </div>
      </div>
      ${renderPRSummary(mockData.prSummary).replace('mt-6', '')}
    </div>
  `;
}

function renderCISOApplications() {
  return renderSecurityApplications();
}

function renderCISOAppDetail() {
  const app = mockData.applications.find(a => a.id === (state.params && state.params.id)) || mockData.applications[0];
  const repos = appRepoMap[app.name] || [];

  return `
    <div class="back-link" onclick="goBack()">${icons.chevronLeft} Back</div>
    
    <div class="hero-blueprint p-8 mb-8">
      <div class="flex items-start justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="tag tag-sm" style="background:var(--primary-light); color:var(--primary)">Strategic Portfolio</span>
          </div>
          <h1 class="strategic-title gradient-text">${app.name}</h1>
          <p class="text-sm text-muted mt-2">${app.team} · Enterprise Application Portfolio · ${repos.length} Repositories</p>
        </div>
        <div class="flex gap-3">
          <button class="btn btn-secondary">${icons.download} Executive Summary</button>
        </div>
      </div>
    </div>

    <div class="metrics-grid mb-8" style="grid-template-columns: 1fr 1fr 1fr 1fr">
      <div class="card glass-card p-6" style="display:flex; flex-direction:column; min-height:160px">
        <div class="text-xs text-muted uppercase font-bold mb-2">Risk Index</div>
        <div class="text-3xl font-bold">${app.riskScore}<span class="text-sm text-muted">/100</span></div>
        <div class="progress-mini mt-auto" style="height:6px; background:var(--gray-100); border-radius:3px; margin-top:20px">
          <div style="width:${100 - app.riskScore}%; height:100%; background:var(--${app.status}); border-radius:3px"></div>
        </div>
      </div>

      <div class="card glass-card p-6" style="display:flex; flex-direction:column; min-height:160px">
        <div class="text-xs text-muted uppercase font-bold mb-2">Compliance</div>
        <div class="text-3xl font-bold">${app.compliance}%</div>
        <div class="text-xs text-muted mt-auto">SOC2 · ISO 27001 · NIST</div>
      </div>

      <div class="card glass-card p-6" style="display:flex; flex-direction:column; min-height:160px">
        <div class="text-xs text-muted uppercase font-bold mb-2">Technical Debt</div>
        <div class="text-3xl font-bold">${app.critical + app.high}</div>
        <div class="text-xs text-muted mt-auto">Critical & High findings</div>
      </div>

      <div class="card glass-card p-6" style="display:flex; flex-direction:column; min-height:160px">
        <div class="text-xs text-muted uppercase font-bold mb-2">Portfolio Health</div>
        <div class="text-xl font-bold" style="color:var(--${app.status})">${app.status.toUpperCase()}</div>
        <div class="flex flex-col gap-1 border-t pt-3 mt-auto" style="border-color:rgba(0,0,0,0.05)">
          <div class="flex justify-between text-xs"><span class="text-muted">Stability</span><span class="font-bold">98%</span></div>
          <div class="flex justify-between text-xs"><span class="text-muted">Last Scan</span><span class="font-bold">${app.lastScan}</span></div>
        </div>
      </div>
    </div>

    <div class="two-col mb-8">
      <div class="card">
        <div class="card-header"><h3>Severity Distribution</h3></div>
        <div class="card-body">
          ${makeBarChart([
            { label: 'Critical', value: app.critical, color: 'var(--critical)' },
            { label: 'High', value: app.high, color: 'var(--high)' },
            { label: 'Medium', value: app.medium, color: 'var(--medium)' },
            { label: 'Low', value: app.low, color: 'var(--low)' },
          ], 160)}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Compliance Gauges</h3></div>
        <div class="card-body" style="display:flex; justify-content:center; gap:var(--space-6)">
          ${makeGauge(app.compliance, 'Overall', 100)}
          ${makeGauge(Math.min(100, app.compliance + 8), 'SOC 2', 100)}
        </div>
      </div>
    </div>

    <div class="section-header mb-4">
      <h2 style="font-size:var(--text-lg); font-weight:700">Application Repositories</h2>
    </div>

    <div class="repo-list-container">
      ${repos.map(repoName => renderRepoRow(repoName, app.name)).join('')}
    </div>
  `;
}

function renderCompliance() {
  const appCompliance = mockData.applications.map(app => ({
    name: app.name,
    soc2: Math.min(100, app.compliance + Math.floor(Math.random() * 10)),
    iso27001: Math.max(50, app.compliance - Math.floor(Math.random() * 15)),
    owasp: Math.max(40, app.compliance - Math.floor(Math.random() * 20)),
    pci: Math.min(100, app.compliance + Math.floor(Math.random() * 8)),
    nist: Math.min(100, app.compliance + Math.floor(Math.random() * 5)),
    gdpr: Math.min(100, app.compliance + Math.floor(Math.random() * 12)),
  }));

  function complianceCellClass(score) {
    if (score >= 85) return 'badge-success';
    if (score >= 65) return 'badge-warning';
    return 'badge-critical';
  }

  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Compliance & Governance</h1>
          <p class="page-subtitle">Strategic framework compliance matrix across the application portfolio</p>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary">${icons.download} Audit Logs</button>
          <button class="btn btn-primary">${icons.plus} New Audit</button>
        </div>
      </div>
    </div>

    <div class="card mb-8">
      <div class="card-header flex items-center justify-between">
        <div>
          <h3 class="text-sm font-bold text-gray-900">Application Compliance Matrix</h3>
          <p class="text-xs text-muted">Real-time control status across global standards</p>
        </div>
        <div class="flex gap-2">
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-muted">${icons.search}</span>
            <input type="text" placeholder="Search portfolio..." class="bg-gray-50 border border-gray-200 pl-8 pr-3 py-1.5 rounded-md text-xs w-64 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
          </div>
        </div>
      </div>
      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th class="pl-6" style="min-width:220px">Application</th>
              <th class="text-center font-semibold">SOC 2</th>
              <th class="text-center font-semibold">ISO 27001</th>
              <th class="text-center font-semibold">OWASP</th>
              <th class="text-center font-semibold">PCI DSS</th>
              <th class="text-center font-semibold">NIST CSF</th>
              <th class="text-center font-semibold text-pr-6">GDPR</th>
            </tr>
          </thead>
          <tbody>
            ${appCompliance.map(ac => `
              <tr class="hover:bg-gray-50 transition-colors">
                <td class="pl-6">
                  <div class="font-bold text-gray-900 text-sm">${ac.name}</div>
                  <div class="text-xs text-muted">v2.4.0 · Production</div>
                </td>
                <td class="text-center"><span class="badge ${complianceCellClass(ac.soc2)}">${ac.soc2}%</span></td>
                <td class="text-center"><span class="badge ${complianceCellClass(ac.iso27001)}">${ac.iso27001}%</span></td>
                <td class="text-center"><span class="badge ${complianceCellClass(ac.owasp)}">${ac.owasp}%</span></td>
                <td class="text-center"><span class="badge ${complianceCellClass(ac.pci)}">${ac.pci}%</span></td>
                <td class="text-center"><span class="badge ${complianceCellClass(ac.nist)}">${ac.nist}%</span></td>
                <td class="text-center pr-6"><span class="badge ${complianceCellClass(ac.gdpr)}">${ac.gdpr}%</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-8">
      <div class="card p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-tight">Focus Compliance Risks</h3>
          <span class="tag tag-sm bg-red-100 text-critical font-bold">Priority</span>
        </div>
        <div class="space-y-4">
          <div class="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-100/50 hover:border-red-200 transition-all">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-white rounded-lg shadow-xs text-critical">${icons.shieldAlert}</div>
              <div>
                <div class="text-sm font-bold text-gray-900">GDPR Data Privacy Gap</div>
                <div class="text-xs text-muted font-medium">Zenith Analytics · Failed controls: 3</div>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm rounded-lg">Remediate</button>
          </div>
          <div class="flex justify-between items-center p-4 bg-amber-50 rounded-xl border border-amber-100/50 hover:border-amber-200 transition-all">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-white rounded-lg shadow-xs text-amber-600">${icons.alertTriangle}</div>
              <div>
                <div class="text-sm font-bold text-gray-900">ISO 27001 Access Audit</div>
                <div class="text-xs text-muted font-medium">Mobile Gateway · Pending cycle</div>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm rounded-lg">View Audit</button>
          </div>
        </div>
      </div>
      
      <div class="card p-6">
        <h3 class="text-sm font-semibold mb-4">Upcoming Audits</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="bg-gray-100 p-2 rounded text-center" style="width:50px">
              <div class="text-xs font-bold">APR</div>
              <div class="text-lg font-bold">18</div>
            </div>
            <div>
              <div class="text-xs font-bold">SOC 2 Type II Recertification</div>
              <div class="text-xs text-muted">All Production Systems</div>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-gray-100 p-2 rounded text-center" style="width:50px">
              <div class="text-xs font-bold">MAY</div>
              <div class="text-lg font-bold">04</div>
            </div>
            <div>
              <div class="text-xs font-bold">PCI DSS Periodic Assessment</div>
              <div class="text-xs text-muted">Global Checkout Portfolio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderTrends() {
  const vulnTrend = [
    { y: 200 }, { y: 190 }, { y: 195 }, { y: 180 }, { y: 170 }, { y: 165 },
    { y: 155 }, { y: 148 }, { y: 140 }, { y: 130 }, { y: 118 }, { y: 104 },
  ];
  const mttrTrend = [
    { y: 9.5 }, { y: 9.0 }, { y: 8.5 }, { y: 8.0 }, { y: 7.5 }, { y: 7.0 },
    { y: 6.5 }, { y: 6.0 }, { y: 5.5 }, { y: 5.0 }, { y: 4.8 }, { y: 4.5 },
  ];
  const newVsFixed = [
    { label: 'Jan', value: 45, color: 'var(--critical)' },
    { label: 'Feb', value: 38, color: 'var(--critical)' },
    { label: 'Mar', value: 52, color: 'var(--critical)' },
    { label: 'Apr', value: 41, color: 'var(--critical)' },
    { label: 'May', value: 35, color: 'var(--critical)' },
    { label: 'Jun', value: 28, color: 'var(--critical)' },
  ];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Trends & Insights</h1>
          <p class="page-subtitle">Security posture trends over time</p>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary">6 months</button>
          <button class="btn btn-primary">12 months</button>
        </div>
      </div>
    </div>

    <div class="two-col">
      <div class="card">
        <div class="card-header"><h3>Open Vulnerabilities Trend</h3></div>
        <div class="card-body">
          ${makeLineChart(vulnTrend, 'var(--primary)', 200)}
          <div class="flex justify-between mt-2" style="padding:0 4px">
            ${months.map(m => `<span class="text-xs text-muted">${m}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Mean Time to Resolve (Days)</h3></div>
        <div class="card-body">
          ${makeLineChart(mttrTrend, 'var(--success)', 200)}
          <div class="flex justify-between mt-2" style="padding:0 4px">
            ${months.map(m => `<span class="text-xs text-muted">${m}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="two-col mt-6">
      <div class="card">
        <div class="card-header"><h3>New Issues per Month</h3></div>
        <div class="card-body">
          ${makeBarChart(newVsFixed, 180)}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Severity Distribution Over Time</h3></div>
        <div class="card-body">
          ${makeBarChart([
            { label: 'Q1', value: 80, color: 'var(--critical)' },
            { label: 'Q2', value: 65, color: 'var(--high)' },
            { label: 'Q3', value: 50, color: 'var(--medium)' },
            { label: 'Q4', value: 35, color: 'var(--low)' },
          ], 180)}
          <div class="chart-legend mt-4">
            <div class="chart-legend-item"><div class="chart-legend-dot" style="background:var(--critical)"></div> Critical</div>
            <div class="chart-legend-item"><div class="chart-legend-dot" style="background:var(--high)"></div> High</div>
            <div class="chart-legend-item"><div class="chart-legend-dot" style="background:var(--medium)"></div> Medium</div>
            <div class="chart-legend-item"><div class="chart-legend-dot" style="background:var(--low)"></div> Low</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderReports() {
  const reports = [
    { name: 'Executive Summary Report', desc: 'High-level security posture overview for leadership', schedule: 'Weekly', lastGen: '2 hours ago', format: 'PDF' },
    { name: 'Vulnerability Assessment Report', desc: 'Detailed breakdown of all open vulnerabilities', schedule: 'Daily', lastGen: '6 hours ago', format: 'PDF' },
    { name: 'Compliance Audit Report', desc: 'Framework compliance status and gaps', schedule: 'Monthly', lastGen: '5 days ago', format: 'PDF' },
    { name: 'MTTR Performance Report', desc: 'Mean time to resolve trends and team performance', schedule: 'Weekly', lastGen: '1 day ago', format: 'CSV' },
    { name: 'Application Risk Report', desc: 'Per-application risk scores and trends', schedule: 'Weekly', lastGen: '3 hours ago', format: 'PDF' },
    { name: 'Dependency Vulnerability Report', desc: 'SCA findings across all repositories', schedule: 'Daily', lastGen: '12 hours ago', format: 'CSV' },
  ];

  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Reports</h1>
          <p class="page-subtitle">Generate and download security reports</p>
        </div>
        <button class="btn btn-primary">${icons.fileText} Create Custom Report</button>
      </div>
    </div>

    <div class="framework-grid">
      ${reports.map(r => `
        <div class="card">
          <div class="card-body">
            <h3 style="font-weight:600;margin-bottom:var(--space-2)">${r.name}</h3>
            <p class="text-sm text-muted mb-4">${r.desc}</p>
            <div class="detail-meta-list">
              <div class="detail-meta-item"><span class="meta-label">Schedule</span><span class="meta-value">${r.schedule}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Last Generated</span><span class="meta-value">${r.lastGen}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Format</span><span class="badge badge-info">${r.format}</span></div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-ghost btn-sm">${icons.eye} Preview</button>
            <button class="btn btn-primary btn-sm">${icons.download} Download</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderVulnFunnel(data) {
  return `
    <div class="card mt-6">
      <div class="card-header">
        <h3>Vulnerabilities Funnel</h3>
        <select class="btn btn-ghost btn-sm" style="border:1px solid var(--border); width: 80px"><option>All</option></select>
      </div>
      <div class="card-body">
        <div class="funnel-container">
          <div class="funnel-main">
            <div class="funnel-steps">
              <div class="funnel-step">
                <div class="funnel-step-line"></div>
                <div class="funnel-step-label">CVEs Identified</div>
                <div class="funnel-step-val">${data.cvesIdentified}</div>
              </div>
              <div class="funnel-step">
                <div class="funnel-step-line"></div>
                <div class="funnel-step-label">Direct Pkg CVEs</div>
                <div class="funnel-step-val">${data.directPkgCVEs}</div>
              </div>
              <div class="funnel-step">
                <div class="funnel-step-line"></div>
                <div class="funnel-step-label">Reachability</div>
                <div class="funnel-step-val">${data.reachability}</div>
              </div>
              <div class="funnel-step">
                <div class="funnel-step-line"></div>
                <div class="funnel-step-label">Exploitability</div>
                <div class="funnel-step-val">${data.exploitability}</div>
              </div>
              <div class="funnel-step">
                <div class="funnel-step-line"></div>
                <div class="funnel-step-label">Severity <span class="badge" style="background:var(--critical);color:white;padding:1px 4px;font-size:8px;border-radius:50%">C</span> <span class="badge" style="background:var(--high);color:white;padding:1px 4px;font-size:8px;border-radius:50%">H</span></div>
                <div class="funnel-step-val">${data.severity.c + data.severity.h}</div>
              </div>
              <div class="funnel-step">
                <div class="funnel-step-line"></div>
                <div class="funnel-step-label">Fix Available</div>
                <div class="funnel-step-val">${data.fixAvailable}</div>
              </div>
            </div>
            <div class="funnel-visual" style="background: linear-gradient(to right, var(--primary) 0%, var(--primary) 70%, #E5E7EB 100%)"></div>
          </div>
          <div class="funnel-side-card">
            <div class="smart-remediation-header">
              <div style="background:#ECFDF5; padding:6px; border-radius:8px; color:#10B981">${icons.package}</div>
              Smart Remediation
            </div>
            <button class="actionable-btn">0 Actionable Upgrades</button>
            <div class="remediation-stats">
              <div class="remediation-stat-row">
                <span class="text-xs text-muted">Fixes CVEs</span>
                <span class="badge badge-success" style="border-radius:12px; padding: 2px 6px">0</span>
              </div>
              <div class="remediation-stat-row">
                <span class="text-xs text-muted">with 0 upgrades</span>
                <span style="color:var(--success)">${icons.checkCircle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPRSummary(data) {
  return `
    <div class="card mt-6">
      <div class="card-header">
        <div class="pr-header-info">
          <div style="background:var(--primary-muted); padding:6px; border-radius:8px; color:var(--primary)">${icons.gitPr}</div>
          Pull Requests
        </div>
      </div>
      <div class="card-body">
        <div class="pr-section">
          <div class="pr-header-info">
            Pull Request Raised <span class="pr-raised-badge">${data.total}</span>
          </div>
          <div class="pr-grid">
            <div class="pr-summary-card">
              <div class="pr-summary-top">
                <span style="color:var(--success)">${icons.checkCircle}</span> No Issues
              </div>
              <div class="pr-summary-count">${data.noIssues}</div>
            </div>
            <div class="pr-summary-card">
              <div class="pr-summary-top">
                <span style="color:var(--critical)">${icons.shieldAlert}</span> With Issues
              </div>
              <div class="pr-summary-count">${data.withIssues}</div>
            </div>
            <div class="pr-summary-card">
              <div class="pr-summary-top">
                <span style="color:var(--primary)">${icons.checkCircle}</span> Build Blocked
              </div>
              <div class="pr-summary-count">${data.buildBlocked}</div>
            </div>
            <div class="pr-summary-card">
              <div class="pr-summary-top">
                <span style="color:var(--high)">${icons.xCircle}</span> Scan Failed
              </div>
              <div class="pr-summary-count">${data.scanFailed}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ========== SECURITY TEAM PAGES ==========

function renderSecurityDashboard() {
  const openBySeverity = [
    { label: 'Critical', value: 26, color: 'var(--critical)' },
    { label: 'High', value: 86, color: 'var(--high)' },
    { label: 'Medium', value: 194, color: 'var(--medium)' },
    { label: 'Low', value: 233, color: 'var(--low)' },
  ];

  const totalApps = mockData.applications.length;
  const vulnerableApps = mockData.applications.filter(a => a.critical > 0 || a.high > 0).length;

  const criticalIssues = mockData.issues.filter(i => i.severity === 'critical').slice(0, 5);
  const vulnDeps = mockData.dependencies.filter(d => d.severity === 'critical' || d.severity === 'high').slice(0, 5);

  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Security Dashboard</h1>
          <p class="page-subtitle">Operational security monitoring & vulnerability management</p>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary">${icons.download} Export</button>
          <button class="btn btn-primary">${icons.plus} New Scan</button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-6">
      <div class="card p-6 flex flex-col justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-4">
          ${icons.layers} Monitored Apps
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">${totalApps}</div>
        <div class="text-xs text-muted font-medium italic">Active scans enabled</div>
      </div>
      <div class="card p-6 flex flex-col justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-4">
          ${icons.shield} App Coverage
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">${Math.round((totalApps / 10) * 100)}%</div>
        <div class="text-xs text-success font-medium flex items-center gap-1">${icons.arrowUp} 5% improvement</div>
      </div>
      <div class="card p-6 flex flex-col justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-4">
          ${icons.shieldAlert} Vulnerable Apps
        </div>
        <div class="text-3xl font-bold text-high mb-1">${vulnerableApps}</div>
        <div class="text-xs text-muted font-medium">${vulnerableApps}/${totalApps} apps at risk</div>
      </div>
      <div class="card p-6 flex flex-col justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-4">
          ${icons.alertTriangle} Total Issues
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">539</div>
        <div class="text-xs text-success font-medium flex items-center gap-1">${icons.arrowDown} 8% reduction</div>
      </div>
      <div class="card p-6 flex flex-col justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-4">
          ${icons.clock} SLA Breached
        </div>
        <div class="text-3xl font-bold text-critical mb-1">8</div>
        <div class="text-xs text-muted font-medium">Needs immediate action</div>
      </div>
    </div>

    <div class="card glass-card mt-6">
      <div class="card-header" style="border-bottom-color: rgba(255,255,255,0.3)">
        <h3 class="gradient-text">Application Portfolio Overview</h3>
        <button class="btn btn-ghost btn-sm" data-nav="applications" style="background:var(--primary-light); color:var(--primary)">Detailed View ${icons.chevronRight}</button>
      </div>
      <div class="card-body" style="padding:0">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Application</th>
                <th>Risk</th>
                <th>Compliance</th>
                <th>Vulnerabilities</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.applications.slice(0, 6).map(app => `
                <tr data-nav="application-detail" data-id="${app.id}">
                  <td><div class="table-cell-main" style="color:var(--gray-900)">${app.name}</div><div class="table-cell-sub">${app.team}</div></td>
                  <td><div class="flex items-center gap-2"><span class="status-dot ${app.status}"></span> <span class="text-bold">${app.riskScore}</span></div></td>
                  <td>
                    <div class="flex items-center gap-2">
                      <div class="progress-mini" style="width:60px;height:4px;background:var(--gray-100);border-radius:2px">
                        <div style="width:${app.compliance}%;height:100%;background:${app.compliance > 80 ? 'var(--success)' : 'var(--warning)'};border-radius:2px"></div>
                      </div>
                      <span class="text-xs font-bold">${app.compliance}%</span>
                    </div>
                  </td>
                  <td>${miniSeverityBar(app.critical, app.high, app.medium, app.low)}</td>
                  <td><button class="btn btn-ghost btn-xs" style="color:var(--primary)">${icons.eye} Analyze</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mt-6">
      <div class="card-header"><h3>Vulnerability Funnel</h3></div>
      <div class="card-body">
        ${renderVulnFunnel(mockData.vulnFunnel)}
      </div>
    </div>

    <div class="three-col mt-6">
      <div class="card" style="display:flex; flex-direction:column">
        <div class="card-header">
          <h3>Open Issues by Severity</h3>
        </div>
        <div class="card-body" style="flex:1; display:flex; flex-direction:column; justify-content:space-between">
          ${makeBarChart(openBySeverity, 240)}
          <div class="chart-legend mt-4">
            ${openBySeverity.map(d => `<div class="chart-legend-item"><div class="chart-legend-dot" style="background:${d.color}"></div> ${d.label} (${d.value})</div>`).join('')}
          </div>
        </div>
      </div>
      <div class="card" style="display:flex; flex-direction:column">
        <div class="card-header"><h3>Issue Aging Distribution</h3></div>
        <div class="card-body" style="flex:1; display:flex; flex-direction:column; justify-content:space-between">
          ${makeBarChart([
            { label: '0-1d', value: 12, color: 'var(--success)' },
            { label: '1-3d', value: 28, color: '#22C55E' },
            { label: '3-7d', value: 45, color: 'var(--medium)' },
            { label: '7-14d', value: 32, color: 'var(--high)' },
            { label: '14-30d', value: 18, color: '#EF4444' },
            { label: '30d+', value: 8, color: '#991B1B' },
          ], 240)}
          <div class="text-xs text-muted mt-2" style="text-align:center">Operational backlog health</div>
        </div>
      </div>
      ${renderPRSummary(mockData.prSummary).replace('mt-6', '')}
    </div>

    <div class="two-col mt-6">
      <div class="card">
        <div class="card-header"><h3>Critical Open Vulnerabilities</h3></div>
        <div class="card-body" style="padding:0">
          <div class="data-table-wrapper">
            <table class="data-table">
              <thead><tr><th>Issue</th><th>Application</th><th>Age</th></tr></thead>
              <tbody>
                ${criticalIssues.map(issue => `
                  <tr>
                    <td><div class="table-cell-main">${issue.title}</div><div class="table-cell-sub">${issue.id}</div></td>
                    <td><div class="tag">${issue.app}</div></td>
                    <td class="text-xs text-muted">${issue.age}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Recent Vulnerable Packages (SCA)</h3></div>
        <div class="card-body" style="padding:0">
          <div class="data-table-wrapper">
            <table class="data-table">
              <thead><tr><th>Package</th><th>Severity</th><th>Impact</th></tr></thead>
              <tbody>
                ${vulnDeps.map(dep => `
                  <tr>
                    <td><div class="table-cell-main" style="font-family:var(--font-mono)">${dep.name}</div><div class="table-cell-sub">v${dep.version}</div></td>
                    <td><span class="status-dot ${dep.severity}"></span> <span class="text-xs text-bold">${dep.severity.toUpperCase()}</span></td>
                    <td class="text-xs text-muted">${dep.apps.length} Apps Affected</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSecurityIssues() {
  return `
    <div class="tabs mb-6">
      <div class="tab active">All Issues <span class="tab-badge">${mockData.issues.length}</span></div>
      <div class="tab">Open <span class="tab-badge">${mockData.issues.filter(i => i.status === 'open').length}</span></div>
      <div class="tab">In Progress <span class="tab-badge">${mockData.issues.filter(i => i.status === 'in-progress').length}</span></div>
      <div class="tab">Resolved <span class="tab-badge">${mockData.issues.filter(i => i.status === 'resolved').length}</span></div>
    </div>

    <div class="card p-4 mb-6 flex items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <div class="filter-chip active">${icons.filter} All Severities</div>
        <div class="filter-chip">Critical</div>
        <div class="filter-chip">High</div>
        <div class="filter-chip">Medium</div>
        <div class="filter-chip">Low</div>
      </div>
      <div class="flex items-center gap-3">
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-muted">${icons.search}</span>
          <input type="text" placeholder="Search issues..." class="bg-gray-50 border border-gray-200 pl-8 pr-4 py-1.5 rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
        </div>
        <button class="btn btn-secondary btn-sm">${icons.download} Export</button>
      </div>
    </div>

    <div class="card overflow-hidden">
      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th class="pl-6" style="width:40px"><div class="checkbox"></div></th>
              <th style="width:100px">Issue ID</th>
              <th>Vulnerability Details</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Application</th>
              <th>Source</th>
              <th>Assignee</th>
              <th class="pr-6">Age</th>
            </tr>
          </thead>
          <tbody>
            ${mockData.issues.map(issue => `
              <tr class="hover:bg-gray-50 transition-colors clickable" data-nav="issue-detail" data-id="${issue.id}">
                <td class="pl-6"><div class="checkbox"></div></td>
                <td><code class="text-xs font-bold text-gray-500">${issue.id}</code></td>
                <td>
                  <div class="font-bold text-gray-900 text-sm">${issue.title}</div>
                  <div class="text-xs text-muted font-medium font-mono truncate max-w-xs">${issue.file}:${issue.line}</div>
                </td>
                <td>${severityBadge(issue.severity)}</td>
                <td>${statusBadge(issue.status)}</td>
                <td><span class="tag tag-sm">${issue.app}</span></td>
                <td><span class="text-xs font-bold text-gray-600">${issue.source}</span></td>
                <td>
                  ${issue.assignee ? `<div class="flex items-center gap-2"><div class="avatar-sm">${issue.assignee.split(' ').map(n=>n[0]).join('')}</div><span class="text-xs font-semibold">${issue.assignee}</span></div>` : '<span class="text-xs text-muted italic">Unassigned</span>'}
                </td>
                <td class="pr-6 text-xs text-muted font-medium">${issue.age}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="p-6 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
        <span class="text-xs text-muted font-medium">Showing <b>1-${mockData.issues.length}</b> of <b>${mockData.issues.length}</b> total issues</span>
        <div class="flex gap-1">
          <button class="btn btn-ghost btn-sm p-2 bg-white border border-gray-200">${icons.chevronLeft}</button>
          <button class="btn btn-primary btn-sm px-3 shadow-sm rounded-lg">1</button>
          <button class="btn btn-ghost btn-sm px-3 bg-white border border-gray-200">2</button>
          <button class="btn btn-ghost btn-sm p-2 bg-white border border-gray-200">${icons.chevronRight}</button>
        </div>
      </div>
    </div>
  `;
}

function renderSecurityIssueDetail() {
  const issue = mockData.issues.find(i => i.id === (state.params && state.params.id)) || mockData.issues[0];

  return `
    <div class="back-link" onclick="goBack()">${icons.chevronLeft} Back</div>
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-sm text-muted">${issue.id}</span>
            ${severityBadge(issue.severity)}
            ${statusBadge(issue.status)}
          </div>
          <h1 style="font-size:var(--text-2xl)">${issue.title}</h1>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary">${icons.user} Assign</button>
          <button class="btn btn-primary">${icons.checkCircle} Mark Resolved</button>
        </div>
      </div>
    </div>

    <div class="detail-layout">
      <div class="detail-main">
        <div class="card mb-4">
          <div class="card-header"><h3>Description</h3></div>
          <div class="card-body">
            <p class="text-sm" style="line-height:1.6;color:var(--gray-700)">
              ${getIssueDescription(issue)}
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header"><h3>Affected Code</h3></div>
          <div class="card-body">
            <div class="text-sm text-muted mb-2">${issue.file} · Line ${issue.line}</div>
            <div class="code-block">
              ${getCodeSnippet(issue)}
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header"><h3>Remediation Guidance</h3></div>
          <div class="card-body">
            <p class="text-sm" style="line-height:1.6;color:var(--gray-700);margin-bottom:var(--space-4)">
              ${getRemediationGuidance(issue)}
            </p>
            <div class="code-block">
              ${getFixSnippet(issue)}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><h3>Activity</h3></div>
          <div class="card-body">
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-dot primary"></div>
                <div class="timeline-content">
                  <div class="timeline-title">Issue detected by ${issue.source} scan</div>
                  <div class="timeline-time">${issue.age} ago</div>
                </div>
              </div>
              ${issue.assignee ? `
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-title">Assigned to ${issue.assignee}</div>
                  <div class="timeline-time">${parseInt(issue.age) - 1}d ago</div>
                </div>
              </div>` : ''}
              ${issue.status === 'in-progress' ? `
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-title">Status changed to In Progress</div>
                  <div class="timeline-time">1d ago</div>
                </div>
              </div>` : ''}
            </div>
          </div>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="card">
          <div class="card-body">
            <h3 style="font-size:var(--text-sm);font-weight:600;margin-bottom:var(--space-4)">Details</h3>
            <div class="detail-meta-list">
              <div class="detail-meta-item"><span class="meta-label">Severity</span>${severityBadge(issue.severity)}</div>
              <div class="detail-meta-item"><span class="meta-label">Status</span>${statusBadge(issue.status)}</div>
              <div class="detail-meta-item"><span class="meta-label">CWE</span><span class="meta-value">${issue.cwe}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Source</span><span class="tag">${issue.source}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Application</span><span class="meta-value">${issue.app}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Repository</span><span class="meta-value">${issue.repo}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Assignee</span><span class="meta-value">${issue.assignee || 'Unassigned'}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Created</span><span class="meta-value">${issue.age} ago</span></div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3 style="font-size:var(--text-sm);font-weight:600;margin-bottom:var(--space-4)">Related</h3>
            <div class="flex flex-col gap-2">
              <button class="btn btn-secondary btn-sm w-full">${icons.eye} View in Repository</button>
              <button class="btn btn-secondary btn-sm w-full">${icons.gitPr} Create Fix PR</button>
              <button class="btn btn-ghost btn-sm w-full" style="color:var(--gray-500)">${icons.xCircle} Snooze Issue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRepoDetail() {
  const role = state.role;
  const params = state.params || {};
  const repo = mockData.repositories.find(r => r.id === params.id || r.name === params.repoName);
  const currentUser = 'Sarah Chen';
  
  if (!repo) {
    const backNav = role === 'developer' ? 'repositories' : 'applications';
    return `<div class="p-8 text-center text-muted"><h3>Repository not found: ${params.repoName || params.id}</h3><button class="btn btn-primary mt-4" data-nav="${backNav}">Back to ${role === 'developer' ? 'Repositories' : 'Portfolio'}</button></div>`;
  }

  const selectedBranchName = params.selectedBranch || repo.branch;
  const activeTab = params.activeTab || 'issues';
  
  // Filtering based on User (Sarah Chen) and Repository
  const userIssues = mockData.issues.filter(i => i.repo === repo.name && i.assignee === currentUser);
  const userPRs = mockData.pullRequests.filter(p => p.repo === repo.name && p.author === currentUser);

  return `
    <div class="repo-detail-premium">
      <div class="back-link mb-6" onclick="goBack()">${icons.chevronLeft} Back</div>

      <!-- PREMIUM HERO HEADER -->
      <div class="hero-blueprint p-8 mb-8" style="background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%); border: 1px solid var(--border-light); border-radius: 16px; position: relative; overflow: hidden">
        <div style="position: absolute; right: -20px; top: -20px; opacity: 0.03; transform: rotate(-15deg)">${icons.gitRepo}</div>
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary-light px-2 py-0.5 rounded">REPOSITORY</span>
              <span class="text-[10px] font-bold tracking-widest text-gray-400">/</span>
              <span class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">${repo.language}</span>
            </div>
            <h1 class="strategic-title gradient-text mb-2" style="font-size: 32px">${repo.name}</h1>
            <div class="flex items-center gap-4 text-xs text-muted">
              <span class="flex items-center gap-1">${icons.globe} Public Repository</span>
              <span class="flex items-center gap-1">${icons.activity} Last Scanned ${repo.lastScan}</span>
            </div>
          </div>
          <div class="flex gap-3">
            <button class="btn btn-secondary glass-card">${icons.fileText} Export Security JSON</button>
            <button class="btn btn-primary shadow-lg">${icons.activity} Trigger Scan</button>
          </div>
        </div>
      </div>

      <!-- METRICS GRID WITH GAUGES -->
      <div class="metrics-grid mb-8" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px">
        <div class="card glass-card flex items-center gap-6 p-6">
          ${makeGauge(repo.riskScore, 'Risk Score')}
          <div>
            <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Security Health</div>
            <div class="text-sm font-bold text-gray-900">Composite Risk Rating</div>
          </div>
        </div>
        <div class="metric-card glass-card">
          <div class="metric-label">Active Issues</div>
          <div class="metric-value" style="color:var(--${repo.health})">${repo.openIssues}</div>
          <div class="text-xs text-muted">Detected in ${selectedBranchName}</div>
        </div>
        <div class="metric-card glass-card">
          <div class="metric-label">Vulnerability ID</div>
          <div class="metric-value font-bold" style="color:var(--gray-900)">${userIssues.length > 0 ? userIssues[0].id.split('-')[1] : 'N/A'}</div>
          <div class="text-xs text-muted">Latest for you</div>
        </div>
      </div>

      <!-- ACTION CONTROLS -->
      <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div class="flex items-center gap-4">
          <div class="branch-selector-wrapper" style="position:relative">
            <span style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--gray-400)">${icons.code}</span>
            <select id="repo-branch-select" class="btn btn-ghost" style="padding-left:36px; border: 1px solid var(--border); border-radius:8px; font-weight:600; font-size:13px; background:white">
              ${repo.branches.map(b => `<option value="${b.name}" ${b.name === selectedBranchName ? 'selected' : ''}>${b.name} ${b.name === repo.branch ? '(Default)' : ''}</option>`).join('')}
            </select>
          </div>
          
          <div class="repo-tab-switcher" style="display: flex; gap: 32px; border-bottom: 1px solid #e2e8f0; width: 100%">
            <button class="relative pb-3 text-sm font-semibold transition-all transition-colors ${activeTab === 'issues' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}" 
                    style="background: transparent; border: none; outline: none; padding-left: 0; padding-right:0; cursor: pointer; border-bottom: 2px solid ${activeTab === 'issues' ? '#6366f1' : 'transparent'}; margin-bottom: -1px; ${activeTab === 'issues' ? 'color: #6366f1 !important' : ''}" data-repo-tab="issues">
              Issues <span style="margin-left: 4px; font-weight: normal; opacity: 0.5">${userIssues.length}</span>
            </button>
            <button class="relative pb-3 text-sm font-semibold transition-all transition-colors ${activeTab === 'prs' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}" 
                    style="background: transparent; border: none; outline: none; padding-left: 0; padding-right:0; cursor: pointer; border-bottom: 2px solid ${activeTab === 'prs' ? '#6366f1' : 'transparent'}; margin-bottom: -1px; ${activeTab === 'prs' ? 'color: #6366f1 !important' : ''}" data-repo-tab="prs">
              Pull Requests <span style="margin-left: 4px; font-weight: normal; opacity: 0.5">${userPRs.length}</span>
            </button>
          </div>
        </div>

        <div class="text-[12px] text-gray-400 font-medium">
          Viewing branch: <span class="text-gray-900 font-semibold">${selectedBranchName}</span>
        </div>
      </div>

      <!-- PREMIUM DATA TABLE -->
      <div class="card overflow-hidden shadow-sm border border-gray-200">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Vulnerability</th>
                <th style="text-align:center">Severity</th>
                <th style="text-align:center">Status</th>
                <th style="text-align:center">ID</th>
                <th style="text-align:center">Triage</th>
              </tr>
            </thead>
            <tbody>
              ${activeTab === 'issues' ? 
                (userIssues.length > 0 ? userIssues.map(iss => `
                  <tr>
                    <td>
                      <div class="font-bold text-gray-900">${iss.title}</div>
                      <div class="text-[11px] text-muted">${iss.file} · Line ${iss.line}</div>
                    </td>
                    <td style="text-align:center">
                      <span class="badge badge-${iss.severity}">${iss.severity.toUpperCase()}</span>
                    </td>
                    <td style="text-align:center">
                      <span class="text-[10px] font-bold text-orange-600 px-2 py-0.5 bg-orange-50 rounded border border-orange-100 uppercase">${iss.status}</span>
                    </td>
                    <td style="text-align:center" class="text-xs font-medium text-gray-500">${iss.id}</td>
                    <td style="text-align:center">${icons.chevronRight}</td>
                  </tr>
                `).join('') : '<tr><td colspan="5" style="text-align:center; padding: 48px; color: var(--gray-400)">No issues assigned to you in this branch.</td></tr>')
                :
                (userPRs.length > 0 ? userPRs.map(pr => `
                  <tr>
                    <td>
                      <div class="font-bold text-gray-900">${pr.title}</div>
                      <div class="text-[11px] text-muted">${pr.branch} · ${pr.created}</div>
                    </td>
                    <td style="text-align:center">
                      <span class="badge" style="background:var(--primary-light); color:var(--primary)">${pr.riskLevel.toUpperCase()} RISK</span>
                    </td>
                    <td style="text-align:center">
                      <span class="text-[10px] font-bold text-blue-600 px-2 py-0.5 bg-blue-50 rounded border border-blue-100 uppercase">${pr.status}</span>
                    </td>
                    <td style="text-align:center" class="text-xs font-medium text-gray-500">${pr.id}</td>
                    <td style="text-align:center">${icons.chevronRight}</td>
                  </tr>
                `).join('') : '<tr><td colspan="5" style="text-align:center; padding: 48px; color: var(--gray-400)">No pull requests created by you in this branch.</td></tr>')
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderSecurityApplications() {
  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Security Operations - Applications</h1>
          <p class="page-subtitle">Hierarchical view of application risks, repositories, and individual vulnerabilities</p>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary">${icons.download} Export Report</button>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="filter-bar mb-6">
      <div class="filter-chip active">All Services</div>
      <div class="filter-chip">Critical Findings</div>
      <div class="filter-chip">Pending Reviews</div>
      <div style="flex:1"></div>
      <div class="topbar-search" style="width:240px">
        <span class="search-icon">${icons.search}</span>
        <input type="text" placeholder="Filter by App or Repo..." />
      </div>
    </div>

    ${mockData.applications.map((app, ai) => {
      const repos = appRepoMap[app.name] || [];
      return `
      <div class="accordion-item ${ai === 0 ? 'open' : ''}" data-accordion="sec-app-${ai}">
        <div class="accordion-header glass-card" data-accordion-toggle="sec-app-${ai}" style="padding: var(--space-4) var(--space-6); border-radius: var(--radius-lg); margin-bottom: var(--space-1)">
          <div class="accordion-title">
            <div class="flex items-center gap-4">
              <div class="portfolio-drilldown clickable" data-nav="application-detail" data-id="${app.id}" title="View Application Portfolio" style="color:var(--primary); background:var(--primary-light); padding:8px; border-radius:var(--radius-md); display:flex; align-items:center; justify-content:center; transition:all 0.2s">
                ${icons.externalLink}
              </div>
              <div>
                <div class="text-bold" style="font-size:var(--text-base); color:var(--gray-900)">${app.name} <span class="text-xs text-muted" style="font-weight:400; margin-left:8px">${app.team}</span></div>
                <div class="text-xs text-muted">${repos.length} Repositories · ${app.language}</div>
              </div>
            </div>
          </div>
          <div class="accordion-meta">
            ${severityBadge(app.status)}
            ${miniSeverityBar(app.critical, app.high, app.medium, app.low)}
            <span class="accordion-chevron" style="margin-left:var(--space-4)">${icons.chevronDown}</span>
          </div>
        </div>
        <div class="accordion-body">
          <div class="accordion-body-inner" style="padding: var(--space-2) var(--space-5) var(--space-8)">
            <div class="repo-name-list">
              ${repos.map(repoName => renderRepoRow(repoName, app.name)).join('')}
            </div>
          </div>
        </div>
      </div>`;
    }).join('')}
  `;
}

function renderSecurityAppDetail() {
  const app = mockData.applications.find(a => a.id === (state.params && state.params.id)) || mockData.applications[0];
  const repos = appRepoMap[app.name] || [];

  return `
    <div class="back-link" onclick="goBack()">${icons.chevronLeft} Back</div>
    
    <div class="hero-blueprint p-8 mb-8">
      <div class="flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="tag tag-sm" style="background:var(--primary-light); color:var(--primary)">Application Portfolio</span>
          </div>
          <h1 class="strategic-title gradient-text" style="font-size:var(--text-3xl)">${app.name}</h1>
          <p class="text-xs text-muted mt-2">${app.team} · ${app.language} · ${repos.length} Repositories</p>
        </div>
        <div class="flex gap-3">
          <button class="btn btn-secondary">${icons.download} Export Report</button>
          <button class="btn btn-primary">${icons.shield} Compliance Audit</button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6 mb-8">
      <!-- Portfolio Health -->
      <div class="card p-6 flex flex-col justify-between">
        <div class="text-xs text-muted uppercase font-bold mb-3">Portfolio Health</div>
        <div class="flex items-center gap-4 mb-4">
          <div class="text-2xl font-bold uppercase" style="color:var(--${app.status})">${app.status}</div>
          <div class="text-xs font-bold px-2 py-0.5 rounded" style="background:var(--gray-100)">${app.riskScore}/100 Risk</div>
        </div>
        <div class="flex flex-col gap-1 border-t pt-3">
          <div class="flex justify-between text-xs"><span class="text-muted">Stability</span><span class="font-bold text-success">98.2%</span></div>
          <div class="flex justify-between text-xs"><span class="text-muted">MTTR</span><span class="font-bold">4.2h</span></div>
        </div>
      </div>

      <!-- Compliance -->
      <div class="card p-6 flex items-center gap-6">
        ${makeGauge(app.compliance, 'Score', 80)}
        <div>
          <h3 class="text-sm font-semibold mb-1">Compliance</h3>
          <p class="text-xs text-muted">Against SOC 2 & ISO 27001.</p>
        </div>
      </div>

      <!-- Risk Exposure -->
      <div class="card p-6">
        <h4 class="text-xs uppercase text-muted font-bold mb-4">Risk Exposure</h4>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs">Critical</span>
            <b class="text-sm" style="color:var(--critical)">${app.critical}</b>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs">High</span>
            <b class="text-sm" style="color:var(--high)">${app.high}</b>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs text-muted">Total Issues</span>
            <b class="text-xs font-bold">${app.critical + app.high}</b>
          </div>
        </div>
      </div>
    </div>

    <div class="section-header flex items-center justify-between mb-4">
      <h2 style="font-size:var(--text-lg); font-weight:700">Repositories in ${app.name}</h2>
      <div class="text-xs text-muted">${repos.length} repos found</div>
    </div>

    <div class="repo-list">
      ${repos.map(repoName => renderRepoRow(repoName, app.name)).join('')}
      ${repos.length === 0 ? `<div class="card p-8 text-center text-muted">No repositories linked to this application.</div>` : ''}
    </div>
  `;
}

function renderSecurityPRs() {
  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Pull Requests</h1>
          <p class="page-subtitle">Review and approve security-impacting pull requests</p>
        </div>
      </div>
    </div>

    <div class="tabs">
      <div class="tab active">All (${mockData.pullRequests.length})</div>
      <div class="tab">Needs Review (${mockData.pullRequests.filter(p => p.status === 'review').length})</div>
      <div class="tab">Approved (${mockData.pullRequests.filter(p => p.status === 'approved').length})</div>
      <div class="tab">Merged (${mockData.pullRequests.filter(p => p.status === 'merged').length})</div>
    </div>

    <div class="card">
      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>PR</th>
              <th>Repository</th>
              <th>Risk Level</th>
              <th>Issues Found</th>
              <th>Issues Fixed</th>
              <th>Author</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            ${mockData.pullRequests.map(pr => `
              <tr data-nav="pr-detail" data-id="${pr.id}">
                <td>
                  <div class="table-cell-main">${pr.title}</div>
                  <div class="table-cell-sub">${pr.id} · ${pr.branch}</div>
                </td>
                <td class="text-sm">${pr.repo}</td>
                <td>${riskBadge(pr.riskLevel)}</td>
                <td>${pr.issuesFound > 0 ? `<span style="color:var(--critical);font-weight:600">${pr.issuesFound}</span>` : '<span class="text-muted">0</span>'}</td>
                <td>${pr.issuesFixed > 0 ? `<span style="color:var(--success);font-weight:600">${pr.issuesFixed}</span>` : '<span class="text-muted">0</span>'}</td>
                <td><div class="user-cell"><div class="avatar">${pr.author.split(' ').map(n=>n[0]).join('')}</div><span class="text-sm">${pr.author}</span></div></td>
                <td>${statusBadge(pr.status)}</td>
                <td class="text-sm text-muted">${pr.created}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderSecurityPRDetail() {
  const pr = mockData.pullRequests.find(p => p.id === (state.params && state.params.id)) || mockData.pullRequests[0];
  const relatedIssues = mockData.issues.filter(i => i.repo === pr.repo).slice(0, 3);

  return `
    <div class="back-link" onclick="goBack()">${icons.chevronLeft} Back</div>
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-sm text-muted">${pr.id}</span>
            ${riskBadge(pr.riskLevel)}
            ${statusBadge(pr.status)}
          </div>
          <h1 style="font-size:var(--text-2xl)">${pr.title}</h1>
          <p class="page-subtitle">${pr.branch} → main · ${pr.repo}</p>
        </div>
        <div class="flex gap-2">
          ${pr.status === 'review' ? `
            <button class="btn btn-danger">${icons.xCircle} Block</button>
            <button class="btn btn-primary">${icons.checkCircle} Approve</button>
          ` : ''}
        </div>
      </div>
    </div>

    <div class="detail-layout">
      <div class="detail-main">
        <div class="card mb-4">
          <div class="card-header"><h3>Risk Assessment</h3></div>
          <div class="card-body">
            <div class="metrics-grid" style="grid-template-columns:repeat(3,1fr)">
              <div><div class="text-xs text-muted mb-2">Issues Found</div><div style="font-size:var(--text-2xl);font-weight:700;color:${pr.issuesFound > 0 ? 'var(--critical)' : 'var(--success)'}">${pr.issuesFound}</div></div>
              <div><div class="text-xs text-muted mb-2">Issues Fixed</div><div style="font-size:var(--text-2xl);font-weight:700;color:var(--success)">${pr.issuesFixed}</div></div>
              <div><div class="text-xs text-muted mb-2">Lines Changed</div><div style="font-size:var(--text-2xl);font-weight:700"><span style="color:var(--success)">+${pr.linesAdded}</span> / <span style="color:var(--critical)">-${pr.linesRemoved}</span></div></div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header"><h3>Security Issues in this PR</h3></div>
          <div class="data-table-wrapper">
            <table class="data-table">
              <thead><tr><th>Issue</th><th>Severity</th><th>File</th><th>Status</th></tr></thead>
              <tbody>
                ${relatedIssues.map(i => `
                  <tr data-nav="issue-detail" data-id="${i.id}">
                    <td class="table-cell-main">${i.title}</td>
                    <td>${severityBadge(i.severity)}</td>
                    <td class="text-sm text-muted">${i.file.split('/').pop()}</td>
                    <td>${statusBadge(i.status)}</td>
                  </tr>
                `).join('')}
                ${relatedIssues.length === 0 ? `<tr><td colspan="4" class="text-sm text-muted" style="text-align:center;padding:var(--space-6)">No security issues found in this PR</td></tr>` : ''}
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><h3>Diff Summary</h3></div>
          <div class="card-body">
            <div class="code-block">
<div class="code-line"><span class="code-line-num">1</span><span class="code-comment">// Changes in ${pr.repo}</span></div>
<div class="code-line"><span class="code-line-num">2</span><span class="code-comment">// +${pr.linesAdded} additions, -${pr.linesRemoved} deletions</span></div>
<div class="code-line"><span class="code-line-num">3</span></div>
<div class="code-line highlight"><span class="code-line-num">4</span><span style="color:#86EFAC">+ // Security fix applied</span></div>
<div class="code-line highlight"><span class="code-line-num">5</span><span style="color:#86EFAC">+ validateInput(userInput);</span></div>
<div class="code-line"><span class="code-line-num">6</span><span style="color:#FCA5A5">- processRawInput(userInput);</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="card">
          <div class="card-body">
            <h3 style="font-size:var(--text-sm);font-weight:600;margin-bottom:var(--space-4)">Details</h3>
            <div class="detail-meta-list">
              <div class="detail-meta-item"><span class="meta-label">Author</span><div class="user-cell"><div class="avatar">${pr.author.split(' ').map(n=>n[0]).join('')}</div><span class="meta-value">${pr.author}</span></div></div>
              <div class="detail-meta-item"><span class="meta-label">Repository</span><span class="meta-value">${pr.repo}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Branch</span><span class="meta-value" style="font-size:var(--text-xs)">${pr.branch}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Created</span><span class="meta-value">${pr.created}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Risk Level</span>${riskBadge(pr.riskLevel)}</div>
              <div class="detail-meta-item"><span class="meta-label">Status</span>${statusBadge(pr.status)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSecurityAdvisor() {
  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Security Advisor</h1>
          <p class="page-subtitle">Package vulnerabilities and CVE intelligence</p>
        </div>
      </div>
    </div>

    <div class="tabs">
      <div class="tab active">Vulnerable Packages</div>
      <div class="tab">CVE Database</div>
    </div>

    <div class="filter-bar">
      <div class="topbar-search" style="width:300px">
        <span class="search-icon">${icons.search}</span>
        <input type="text" placeholder="Search packages or CVEs…" />
      </div>
      <div class="filter-chip active">All Severities</div>
      <div class="filter-chip">Critical</div>
      <div class="filter-chip">High</div>
    </div>

    <div class="two-col">
      <div>
        <h3 style="font-weight:600;margin-bottom:var(--space-4)">Vulnerable Packages (${mockData.dependencies.filter(d => d.severity !== 'none').length})</h3>
        ${mockData.dependencies.filter(d => d.severity !== 'none').map(dep => `
          <div class="card mb-4">
            <div class="card-body">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <span style="font-weight:600">${dep.name}</span>
                  <span class="tag">${dep.version}</span>
                </div>
                ${severityBadge(dep.severity)}
              </div>
              <div class="detail-meta-list mt-4">
                <div class="detail-meta-item"><span class="meta-label">Known CVEs</span><span class="meta-value" style="color:var(--critical)">${dep.cves}</span></div>
                <div class="detail-meta-item"><span class="meta-label">Fix Version</span><span class="meta-value" style="color:var(--success)">${dep.fix || 'N/A'}</span></div>
                <div class="detail-meta-item"><span class="meta-label">Affected Apps</span><span class="meta-value">${dep.apps.join(', ')}</span></div>
              </div>
              <div class="mt-4">
                <button class="btn btn-primary btn-sm">${icons.zap} Upgrade to ${dep.fix || 'latest'}</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <div>
        <h3 style="font-weight:600;margin-bottom:var(--space-4)">Recent CVEs</h3>
        ${mockData.cves.map(cve => `
          <div class="card mb-4">
            <div class="card-body">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-muted">${cve.id}</span>
                ${severityBadge(cve.severity)}
              </div>
              <h4 style="font-weight:600;margin-bottom:var(--space-2)">${cve.title}</h4>
              <div class="detail-meta-list">
                <div class="detail-meta-item"><span class="meta-label">Package</span><span class="meta-value">${cve.package}</span></div>
                <div class="detail-meta-item"><span class="meta-label">Affected</span><span class="meta-value">${cve.affected}</span></div>
                <div class="detail-meta-item"><span class="meta-label">Published</span><span class="meta-value">${cve.published}</span></div>
                <div class="detail-meta-item"><span class="meta-label">Exploit</span>${cve.exploitAvail ? '<span class="badge badge-critical">Available</span>' : '<span class="badge badge-info">None</span>'}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ========== DEVELOPER PAGES ==========

function renderDevDashboard() {
  const myIssues = mockData.issues.filter(i => i.assignee === 'Emma Wilson');
  const myPRs = mockData.pullRequests.filter(p => p.author === 'Emma Wilson');

  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>My Dashboard</h1>
          <p class="page-subtitle">Welcome back, Emma. Here's your security summary.</p>
        </div>
      </div>
    </div>

    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-label">${icons.bug} My Open Issues</div>
        <div class="metric-value">5</div>
        <div class="metric-change up">${icons.arrowUp} 2 new this week</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">${icons.gitPr} My Active PRs</div>
        <div class="metric-value">2</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">${icons.gitRepo} Assigned Repos</div>
        <div class="metric-value">3</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">${icons.checkCircle} Resolved (7d)</div>
        <div class="metric-value" style="color:var(--success)">6</div>
      </div>
    </div>

    <div class="two-col">
      <div class="card">
        <div class="card-header">
          <h3>My Issues to Fix</h3>
          <button class="btn btn-ghost btn-sm" data-nav="issues">View all ${icons.chevronRight}</button>
        </div>
        <div class="card-body" style="padding-top:0">
          ${myIssues.length > 0 ? `
          <table class="data-table">
            <thead><tr><th>Issue</th><th>Severity</th><th>File</th></tr></thead>
            <tbody>
              ${myIssues.map(i => `
                <tr data-nav="issue-detail" data-id="${i.id}">
                  <td class="table-cell-main">${i.title}</td>
                  <td>${severityBadge(i.severity)}</td>
                  <td class="text-sm text-muted">${i.file.split('/').pop()}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>` : '<div class="empty-state"><div class="empty-state-icon">${icons.checkCircle}</div><h3>All clear!</h3><p>No issues assigned to you</p></div>'}
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3>Recent Activity</h3>
        </div>
        <div class="card-body">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot primary"></div>
              <div class="timeline-content">
                <div class="timeline-title">New issue assigned: XSS in Comment.tsx</div>
                <div class="timeline-time">2 hours ago</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-title">PR #887 review requested</div>
                <div class="timeline-time">5 hours ago</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-title">Resolved ISS-4476 in customer-portal</div>
                <div class="timeline-time">1 day ago</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-title">SAST scan passed on develop branch</div>
                <div class="timeline-time">2 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-6">
      <div class="card-header">
        <h3>My Repositories</h3>
        <button class="btn btn-ghost btn-sm" data-nav="repositories">View all ${icons.chevronRight}</button>
      </div>
      <div class="data-table-wrapper">
        <table class="data-table">
          <thead><tr><th>Repository</th><th>Language</th><th>Health</th><th>Open Issues</th><th>Last Scan</th></tr></thead>
          <tbody>
            ${mockData.repositories.slice(0, 3).map(repo => `
              <tr data-nav="repository-detail" data-id="${repo.id}">
                <td class="table-cell-main">${repo.name}</td>
                <td><span class="tag">${repo.language}</span></td>
                <td>${severityBadge(repo.health)}</td>
                <td>${repo.openIssues > 5 ? `<span style="color:var(--critical);font-weight:600">${repo.openIssues}</span>` : repo.openIssues}</td>
                <td class="text-sm text-muted">${repo.lastScan}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderDevRepositories() {
  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Repositories</h1>
          <p class="page-subtitle">Manage security health and active code changes for your assigned services.</p>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary">${icons.filter} Filters</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Repository</th>
              <th>Branch</th>
              <th>Health</th>
              <th>Issues</th>
              <th>Security Score</th>
              <th>Last Committed</th>
              <th>Last Scanned</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${mockData.repositories.map(repo => {
              const repoIssues = mockData.issues.filter(i => i.repo === repo.name).length;
              const healthColor = repo.health === 'critical' ? 'var(--critical)' : repo.health === 'high' ? 'var(--high)' : repo.health === 'medium' ? 'var(--warning)' : 'var(--success)';
              const coverageColor = repo.coverage > 80 ? 'var(--success)' : repo.coverage > 60 ? 'var(--warning)' : 'var(--critical)';
              return `
              <tr class="clickable" data-nav="repository-detail" data-repo="${repo.name}" style="cursor:pointer">
                <td>
                  <div style="display:flex; align-items:center; gap:12px">
                    <div style="width:36px; height:36px; border-radius:10px; background:var(--primary-light); color:var(--primary); display:flex; align-items:center; justify-content:center; flex-shrink:0">
                      ${icons.gitRepo}
                    </div>
                    <div>
                      <div style="font-weight:700; color:var(--gray-900); font-size:13px">${repo.name}</div>
                      <div style="font-size:11px; color:var(--gray-400); margin-top:2px">${repo.language}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span style="font-size:11px; font-weight:600; color:var(--gray-600); padding:3px 10px; background:var(--gray-100); border-radius:6px; display:inline-flex; align-items:center; gap:4px">
                    ${icons.layers} ${repo.branch}
                  </span>
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:6px">
                    <span style="width:8px; height:8px; border-radius:50%; background:${healthColor}; display:inline-block; flex-shrink:0"></span>
                    <span style="font-size:11px; font-weight:700; color:${healthColor}; text-transform:uppercase; letter-spacing:0.3px">${repo.health}</span>
                  </div>
                </td>
                <td>
                  <span style="font-size:12px; font-weight:700; color:${repoIssues > 5 ? 'var(--critical)' : repoIssues > 0 ? 'var(--gray-700)' : 'var(--success)'}">${repoIssues}</span>
                  <span style="font-size:11px; color:var(--gray-400); margin-left:2px">issues</span>
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:8px; min-width:100px">
                    <div style="flex:1; height:6px; background:var(--gray-100); border-radius:3px; overflow:hidden">
                      <div style="width:${repo.coverage}%; height:100%; background:${coverageColor}; border-radius:3px; transition:width 0.4s ease"></div>
                    </div>
                    <span style="font-size:11px; font-weight:700; color:var(--gray-700); min-width:28px; text-align:right">${repo.coverage}%</span>
                  </div>
                </td>
                <td>
                  <span style="font-size:12px; color:var(--gray-600); font-weight:500">${repo.lastCommit}</span>
                </td>
                <td>
                  <span style="font-size:12px; color:var(--gray-400)">${repo.lastScan}</span>
                </td>
                <td>
                  <span style="color:var(--gray-300)">${icons.chevronRight}</span>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderDevIssues() {
  const myIssues = mockData.issues.filter(i => ['Emma Wilson', 'Sarah Chen', 'Mike Torres'].includes(i.assignee));

  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>My Issues</h1>
          <p class="page-subtitle">Issues assigned to you that need fixing</p>
        </div>
      </div>
    </div>

    <div class="tabs">
      <div class="tab active">Open (${myIssues.filter(i => i.status !== 'resolved').length})</div>
      <div class="tab">In Progress (${myIssues.filter(i => i.status === 'in-progress').length})</div>
      <div class="tab">Resolved (${myIssues.filter(i => i.status === 'resolved').length})</div>
    </div>

    <div class="card">
      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Issue</th>
              <th>Severity</th>
              <th>File</th>
              <th>Repository</th>
              <th>Status</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            ${myIssues.map(issue => `
              <tr data-nav="issue-detail" data-id="${issue.id}">
                <td>
                  <div class="table-cell-main">${issue.title}</div>
                  <div class="table-cell-sub">${issue.id} · ${issue.cwe}</div>
                </td>
                <td>${severityBadge(issue.severity)}</td>
                <td class="text-sm text-muted">${issue.file.split('/').pop()}:${issue.line}</td>
                <td class="text-sm">${issue.repo}</td>
                <td>${statusBadge(issue.status)}</td>
                <td class="text-sm text-muted">${issue.age}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderDevIssueDetail() {
  const issue = mockData.issues.find(i => i.id === (state.params && state.params.id)) || mockData.issues[2];

  return `
    <div class="back-link" onclick="goBack()">${icons.chevronLeft} Back</div>
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-sm text-muted">${issue.id}</span>
            ${severityBadge(issue.severity)}
            ${statusBadge(issue.status)}
          </div>
          <h1 style="font-size:var(--text-2xl)">${issue.title}</h1>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary">${icons.gitPr} Create Fix PR</button>
          <button class="btn btn-primary">${icons.checkCircle} Mark Fixed</button>
        </div>
      </div>
    </div>

    <div class="detail-layout">
      <div class="detail-main">
        <div class="card mb-4">
          <div class="card-header"><h3>Affected Code</h3></div>
          <div class="card-body">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-sm text-muted">${issue.file}</span>
              <span class="tag">Line ${issue.line}</span>
            </div>
            <div class="code-block">
              ${getCodeSnippet(issue)}
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header"><h3>How to Fix</h3></div>
          <div class="card-body">
            <p class="text-sm" style="line-height:1.6;color:var(--gray-700);margin-bottom:var(--space-4)">
              ${getRemediationGuidance(issue)}
            </p>
            <h4 style="font-weight:600;margin-bottom:var(--space-2);font-size:var(--text-sm)">Suggested Fix:</h4>
            <div class="code-block">
              ${getFixSnippet(issue)}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><h3>Commit & PR</h3></div>
          <div class="card-body">
            <p class="text-sm text-muted mb-4">Apply the fix and create a pull request for security review.</p>
            <div class="flex gap-2">
              <button class="btn btn-secondary">${icons.code} View in Editor</button>
              <button class="btn btn-primary">${icons.gitPr} Create Fix PR</button>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="card">
          <div class="card-body">
            <h3 style="font-size:var(--text-sm);font-weight:600;margin-bottom:var(--space-4)">Details</h3>
            <div class="detail-meta-list">
              <div class="detail-meta-item"><span class="meta-label">Severity</span>${severityBadge(issue.severity)}</div>
              <div class="detail-meta-item"><span class="meta-label">CWE</span><span class="meta-value">${issue.cwe}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Source</span><span class="tag">${issue.source}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Repository</span><span class="meta-value">${issue.repo}</span></div>
              <div class="detail-meta-item"><span class="meta-label">File</span><span class="meta-value" style="font-size:11px">${issue.file.split('/').pop()}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Line</span><span class="meta-value">${issue.line}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Age</span><span class="meta-value">${issue.age}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDevPRs() {
  const myPRs = mockData.pullRequests.filter(p => ['Emma Wilson', 'Sarah Chen'].includes(p.author));

  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>My Pull Requests</h1>
          <p class="page-subtitle">Track your pull requests and their security status</p>
        </div>
      </div>
    </div>

    <div class="tabs">
      <div class="tab active">All (${myPRs.length})</div>
      <div class="tab">Pending Review (${myPRs.filter(p => p.status === 'review').length})</div>
      <div class="tab">Approved (${myPRs.filter(p => p.status === 'approved').length})</div>
    </div>

    <div class="card">
      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Pull Request</th>
              <th>Repository</th>
              <th>Issues</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            ${myPRs.map(pr => `
              <tr data-nav="pr-detail" data-id="${pr.id}">
                <td>
                  <div class="table-cell-main">${pr.title}</div>
                  <div class="table-cell-sub">${pr.id} · ${pr.branch}</div>
                </td>
                <td class="text-sm">${pr.repo}</td>
                <td>
                  <div class="flex items-center gap-2">
                    ${pr.issuesFound > 0 ? `<span class="text-xs" style="color:var(--critical)">${pr.issuesFound} found</span>` : ''}
                    ${pr.issuesFixed > 0 ? `<span class="text-xs" style="color:var(--success)">${pr.issuesFixed} fixed</span>` : ''}
                    ${pr.issuesFound === 0 && pr.issuesFixed === 0 ? '<span class="text-xs text-muted">None</span>' : ''}
                  </div>
                </td>
                <td>${statusBadge(pr.status)}</td>
                <td class="text-sm text-muted">${pr.created}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderDevPRDetail() {
  const pr = mockData.pullRequests.find(p => p.id === (state.params && state.params.id)) || mockData.pullRequests[2];

  return `
    <div class="back-link" onclick="goBack()">${icons.chevronLeft} Back</div>
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-sm text-muted">${pr.id}</span>
            ${statusBadge(pr.status)}
          </div>
          <h1 style="font-size:var(--text-2xl)">${pr.title}</h1>
          <p class="page-subtitle">${pr.branch} → main · ${pr.repo}</p>
        </div>
        <div class="flex gap-2">
          ${pr.status === 'approved' ? `<button class="btn btn-primary">${icons.gitMerge} Merge</button>` : ''}
          ${pr.status === 'changes-requested' ? `<button class="btn btn-primary">${icons.code} Push Fix</button>` : ''}
        </div>
      </div>
    </div>

    <div class="detail-layout">
      <div class="detail-main">
        <div class="card mb-4">
          <div class="card-header"><h3>Security Status</h3></div>
          <div class="card-body">
            <div class="metrics-grid" style="grid-template-columns:repeat(3,1fr)">
              <div>
                <div class="text-xs text-muted mb-2">Issues Found</div>
                <div style="font-size:var(--text-2xl);font-weight:700;color:${pr.issuesFound > 0 ? 'var(--critical)' : 'var(--success)'}">${pr.issuesFound}</div>
              </div>
              <div>
                <div class="text-xs text-muted mb-2">Issues Fixed</div>
                <div style="font-size:var(--text-2xl);font-weight:700;color:var(--success)">${pr.issuesFixed}</div>
              </div>
              <div>
                <div class="text-xs text-muted mb-2">Changes</div>
                <div style="font-size:var(--text-2xl);font-weight:700"><span style="color:var(--success)">+${pr.linesAdded}</span> <span style="color:var(--critical)">-${pr.linesRemoved}</span></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><h3>Security Checks</h3></div>
          <div class="card-body">
            <div class="flex flex-col gap-2">
              ${[
                { name: 'SAST Analysis', status: pr.issuesFound === 0 ? 'passed' : 'failed' },
                { name: 'Secret Detection', status: 'passed' },
                { name: 'Dependency Check', status: 'passed' },
                { name: 'License Compliance', status: 'passed' },
              ].map(check => `
                <div class="list-item" style="border:none;padding:var(--space-2) 0">
                  <div class="flex items-center gap-2">
                    <span class="status-dot ${check.status === 'passed' ? 'success' : 'critical'}"></span>
                    <span class="text-sm">${check.name}</span>
                  </div>
                  ${statusBadge(check.status)}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="card">
          <div class="card-body">
            <h3 style="font-size:var(--text-sm);font-weight:600;margin-bottom:var(--space-4)">Details</h3>
            <div class="detail-meta-list">
              <div class="detail-meta-item"><span class="meta-label">Repository</span><span class="meta-value">${pr.repo}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Branch</span><span class="meta-value" style="font-size:11px">${pr.branch}</span></div>
              <div class="detail-meta-item"><span class="meta-label">Status</span>${statusBadge(pr.status)}</div>
              <div class="detail-meta-item"><span class="meta-label">Risk</span>${riskBadge(pr.riskLevel)}</div>
              <div class="detail-meta-item"><span class="meta-label">Created</span><span class="meta-value">${pr.created}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDevDependencies() {
  return `
    <div class="page-header">
      <div class="page-header-row">
        <div>
          <h1>Dependencies</h1>
          <p class="page-subtitle">Vulnerable packages in your repositories with upgrade suggestions</p>
        </div>
      </div>
    </div>

    <div class="filter-bar">
      <div class="topbar-search" style="width:280px">
        <span class="search-icon">${icons.search}</span>
        <input type="text" placeholder="Search packages…" />
      </div>
      <div class="filter-chip active">All</div>
      <div class="filter-chip">Vulnerable Only</div>
    </div>

    <div class="card">
      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Package</th>
              <th>Current Version</th>
              <th>Latest</th>
              <th>Severity</th>
              <th>CVEs</th>
              <th>Used In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${mockData.dependencies.map(dep => `
              <tr>
                <td class="table-cell-main">${dep.name}</td>
                <td><span class="tag">${dep.version}</span></td>
                <td><span class="tag" style="${dep.version !== dep.latest ? 'background:var(--success-bg);color:var(--success)' : ''}">${dep.latest}</span></td>
                <td>${dep.severity !== 'none' ? severityBadge(dep.severity) : '<span class="text-sm text-muted">—</span>'}</td>
                <td>${dep.cves > 0 ? `<span style="color:var(--critical);font-weight:600">${dep.cves}</span>` : '<span class="text-muted">0</span>'}</td>
                <td class="text-sm">${dep.apps.join(', ')}</td>
                <td>
                  ${dep.fix ? `<button class="btn btn-primary btn-sm">${icons.zap} Upgrade</button>` : '<span class="text-sm text-muted">Up to date</span>'}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ========== CODE SNIPPETS & DESCRIPTIONS ==========

function getIssueDescription(issue) {
  const descriptions = {
    'CWE-89': 'A SQL injection vulnerability was detected in the user search endpoint. User-supplied input is being concatenated directly into a SQL query string without proper sanitization or parameterized queries. An attacker could exploit this to access, modify, or delete data in the database, or potentially execute administrative operations.',
    'CWE-798': 'Hardcoded AWS credentials were found in the configuration file. These credentials are stored in plain text and could be exposed if the source code is leaked or accessed by unauthorized personnel. This violates the principle of least privilege and secrets management best practices.',
    'CWE-79': 'A Cross-Site Scripting (XSS) vulnerability exists in the comment rendering component. User-provided content is rendered without proper escaping, allowing an attacker to inject malicious scripts that execute in the context of other users\' browser sessions.',
    'CWE-22': 'The file upload handler is vulnerable to path traversal attacks. An attacker could manipulate file paths to read or write files outside the intended upload directory, potentially accessing sensitive system files or overwriting critical application files.',
    'CWE-502': 'Insecure deserialization was detected in the message queue processor. Untrusted data is being deserialized without validation, which could allow an attacker to execute arbitrary code, perform injection attacks, or escalate privileges.',
  };
  return descriptions[issue.cwe] || `A ${issue.severity} security vulnerability (${issue.cwe}) was detected in ${issue.file}. This issue was identified by ${issue.source} scanning and requires remediation to maintain the application\'s security posture.`;
}

function getCodeSnippet(issue) {
  const snippets = {
    'CWE-89': `<div class="code-line"><span class="code-line-num">140</span><span class="code-keyword">public</span> List&lt;User&gt; <span class="code-func">searchUsers</span>(String query) {</div>
<div class="code-line"><span class="code-line-num">141</span>    String sql = <span class="code-string">"SELECT * FROM users WHERE name LIKE '"</span></div>
<div class="code-line highlight"><span class="code-line-num">142</span>        + query + <span class="code-string">"'"</span>;</div>
<div class="code-line"><span class="code-line-num">143</span>    <span class="code-keyword">return</span> jdbcTemplate.<span class="code-func">query</span>(sql, userMapper);</div>
<div class="code-line"><span class="code-line-num">144</span>}</div>`,
    'CWE-798': `<div class="code-line"><span class="code-line-num">21</span><span class="code-keyword">var</span> awsConfig = Config{</div>
<div class="code-line"><span class="code-line-num">22</span>    Region: <span class="code-string">"us-east-1"</span>,</div>
<div class="code-line highlight"><span class="code-line-num">23</span>    AccessKey: <span class="code-string">"AKIAIOSFODNN7EXAMPLE"</span>,</div>
<div class="code-line highlight"><span class="code-line-num">24</span>    SecretKey: <span class="code-string">"wJalrXUtnFEMI/K7MDENG/bPxRfi..."</span>,</div>
<div class="code-line"><span class="code-line-num">25</span>}</div>`,
    'CWE-79': `<div class="code-line"><span class="code-line-num">65</span><span class="code-keyword">const</span> <span class="code-func">Comment</span> = ({ text, author }) =&gt; {</div>
<div class="code-line"><span class="code-line-num">66</span>    <span class="code-keyword">return</span> (</div>
<div class="code-line highlight"><span class="code-line-num">67</span>        &lt;div dangerouslySetInnerHTML={{ __html: text }} /&gt;</div>
<div class="code-line"><span class="code-line-num">68</span>    );</div>
<div class="code-line"><span class="code-line-num">69</span>};</div>`,
  };
  return snippets[issue.cwe] || `<div class="code-line"><span class="code-line-num">${issue.line}</span><span class="code-comment">// Vulnerable code at ${issue.file}:${issue.line}</span></div>`;
}

function getRemediationGuidance(issue) {
  const guidance = {
    'CWE-89': 'Use parameterized queries or prepared statements instead of string concatenation. This ensures user input is treated as data, not executable SQL. Additionally, implement input validation to reject unexpected characters.',
    'CWE-798': 'Remove hardcoded credentials and use environment variables or a secrets management service (AWS Secrets Manager, HashiCorp Vault). Rotate the exposed credentials immediately and audit for any unauthorized access.',
    'CWE-79': 'Replace dangerouslySetInnerHTML with safe rendering methods. Use a sanitization library like DOMPurify if HTML rendering is required. Implement Content Security Policy headers as an additional layer of defense.',
    'CWE-22': 'Validate and sanitize file paths. Use a whitelist of allowed characters, resolve canonical paths, and verify the final path is within the expected directory. Never use user input directly in file system operations.',
    'CWE-502': 'Avoid deserializing untrusted data. If deserialization is necessary, use safe serialization formats (JSON instead of native serialization), implement type filtering, and validate all input before processing.',
  };
  return guidance[issue.cwe] || `Review the affected code and apply security best practices for ${issue.cwe}. Consult OWASP guidelines for detailed remediation steps.`;
}

function getFixSnippet(issue) {
  const fixes = {
    'CWE-89': `<div class="code-line"><span class="code-line-num">140</span><span class="code-keyword">public</span> List&lt;User&gt; <span class="code-func">searchUsers</span>(String query) {</div>
<div class="code-line"><span class="code-line-num">141</span>    String sql = <span class="code-string">"SELECT * FROM users WHERE name LIKE ?"</span>;</div>
<div class="code-line" style="background:rgba(34,197,94,0.1);margin:0 calc(-1 * var(--space-4));padding:0 var(--space-4);border-left:3px solid var(--success)"><span class="code-line-num">142</span>    <span class="code-keyword">return</span> jdbcTemplate.<span class="code-func">query</span>(sql, userMapper, query);</div>
<div class="code-line"><span class="code-line-num">143</span>}</div>`,
    'CWE-798': `<div class="code-line"><span class="code-line-num">21</span><span class="code-keyword">var</span> awsConfig = Config{</div>
<div class="code-line"><span class="code-line-num">22</span>    Region: <span class="code-func">os.Getenv</span>(<span class="code-string">"AWS_REGION"</span>),</div>
<div class="code-line" style="background:rgba(34,197,94,0.1);margin:0 calc(-1 * var(--space-4));padding:0 var(--space-4);border-left:3px solid var(--success)"><span class="code-line-num">23</span>    AccessKey: <span class="code-func">os.Getenv</span>(<span class="code-string">"AWS_ACCESS_KEY_ID"</span>),</div>
<div class="code-line" style="background:rgba(34,197,94,0.1);margin:0 calc(-1 * var(--space-4));padding:0 var(--space-4);border-left:3px solid var(--success)"><span class="code-line-num">24</span>    SecretKey: <span class="code-func">os.Getenv</span>(<span class="code-string">"AWS_SECRET_ACCESS_KEY"</span>),</div>
<div class="code-line"><span class="code-line-num">25</span>}</div>`,
    'CWE-79': `<div class="code-line"><span class="code-line-num">65</span><span class="code-keyword">import</span> DOMPurify <span class="code-keyword">from</span> <span class="code-string">'dompurify'</span>;</div>
<div class="code-line"><span class="code-line-num">66</span></div>
<div class="code-line"><span class="code-line-num">67</span><span class="code-keyword">const</span> <span class="code-func">Comment</span> = ({ text, author }) =&gt; {</div>
<div class="code-line" style="background:rgba(34,197,94,0.1);margin:0 calc(-1 * var(--space-4));padding:0 var(--space-4);border-left:3px solid var(--success)"><span class="code-line-num">68</span>    <span class="code-keyword">const</span> clean = DOMPurify.<span class="code-func">sanitize</span>(text);</div>
<div class="code-line" style="background:rgba(34,197,94,0.1);margin:0 calc(-1 * var(--space-4));padding:0 var(--space-4);border-left:3px solid var(--success)"><span class="code-line-num">69</span>    <span class="code-keyword">return</span> &lt;div dangerouslySetInnerHTML={{ __html: clean }} /&gt;;</div>
<div class="code-line"><span class="code-line-num">70</span>};</div>`,
  };
  return fixes[issue.cwe] || `<div class="code-line"><span class="code-line-num">${issue.line}</span><span class="code-comment">// Apply recommended fix for ${issue.cwe}</span></div>`;
}

// ========== EVENT BINDING (GLOBAL DELEGATION) ==========
function initEventListeners() {
  // Handle select changes (like branch selector)
  document.addEventListener('change', (e) => {
    if (e.target.id === 'repo-branch-select') {
      const selectedBranch = e.target.value;
      navigateTo('repository-detail', { ...state.params, selectedBranch }, true);
    }
  });

  document.addEventListener('click', (e) => {
    // Role switcher toggle
    const roleBtn = e.target.closest('#role-switcher-btn');
    if (roleBtn) {
      e.stopPropagation();
      state.roleDropdownOpen = !state.roleDropdownOpen;
      render();
      return;
    }

    // Role dropdown selection
    const roleItem = e.target.closest('[data-role]');
    if (roleItem) {
      e.stopPropagation();
      setRole(roleItem.getAttribute('data-role'));
      return;
    }

    // Sidebar & General Navigation
    const navItem = e.target.closest('[data-nav]');
    if (navItem) {
      e.stopPropagation();
      const page = navItem.getAttribute('data-nav');
      const id = navItem.getAttribute('data-id');
      const repoName = navItem.getAttribute('data-repo');
      navigateTo(page, { id, repoName });
      return;
    }

    // Repo Detail Tabs
    const repoTab = e.target.closest('[data-repo-tab]');
    if (repoTab) {
      e.stopPropagation();
      const activeTab = repoTab.getAttribute('data-repo-tab');
      navigateTo('repository-detail', { ...state.params, activeTab }, true);
      return;
    }

    // Accordion Toggle
    const accordionToggle = e.target.closest('[data-accordion-toggle]');
    if (accordionToggle) {
      e.stopPropagation();
      const key = accordionToggle.getAttribute('data-accordion-toggle');
      const item = document.querySelector(`[data-accordion="${key}"]`);
      if (item) {
        item.classList.toggle('open');
      }
      return;
    }

    // Checkbox toggle
    const checkbox = e.target.closest('.checkbox');
    if (checkbox) {
      e.stopPropagation();
      checkbox.classList.toggle('checked');
      checkbox.innerHTML = checkbox.classList.contains('checked') ? icons.check : '';
      return;
    }

    // Filter Chips & Tabs (simple visual toggle)
    const filterChip = e.target.closest('.filter-chip');
    if (filterChip) {
      filterChip.classList.toggle('active');
      return;
    }

    const tab = e.target.closest('.tab');
    if (tab) {
      const tabGroup = tab.closest('.tabs');
      if (tabGroup) {
        tabGroup.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      }
      return;
    }

    // Close role dropdown on click outside
    if (state.roleDropdownOpen) {
      state.roleDropdownOpen = false;
      render();
    }
  });

  // Keep static listeners like window resize or hash change here
  window.addEventListener('popstate', () => {
    // Simple back button support
    render();
  });
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
  // Set default page based on role
  const defaults = { ciso: 'dashboard', security: 'dashboard', developer: 'dashboard' };
  state.currentPage = defaults[state.role] || 'dashboard';
  initEventListeners();
  render();
});
