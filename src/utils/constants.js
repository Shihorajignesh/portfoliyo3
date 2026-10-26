// ============================================================
//  EDIT HERE: બધી personal links/contact આ એક file માં છે
// ============================================================

export const SITE_CONFIG = {
  EMAIL: '[sohile@gmail.com]',               // e.g. 'jignesh@example.com'
  INSTAGRAM: '[https://instagram.com/]',   // e.g. 'https://instagram.com/username'
  GITHUB: 'https://github.com/Shihorajignesh',
  GITHUB_USERNAME: 'Shihorajignesh',
  LINKEDIN: '[https://www.linkedin.com/feed/]',     // e.g. 'https://linkedin.com/in/username'
  RESUME: '/Jignesh Shihora - Frontend React JS Developer CV (1).pdf', // public folder PDF or Drive link
  PROFILE_PHOTO: '/WhatsApp Image 2026-08-11 at 8.10.17 PM.jpeg',
}

// Value હજી placeholder છે કે નહીં તે check કરે છે, જેમ કે "[YOUR_EMAIL]"
export const isPlaceholder = (value) =>
  !value || (typeof value === 'string' && value.trim().startsWith('['))

// Placeholder હોય તો "#" આપે છે, એટલે page ન તૂટે અને undefined link ન બને
export const safeHref = (value) => (isPlaceholder(value) ? '#' : value)

export const mailtoHref = () =>
  isPlaceholder(SITE_CONFIG.EMAIL) ? '#' : `mailto:${SITE_CONFIG.EMAIL}`

// External link ને સુરક્ષિત રીતે નવા tab માં ખોલવા માટે props
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}