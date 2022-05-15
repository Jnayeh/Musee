import React from "react";

import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

import "./PanierItem.css";
import IconButton from "@mui/material/IconButton";
import RemoveShoppingCartOutlined from "@mui/icons-material/RemoveShoppingCartOutlined";

export default function PanierItem(props) {
  const { item, collection, handleDelete, handleUpdate } = props;
  const handleChange = (e) => {
    item.quantite = e.target.value;
    handleUpdate(collection, item._id);
  };
  return (
    <div className="panier-item flex gap">
      <div className="flex">
        <img src={item.front_image} alt="img" className="img" />
        <div className="flex-column">
          <h3>{item.libele}</h3>
          <p className="description-item">{item.description}</p>
        </div>
      </div>
      <div className="flex-column gap">
        <div className="flex gap">
          <TextField
            type="number"
            label="Quantité"
            variant="standard"
            value={item.quantite}
            inputProps={{ min: 1, max: item.stock }}
            onChange={handleChange}
          />
          <IconButton
            color="error"
            style={{ height: "46px", width: "46px", margin: "auto" }}
            aria-label="delete"
            onClick={() => {
              handleDelete(collection, item._id);
            }}
          >
            <RemoveShoppingCartOutlined />
          </IconButton>
        </div>
        <strong className="justify-end padding-sides">
          {item.prix * item.quantite} DT
        </strong>
      </div>
    </div>
  );
}
PanierItem.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};
