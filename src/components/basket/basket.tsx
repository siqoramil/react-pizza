import { Drawer } from 'antd';

type PropsType = { 
  openb: any; 
  setOpenb: any 
};

export const Basket = ({ openb, setOpenb }: PropsType) => {
  return (
    <Drawer
      title="Basket Drawer"
      closable={{ 'aria-label': 'Close Button' }}
      onClose={() => setOpenb(false)}
      open={openb}
    >
      <p>Basket Some contents...</p>
      <p>Basket Some contents...</p>
      <p>Basket Some contents...</p>
    </Drawer>
  );
};
