
import './App.css';
import { LikeButton } from './components/LikeButton';
import { ContenedorNotificaciones } from './components/layout/ContenedorNotificaciones';
import { useState } from 'react';
import { arrayNotificaciones } from './utils/constant';

function App() {
  const [array, setArray] = useState([])
  const [count, setCount] = useState(0)
  return(
    <>
    
<ContenedorNotificaciones array={array} setArray={setArray} count={count} setCount={setCount}/>
<LikeButton setArray={setArray} array={array}/>
    
    </>
  )
  
}

export default App
