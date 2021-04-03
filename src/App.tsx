import React, { useState, useRef } from 'react';
import './App.css';
import {
  Button,
  Card,
  Checkbox,
  Dropdown,
  DropdownMultiselection,
  Image,
  RadioButton,
  ToggleSwitch,
  Upload,
} from './components';
import { Search } from './components/Search/Search';
import { Toast } from './components/Toast/Toast';
import Test from '../src/assets/images/test.jpg';
import { TOAST_TYPE } from './constants';

function App() {
  const [checked, setChecked] = useState(false);
  const [option, setOption] = useState('');
  const [options, setOptions] = useState([{ name: 'option 1', id: 1 }]);
  const [option3, setOption3] = useState('option 1');
  const [options2, setOptions2] = useState(['option 1']);
  const [option2, setOption2] = useState('option 1');
  const [value, setValue] = useState('hello');
  const todos = [
    { name: 'todo1', description: 'desc1' },
    { name: 'todo2', description: 'desc1' },
  ];
  const [gameCardImages, setGameCardImages] = useState([]);

  const testRef = useRef<HTMLDivElement>(null);

  const handleDropdownMultiSelectionClick = (
    clickedItem: any,
    selectedItemsCollection: any,
    setter: any,
    labelKey: any
  ) => {
    const isItemSelected = labelKey
      ? !!selectedItemsCollection.find(
          (item: any) => item[labelKey] === clickedItem[labelKey]
        )
      : selectedItemsCollection.includes(clickedItem);
    isItemSelected
      ? setter((prevCollectionState: any) =>
          prevCollectionState.filter((item: any) =>
            labelKey
              ? item[labelKey] !== clickedItem[labelKey]
              : item !== clickedItem
          )
        )
      : setter((prevCollectionState: any) => [
          ...prevCollectionState,
          clickedItem,
        ]);
  };

  const handleDropdownSelectionClick = (option: any, setter: any) =>
    setter(option);

  const handleFileUpload = (
    e: any,
    maxNumberOfFiles: any,
    validator: any,
    setter: any
  ) => {
    const uploadedFiles = Array.from(e.target.files).slice(0, maxNumberOfFiles);

    uploadedFiles.forEach((file: any) => {
      const reader = new FileReader();
      reader.onloadend = () =>
        setter((prevState: any) =>
          !!prevState && prevState.length < maxNumberOfFiles
            ? [...prevState, { name: file.name, src: reader.result }]
            : [{ name: file.name, src: reader.result }]
        );

      reader.readAsDataURL(file);
    });
  };

  const handleFileDelete = (clickedItemIndex: any, setter: any) => {
    setter((prevState: any) =>
      prevState.filter((item: any, index: number) => index !== clickedItemIndex)
    );
  };

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
        /*  options={['option 1', 'option 2', 'option 3']} */
        options={[
          { name: 'option 1', id: 1 },
          { name: 'option 2', id: 2 },
        ]}
        optionKey='name'
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
      {value && (
        <Toast
          className='App-link'
          message={value}
          type={TOAST_TYPE.SUCCESS}
          onClear={() => setValue('')}
        />
      )}
      <Card style={{ width: '300px' }}>
        <Image
          src={Test}
          /*isZoomable={true}*/ isClickable={true}
          onClick={() => console.log('clicked!')}
        />
      </Card>
      <div style={{ width: '300px', marginTop: '20px' }} ref={testRef}>
        <Image
          style={{ transform: 'rotate(90deg)' }}
          src={Test}
          isZoomable={
            true
          } /* isClickable={true}
          onClick={() => console.log('clicked!')} */
        />
      </div>
      {/*  <Export
        label='Export'
        exportOptions={`.csv, .pdf, .jpeg`}
        elementRef={testRef}
        csvData={todos}
        fileName={'my-todos'}
      />
           <Export
        label='Export'
        exportOptions={`.csv`}
        elementRef={testRef}
        csvData={todos}
        fileName={'my-todos'}
      /> */}

      <DropdownMultiselection
        options={[
          { name: 'option 1', id: 1 },
          { name: 'option 2', id: 2 },
          { name: 'option 3', id: 3 },
          { name: 'option 4', id: 4 },
        ]}
        optionKey='name'
        selectedOptions={options}
        placeholder='Example'
        onOptionClick={(option) =>
          handleDropdownMultiSelectionClick(option, options, setOptions, 'name')
        }
      />
      <DropdownMultiselection
        options={['option 1', 'option 2', 'option 3']}
        selectedOptions={options2}
        placeholder='Example'
        onOptionClick={(option) =>
          handleDropdownMultiSelectionClick(option, options2, setOptions2, null)
        }
      />

      <DropdownMultiselection
        options={
          [
            'option 1',
            'option 2',
            'option 3',
          ] /* [
            { name: 'option 1', id: 1 },
            { name: 'option 2', id: 2 },
            { name: 'option 3', id: 3 },
            { name: 'option 4', id: 4 },
          ] */
        }
        isSingleSelection
        selectedOption={option3}
        placeholder='single selection'
        onOptionClick={(option) =>
          handleDropdownSelectionClick(option, setOption3)
        }
      />

      <Upload
        label='Upload'
        hasPreview
        areMultipleFilesAllowed={true}
        filesToPreview={gameCardImages.map(({ src }) => src)}
        onUpload={(e) => handleFileUpload(e, 5, '', setGameCardImages)}
        onDeletePreview={(clickedItemIndex) =>
          handleFileDelete(clickedItemIndex, setGameCardImages)
        }
      />
      <div>
        {[
          { label: 'option 1', name: 'name 1' },
          { label: 'option 2', name: 'name 2' },
          { label: 'option 3', name: 'name 3' },
        ].map((item) => (
          <RadioButton
            key={`radio-button-${item.label || item}`}
            checked={item.label === option2}
            value={item.label}
            label={item.label}
            onChange={(e) => e && setOption2(e.target.value)}
          />
        ))}
      </div>

      <div style={{ width: '800px', marginTop: '520px' }}></div>
      <button>hello</button>
    </div>
  );
}

export default App;
