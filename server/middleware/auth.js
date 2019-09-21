module.exports = function (req, res, next) {
    //Get token from header
    const id = req.header('x-auth');

    //Check if no token
    if (!id) {
        return res.status(401).json({
            msg: 'No token. Authorization denied'
        });
    }

    //Verify token
    try {

        req.user = id;
        next();
    } catch {
        res.status(401).json({
            msg: 'Not authenticated'
        });
    }
};