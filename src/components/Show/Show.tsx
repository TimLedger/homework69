import React from "react";
import { Show } from "../../types";
import './Show.css';

interface Props {
  show: Show;
}

const Show: React.FC<Props> = ({ show }) => {
  return (   
    <div className="show-frame" title={show.name}>
      <div className="show-img">
        <img className="show-img" src={show.image?.original} alt={show.name} />
      </div>
      <div className="show-info">
        <h4 className="show-title">{show.name}</h4>
      </div>
    </div>
  );
};

export default Show;
