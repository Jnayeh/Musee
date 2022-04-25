import "./Boutique.css";
import { Slide } from "@mui/material";
import ItemSlider from "Components/ItemSlider/ItemSlider";
import CustomCard from "Components/Card/CustomCard";
function BoutiquePage() {
  const products = [
    {
      _id: 8,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 1,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/billete.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 2,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/musée.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 3,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/hassan.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 4,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 5,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 6,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      _id: 7,
      libele: "libele",
      dateCreated: new Date().toLocaleString(),
      front_image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
  ];

  return (
    <Slide in direction="down" timeout={600} mountOnEnter unmountOnExit>
      <div id="boutique" className="padding-top">
        <h1 className="h1">E-Boutique</h1>
        <div className="prod-slide clear">
          <h2 className="h2">Ouvrages</h2>
          <ItemSlider items={products} />
        </div>

        <div className="prod-slide clear">
          <h2 className="h2">Billets</h2>
          <ItemSlider items={products} interval={3000} />
        </div>

        <div className="pieces-container">
          <h2 className="h2">Pieces</h2>
          {/* <ItemSlider items={products} more="5" medium="3" largeWidth="1520" /> */}
          <div className="pieces">
            {products.map((item) => {
              return (
                <CustomCard
                  key={item._id}
                  item={item}
                  classes="CustomCard hover-effect"
                />
              );
            })}
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default BoutiquePage;
