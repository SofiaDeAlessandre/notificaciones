
import './App.css';
import { LikeButton } from './components/LikeButton';
import { ContenedorNotificaciones } from './components/layout/ContenedorNotificaciones';
import { useState } from 'react';
import { arrayNotificaciones } from './utils/constant';

function App() {
  const [array, setArray] = useState(arrayNotificaciones)
  const [count, setCount] = useState(0)
  return(
    <>
<ContenedorNotificaciones array={array} setArray={setArray} count={count} setCount={setCount}/>
<LikeButton setArray={setArray} array={array} setCount={setCount} count={count}/>
    
    </>
  )
  
}

export default App
