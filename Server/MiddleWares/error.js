export const errorHandle = (statusCode,message) =>{
    const error = new Error();

    error.statusCode = statusCode || 500
    error.message = message || "server error"

    return error;
}