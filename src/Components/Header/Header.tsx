import React from 'react';
import { Link } from 'react-router-dom';
import { List } from './List';
import { HeaderStyle } from './style';

export default function Header() {
    return (
        <HeaderStyle>
            <div className='title'>
                <h1>Agência</h1>
            </div>
            <div className='list'>
                {List.map((item, index) => {
                    return (
                        <Link 
                            to={item.path} 
                            key={index}
                        >
                            {item.text}
                        </Link>
                    )
                })}
            </div>
        </HeaderStyle>
    );
}
