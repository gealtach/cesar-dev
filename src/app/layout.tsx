import './globals.css'
import type { Metadata } from 'next';

try {

} catch (error) {
  
}

export const metadata: Metadata = {
  title: 'Cesar Dev',
  description: 'Full Stack Developer',
  icons: {
    icon: './favicon-16x16.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='text-white'>{children}</body>
    </html>
  )
}