'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const NavBar = () => {
  const pathname = usePathname()

  const linkClasses = (href: string) =>
    clsx(
      'transition-colors hover:text-blue-600',
      pathname === href ? 'text-blue-700 font-semibold' : 'text-gray-700'
    )

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-semibold text-blue-700">Panel de Gestión</div>
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className={linkClasses('/')}>Inicio</Link>
        <Link href="/users" className={linkClasses('/users')}>Usuarios</Link>
        <Link href="/plans" className={linkClasses('/plans')}>Planes</Link>
      </div>
    </nav>
  )
}

export default NavBar
