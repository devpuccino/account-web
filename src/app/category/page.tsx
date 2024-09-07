export default async function CategoryPage() {
    // const categoryList: Category[] = await CategoryService.getAllCategory()
    const categoryList = [
        {
            id: '1',
            category_name:'Food' ,
            active: true
        },
        {
            id: '2',
            category_name:'Coffee and Tea',
            active: true
        },
        {
            id: '3',
            category_name:'Transport',
            active: true
        }
    ]
    return (
        <table id="category-data-table" className="data-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th className="text-left">Category Name</th>
                    <th className="text-left">Active Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    categoryList?.map((category, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{category.category_name}</td>
                            <td>{category.active ? "ACTIVE" : "INACTIVE"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}