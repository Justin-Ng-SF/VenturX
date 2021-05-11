const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const illegalChar = '<>/?\|!@#$%^&*()`~';

//@route GET greetings/
//@desc returns greeting for user
//@access PUBLIC
router.get('/', async (req, res) => {
    try {
        //return greeting in json format
        return res.json(`Hello there!`);
    //catches error
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route GET greetings/:name
//@desc returns greeting with name
//@access PUBLIC
/*
    using express validator to:
    remove white spacing with trim
    remove special characters with blacklist
*/
router.get('/:name', [check('name').trim().blacklist(illegalChar)], async (req, res) => {
    try {
        //check for valid input
        if (!req.params.name) {
            return res.json('Invalid input');
        }
        //return greeting in json format
        return res.json(`Hello, ${req.params.name}!`);
    //catches error
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;