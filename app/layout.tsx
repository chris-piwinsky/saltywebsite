import './globals.css'

export const metadata = {
  title: 'The Salty Curmudgeons',
  description: 'Saltiness around the World!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
