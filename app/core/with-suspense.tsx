import React, { Suspense } from 'react'

export function withSuspense<P>(
  Component: React.ComponentType<P>
): React.ComponentType<P> {
  const Comp = (props: P) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    )
  }
  Comp.displayName = `WithSuspend(${getDisplayName(Component)})`
  // @ts-ignore
  Comp.getLayout = Component.getLayout
  // @ts-ignore
  Comp.authenticate = Component.authenticate

  return Comp
}

function getDisplayName(Component: React.ComponentType<any>) {
  return Component.displayName ?? Component.name ?? 'Component'
}
