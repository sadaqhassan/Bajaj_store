import mongoose from "mongoose"

const connectionDb = async () => {
    const db = process.env.DBSTRING
    mongoose.connect(db).then(()=>console.log("connected to the db")).catch((err)=>console.log(err.message))
}

export default connectionDb;