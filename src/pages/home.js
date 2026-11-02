import { Link } from 'react-router-dom';
import heroCar from '../img/cayene-turbo-gt.jpg';

const Home = () => {
  return (
    <>
      <main className="home-page">
        <section className="home-hero" style={{ '--hero-image': `url("${heroCar}")` }}>
          <div className="home-hero__content">
            <p className="eyebrow">CHIRIE AUTO · ALEGE-ȚI DRUMUL</p>
            <h1>Mai mult drum.<br /><span>Mai multă libertate.</span></h1>
            <p className="home-hero__text">Mașina potrivită pentru planurile tale, de la companii evaluate de șoferi. Găsește oferta în câteva secunde.</p>
            <Link to="/auto" className="button-primary">Descoperă mașinile <span aria-hidden="true">↗</span></Link>
            <div className="home-hero__proof"><span><strong>08</strong> mașini atent alese</span><i /><span>Companii cu rating verificat</span></div>
          </div>
          <div className="home-hero__index"><span>01</span><span>LIBERTATEA DE A ALEGE</span></div>
        </section>

        <section className="home-discovery" id="despre">
          <div className="home-discovery__intro"><div><p className="eyebrow">DRUMUL TĂU, REGULILE TALE</p><h2>Găsește-o pe<br />cea potrivită.</h2></div><p>De la escapade de weekend la călătorii care cer puțin mai mult spațiu. Compară ofertele după preț, rating și ce contează pentru tine.</p></div>
          <div className="home-category-row"><Link to="/auto" className="home-category"><span>01</span><strong>Oraș & escapade</strong><span aria-hidden="true">↗</span></Link><Link to="/auto" className="home-category"><span>02</span><strong>Confort în familie</strong><span aria-hidden="true">↗</span></Link><Link to="/auto" className="home-category"><span>03</span><strong>Experiențe premium</strong><span aria-hidden="true">↗</span></Link></div>
        </section>
      </main>
    </>
  );
};

export default Home;