import React from "react";
import projects from "../../projects.js";
import "./projectstyle.css";
import Modal from "../Modal/Index";

function Index() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({});

  const handleModal = (x) => {
    setIsOpen(true);
    setModalInfo(x);
  };

  return (
    <div id="projects">
      <div className="parent">
        <div className="title">Projects</div>
        <div style={{ height: "5vh" }}></div>
        <div className="projectLayout">
          {projects.map((x) => (
            <div className="item" onClick={() => handleModal(x)}>
              <div className="outline">
                <img src={x.image} className="projectImage" alt={x.name} />
              </div>
              <div className="projectName">{x.name} </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={modalIsOpen}
        info={modalInfo}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default Index;
