import PacmanLoader from 'react-spinners/PacmanLoader'

export type SpinnerProps = {
  className?: string
}

export function Spinner({ className }: SpinnerProps = {}) {
  const isDark = localStorage.getItem('Theme') === 'Dark'
  const spinnerColor = isDark ? '#d7d7d7' : '#333333'

  return (
    <PacmanLoader
      className={className || 'm-auto'}
      color={spinnerColor}
      cssOverride={{ display: 'inherit' }}
    />
  )
}
