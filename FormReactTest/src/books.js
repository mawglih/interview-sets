import React, {useState} from "react";
import Book from "./Book";
import SearchBox from "./SearchBox";

const BookSearch = ({books}) => {
  let items = {...books};
  const fieldNames = [
    "author", "title", "country", "language", "year"
  ];
  const [fields, setFields] = useState(
    fieldNames.reduce((a, e) => {
      a[e] = "";
      return a;
    }, {})
  );
  
  const matches = (fields, book) => 
    Object.entries(book).some(([k, v]) =>
      !fields[k] || v.toString()
                     .toLowerCase()
                     .includes(fields[k].trim().toLowerCase())
    )
  ;
  
  const handleChange = (evt, name) => {
    const value = evt.target.value;
    setFields(prevState => ({
      ...prevState, 
      [name]: value
    }));
  };

  return (
    <div className="book-search-container">
      <SearchBox fields={fields} handleChange={handleChange} />
      <div className="books">
        {items
          .filter(book => matches(fields, book))
          .map((e, i) => <Book data={e} key={e.title + i} />)
        }
      </div>
    </div>
  );
};

export default BookSearch;
