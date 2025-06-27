import { useEffect } from 'react';
import { Drawer, Card, Spin, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFavorites,
  removeFromFavorites,
} from '../../redux/favorites/favorites.thunk';
import type { RootState, AppDispatch } from '../../redux/store';

type PropsType = {
  openf: boolean;
  setOpenf: (val: boolean) => void;
};

export const Favorites = ({ openf, setOpenf }: PropsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    if (openf) {
      dispatch(fetchFavorites());
    }
  }, []);

  return (
    <Drawer title="Избранный" onClose={() => setOpenf(false)} open={openf}>
      {loading ? (
        <Spin />
      ) : items.length === 0 ? (
        <p>Избранный пусто</p>
      ) : (
        items.map((item) => (
          <Card
            key={item.id}
            cover={<img src={item.image} alt={item.title} />}
            style={{ marginBottom: 12 }}
            actions={[
              <Button
                danger
                onClick={() => dispatch(removeFromFavorites(item.id))}
              >
                Удалить
              </Button>,
            ]}
          >
            <Card.Meta title={item.title} description={item.desc} />
            <p>{item.price} Сум</p>
          </Card>
        ))
      )}
    </Drawer>
  );
};
