import {
  ArrowLeftRight, Boxes, Code, Database, Gauge, GitBranch,
  LayoutDashboard, Mail, Monitor, Plug, Rocket, Smartphone, Sparkles,
} from 'lucide-react'
import {
  SiBootstrap, SiCss, SiGit, SiGithub, SiHtml5, SiJavascript, SiReact, SiTailwindcss,
} from 'react-icons/si'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

// portfolioData ના icon strings → real components
export const uiIcons = {
  code: Code,
  layout: LayoutDashboard,
  smartphone: Smartphone,
  boxes: Boxes,
  database: Database,
  plug: Plug,
  gitbranch: GitBranch,
  monitor: Monitor,
  react: SiReact,
  rocket: Rocket,
  sparkles: Sparkles,
  swap: ArrowLeftRight,
  gauge: Gauge,
}

export const skillIcons = {
  html: { Icon: SiHtml5, color: '#e34f26' },
  css: { Icon: SiCss, color: '#1e90ff' },
  js: { Icon: SiJavascript, color: '#f7df1e' },
  react: { Icon: SiReact, color: '#61dafb' },
  tailwind: { Icon: SiTailwindcss, color: '#38bdf8' },
  bootstrap: { Icon: SiBootstrap, color: '#a78bfa' },
  git: { Icon: SiGit, color: '#f05032' },
  github: { Icon: SiGithub, color: '#e5e7eb' },
}

export const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  email: Mail,
}