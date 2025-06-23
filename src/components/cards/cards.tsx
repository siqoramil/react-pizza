import { useEffect } from 'react';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { cardsFetch } from '../../redux/card/card.thunk';
import type { RootState, AppDispatch } from '../../redux/store';
import type { PizzaT } from '../../redux/card/card.type';
import { Button } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { addToBasket } from '../../redux/basket/basket.thunk';
import './cards.scss';

const { Meta } = Card;

export const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.card
  );

  useEffect(() => {
    dispatch(cardsFetch());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="cards-wrap">
      {data &&
        data?.map((piz: PizzaT) => (
          <Card
            key={piz.id}
            hoverable
            style={{ width: 240 }}
            cover={<img src={piz.image} alt={piz.image} />}
            className="cards"
          >
            <Meta title={piz.title} description={piz.desc} />
            <br />
            <span>{piz.price} so'm</span>
            <div className="btns">
              <Button type="primary" icon={<HeartOutlined />} size="large" />
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                size="large"
                onClick={() => dispatch(addToBasket(piz))}
              />
            </div>
          </Card>
        ))}
    </div>
  );
};
