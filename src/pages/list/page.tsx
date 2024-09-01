import { useEffect, useState } from "react";
import Call from '@/assets/call.svg';

const func = (a: number) => a

const List = () => {
  const [state, setState] = useState([])
  const [num, setNum] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setState(json)).catch(() => setState([]))
  }, [])

  

  return (
    <div>
      <div onClick={() => setNum(num+ 1)}>{num}</div>
      <Call width={150} height={150} fill='purple' />
      {__PLATFORM__}
      {state.map(el => <div key={el.id}>{el.title}</div>)}
    </div>
  )
}

export default List