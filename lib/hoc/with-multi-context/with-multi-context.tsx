import React, { ComponentType, Context, createContext, useContext } from "react"

export const MultiContext = createContext<Record<string, any> | null>(null)

export interface MultiContextProps<T> {
  contextValue: T
}

export default function withMultiContext<P>(
  WrappedComponent: ComponentType<P & MultiContextProps<Record<string, any>>>,
  contexts: Array<Context<Record<string, any> | null>>
): React.FC<P> {
  const WithMultiContext: React.FC<P> = (props: P) => {
    const contextValues = contexts.map(useContext)

    const nonNullValue = contextValues.find((val) => val !== null)

    if (!nonNullValue) {
      throw new Error("No context value found.")
    }

    return (
      <MultiContext.Provider value={nonNullValue}>
        <WrappedComponent {...props} contextValue={nonNullValue} />
      </MultiContext.Provider>
    )
  }

  WithMultiContext.displayName = `withMultiContext(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`

  return WithMultiContext
}
