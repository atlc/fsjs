import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BookForm from '../components/BookForm'
import { api_helper } from '../utils/api-helper';

const EditBook = () => {

    const { id } = useParams<{ id: string}>();
    const history = useHistory();

    const handleDelete = async () => {
        const del = await api_helper(`/api/books/${id}`, 'DELETE');
        if (del.affectedRows !== 0) {
            history.push('/books');
        } else {
            alert('Error with deleting');
        }
    }

    return (
        <>
            <BookForm isNew={false} />
            <button onClick={handleDelete} className="btn btn-danger shadow-lg border border-black">Delete?</button>
        </>
    )
}

export default EditBook;