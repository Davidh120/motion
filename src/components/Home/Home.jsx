import './home.scss'

const Home = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        block: 'start',
      });
    }
  };
  return (
    <section id='home' className='section home-section'>
      <div className='container'>
        <p className='welcome-msg'>Bienvenido</p>
        <div className='logo' onClick={() => scrollToSection('landing')}>
          <div className="image"> </div>
        </div>
        <p className='domain'>monitoringinnovation.com</p>
      </div>
    </section>
  )
}

export default Home