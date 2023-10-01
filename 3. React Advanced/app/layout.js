import './globals.css'
import MyContext from '@/Helper/Context'

export const metadata = {
  title: 'React Advanced | Home',
  description: 'Learning advanced concepts of react.js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyContext>{children}</MyContext>
      </body>
    </html>
  )
}