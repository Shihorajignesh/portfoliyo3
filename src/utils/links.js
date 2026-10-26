import { externalLinkProps, safeHref } from './constants'

export function linkAttrs(value) {
  const href = safeHref(value)
  const isExternal = /^https?:\/\//i.test(href)

  return {
    href,
    ...(isExternal ? externalLinkProps : {}),
  }
}

export function socialAttrs(link) {
  return {
    ...linkAttrs(link.href),
    'aria-label': link.label,
  }
}
