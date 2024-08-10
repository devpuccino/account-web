export async function GET(){
    let response = await fetch("http://localhost:8080/api/category")
    if(response.status === 200){
        let data = await response.json()
        return Response.json(data)
    }else{
        return Response.json({
            "status": "500-000",
            "message": "Unexpected error"
        }, {
            status: 500
        })
    }
}