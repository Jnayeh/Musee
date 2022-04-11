import React from "react";
import CenteredModal from "Components/Modal/CenteredModal";
import "./Axe.css";
import BilletContext from "Services/BilletContext";
import Detail from "./AxeDetail/Detail";

function AxeBillete(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalHistory, setModalHistory] = React.useState({
    id: 0,
    date: "unknown",
    title: "title",
    details: "nothing",
  });
  const { historiqueBilletes } = React.useContext(BilletContext);
  return (
    <div>
      <CenteredModal
        isOpen={modalOpen}
        onHide={() => setModalOpen(false)}
        title={modalHistory.title}
      >
        <p>{modalHistory.details}</p>
      </CenteredModal>

      <h4 className="axh2">Historique du Billete en Tunisie</h4>
      <div className="container">
        <div className="timeline">
          <ul>
            {historiqueBilletes.map((element) => (
              <li key={element.id}>
                <Detail
                  history={element}
                  show={() => {
                    setModalOpen(true);
                    setModalHistory(element);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AxeBillete;
