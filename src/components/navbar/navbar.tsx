import { useState } from 'react';
import { Input, Button, type GetProps } from 'antd';
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.svg';
import { Basket, Favorites } from '../';
import './navbar.scss';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
  console.log(info?.source, value);

export const Navbar = () => {
  const [openf, setOpenf] = useState<boolean>(false);
  const [openb, setOpenb] = useState<boolean>(false);

  return (
    <nav>
      <img src={logo} alt="no image" className="nav-left" />
      <Search
        placeholder="Искать товары и категории"
        onSearch={onSearch}
        style={{ width: 400 }}
        className="nav-center"
      />
      <div className="nav-right">
        <Button
          type="text"
          icon={<HeartOutlined />}
          onClick={() => setOpenf(true)}
        >
          Избранное
        </Button>
        <Button
          type="text"
          icon={<ShoppingOutlined />}
          onClick={() => setOpenb(true)}
        >
          Корзина
        </Button>
      </div>

      <Favorites openf={openf} setOpenf={setOpenf} />
      <Basket openb={openb} setOpenb={setOpenb} />
    </nav>
  );
};
