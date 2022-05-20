import database from "../../database"

const showProductService = async ({id}) => {
    try{        
        const res = await database.query("SELECT * FROM products WHERE id=$1",[id])
        console.log(res.rows[0])
        return  res.rows[0]
    }catch(error){throw new Error(error)
    
    }
}
export default showProductService;