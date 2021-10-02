import Navbar from './Components/Navbar';
import CardArea from './Components/CardArea';
import './app.css'
import { useState } from 'react';



function App() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);
  return (
    <div>
      <Navbar setusers={setusers} setloading={setloading} />
      <div className='container'>
        <CardArea users={users} loading={loading}/>
      </div>
    </div>
  );
}

export default App;
