import { useState, useEffect, useRef } from 'react'

import './scroll.scss'
import Nav from '../Nav/Nav'

const ScrollLanding = () => {
  const [resetAnimation, setResetAnimation] = useState(false);
  const [Checked, setChecked] = useState(false);
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  //Animation infinite loop for balloons
  useEffect(() => {
    setInterval(() => {
      handleResetAnimation();
    }, 8000);
  });

  // Function to restart the animation
  const handleResetAnimation = () => {
    setResetAnimation(true);

    // After a short period of time, the state has been reset to reactivate the animation.
    setTimeout(() => {
      setResetAnimation(false);
    }, 10);
  };

  //Function to change toggle state
  const handleCheckboxChange = () => {
    // Toggle the 'Checked' state
    setChecked(!Checked);
    if (!Checked) {
      // Smoothly scroll to the top of 'section1Ref'
      containerRef.current.scrollTo(0, section1Ref.current.offsetTop);
    } else {
      // Smoothly scroll to the bottom of 'section2Ref'
      containerRef.current.scrollTo(0, section2Ref.current.offsetBottom);
    }
  };

  return (
    <section id="landing" className="section landing-section">
      <aside className='aside-nav'>
        <Nav />
      </aside>
      <div className="container">
        <label className="switch">
          <input type="checkbox" checked={Checked} onChange={handleCheckboxChange} />
          <span className={Checked ? 'slider round': 'slider2 round'}></span>
        </label>
        <div className="main-content" ref={containerRef}>
          <div className="somos" ref={section1Ref}>
            <h2>Somos</h2>
            <img src="/src/assets/svg/Logo_motion.svg" alt="content-logo" />
            <p>Buscamos satisfacer las necesidades específicas de cada cliente, mediante el desarrollo de soluciones a medida e interacción asertiva con nuestro equipo de trabajo, que es nuestro recurso más valioso. Hacemos las cosas con compromiso, versatilidad e innovación, buscando conseguir la mejor experiencia de servicio, conectando gente, negocios sustentables y medio ambiente.</p>
          </div>
          <div className="desarrollos" ref={section2Ref}>
            <h2>Desarrollos</h2>
            <img src="/src/assets/svg/Logo_motion.svg" alt="content-logo" />
            <div className="apps">
              <div className="image">
                <img src="/src/assets/img/Enlist.png" alt="Enlist" />
                <div className="hover-text">
                  <span className='stick'></span>
                  <p>Esta aplicación permite gestionar las tareas asignadas por la empresa, y gestionarlas en tiempo real.</p>
                </div>
              </div>
              <div className="image">
                <img src="/src/assets/img/opco.png" alt="Opcp" />
                <div className="hover-text2">
                  <span className='stick'></span>
                  <p>Esta aplicación permite gestionar las tareas asignadas por la empresa, y gestionarlas en tiempo real.</p>
                </div>
              </div>
              <div className="image">
                <img src="/src/assets/img/passenger.png" alt="passenger" />
                <div className="hover-text3">
                  <span className='stick'></span>
                  <p>Mi Passenger es la solución perfecta para la gestión de transporte de pasajeros. Con ella el conductor puede seleccionar la ruta, escanear y registrar a los pasajeros en tiempo real. </p>
                </div>
              </div>
              <div className="image">
                <img src="/src/assets/img/fuec.png" alt="fuec" />
                <div className="hover-text4">
                  <span className='stick'></span>
                  <p>Esta aplicación permite gestionar las tareas asignadas por la empresa, y gestionarlas en tiempo real.</p>
                </div>
              </div>
              <div className="image">
                <img src="/src/assets/img/mi-sim.png" alt="mi sim" />
                <div className="hover-text5">
                  <span className='stick'></span>
                  <p>Mi Sim es una aplicación web para manejar el saldo y hacer recargas, de tus simcards IoT </p>
                </div>
              </div>
            </div>
            <p>Buscamos satisfacer las necesidades específicas de cada cliente, mediante el desarrollo de soluciones a medida e interacción asertiva con nuestro equipo de trabajo.</p>
          </div>
        </div>
        <div className="phone-content">
          <div className="balloon">
            <p>Software compacto y robusto para llevar a donde sea necesario. Interconexión de entrada o salida con otros sistemas.</p>
          </div>
          <div className={resetAnimation ? 'small-balloon1 no-animation' : 'small-balloon1'}></div>
          <div className={resetAnimation ? 'small-balloon2 no-animation' : 'small-balloon2'}></div>
          <div className={resetAnimation ? 'small-balloon3 no-animation' : 'small-balloon3'}></div>
          <div className={resetAnimation ? 'small-balloon4 no-animation' : 'small-balloon4'}></div>
          <img src="/src/assets/svg/Telefono.svg" alt="Phone" />
        </div>
      </div>
    </section>
  )
}

export default ScrollLanding