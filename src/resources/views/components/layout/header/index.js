import feather from 'feather-icons'

export function darkModeComponent() {
  return {
    async init(isDarkMode) {
      if (isDarkMode === undefined) {
        isDarkMode = localStorage.getItem('dark') !== 'false'
      }

      const icon = isDarkMode ? 'moon' : 'sun'

      document.querySelector('[x-ref="dark-mode-icon"]').innerHTML =
        feather.icons[icon].toSvg()
    }
  }
}
