import { useAppSelector } from "../../app/hooks";
import Preloader from "../../components/Preloader/Preloader";

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
              <div className="selected-show-img">
                <img src={show.image?.original} alt={show.name} />
              </div>
              <div className="selected-show-info">
                <h4>{show.name}</h4>
                <p>
                  <strong>{show.genres.length > 0 ? 'Жанр: ' : 'Без жанра'}</strong>
                  {show.genres.join(', ')}
                </p>
                <p>
                  <strong>Рейтинг: </strong>
                  {show.rating?.average}
                </p>
                <p>
                  <strong>Премьера: </strong>
                  {new Date(show.premiered).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p>
                  <strong>Продолжительность: </strong>
                  {show.runtime}
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
