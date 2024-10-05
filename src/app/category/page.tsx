import DataTable from "@/component/DataTable"
import styles from "./styles.module.css"
export default async function CategoryPage() {
    return (
        <div className={styles.container}>
            <DataTable />
        </div>
    )
}