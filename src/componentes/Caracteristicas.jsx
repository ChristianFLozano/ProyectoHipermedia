import React from 'react';

function Caracteristicas(props) {
    const { titulo, descripcion } = props.caracteristica;

    return (
        <div class='caracteristicas'>
            <article>
                <header className='headerCaracteristicas'>
                    <h2>{titulo}</h2>
                </header>
                <div>
                    <p>{descripcion}</p>
                </div>
            </article>
            <figure>
                <img  src={props.caracteristica.imagen} alt={titulo} 
                />
            </figure>
        </div>
    
    );
}

export default Caracteristicas;
