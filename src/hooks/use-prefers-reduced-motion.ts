import * as React from "react"

/**
 * Tracks the user's `prefers-reduced-motion` setting.
 * Mirrors the matchMedia pattern of use-mobile.ts.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false)

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(mql.matches)
    onChange()
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return reduced
}
