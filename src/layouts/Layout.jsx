import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
