import React, { useState, useEffect } from 'react';
import Encabezado from './componentes/Encabezado';
import Introduccion from './componentes/Introduccion';
import Caracteristicas from './componentes/Caracteristicas';
import caracteristicasGitHub from './Caracteristicas';
import GitInfo from './componentes/GitInfo';
import Video from './componentes/Video';
import fetchVideoId from './Youtube';

function App() {
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        async function getVideoId() {
            const id = await fetchVideoId();
            setVideoId(id);
        }
        getVideoId();
    }, []);

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
                <section className='sectionVideo'>
                    <Video videoId={videoId} />
                </section>
            </main>
        </div>
    );
}

export default App;
