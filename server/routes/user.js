const router = require('express').Router();
const isAuth = require('../middleware/auth');
const User = require('../models/User');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctors');
const Hospital = require('../models/Hospital');

//Update USER TYPE (PATCH)

router.patch('/', async (req, res) => {
    const type = req.query.type;
    console.log(type);
    const id = req.body.id;
    try {

        const user = await User.findById({
            _id: id
        });
        console.log(user)
        if (!user) {
            return res.status(402).json({
                msg: 'User not found'
            })
        }

        user.userType = type;
        await user.save();
        console.log(user)
        return res.status(200).json({
            user
        })


    } catch (error) {
        res.status(500).json({
            msg: 'Server Error'
        })
    }

})


//add new Patient

router.post('/patient', async (req, res) => {
    const {

        name,
        age,
        sex,
        cp,
        trestbps,
        chol,
        fbs,
        restecg,
        thalach,
        exang,
        oldpeak,
        slope,
        ca,
        thal,
        hospital,
        phone,
        address,
        img,
        Pimg,
        userImg
    } = req.body;
    try {
        const newPatient = new Patient({

            name,
            age,
            sex,
            cp,
            trestbps,
            chol,
            fbs,
            restecg,
            thalach,
            exang,
            oldpeak,
            slope,
            ca,
            thal,
            hospital,
            phone,
            address,
            img,
            Pimg,
            userImg
        })

        await newPatient.save();

        return res.status(200).json(newPatient);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Server Error'
        })
    }
})

//remove patient
router.delete('/patient', isAuth, async () => {
    const patientId = req.query.id;

    try {
        await Patient.findByIdAndDelete({
            _id: patientId
        })

        return res.status(200).json({
            deletedPatient: patientId
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Error'
        })
    }
})

// create Doctor ()

router.post('/doctor', async (req, res) => {
    const {
        user,
        phone,
        address,
        specialization
    } = req.body;

    try {
        const newDoctor = new Doctor({
            user,
            phone,
            address,
            specialization
        })

        await newDoctor.save();

        return res.status(200).json(newDoctor)
    } catch (error) {
        res.status(500).json({
            msg: 'Server Error'
        })
    }

})


// create Hospital

router.post('/hospital', async (req, res) => {
    const {
        user,
        phone,
        address,
        hospitalName
    } = req.body;

    try {
        const newHospital = new Hospital({
            user,
            phone,
            address,
            hospitalName
        })

        await newHospital.save();

        return res.status(200).json(newHospital)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Server Error'
        })
    }

})

//get all patience of hospital

router.get('/hospital', async (req, res) => {
    const hospital = req.query.hospital;

    try {
        const patients = await Patient.find({
            hospital
        });

        return res.status(200).json(patients)
    } catch (error) {
        res.status(500).json({
            msg: 'Server Error'
        })
    }
})

//get all patience of a doctor
router.get('/doctor', async (req, res) => {
    const doctor = req.query.doctor;

    try {
        const patients = await Patient.find({
            doctor
        });

        return res.status(200).json(patients)
    } catch (error) {
        res.status(500).json({
            msg: 'Server Error'
        })
    }
})

//get all patients
router.get('/allpatients', async (req, res) => {
    const pId = req.query.id;
    try {
        const patient = await Patient.find({
            _id: pId
        }).populate('user')
        return res.status(200).json(patient)
    } catch (error) {
        res.status(500).json({
            msg: 'Server Error'
        })
    }
})

module.exports = router;


//template
// router.get('/doctor',isAuth,async(req,res)=>{
//     const hospital = req.query.hospital;

//     try {

//     } catch (error) {
//         res.status(500).json({
//             msg: 'Server Error'
//         })
//     }
// })