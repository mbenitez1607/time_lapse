import admin from '../firbaseConfig/firebase-config.js'

const middleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodeValue = await admin.auth().verifyIdToken(token)
        if (decodeValue) {
            return next();
        }
        return res.status(401).json({message: "Unauthorize", status:401})
    } catch (error) {
        console.log("token error", error)
        return res.status(401).json({message: "Unauthorize", status:401})
    }
};

export default middleware;