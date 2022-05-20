import database from "../../database"

const listOneCategoryService = async (id) => {
    try{        
        const res = await database.query("SELECT * FROM categories WHERE id=$1",[id])
        console.log(res.rows[0])
        return  res.rows[0]
    }catch(error){throw new Error(error)
    
    }
}
export default listOneCategoryService;