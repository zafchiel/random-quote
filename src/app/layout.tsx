import "./globals.css"
import localFont from "next/font/local"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const nohemi = localFont({
  src: "./font/Nohemi-VF.ttf",
})

export const metadata = {
  title: "Random Quote",
  description: "Generated random quote",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nohemi.className} ${inter.className}`}>
        <main className="flex min-h-screen items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
