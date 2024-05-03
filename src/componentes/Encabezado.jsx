import React from 'react'

function Encabezado()
{
    return (
        <header className='headerPrincipal'>
            <h1>La importancia del uso GitHub</h1>
            <img  onClick={() => window.open('https://github.com/', '_blank')} src="./src/assets/githubLogo.webp" alt="gitHub" 
                style={{ cursor: 'pointer' }}
            />
        </header>
    )
}

export default Encabezado;