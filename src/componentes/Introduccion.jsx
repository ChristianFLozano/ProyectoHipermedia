function Introduccion() {
    function etapaDelDia() {
        const hora = new Date().getHours();
        
        if (hora >= 0 && hora < 12) {
            return "Buenos días";
        } else if (hora >= 12 && hora < 18) {
            return "Buenas tardes";
        } else {
            return "Buenas noches";
        }
    }
    
    return (
        <section className='sectionIntro'>
            <div className='divIntro'>
                <h2>{etapaDelDia()}</h2>
                <p>En esta landing page veremos sobre la importancia de GitHub para proyectos. Desde sus humildes comienzos, GitHub ha experimentado un crecimiento fenomenal. Lo que comenzó como un lugar para alojar repositorios de código ha evolucionado rápidamente hacia una plataforma integral que abarca control de versiones, gestión de proyectos, colaboración en equipo, educación y mucho más. En 2018, Microsoft adquirió GitHub, ampliando aún más su alcance y recursos.</p>
            </div>
            <div className='divIntro'>
                <figure>
                    <img src="src\assets\gitHubImagen1.webp" alt="Imagen ilustrativa sobre GitHub" />
                    <figcaption>Imagen ilustrativa sobre GitHub</figcaption>
                </figure>
            </div>
        </section>
    );
}

export default Introduccion;

