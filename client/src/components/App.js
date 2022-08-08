import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage';
    
function App() {
  const [id, setId] = useState()

  return (
    <>
      {id}
      <Login onIdsubmit={setId} />
    </>
  )
}

export default App;
