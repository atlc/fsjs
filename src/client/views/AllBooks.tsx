import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { IBook } from '../../common/types';
import { api_helper } from '../utils/api-helper';


const AllBooks: FC<AllBooksProps> = () => {
    const [books, setBooks] = useState<IBook[]>(null);

    useEffect(() => {
        (async () => {
            const bookFetch = await api_helper('/api/books');
            setBooks(bookFetch);
        })()
    }, [])

    return (
        <div className="row">
            {books?.map(book => {
                return (
                    <div key={'book-key-' + book?.id} className="m-3 card col-3">
                        <div className="card-body">
                            <h5 className="card-title">{book?.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                            <p className="card-text">Book description lol.</p>
                            <p className="card-text"><strong>${book?.price}</strong></p>
                            <Link to={`/books/${book?.id}`} className="card-link">See My Details</Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

interface AllBooksProps {

}

export default AllBooks;