import jwt from "jsonwebtoken"

const authenticate = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRECT_KEY); // Replace 'your_jwt_secret_key' with your actual secret key
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export { authenticate}
