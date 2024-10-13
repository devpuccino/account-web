class CategoryService{
    getCategoryById = async (id:string)=>{
        let response = await fetch(`http://localhost:8080/account-service/api/category/${id}`,{
            mode: 'no-cors'
        })
        let responeBody = response.json()
        console.log(responeBody)
    }
}

export default new CategoryService()