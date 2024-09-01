import { Link, Outlet } from 'react-router-dom';
import style from './style.module.scss';

export const NavBar = () => {

  return (
    <>
    <div className={style.container}>
      <div className={style.menu}>
        <Link to='/'>start</Link>
        <Link to='/list'>List</Link>
        <Link to='/main'>Main</Link>
      </div>
    </div>
      <Outlet />
      </>
  )
}