import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="purple-shape"></div>

      <h1 className="hero-title">
        The <span className="highlight green">thinkers</span> and
        <br />
        doers were <span className="highlight pink">changing</span>
        <br />
        the <span className="highlight green">status</span> Quo with
      </h1>

      <p className="hero-text">
        We are a team of strategists, designers, communicators,
        researchers. Together, we believe that progress only happens
        when you refuse to play things safe.
      </p>
      <div className="hero-badge">
  <span>30+</span>
  <p>Creative Team Members</p>
</div>

      <div className="team-images">
        <img className="avatar" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
        <img className="avatar" src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
        <img className="avatar" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
        <img className="avatar" src="https://randomuser.me/api/portraits/women/4.jpg" alt="" />
        <img className="avatar" src="https://randomuser.me/api/portraits/men/5.jpg" alt="" />
        <img className="avatar" src="https://randomuser.me/api/portraits/women/6.jpg" alt="" />
      </div>

    </section>
  );
}

export default Hero;