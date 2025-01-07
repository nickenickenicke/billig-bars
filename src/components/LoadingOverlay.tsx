interface LoadingOverlayProps {
  message?: string
}

export const LoadingOverlay = ({ message }: LoadingOverlayProps) => {
  return (
    <div className="fixed left-0 top-0 z-[101] flex h-full w-full items-center justify-center bg-[#00000022]">
      <span className="animate-pulse text-3xl">{message ? message : 'Loading...'}</span>
    </div>
  )
}
