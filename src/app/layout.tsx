import "./global.css"
import localFont from "next/font/local"
const roboto = localFont({
    src:"./font/roboto.woff2"
})
export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                {children}
            </body>
        </html>
    )
}