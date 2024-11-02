import dotenv from "dotenv"
dotenv.config();

const config = {
    appPort : process.env.SERVER_PORT,
    dbURI : process.env.MONGO_URI,
    // jwtKey : process.env.SECRET_KEY,
    // cookieKey : process.env.NODE_ENV,
}
export default config