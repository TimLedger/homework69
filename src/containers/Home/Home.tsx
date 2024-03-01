import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { showsList, showOne } from "../../store/showsThunk";
import { NavLink, Outlet } from "react-router-dom";
import Show from "../../components/Show/Show";

const Home = () => {
  const shows = useAppSelector((state) => state.show.shows);
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(showsList(e.target.value));
    setValue(e.target.value);
  };

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
            <li key={show.show.id} onClick={() => onClickShow(show.show.id)}>
              <NavLink className="autocomplete-link" to={'/shows/' + show.show.id}>
                {show.show.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </form>
      <div className="shows-frame">
        {value.length > 0 ? (
          shows.map((show) => (
            <div key={show.show.id}>
              <Show show={show.show} />
            </div>
          ))
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Home;