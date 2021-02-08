import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const categories = id ? (await db.Categories.get.single(id))[0] : await db.Categories.get.all();
        res.json(categories)
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

export default router;