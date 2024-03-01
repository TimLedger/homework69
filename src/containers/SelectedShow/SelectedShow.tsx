import { useAppSelector } from "../../app/hooks";
import Preloader from "../../components/Preloader/Preloader";
import './SelectedShow.css';

const SelectedShow = () => {
  const show = useAppSelector((state) => state.show.show)!;
  const loading = useAppSelector((state) => state.show.loading);

  return (
    show && (
      <div>
        {loading ? (
          <Preloader />
        ) : (
          <div className="selected-show-frame">
            <div className="selected-show-inner">
              <img className="selected-show-img" src={show.image?.original} alt={show.name} />
              <div className="selected-show-info">
                <h4 className="selected-show-title">{show.name}</h4>
                <p>
                  <b>{show.genres.length > 0 ? 'Жанр: ' : 'Без жанра'}</b>
                  {show.genres.join(', ')}
                </p>
                <p>
                  <b>Рейтинг: </b>
                  {show.rating?.average}
                </p>
                <p>
                  <b>Премьера: </b>
                  {new Date(show.premiered).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p>
                  <b>Продолжительность серии: </b>
                  {show.runtime} мин
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default SelectedShow;
