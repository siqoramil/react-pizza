import { useEffect } from 'react';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { advFetch } from '../../redux/adv/adv.thunk';
import type { RootState, AppDispatch } from '../../redux/store';
import './advertisement.scss';

const { Meta } = Card;

export const Advertisement = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.adv
  );

  useEffect(() => {
    dispatch(advFetch());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="adv-wrap">
      {data &&
        data.map((piz: any) => (
          <Card
            key={piz.id}
            hoverable
            style={{ width: 240 }}
            cover={<img src={piz.image} alt={piz.image} />}
            className="adv"
          >
            <Meta title={piz.title} description={piz.desc} />
            <br />
            <span>{piz.price} so'm</span>
          </Card>
        ))}
    </div>
  );
};
