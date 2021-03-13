import React, { useState } from 'react';
import './App.css';
import {
  Button,
  Card,
  Checkbox,
  Dropdown,
  Image,
  ToggleSwitch,
} from './components';
import { Search } from './components/Search/Search';
import { Toast } from './components/Toast/Toast';
import Test from '../src/assets/images/test.jpg';

function App() {
  const [checked, setChecked] = useState(false);
  const [option, setOption] = useState('');
  const [value, setValue] = useState('hewllo');
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
      <ToggleSwitch
        style={{ color: 'red' }}
        label='toggle'
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

      <Search
        value={value}
        isExpandable={true}
        onChange={(e) => setValue(e.target.value)}
        onClear={(e) => setValue('')}
      />
   {value &&   <Toast
        className='App-link'
        message={value}
        type='success'
        onClear={() => setValue('')}
      />}
      <Card style={{ width: '300px'}}>
        <Image
          src={Test}
           /*isZoomable={true}*/   isClickable={true}
          onClick={() => console.log('clicked!')} 
        />
      </Card>
      <div style={{ width: '300px', marginTop: '20px'}}>
        <Image
        style={{transform: 'rotate(90deg)'}}
          src={Test}
          isZoomable={true}  /* isClickable={true}
          onClick={() => console.log('clicked!')} */ 
        />
      </div>
      <div style={{ width: '800px', marginTop: '520px'}}></div>
      <button>hello</button>
    </div>
  );
}

export default App;
