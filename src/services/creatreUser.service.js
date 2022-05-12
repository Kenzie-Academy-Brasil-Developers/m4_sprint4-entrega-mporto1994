import database from "../database";
import * as bcrypt from "bcryptjs"

const createUserService = async ({ email, name, password }) => {
    const hashedPassword = await bcrypt.hash(password, 8);

    try{
        const res= await database.query(
            "INSERT INTO users(email, name, password) VALUES ($1, $2, $3) RETURNING *",
            [email,name,hashedPassword]
        );
        console.log(res.rows)
    }
    catch(err){
        throw new Error(err)
    }
}