import { useEffect } from 'react';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../../redux/pizza/card.thunk';
import type { RootState, AppDispatch } from '../../redux/store';
import './cards.scss';

const { Meta } = Card;

export const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pizza, loading, error } = useSelector(
    (state: RootState) => state.pizza
  );

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="card-wrap">
      {pizza &&
        pizza.map((piz: any) => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img src={piz.image} alt={piz.image} />}
            className="card"
          >
            <Meta title={piz.title} description={piz.desc} />
            <br />
            <span>{piz.price} so'm</span>
          </Card>
        ))}
    </div>
  );
};
