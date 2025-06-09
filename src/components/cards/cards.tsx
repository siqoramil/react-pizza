import { useState, useEffect } from 'react';
import { Card } from 'antd';
import './cards.scss';

const { Meta } = Card;

interface dataType {
  id: number;
  title: string;
  image: string;
  price: string;
  desc: string;
}

const API: string = import.meta.env.VITE_SOME_KEY;

export const Cards = () => {
  const [data, setData] = useState<dataType[] | null>(null);

  useEffect(() => {
    fetch(`${API}/data`)
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="card-wrap">
      {data &&
        data.map((piz) => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img src={piz.image} alt={piz.image} />}
            className='card'
          >
            <Meta title={piz.title} description={piz.desc} />
            <br />
            <span>{piz.price} so'm</span>
          </Card>
        ))}
    </div>
  );
};
