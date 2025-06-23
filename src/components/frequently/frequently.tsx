import { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'antd';
import './frequently.scss';

interface PizzasTypes {
  id: number;
  title: string;
  price: number;
  image: string;
  desc: string;
}

const API: string = import.meta.env.VITE_SOME_KEY;

const chunk = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export const Frequently = () => {
  const [pizza, setPizza] = useState<PizzasTypes[] | null>(null);

  useEffect(() => {
    fetch(`${API}/data`)
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((pizza) => setPizza(pizza))
      .catch((err) => console.log(err));
  }, []);

  const slides = pizza ? chunk(pizza, 4) : [];

  return (
    <div className="frequently">
      <Carousel className="carousel" autoplay arrows infinite>
        {slides?.map((group, index) => (
          <div key={index} className="c_cards">
            <Row gutter={16} justify="center" className="c_row">
              {group?.map((p: PizzasTypes, idx) => (
                <Col key={idx} className="c_col">
                  <img src={p.image} alt={p.title} />
                  <h3>{p.title} <span>{p.price}</span></h3>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
