import React from "react";
import CenteredModal from "Components/Modal/CenteredModal";
import "./Hassan.css";

function Hassan() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      {modalShow && (
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title="Hassan, Collecteur de Monnaie"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae
            laboriosam quos, ipsa sed incidunt sit sint voluptatibus,
            consectetur placeat perspiciatis iusto tempore voluptatum assumenda
            enim dolore.
          </p>
        </CenteredModal>
      )}

      <section className="about">
        <div className="main">
          <img src="./assets/hassan.jpg" alt="hassan" />
          <div className="about-text">
            <h1>Hassan Abed Waheb</h1>
            <h5>
              Collecteur de <span>Monnaie</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae
              laboriosam quos, ipsa sed incidunt sit sint voluptatibus,
              consectetur placeat perspiciatis iusto tempore voluptatum
              assumenda enim dolore.
            </p>
            <button
              id="btn-hassan"
              className="botton botton-color"
              type="button"
              onClick={() => setModalShow(true)}
            >
              Lire Plus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hassan;
