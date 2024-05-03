import React, { useState, useEffect } from 'react';
import Encabezado from './componentes/Encabezado';
import Introduccion from './componentes/Introduccion';
import Caracteristicas from './componentes/Caracteristicas';
import caracteristicasGitHub from './Caracteristicas';
import GitInfo from './componentes/GitInfo';
import Video from './componentes/Video';
import Footer from './componentes/Footer';

function App() {

    return (
        <div>
            <Encabezado />
            <main>
                <Introduccion />
                <header className='headerCaracteristicas'><h1>Caracteristicas</h1></header>
                <section className='sectionCaracteristicas'>
                    {caracteristicasGitHub.map(caracteristica => (
                        <Caracteristicas
                            key={caracteristica.id}
                            caracteristica={caracteristica}
                        />
                    ))}
                </section>
                <section className='sectionGit'>
                    <GitInfo /> 
                </section>
                <figure className='sectionFigure'>
                    <Video/>
                    <figcaption className='figCaptionDescripcionVideo'>
                        <p>Este video es una forma de trabajar un proyecto con git, github y vsCode.
                            <br />Este video es de mi propiedad y se elabora desde la creacion del respositorio
                            <br />hasta actualizarlo con comando git en visual.
                        </p>
                    </figcaption>
                </figure>
            </main>
            <Footer />
       </div>
    );
}

export default App;
