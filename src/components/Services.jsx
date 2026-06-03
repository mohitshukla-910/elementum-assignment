import "../styles/services.css";

function Services() {
  return (
    <section className="services">

      <div className="services-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
          alt="services"
        />
      </div>

      <div className="services-text">
        <h2>
          See how we can
          <br />
          help you progress
        </h2>

        <p>
          We add a layer of fearless insights
          and action that allows change makers
          to accelerate their progress.
        </p>

        <button>Read More</button>
      </div>

    </section>
  );
}

export default Services;