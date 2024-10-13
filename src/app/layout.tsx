import StyledComponentsRegistry from "@/lib/registry"
import { notosan } from "./fonts"
import "./globals.css"
export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={notosan.className}>
            <body>
                <StyledComponentsRegistry>
                    <div className="container">
                        {children}
                    </div>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}