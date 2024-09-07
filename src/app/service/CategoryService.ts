class CategoryService {
    getAllCategory = async () => {
        const categoryList: Category[] = await fetch("http://localhost:8080/account-service/api/category", {
            cache: "no-cache"
        }).then(async (response) => {
            let { code, data } = await response.json()
            if (code == "200-000") {
                return data
            } else {
                return []
            }
        })
            .catch((error) => console.error(error.message))
            .finally(() => console.log("end fetch data"))
        return categoryList
    }
}
export default new CategoryService()