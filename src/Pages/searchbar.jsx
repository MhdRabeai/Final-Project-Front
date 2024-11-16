import React, { useState } from 'react';  
import { Input } from 'antd'; 

const dataArray = [  
  { id: 1, name: "Alice" },  
  { id: 2, name: "Bob" },  
  { id: 3, name: "Charlie" },  
];  

const { Search } = Input; 
const SearchComponent = () => {  

  const [searchText, setSearchText] = useState('');  
  const [filteredData, setFilteredData] = useState(dataArray); 

  const onSearch = (value) => {  
    setSearchText(value);  
    if (value) {  
      const lowercasedValue = value.toLowerCase();  
      const filtered = dataArray.filter(item =>   
        item.name.toLowerCase().includes(lowercasedValue) ||   
        item.id.toString().includes(lowercasedValue)  
      );  
      setFilteredData(filtered);  
    } else {  
      setFilteredData(dataArray); 
    }  
  };  

  return (  
    <div className="flex justify-center items-center" style={{ height: '10vh' }}>  
      <Search  
        placeholder="input name"  
        allowClear  
        onSearch={onSearch}  
        style={{ width: 200 }}  
      />  
     
    </div>  
  );  
};  

export default SearchComponent;