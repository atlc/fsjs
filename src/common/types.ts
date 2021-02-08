/* Shared Interfaces */ 

export interface ICategory {
    id: number;
    name: string;
}

export interface IUser {
    id?: number;
    email?: string;
    hashed?: string;
    name?: string;
    created_at?: Date;
    updated_at?: Date;
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
    author: string;
    categoryid?: ICategory["id"];
    price?: number;
    created_at: Date;
    updated_at: Date;
}

export interface IAuthTokens {
	id: number;
    userid: IUser["id"];
    token: string;
	created_at: string;
};



/* Backend Typings */
import { Request } from 'express';
import { NumberLiteralType } from 'typescript';

export interface IReqUser extends Request {
    user: {
        id: number;
    }
}


/* Frontend Typings */

export interface ITemplate {
    lol: string
}