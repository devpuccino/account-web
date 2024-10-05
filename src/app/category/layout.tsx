export default function CategoryLayout({ children, }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 id="page-header">Category</h1>
            {children}
        </div>
    )
}