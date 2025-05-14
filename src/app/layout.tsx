// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import NavBar from './components/NavBar'

export const metadata = {
  title: 'Gestión de Planes y Usuarios',
  description: 'App para administrar planes y usuarios de empresa',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 vsc-initialized">
        <NavBar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
