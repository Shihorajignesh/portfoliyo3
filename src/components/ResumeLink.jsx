
import { Download } from 'lucide-react'
import MagneticButton from './Ui/MagneticButton'
import { btn } from './Ui/buttonStyles'
import { SITE_CONFIG } from '../utils/constants'
import { linkAttrs } from '../utils/links'

// Resume button: URL constants.js ના RESUME માંથી આવે છે
export default function ResumeLink({ variant = 'primary', className = '', children = 'Download Resume', icon = true }) {
  const attrs = linkAttrs(SITE_CONFIG.RESUME)
  const isLocal = attrs.href.startsWith('/') // public folder ની file → download થશે
  return (
    <MagneticButton
      as="a"
      {...attrs}
      {...(isLocal ? { download: true } : {})}
      className={`${btn[variant]} ${className}`}
    >
      {icon && <Download size={16} aria-hidden="true" />}
      {children}
    </MagneticButton>
  )
}