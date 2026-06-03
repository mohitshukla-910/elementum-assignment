import "../styles/testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>
        What our customer
        <br />
        says About Us
      </h2>

      <div className="testimonial-wrapper">

        <div className="side-users">
          <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/women/13.jpg" alt="" />
        </div>

        <div className="testimonial-card">
          <div className="quote">❝</div>

          <p>
            Elementum delivered the project
            exactly as requested. Our website
            traffic increased significantly and
            customer engagement improved.
          </p>

          <h4>Sarah Johnson</h4>
          <span>Marketing Director</span>
        </div>

        <div className="side-users">
          <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/women/15.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="" />
        </div>

      </div>

    </section>
  );
}

export default Testimonials;