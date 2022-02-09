import React from 'react';
import { FooterStyle } from './style';

import * as AiIcons from 'react-icons/ai';

export default function Footer() {
    const handleRedirect = (link: string) => {
        window.location.href = link;
    }

    return (
        <FooterStyle>
            <div>
                <AiIcons.AiFillGithub onClick={() => handleRedirect('https://github.com/monaracalado')}/>
                <AiIcons.AiFillLinkedin onClick={() => handleRedirect('https://www.linkedin.com/in/monaracalado/')}/>
            </div>
            <p>© 2021 Developed by Monara Calado</p>
        </FooterStyle>
    );
}
