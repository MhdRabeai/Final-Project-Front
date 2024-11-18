import React, { useState } from "react";
import { Input } from "antd";

const dataArray = [
  { id: 1, name: "Coriss Ambady" },
  { id: 2, name: "John Doe" },
  { id: 3, name: "Jane Smith" },
  { id: 4, name: "Samuel Green" },
  { id: 5, name: "Robert Williams" },
  { id: 6, name: "Alice johnson" },
  { id: 7, name: "Lucas Martin" },
  { id: 8, name: "Sophia Davis" },
];

const { Search } = Input;
const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(dataArray);

  const onSearch = (value) => {
    setSearchText(value);
    if (value) {
      const lowercasedValue = value.toLowerCase();
      const filtered = dataArray.filter(
        (item) =>
          item.name.toLowerCase().includes(lowercasedValue) ||
          item.id.toString().includes(lowercasedValue)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(dataArray);
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "10vh" }}
    >
      <Search
        placeholder="input name"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default SearchPage;
