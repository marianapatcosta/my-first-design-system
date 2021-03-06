import React, { useState } from 'react';
import './App.css';
import { Button, Card, Checkbox, Dropdown } from './components';

function App() {
  const [checked, setChecked] = useState(false);
  const [option, setOption] = useState('');
  return (
    <div className='App'>
      <Card>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </Card>
      <Button label='Hello' onClick={() => console.log('clicked')}></Button>
      <Checkbox
        label='checkbox'
        checked={checked}
        onChange={(e: any) => setChecked(e.target.checked)}
      />
       <Dropdown
      placeholder='select an option' 
      options={['option 1', 'option 2', 'option 3']}
      selectedOption={option}
      label='Example'
      onChooseOption={(e: any) => setOption(e.target.value)}
      />
    </div>
  );
}

export default App;
