import { useState } from 'react';
import style from './style.module.scss';
import { NavBar } from '../../ui/nav-bar';
import { historyPush } from '../../shared/utils';

export const MainPage = () => {
  const [state, setState] = useState(6);

  return (
    <div>
      <h1 className={style.count} onClick={()=> setState(state+1)}>{state}</h1>
      <button onClick={() => historyPush('/list')}>click</button>
      
    </div>
  )
}