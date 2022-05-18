import React from "react";
import "./Collections.css";

function Collections() {
  return (
    <div>
      <h1 className="axh2">Collections</h1>
      <div className="flex-container">
        <div className="flex-item-left">
          <h2>Les Pièces</h2>
          <br />
          <p>
            La boutique du Musée de
            La Monnaie de la BCT vous invite
            à découvrir une large panoplie d’articles et de produits destinés aussi bien aux experts numismates, aux collectionneurs de pièces commémoratives, qu’aux passionnés de lectures qui veulent approfondir leur connaissance en histoire de la monnaie et de l’économie tunisiennes dans une dimension méditerranéenne. Sans oublier ceux qui veulent rapporter un petit souvenir de leur visite ou offrir un cadeau à leurs proches.
          </p>
          <br />
          <br />

          <div className="justify-end">
            <button className="botton botton-color" type="button">
              Lire Plus
            </button>
          </div>
        </div>
        <div className="flex-item-right">
          <div className="ring">
            <img className="img_col2" src="./assets/piece.png" alt="" />
          </div>
        </div>
      </div>

     
      <div className="flex-container">
        <div className="flex-item-left">
          <h2>Les billets</h2>
          <br />
          <p>
            La boutique du Musée de
            La Monnaie de la BCT vous invite
            à découvrir une large panoplie d’articles et de produits destinés aussi bien aux experts numismates, aux collectionneurs de billet commémoratives, qu’aux passionnés de lectures qui veulent approfondir leur connaissance en histoire de la monnaie et de l’économie tunisiennes dans une dimension méditerranéenne. Sans oublier ceux qui veulent rapporter un petit souvenir de leur visite ou offrir un cadeau à leurs proches.

          </p>
          <br />
          <div className="justify-end">
            <button className="botton botton-color" type="button">
              Lire Plus
            </button>
          </div>
        </div>
        <div className="flex-item-right">
          <div className="ring">
            <img className="img_col2" src="./assets/billete.jpg" alt="" />
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="flex-container">
        <div className="flex-item-left">
          <h2>Les ouvrages</h2>
          <br />
          <p>
            les 3 livres soit 40 € un seul livre
            Depuis sa création en Lydie, au VIIe siècle av. J.-C., la monnaie en tant que outil et moyen d’échange fait partie de l'histoire de l'humanité. L’ouvrage « Numismatique et Histoire de la Monnaie en Tunisie (Collections Monétaires de la Banque Centrale de la Tunisie) » offre un choix exceptionnel des espèces ayant circulé en Tunisie durant plus de vingt-six siècle depuis la frappe du premier monnayage par Carthage vers 400 av. J.-C. jusqu’à l’émission des monnaies et des billets de l’époque contemporaine. Ce catalogue ou plutôt beau livre didactique

          </p>
          <br />
          <br />
          <div className="justify-end">
            <button className="botton botton-color" type="button">
              Lire Plus
            </button>
          </div>
        </div>
        <div className="flex-item-right">
          <div className="ring">
            <img className="img_col2" src="./assets/ouvrages.PNG" alt="" />
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="flex-container">
        <div className="flex-item-left">
          <h2>Les médailles</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolore exercitationem, a molestias fuga corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            ipsam.
          </p>
          <br />
          <br />
          <div className="justify-end">
            <button className="botton botton-color" type="button">
              Lire Plus
            </button>
          </div>
        </div>
        <div className="flex-item-right">
          <div className="ring">
            <img className="img_col2" src="./assets/midaille.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
