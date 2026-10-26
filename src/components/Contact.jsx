import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'
import Section from './Ui/Section'
import GlowCard from './GlowCard'
import { btn } from './Ui/buttonStyles'
import { socialLinks } from '../data/portfolioData'
import { SITE_CONFIG, isPlaceholder } from '../utils/constants'
import { linkAttrs, socialAttrs } from '../utils/links'
import { socialIcons } from '../utils/Icons'

const initialValues = { name: '', email: '', message: '' }

// Validation: error object return કરે છે. ખાલી object = બધું બરાબર
function validate(v) {
  const errors = {}
  if (v.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) errors.email = 'Please enter a valid email address.'
  if (v.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

const inputClass =
  'w-full rounded-2xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-brand-amber/60 focus:outline-none'

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false) // true → success UI

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus()
      return
    }
    setSent(true)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setSent(false)
  }

  // Backend નથી, એટલે mailto fallback: user ની email app માં message ભરેલો ખુલે છે
  const emailMissing = isPlaceholder(SITE_CONFIG.EMAIL)
  const mailtoAttrs = emailMissing
    ? linkAttrs(SITE_CONFIG.EMAIL)
    : {
        href: `mailto:${SITE_CONFIG.EMAIL}?subject=${encodeURIComponent(
          `Portfolio enquiry from ${values.name.trim()}`,
        )}&body=${encodeURIComponent(
          `${values.message.trim()}\n\n${values.name.trim()} (${values.email.trim()})`,
        )}`,
      }

  const display = (link) => {
    if (link.id === 'email') return emailMissing ? 'Add your email in constants.js' : SITE_CONFIG.EMAIL
    return isPlaceholder(link.href) ? 'Add your link in constants.js' : link.href.replace(/^https?:\/\/(www\.)?/, '')
  }

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let’s talk"
      subtitle="Have an opportunity or a project in mind? Send me a message."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Contact cards */}
        <ul className="space-y-3">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.id]
            return (
              <li key={link.id}>
                <a
                  {...socialAttrs(link)}
                  className="glass group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-brand-amber/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-orange/20 to-brand-violet/20 text-brand-amber">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">{link.label}</span>
                    <span className="block truncate text-xs text-slate-400">{display(link)}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Form */}
        <GlowCard className="p-6 sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-6 text-center"
              >
                <CheckCircle2 size={48} className="mx-auto text-emerald-400" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Message ready, {values.name.trim()}!</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-slate-400">
                  This portfolio has no backend, so nothing was sent automatically. Press the button to send it from
                  your email app.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <a {...mailtoAttrs} className={btn.primary}>
                    <Send size={16} aria-hidden="true" /> Open email app
                  </a>
                  <button type="button" onClick={reset} className={btn.ghost}>
                    Write another
                  </button>
                </div>
                {emailMissing && (
                  <p className="mt-4 text-xs text-amber-300">Set EMAIL in src/utils/constants.js to enable this button.</p>
                )}
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <Field id="field-name" label="Name" error={errors.name}>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'field-name-error' : undefined}
                    placeholder="Your name"
                    className={`${inputClass} ${errors.name ? 'border-red-400/60' : 'border-white/10'}`}
                  />
                </Field>
                <Field id="field-email" label="Email" error={errors.email}>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'field-email-error' : undefined}
                    placeholder="you@example.com"
                    className={`${inputClass} ${errors.email ? 'border-red-400/60' : 'border-white/10'}`}
                  />
                </Field>
                <Field id="field-message" label="Message" error={errors.message}>
                  <textarea
                    id="field-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'field-message-error' : undefined}
                    placeholder="Tell me about the opportunity or project…"
                    className={`${inputClass} resize-y ${errors.message ? 'border-red-400/60' : 'border-white/10'}`}
                  />
                </Field>
                <button type="submit" className={`${btn.primary} w-full`}>
                  <Send size={16} aria-hidden="true" /> Send Message
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </GlowCard>
      </div>
    </Section>
  )
}