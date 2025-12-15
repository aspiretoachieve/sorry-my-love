import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "I'm Sorry Pallavi",
  description: "A heartfelt apology website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
