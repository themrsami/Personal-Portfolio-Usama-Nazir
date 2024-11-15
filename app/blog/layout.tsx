import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Usama Labs",
  description: "Explore technical articles about web development, TypeScript, React, and more.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
