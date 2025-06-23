import { Drawer, Card, Button, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { fetchBasket, removeFromBasket } from '../../redux/basket/basket.thunk';

type PropsType = {
  openb: any;
  setOpenb: (val: boolean) => void;
};

export const Basket = ({ openb, setOpenb }: PropsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.basket);

  useEffect(() => {
    if (openb) {
      dispatch(fetchBasket());
    }
  }, [openb]);

  return (
    <Drawer title="Корзина" onClose={() => setOpenb(false)} open={openb}>
      {loading ? (
        <Spin />
      ) : items.length === 0 ? (
        <p>Корзина пусто</p>
      ) : (
        items.map((item) => (
          <Card
            key={item.id}
            cover={<img src={item.image} alt={item.title} />}
            style={{ marginBottom: 12 }}
            actions={[
              <Button
                danger
                onClick={() => dispatch(removeFromBasket(item.id))}
              >
                Удалить
              </Button>,
            ]}
          >
            <Card.Meta title={item.title} description={item.desc} />
            <p>{item.price} сум</p>
          </Card>
        ))
      )}
    </Drawer>
  );
};
