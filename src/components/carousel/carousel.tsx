import { Carousel, Row, Col } from 'antd';
import c1 from '../../assets/images/c-1.webp';
import c2 from '../../assets/images/c-2.webp';
import c3 from '../../assets/images/c-3.webp';
import c4 from '../../assets/images/c-4.webp';
import c5 from '../../assets/images/c-5.webp';
import './carousel.scss';

const images = [c1, c2, c3, c4, c5, c1, c2, c3];

const chunk = <T,>(arr: T[], size: number): T[][] => 
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export const CarouselComp = () => {
  const slides = chunk(images, 4);

  return (
    <Carousel className='carousel' autoplay arrows infinite>
      {slides.map((group, index) => (
        <div key={index} className='carousels'>
          <Row gutter={16} justify="center" className='c_row'>
            {group?.map((imgSrc, idx) => (
              <Col key={idx} className='c_col'>
                <img
                  src={imgSrc}
                  alt={`img-${idx}`}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Carousel>
  );
};
