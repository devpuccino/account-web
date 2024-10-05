import { notosan } from "./fonts"
import "./globals.css"
export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={notosan.className}>
            <body>
                <div className="container">{children}</div>
            </body>
        </html>
    )
}