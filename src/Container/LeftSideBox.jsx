import React from "react";
import "./LeftSideBox.css";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BackpackIcon from '@mui/icons-material/Backpack';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RadioIcon from '@mui/icons-material/Radio';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import CloseIcon from '@mui/icons-material/Close';

const LeftSideBox = () => {
  return (
    <div className="left-container">
      <div className="left-head">
        <p>Arrabiata Mamma</p>
        <CloseIcon
        className="close-icon"
        />
      </div>
      <div className="left-box">
        <img
          src="https://www.en-vols.com/wp-content/uploads/afmm/2022/09/SPAGHETTI-ARABBIATA-%C2%A9Clementine-Passet.jpg"
          alt="Arrabiata Mamma"
          className="food-image"
        />
        <span className="left-content">
          <h2>Arrabiata Mamma</h2>
          <span className="food-type">Italian Cuisine</span>
          <p>
            Price <span className="food-price">300yen</span> ---{" "}
            <span className="food-price">2500yen</span>
          </p>
          <p className="timing">
            Wed . Thu . Fri . Sat . Sun . 11:00 to 15:00 (Food last order 14:30)
          </p>
          <div className="left-icons-box">
            <span className="left-icons"><DinnerDiningIcon/></span>
            <span className="left-icons"> <LocalDiningIcon/></span>
            <span className="left-icons"><BackpackIcon/></span>
            <span className="left-icons"> <LocalParkingIcon/></span>
            <span className="left-icons"><RadioIcon/></span>
            <span className="left-icons"><SportsBarIcon/></span>
          </div>
          <div className="shop-address">
            <p>1074-4 Shimogamo, Kagagun-Kibichuacho, Okayama-kem</p>
            <p>Tel:0867-34-9033</p>
            <p>Google Maps</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default LeftSideBox;
