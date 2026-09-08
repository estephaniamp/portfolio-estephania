function IconBase({ size = 20, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

export function ExternalLinkIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </IconBase>
  );
}

export function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.37 3.5A2.37 2.37 0 1 1 5.36 8.24 2.37 2.37 0 0 1 5.37 3.5ZM3.3 9.76h4.13V20.5H3.3V9.76Zm6.53 0h3.96v1.47h.06c.55-1.04 1.9-2.13 3.91-2.13 4.18 0 4.95 2.75 4.95 6.33v5.07h-4.13V16c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.17-1.72 2.37v4.58h-4.13V9.76Z" />
    </svg>
  );
}

export function MailIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </IconBase>
  );
}

export function CloseIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}

export function CodeIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
    </IconBase>
  );
}

export function PaletteIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M12 3a9 9 0 0 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a1 1 0 0 1 0-2h2a7 7 0 0 0-2-11Z" />
      <circle cx="7.5" cy="10" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="10" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="14" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10" r="0.8" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function UsersIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15.5 14.5A4.5 4.5 0 0 1 21 19" />
    </IconBase>
  );
}

export function SparklesIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="m12 3 1.2 3.3L16.5 7.5l-3.3 1.2L12 12l-1.2-3.3-3.3-1.2 3.3-1.2L12 3Z" />
      <path d="m18 13 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13Z" />
      <path d="m5 14 .7 1.8 1.8.7-1.8.7L5 19l-.7-1.8-1.8-.7 1.8-.7L5 14Z" />
    </IconBase>
  );
}

export function CheckIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </IconBase>
  );
}

export function MenuIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function GitHubIcon({ size = 21 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.029-2.686-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.594 1.028 2.686 0 3.842-2.337 4.687-4.566 4.935.359.31.679.923.679 1.86 0 1.343-.012 2.426-.012 2.755 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}
