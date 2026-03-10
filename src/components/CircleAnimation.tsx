import { useEffect, useState } from 'react'

export type CircleAnimationProps = {
  /**
   * Increments whenever the parent wants to retrigger the pulse animation.
   */
  activationId: number
  /**
   * Controls whether the overlay should be visible while the animation runs.
   */
  isActive: boolean
  /**
   * Callback fired after the pulse finishes so parent can reset state.
   */
  onComplete: () => void
}

function CircleAnimation({ activationId, isActive, onComplete }: CircleAnimationProps) {
  const [internalKey, setInternalKey] = useState(0)

  useEffect(() => {
    // Bump an internal key so the animated element remounts and restarts the CSS keyframes.
    setInternalKey(activationId)
  }, [activationId])

  return (
    <div className={isActive ? 'circle-overlay is-visible' : 'circle-overlay'} aria-hidden="true">
      {isActive && <div key={internalKey} className="circle-pulse" onAnimationEnd={onComplete} />}
    </div>
  )
}

export default CircleAnimation
