import React from "react";
import { Show } from "../../types";

interface Props {
  show: Show;
}

const Show: React.FC<Props> = ({ show }) => {
  return (
    <div className="show-frame">
      <div className="show-img">
        <img src={show.image?.original} alt={show.name} />
      </div>
      <div className="show-info">
        <h4>{show.name}</h4>
        <p>
          <strong>{show.genres.length > 0 ? 'Жанр: ' : 'Без жанра'}</strong>
          {show.genres.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default Show;
