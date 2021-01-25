import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext';

export default function PageNotFound() {
    const { lang } = useContext(LanguageContext);

    return (
        <div className='page-not-found'>
            {
                lang === 'en' ? 
                    <h1>Page doesn't exists!</h1>
                    :
                    <h1>Strana ne postoji!</h1>
            }
        </div>
    )
}
