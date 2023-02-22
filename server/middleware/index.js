import admin from '../firbaseConfig/firebase-config.js'

const middleware = async (req, res, next) => {
    try {
        //getting the token from the request
        const token = req.headers.authorization.split(' ')[1]
        //verifying the token with firebase
        const decodeValue = await admin.auth().verifyIdToken(token)
        if (decodeValue) {
            const userId = decodeValue.uid
            req.userId= userId  
            return next();
        }
        return res.status(401).json({message: "Unauthorize", status:401})
    } catch (error) {
        console.log("token error", error)
        return res.status(401).json({message: "Unauthorize", status:401})
    }
};

export default middleware;