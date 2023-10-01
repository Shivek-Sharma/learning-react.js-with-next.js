import './globals.css'
import Header from '@/Components/Header'

// 'RootLayout' is the highest-order component that takes a prop named 'children'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}