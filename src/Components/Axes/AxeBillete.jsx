import React from "react";
import CenteredModal from "Components/Modal/CenteredModal";
import "./Axe.css";
import Detail from "./AxeDetail/Detail";
import PeriodeContext from "Services/PeriodeContext";

function AxeBillete(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalHistory, setModalHistory] = React.useState({
    _id: 0,
    date: "unknown",
    title: "title",
    details: "nothing",
  });

  const { historiqueBilletes, getBilletesPeriodes } =
    React.useContext(PeriodeContext);

  React.useEffect(() => {
    getBilletesPeriodes();
  }, []);

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
              <li key={element._id}>
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
