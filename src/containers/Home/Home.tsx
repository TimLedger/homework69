import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { showsList, showOne } from "../../store/showsThunk";
import { NavLink, Outlet } from "react-router-dom";
import Show from "../../components/Show/Show";
import './Home.css';

const Home = () => {
  const shows = useAppSelector((state) => state.show.shows);
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(showsList(e.target.value));
    setValue(e.target.value);
  };

  const filteredShows = shows.filter((show) => {
    return show.show.name.toLowerCase().includes(value.toLowerCase());
  });

  const onClickShow = async (id: number) => {
    await dispatch(showOne(id));
    setValue("");
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          className="form-search"
          onChange={onChange}
          placeholder="Поиск..."
        />
        <ul className="autocomplete-list">
          {shows.map((show) => (
            <li key={show.show.id} onClick={() => onClickShow(show.show.id)} className="autocomplete-item">
              <NavLink className="autocomplete-link" to={'/shows/' + show.show.id}>
                {show.show.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </form>
      <div className="shows-frame">
        {value.length > 0 ? (
          <div className="shows-list">
            {filteredShows.map((show) => (
              <div key={show.show.id} onClick={() => onClickShow(show.show.id)}>
                <NavLink to={'/shows/' + show.show.id}>
                  <Show show={show.show} />
                </NavLink>
              </div>
            ))}
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Home;