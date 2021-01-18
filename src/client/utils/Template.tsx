import React, { FC, useState, useEffect } from 'react';
import { ITemplate } from '../../common/types';
import { api_helper } from './api-helper';


const Template: FC<TemplateProps> = () => {
    const [text, setText] = useState<ITemplate>(null);

    /* write inside an async iife to have async code in a useEffect */ 
    // const ha = await api_helper('/path');
    // setText({ lol: ha });

    return (
        <div className="row">
            <p>{text}</p>
        </div>
    );
}

interface TemplateProps {

}

export default Template;