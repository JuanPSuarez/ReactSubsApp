import {useState} from 'react';
import './App.css';

function App() {
  const [subs, setSubs] = useState([
    {
      nick:'Fulano',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=Fulano',
      description: 'Es un fulano'

    },
    {
      nick: 'Mengano',
      subMonths: 7,
      avatar: 'https://i.pravatar.cc/150?u=Mengano'
    }]
  )
  return (
    <div className="App">
      <h1>Mis Subs</h1>
      <ul>
        {
          subs.map(subs => {
            return (
              <li key={subs.nick}>
                <img src={subs.avatar} alt={'Avatar for ${subs.nick}'} />
                <h4>{subs.nick} (<small>{subs.subMonths}</small>)</h4>
                <p>{subs.description?.substring(0,100)}</p>
              </li>
            )
          })
        }
    </ul>
    </div>
  );
}

export default App;
