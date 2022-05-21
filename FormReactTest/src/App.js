import { useState } from 'react';
import Form from './form2';
import DisplayData from './display';
import './App.css';

function App() {
  const [value, setValue] = useState([])
  const onSubmit = (data) => {
    console.log(data)
    setValue(prev => [...prev, data]);
  }
  return (
    <div className="App">
      <Form onSubmit ={data => onSubmit(data)} />
      <DisplayData data = {value}/>
    </div>
  );
}

export default App;
