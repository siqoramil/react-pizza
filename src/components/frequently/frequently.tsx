import { useEffect } from 'react';
import { Carousel, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { frequentlyFetch } from '../../redux/frequently/frequently.thunk';
import type { RootState, AppDispatch } from '../../redux/store';
import type { PizzaT } from '../../redux/frequently/frequently.type';
import './frequently.scss';

const chunk = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export const Frequently = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.frequently
  );

  useEffect(() => {
    dispatch(frequentlyFetch());
  }, []);

  const slides = data ? chunk(data, 4) : [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="frequently">
      <Carousel className="carousel" autoplay arrows infinite>
        {slides?.map((group, index) => (
          <div key={index} className="c_cards">
            <Row gutter={16} justify="center" className="c_row">
              {group?.map((p: PizzaT, idx) => (
                <Col key={idx} className="c_col">
                  <img src={p.image} alt={p.title} />
                  <h3>
                    {p.title} <span>{p.price}</span>
                  </h3>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
