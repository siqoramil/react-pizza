import { Drawer, Card, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchFavorites } from '../../redux/favorites/favorites.thunk';
import type { RootState, AppDispatch } from '../../redux/store';

type PropsType = {
  openf: boolean;
  setOpenf: (val: boolean) => void;
};

export const Favorites = ({ openf, setOpenf }: PropsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    if (openf) dispatch(fetchFavorites());
  }, [openf]);

  return (
    <Drawer title="Избранное" open={openf} onClose={() => setOpenf(false)}>
      {loading ? (
        <Spin />
      ) : (
        items.map((item) => (
          <Card key={item.id} cover={<img src={item.image} alt={item.title} />}>
            <Card.Meta title={item.title} description={item.desc} />
          </Card>
        ))
      )}
    </Drawer>
  );
};
