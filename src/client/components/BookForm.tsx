import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IBook, ICategory } from '../../common/types';
import { api_helper } from '../utils/api-helper';

const BookForm: React.FC<BookFormProps> = (props) => {
    const [title, settitle] = useState('title');
    const [author, setauthor] = useState('author name'); 
    const [price, setprice] = useState<any>('0.00'); 
    const [categoryid, setCatId] = useState(null);
    const [allCategories, setAllCategories] = useState<ICategory[]>(null);

    const { isNew } = props;
    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    useEffect(()=>{
        (async() => {
            const catCall = await api_helper('/api/categories')
            setAllCategories(catCall);

            if (!isNew) {
                const currentBook: IBook = await api_helper(`/api/books/${id}`);
                settitle(currentBook.title);
                setauthor(currentBook.author);
                setprice(currentBook.price);
                setCatId(currentBook.categoryid);
            }
        })()
    }, [id]);

    const handleSubmit = async () => {
        const bookInfo = { title, author, price, categoryid };
        if (isNew) {
            const newBook = await api_helper('/api/books', 'POST', bookInfo);
            if (newBook.insertId) {
                history.push(`/books/${newBook.insertId}`);
            } else {
                alert('Error creating book')
            }
        } else {
            const update = await api_helper(`/api/books/${id}`, 'PUT', bookInfo);
            if (update.affectedRows) {
                history.push(`/books/${id}`);
            } else {
                alert('Error creating book')
            }
        }
    }
    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Book Title</label>
                <input onChange={e=>settitle(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder={title} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Book Author</label>
                <input onChange={e=>setauthor(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder={author} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Book Price</label>
                <input onChange={e=>setprice(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder={`$${price}`} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Book Genre</label>
                <select defaultValue={categoryid} onChange={e=>setCatId(e.target.selectedOptions[0].value)} className="form-control" id="exampleFormControlSelect1">
                    {allCategories?.map(cat => {
                        return <option value={cat.id} key={cat.id}>{cat.name}</option>
                    })}
                </select>
            </div>
            <button onClick={handleSubmit} className='btn btn-info shadow-lg'>{isNew ? 'Create!' : 'Update'}</button>
        </form>
    )
}

interface BookFormProps {
    isNew: boolean;
}

export default BookForm;