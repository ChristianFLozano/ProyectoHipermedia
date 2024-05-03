import React from 'react';
import Encabezado from './componentes/Encabezado';
import Introduccion from './componentes/Introduccion';
import Caracteristicas from './componentes/Caracteristicas';
import caracteristicasGitHub from './Caracteristicas';
import GitInfo from './componentes/GitInfo';

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
                            caracteristica={caracteristica} //Estoy pasando todo el objeto
                        />
                    ))}
                </section>
                <section className='sectionGit'>
                <GitInfo /> 
                </section>
            </main>
        </div>
    );
}

export default App;