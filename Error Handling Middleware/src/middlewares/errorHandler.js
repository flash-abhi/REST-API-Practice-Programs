// Please don't change the pre-written code

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here
  if(err instanceof customErrorHandler){
    return res.status(err.statusCode).send(err.message);
  }
  console.log(err)
  return res.status(500).send("Oops! Something went wrong... Please try again later!");
};
