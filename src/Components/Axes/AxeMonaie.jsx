import React from "react";
import CenteredModal from "Components/Modal/CenteredModal";
import "./Axe.css";
import Detail from "./AxeDetail/Detail";
import PeriodeContext from "Services/PeriodeContext";

function AxeMonaie() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalHistory, setModalHistory] = React.useState({
    _id: 0,
    date: "unknown",
    title: "title",
    details: "Lorem",
  });

  const { historiqueMonnaies, getMonnaiesPeriodes } =
    React.useContext(PeriodeContext);

  React.useEffect(() => {
    getMonnaiesPeriodes();
  }, []);
  return (
    <div>
      <CenteredModal
        isOpen={modalShow}
        onHide={() => setModalShow(false)}
        title={modalHistory.title}
      >
        <p>{modalHistory.details}</p>
      </CenteredModal>

      <h4 className="axh2">Historique du Piéce en Tunisie</h4>
      <div className="container">
        <div className="timeline">
          <ul>
            {historiqueMonnaies.map((element) => (
              <li key={element._id}>
                <Detail
                  history={element}
                  show={() => {
                    setModalShow(true);
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

export default AxeMonaie;
