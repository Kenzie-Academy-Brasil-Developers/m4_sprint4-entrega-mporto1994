import database from "../../database"

const listProductService = async () => {
    try{
        const res = await database.query("SELECT * FROM products")
        console.log(res)
        return  res.rows
    }catch(error){throw new Error(error)
    
    }
}
export default listProductService;