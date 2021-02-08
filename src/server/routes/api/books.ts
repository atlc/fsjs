import { Router } from 'express';
import db from '../../db';
import { IBook } from '../../../common/types'

const router = Router();

router.get('/:id?', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const books = id ? (await db.Books.get.single(id))[0] : await db.Books.get.all();
        res.json(books)
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

router.post('/', async (req, res) => {
    try {
        const book: IBook = req.body;
        const bookRes = await db.Books.do.create(book);
        if (!bookRes.insertId) {
            throw new Error('Unable to create new book.');
        } else {
            res.json({ insertId: bookRes.insertId });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const book: IBook = req.body;
        const bookRes = await db.Books.do.update(id, book);
        console.log(bookRes);
        if (bookRes.affectedRows === 0) {
            throw new Error('Unable to update book.');
        } else {
            res.status(200).json({ affectedRows: bookRes.affectedRows });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        await db.Books.do.destroy(id);
        res.json('Deleted');
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

export default router;