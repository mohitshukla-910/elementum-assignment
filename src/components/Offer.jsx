import "../styles/offer.css";

function Offer() {

  const services = [
    {
      small: "Office of multiple interest content",
      title: "Collaborative & partnership"
    },
    {
      small: "The hanger US Air force digital experimental",
      title: "We talk about our weight"
    },
    {
      small: "Delta faucet content, social, digital",
      title: "Piloting digital conference"
    }
  ];

  return (
    <section className="offer">

      <h2 className="offer-heading">
        What we can offer you!
      </h2>

      {
        services.map((item,index)=>(
          <div className="offer-item" key={index}>

            <div className="offer-small">
              {item.small}
            </div>

            <div className="offer-title">
              {item.title}
            </div>

            <div className="offer-arrow">
              →
            </div>

          </div>
        ))
      }

    </section>
  );
}

export default Offer;