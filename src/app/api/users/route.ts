import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'



export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (error) {
    console.error('[GET_USERS]', error)
    return NextResponse.json({ error: 'Error al obtener usuarios' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name } = body

    if (!email) {
      return NextResponse.json({ error: 'Falta el email' }, { status: 400 })
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    })

    return NextResponse.json(newUser)
  } catch (error) {
    console.error('[CREATE_USER]', error)
    return NextResponse.json({ error: 'Error al crear usuario' }, { status: 500 })
  }
}
