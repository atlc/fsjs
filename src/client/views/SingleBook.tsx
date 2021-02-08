import React, { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IBook, ICategory } from '../../common/types';
import { api_helper } from '../utils/api-helper';


const SingleBook: FC<SingleBookProps> = () => {
    const [book, setBook] = useState<IBook>(null);
    const [catName, setCatName] = useState<ICategory["name"]>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        (async () => {
            const bookFetch: IBook = await api_helper(`/api/books/${id}`);
            setBook(bookFetch);
            const cat = await api_helper(`/api/categories/${bookFetch.categoryid}`);
            setCatName(cat.name);
        })()
    }, [id])

    if (!id && !book) return <h1>Loading...</h1>

    return (
        <div className="row">
            <div className="card col-8">
                <div className="card-body">
                    <h5 className="card-title">{book?.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{book?.author}</h6>
                    <p className="card-text">Book description lol.</p>
                    <p className="card-text"><strong>${book?.price}</strong></p>
                    <p className="card-text">Filed under <em>{catName || ''}</em></p>
                    <p className="card-text">Last updated at {book?.updated_at}</p>
                    <Link to={`/books/edit/${book?.id}`} className="card-link">Edit Me</Link>
                </div>
            </div>
        </div>
    );
}

interface SingleBookProps {

}

export default SingleBook;