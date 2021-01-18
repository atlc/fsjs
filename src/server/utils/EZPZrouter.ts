import { Router } from 'express';
// import otherRouter from '../path/to/other';

const router = Router();

//  router.use('/other', otherRouter);

router.get('/foo', async (req, res) => {
    try {
        // bar();
        res.json(req.params)
    } catch (e) {
        // baz();
        console.log(e);
        res.status(500).send(e);
    }
});

export default router;