/* Shared Interfaces */ 

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

export interface IAuthor {
    id: string;
    firstName: string;
    lastName: string;
    created_at: Date;
    updated_at: Date;
}


export interface IBook {
    id: string;
    title: string;
    // may be multiple authors, display on frontend with authors.join
    authorid: string[];
    category_id?: string;
    published_date?: number;
    price?: number;
    created_at: Date;
    updated_at: Date;
}

/* Backend Typings */
import { Request } from 'express';

export interface IReqUser extends Request {
    user: {
        id: number;
    }
}


/* Frontend Typings */

export interface ITemplate {
    lol: string
}