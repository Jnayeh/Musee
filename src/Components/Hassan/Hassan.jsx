import React from "react";
import CenteredModal from "Components/Modal/CenteredModal";
import "./Hassan.css";

function Hassan() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const openDialog = () => setModalOpen(true);
  const closeDialog = () => setModalOpen(false);
  return (
    <div>
      <CenteredModal
        isOpen={modalOpen}
        onHide={() => {
          console.log(modalOpen);
          closeDialog();
        }}
        title="Hassan, Collecteur de Monnaie"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae
          laboriosam quos, ipsa sed incidunt sit sint voluptatibus, consectetur
          placeat perspiciatis iusto tempore voluptatum assumenda enim dolore.
        </p>
      </CenteredModal>

      <section className="ease about">
        <div className="ease main">
          <img src="./assets/hassan.jpg" alt="hassan" />
          <div className="ease about-text">
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
              className="ease botton botton-color"
              type="button"
              onClick={() => openDialog()}
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
