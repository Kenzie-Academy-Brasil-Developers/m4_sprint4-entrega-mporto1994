import database from "../../database";

const createCategoryService = async ( {name} ) => {
  try {
    console.log(name)

    const res = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [name]
    );
    console.log(res)

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createCategoryService;