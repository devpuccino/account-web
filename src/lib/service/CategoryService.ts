class CategoryService{
    getCategoryById = async (id:string)=>{
        let response = await fetch(`http://localhost:8080/account-service/api/category/${id}`,{
            mode: 'no-cors'
        })
        let responeBody = response.json()
        console.log(responeBody)
    }
    getAllCategories = async()=>{
        const response = await fetch ("http://192.168.7.100:17001/account-service/api/category")
        const responseBody = await response.json()
        return responseBody.data
    }
}

export default new CategoryService()