import { Link, useLocation } from 'react-router'

export function Footer() {
  const { pathname } = useLocation()

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
    <footer className="mt-24">
      <div className="pt-10 pb-16">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6 text-sm font-medium">
            <nav className="mt-2 mb-4 nav-dots">
              <li>
                <Link to="/" className={getLinkStylesByPath('/')}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className={getLinkStylesByPath('/articles')}
                >
                  Articles
                </Link>
              </li>
            </nav>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} João Lenon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
