import { useState, type ComponentType } from "react"

// ![note] the props HOC needs to inject
type InjectedProps = {
  count: number
  incrementCount: () => void
}

export function withCounter<P extends InjectedProps>(
  WrappedComponent: ComponentType<P>,
  incrementNumber: number
) {
  // ![note] omit the reaminging props
  /**
   * Omit<P, keyof InjectedProps> ensures that when you use <EnhancedClickCounter name="Dani" />,
   * TypeScript knows count and incrementCount will be provided by the HOC, not by the parent.
   */
  type RemainingProps = Omit<P, keyof InjectedProps>

  const WithCounter = (props: RemainingProps) => {
    const [count, setCount] = useState(0)

    const incrementCount = () => setCount((prev) => prev + incrementNumber)

    // ![note] include the reaming props as P
    return (
      <WrappedComponent {...(props as P)} count={count} incrementCount={incrementCount} />
    )
  }

  return WithCounter
}
