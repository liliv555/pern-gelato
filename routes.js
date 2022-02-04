import { Router } from 'express';
import * as controller from './controllers/gelatoController.js'

const router = Router();

// get all gelatos
router.get('/gelatos', async(req, res) => {
    try {
        // For simplicity only searching for title
        const title = req.query.title
        let result = []
        if (title === undefined) {
            result = await controller.getAllGelatos();
        } else {
            result = await controller.getByTitle(title);
        }
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    };
});

// get a gelato
router.get('/gelatos/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const result = await controller.getGelatoById(id);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
})

// create a gelato
router.post('/gelatos', async(req, res) => {
    try {
        const gelatoAttributes = req.body;
        const result = await controller.create(gelatoAttributes);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    };
});

// update a gelato
router.put('/gelatos/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const gelatoAttributes = req.body;
        const result = await controller.update(id, gelatoAttributes);
        return res.status(200).send(result);
  } catch (error) {
        console.log(error);
  };
});

// delete a gelato
router.delete('/gelatos/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const result = await controller.destroy(id);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    };
});

// search gelatos

export default router;