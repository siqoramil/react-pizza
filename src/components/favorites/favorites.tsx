import { Drawer } from 'antd';

type PropsType = {
  openf: any;
  setOpenf: any;
};

export const Favorites = ({ openf, setOpenf }: PropsType) => {
  return (
    <Drawer
      title="Favorite Drawer"
      closable={{ 'aria-label': 'Close Button' }}
      onClose={() => setOpenf(false)}
      open={openf}
    >
      <p>Favorites Some contents...</p>
      <p>Favorites Some contents...</p>
      <p>Favorites Some contents...</p>
    </Drawer>
  );
};
