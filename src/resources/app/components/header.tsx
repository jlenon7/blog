import meLogo from '#app/img/logos/me.png'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { FiSun, FiMoon, FiGithub, FiLinkedin } from 'react-icons/fi'

export type HeaderProps = {
  title?: string
  description?: string
}

export function Header({ title, description }: HeaderProps = {}) {
  const { pathname } = useLocation()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('Theme')

    if (theme === 'Dark') {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Theme', isDark ? 'Dark' : 'Light')
    document.body.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const getLinkStylesByPath = (path: string) => {
    const defaultStyles = 'transition-colors'

    if (pathname === path) {
      return (
        defaultStyles +
        ' font-bold text-[color:var(--highlight)] hover:text-[color:--highlight]'
      )
    }

    return defaultStyles
  }

  return (
    <header className="relative max-w-3xl mb-6">
      <a href="/">
        <img className="w-28 mt-20 mb-4 rounded-full" src={meLogo} alt="me" />
      </a>
      <button
        className="absolute top-4 right-4 p-2 flex items-center justify-center"
        onClick={toggleTheme}
      >
        {isDark ? (
          <FiSun className="w-6 h-6" />
        ) : (
          <FiMoon className="w-6 h-6" />
        )}
      </button>
      <button className="absolute top-4 right-4 p-2 flex items-center justify-center">
        <i x-ref="dark-mode-icon"></i>
      </button>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/jo%C3%A3o-lenon-873480194/"
        className="absolute top-24 right-16 p-2 flex items-center justify-center"
      >
        <FiLinkedin className="w-6 h-6" />
      </a>
      <a
        target="_blank"
        href="https://github.com/jlenon7"
        className="absolute top-24 right-4 p-2 flex items-center justify-center"
      >
        <FiGithub className="w-6 h-6" />
      </a>
      <nav className="mt-2 mb-4 nav-dots">
        <li>
          <Link to="/" className={getLinkStylesByPath('/')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/articles" className={getLinkStylesByPath('/articles')}>
            Articles
          </Link>
        </li>
      </nav>
      {title ? (
        <h1 className="text-5xl font-bold text-[color:--heading]">{title}</h1>
      ) : (
        ''
      )}
      {description ? (
        <p className="text-base text-justify mt-6">{description}</p>
      ) : (
        ''
      )}
    </header>
  )
}
