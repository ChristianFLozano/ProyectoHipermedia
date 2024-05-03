import React from "react";

function GitInfo()
{
    return  <div>
                <aside>
                    <h2>Comandos de Git</h2>
                    <ul>
                        <li>git init</li>
                        <li>git add</li>
                        <li>git commit</li>
                        <li>git push</li>
                    </ul>
                </aside>
                <article>
                    <figure> <img src="src/assets/GitLogo.svg" alt="logoGit" 
                                style={{ cursor: 'pointer' }} onClick={() => window.open('https://git-scm.com/', '_blank')}
                    /></figure>
                    <header>
                        <h1>¿Que es Git?</h1>
                    </header>
                    <p>
                    Git es un sistema de control de versiones distribuido de código abierto, 
                    diseñado para manejar proyectos de cualquier tamaño con rapidez y eficiencia. 
                    Fue creado por Linus Torvalds en 2005, el mismo creador del kernel de Linux, 
                    para gestionar el desarrollo del kernel de Linux. Desde entonces, 
                    Git se ha convertido en uno de los sistemas de control de versiones más populares
                     y ampliamente utilizados en la industria del desarrollo de software.
                    </p>
                </article>
            </div>
        
}

export default GitInfo;