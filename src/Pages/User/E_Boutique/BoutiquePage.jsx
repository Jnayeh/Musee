import React from "react";
import "./Boutique.css";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ItemSlider from "Components/ItemSlider/ItemSlider";
import CustomCard from "Components/Card/CustomCard";
import CenteredModal from "Components/Modal/CenteredModal";
import Items from "Components/ItemSlider/Items";
import OuvragesList from "Components/ItemSlider/OuvragesList";
import TextField from "@mui/material/TextField";
import PanierContext from "Services/PanierContext";

export default function BoutiquePage() {
  let ouvrages = [
    {
      _id: 1,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/billete.jpg",
      prix: 10,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 2,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/musée.jpg",
      prix: 205,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 3,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/hassan.jpg",
      prix: 200,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 4,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      prix: 210,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 5,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      prix: 600,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 6,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      prix: 800,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 7,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      prix: 260,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
  ];
  let pieces = [
    {
      _id: 1,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/billete.jpg",
      prix: 10,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 2,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/musée.jpg",
      prix: 205,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 3,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/hassan.jpg",
      prix: 200,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 4,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      prix: 210,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 5,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      prix: 600,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 6,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      prix: 800,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 7,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      prix: 260,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
  ];
  let billets = [
    {
      _id: 1,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/billete.jpg",
      prix: 10,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 2,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/musée.jpg",
      prix: 205,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 3,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/hassan.jpg",
      prix: 200,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 4,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      prix: 210,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 5,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      prix: 600,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 6,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      prix: 800,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 7,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      prix: 260,
      stock: 15,
      description: " Piece msadda men 9bal 3issa",
    },
  ];
  const { addToPanier } = React.useContext(PanierContext);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalProduct, setModalProduct] = React.useState({
    _id: 0,
    date: "unknown",
    libele: "libele",
    front_image: "",
    description: "Lorem",
  });

  const handleChange = (e) => {
    setModalProduct({ ...modalProduct, quantite: e.target.value });
  };
  const addPanier = () => {
    addToPanier(modalProduct);
    console.log(modalProduct);
    setModalShow(false);
  };
  return (
    <>
      <CenteredModal
        isOpen={modalShow}
        onHide={() => setModalShow(false)}
        title="Ajout au Panier"
        classes="ajout-panier"
      >
        <div className="flex-column">
          <img
            src={modalProduct.front_image}
            className="ajout-panier-img"
            alt=""
          />
          <p>{modalProduct.description}</p>
        </div>
        <div className="justify-between">
          <TextField
            type="number"
            label="Quantité"
            variant="standard"
            value={modalProduct.quantite ?? 1}
            inputProps={{
              min: 1,
              max: modalProduct.stock - modalProduct.quantite,
            }}
            onChange={handleChange}
          />
          <strong style={{ margin: "auto" }}>
            {modalProduct.prix * modalProduct.quantite} DT
          </strong>
          <Button
            startIcon={<AddIcon />}
            aria-label="add"
            color="primary"
            style={{ margin: "10px" }}
            onClick={addPanier}
            size="medium"
          >
            Ajout
          </Button>
        </div>
      </CenteredModal>
      <Slide in direction="down" timeout={600} mountOnEnter unmountOnExit>
        <div id="boutique" className="padding-top">
          <h1 className="h1">E-Boutique</h1>
          <div className="prod-slide clear">
            <h2 className="h2">Ouvrages</h2>
            <ItemSlider>
              <OuvragesList
                items={ouvrages}
                collection="ouvrages"
                setModalProduct={setModalProduct}
                setModalShow={() => {
                  setModalShow(true);
                }}
              />
            </ItemSlider>
          </div>

          <div className="prod-slide clear">
            <h2 className="h2">Billets</h2>
            <ItemSlider interval={3000}>
              <Items
                items={billets}
                collection="billets"
                setModalProduct={setModalProduct}
                setModalShow={() => {
                  setModalShow(true);
                }}
              />
            </ItemSlider>
          </div>

          <div className="pieces-container">
            <h2 className="h2">Pieces</h2>

            <div className="pieces">
              {pieces.map((item) => {
                item.collection = "pieces";
                item.quantite = 1;
                return (
                  <CustomCard
                    key={item._id}
                    item={item}
                    classes="custom-card piece-card hover-effect"
                    show={() => {
                      setModalShow(true);
                      setModalProduct(item);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
}
