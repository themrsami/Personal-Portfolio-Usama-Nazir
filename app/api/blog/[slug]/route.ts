import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug
  const filePath = path.join(process.cwd(), 'public', 'content', `${slug}.md`)
  const content = await fs.readFile(filePath, 'utf8')
  return NextResponse.json({ content })
}