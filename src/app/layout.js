import { Inter } from 'next/font/google'
import './globals.css'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MY-Portfolio',
  description: 'This is my portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        
      </head>
      <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
    </>
  )
}
