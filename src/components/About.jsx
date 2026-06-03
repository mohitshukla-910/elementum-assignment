import "../styles/about.css";

function About() {
  return (
    <section className="about">

      <div className="about-text">
        <h2>
          Tomorrow should
          <br />
          be better than today
        </h2>

        <p>
          We are a team of strategists,
          designers, communicators and
          researchers.
        </p>

        <button>Read More</button>
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
          alt="team"
        />
      </div>

    </section>
  );
}

export default About;