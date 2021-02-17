import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './App.scss';

function App() {
  const [count, setCount] = useState(1);
  const star = [{ id: 1, value: '*' }, { id: 2, value: '*' }, { id: 3, value: '*' }, { id: 4, value: '*' }, { id: 5, value: '*' }]

  const starClick = (id) => {
    setCount(id)
    console.log(count)
  }

  console.log()
  return (
    <div className="App">
      <Button>Reactstrap button</Button>
      <div id='rating'>
        {star.map(x => {
          return <>
            <span
              key={Math.random()}
              onClick={() => starClick(x.id)}
              className={x.id <= count ? 'active' : ''}
            >
              {x.value}
            </span>
            <br />
          </>
        })}
      </div>
    </div >
  );
}

export default App;



