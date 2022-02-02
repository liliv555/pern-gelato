import { Router, Request, Response } from 'express';

const router = Router();

// get all gelatos

// get a gelato

// create a gelato
router.post('/gelatos', async(req, res) => {
    try {
        const gelatoAttributes = req.body;
        console.log(gelatoAttributes)
    } catch (error) {
        console.log(error)
    }
})

// update a gelato

// delete a gelato

// search gelatos
