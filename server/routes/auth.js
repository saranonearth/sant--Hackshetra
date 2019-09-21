const router = require('express').Router();
const axios = require('axios');

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
        const res = await axios.get(url + token);
        const user = res.data;



        console.log(user)

    } catch (error) {
        console.log(error)
    }
});



module.exports = router;