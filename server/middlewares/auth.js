import { User } from "../models/user.js";
import { ErrorHandler } from "../utils/utility.js";
import jwt from 'jsonwebtoken'

const isLoggedIn = (req, res, next) => {
    try {
        const token = req.header('Tangy-token');
        if (!token) {
            return next(new ErrorHandler("Please login", 401));
        }
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data._id;
        next();
    } catch (error) {
        console.log("Fetch token error")
    }
}

const isSocketAuthenticated = async(socket, next) => {
    try {
      const token = socket.handshake.headers['tangy-token']; 
      if (!token) {
        return next(new ErrorHandler("Socket is not Authenticated",401));
      }
      const data = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(data._id)
      if(!user){
        return next(new ErrorHandler("Socket is not Authenticated",401));
      }
      socket.user = user; 
      next(); 
    } catch (error) {
      console.error("Token verification failed:", error);
      return next(new ErrorHandler(error.message,400));
    }
  };

export { isLoggedIn , isSocketAuthenticated}