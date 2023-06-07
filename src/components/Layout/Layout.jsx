import Navigate from 'components/Header/Navigate';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Navigate />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
