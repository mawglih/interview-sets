import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete() {
  
  const fetchData = async (query) => {
    const params = new URLSearchParams([['q', query]]);
    const res = await axios.get(`${ITEMS_API_URL}`, {params});
    const data = res.data;
    console.log('body', data)
    return data;
  }
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, DEBOUNCE_DELAY);
    return () => clearTimeout(timerId);
  }, [term]);
  useEffect(() => {
    const search = async () => {
      const result = await fetchData(debouncedTerm);
      setData(result);
    };
    if(debouncedTerm) {
      search();
    }
 }, [debouncedTerm]);
  console.log('data', data);
  return (
    <div className="wrapper">
      <div className="control">
        <input type="text" className="input" value={term} onChange={e => setTerm(e.target.value)}/>
      </div>
      <div className="list is-hoverable">
        {data.map((item, idx) => {
          return (
            <a className="list-item" key={idx} onClick={item => setValue(item)}>{item}</a>
          )
        })}
      </div>
    </div>
  );
};
