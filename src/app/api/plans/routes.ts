import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const plans = await prisma.plan.findMany()
    return NextResponse.json(plans)
  } catch (error) {
    console.error('[GET_PLANS]', error)
    return NextResponse.json({ error: 'Error al obtener planes' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name } = body

    if (!name) {
      return NextResponse.json({ error: 'Falta el nombre' }, { status: 400 })
    }

    const newPlan = await prisma.plan.create({
      data: {
        name,
      },
    })

    return NextResponse.json(newPlan)
  } catch (error) {
    console.error('[CREATE_PLAN]', error)
    return NextResponse.json({ error: 'Error al crear plan' }, { status: 500 })
  }
}
