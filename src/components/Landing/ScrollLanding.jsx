import './scroll.scss'
import Nav from '../Nav/Nav'

const ScrollLanding = () => {
  return (
    <section id="landing" className="section landing-section">
      <aside className='aside-nav'>
        <Nav/>
      </aside>
      <div className="container">
        <h2>Somos</h2>
      </div>
    </section>
  )
}

export default ScrollLanding