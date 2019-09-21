const router = require('express').Router();
const axios = require('axios');
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send('auth');
})


// route to verify the oAUth and send
router.post('/', async (req, res) => {

    const {
        token
    } = req.body;


    try {
        const url = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=';
        const resq = await axios.get(url + token);
        const guser = resq.data;


        const user = await User.findOne({
            email: guser.email
        });

        if (!user) {
            const newUser = new User({
                name: guser.name,
                email: guser.email,
                image: guser.picture
            })

            await newUser.save();
            return res.status(200).json(newUser);

        }

        return res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            msg: 'Server Error'
        })
    }
});



module.exports = router;