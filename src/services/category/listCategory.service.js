import database from "../../database"

const listCategoryService = async () => {
    try{
        const res = await database.query("SELECT * FROM categories")
        console.log(res)
        return  res.rows
    }catch(error){throw new Error(error)
    
    }
}
export default listCategoryService;