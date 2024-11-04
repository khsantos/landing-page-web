const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    const AUTH_TOKEN = process.env.AUTH_TOKEN;

    if (token === AUTH_TOKEN) {
        next();
    } else {
        res.status(403).json({ error: 'Não autorizado.' });
    }
}

export default authMiddleware;
