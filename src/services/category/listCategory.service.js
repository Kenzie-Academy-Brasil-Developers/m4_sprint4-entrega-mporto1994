import database from "../../database"

const categoryService = async () => {
    try{
        const res = await database.query("SELECT * FROM categories")
        return {message: "Categories listed.", list:res}
    }catch(error){throw new Error(error)
    
    }
}
export default categoryService;