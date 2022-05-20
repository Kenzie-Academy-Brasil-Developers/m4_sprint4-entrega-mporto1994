import database from "../../database"

const listByCategoryProductService = async ({category_id}) => {
    try{

        const res = await database.query("SELECT p.name,p.price,c.name category FROM products p JOIN categories c ON c.id= p.category_id WHERE c.id=$1",[category_id] )
        
        if(res.rows.length===0){
            throw "Nenhum item encontrado"
        }
        console.log(res)
        return  res.rows
    }catch(error){throw new Error(error)
    
    }
}
export default listByCategoryProductService;