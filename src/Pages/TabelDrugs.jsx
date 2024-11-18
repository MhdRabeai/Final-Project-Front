import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrash,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const TabelDrugs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      name: "Drug A",
      description: "A description of Drug A",
      price: 10,
      quantity: 100,
    },
    {
      name: "Drug B",
      description: "A description of Drug B",
      price: 15,
      quantity: 200,
    },
    {
      name: "Drug C",
      description: "A description of Drug C",
      price: 12,
      quantity: 150,
    },
  ]);
  const [editRow, setEditRow] = useState(null);
  const [editedData, setEditedData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle sorting
  const handleSort = (column) => {
    let direction = "ascending";
    if (sortConfig.key === column && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key: column, direction });
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (name) => {
    setData(data.filter((row) => row.name !== name));
  };

  const handleEdit = (row) => {
    setEditRow(row.name);
    setEditedData({ ...row });
  };

  const handleSave = (name) => {
    const updatedData = data.map((row) =>
      row.name === name ? { ...row, ...editedData } : row
    );
    setData(updatedData);
    setEditRow(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 h-full">
      <div className="overflow-x-auto w-full max-w-7xl">
        <div className="min-w-full inline-block align-middle border border-gray-300 rounded-lg">
          <div className="py-5 px-4 relative">
            <h1 className="text-xl sm:text-2xl font-bold text-center my-4">
              All Drugs
            </h1>

            <div className="relative max-w-xs">
              <label htmlFor="search-input" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
                className="peer py-2 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Search for drugs"
              />
            </div>
          </div>

          <div className="overflow-hidden min-h-[509px]">
            {sortedData.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <img
                  src="/People search-amico.png"
                  alt="No results found"
                  className="w-1/2 h-auto"
                />
              </div>
            ) : (
              <table className="min-w-full table-auto text-sm sm:text-base">
                <thead className="border-y border-gray-200 dark:border-neutral-700 bg-[#4F9451]">
                  <tr>
                    <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
                      {/* <input type="checkbox" /> */}
                    </th>

                    <th
                      className="py-3 px-2 text-left font-medium text-white"
                      onClick={() => handleSort("name")}
                    >
                      Name
                    </th>
                    <th
                      className="py-3 px-2 text-left font-medium text-white"
                      onClick={() => handleSort("description")}
                    >
                      Description
                    </th>
                    <th
                      className="py-3 px-2 text-left font-medium text-white"
                      onClick={() => handleSort("price")}
                    >
                      Price
                    </th>
                    <th
                      className="py-3 px-2 text-left font-medium text-white"
                      onClick={() => handleSort("quantity")}
                    >
                      Quantity
                    </th>
                    <th className="py-3 px-2 text-left font-medium text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedData.map((row) => (
                    <tr key={row.name} className="border-b border-gray-300">
                       <td className="py-3 px-3">
                        <input
                          type="checkbox"
                          name="challenges"
                          value={"Family"}
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] dark:bg-neutral-800 dark:border-neutral-700"
                        />
                      </td>
                      <td className="p-3 text-sm text-gray-800">
                        {editRow === row.name ? (
                          <input
                            type="text"
                            name="name"
                            value={editedData.name}
                            onChange={handleChange}
                            className="text-sm border p-2 rounded-md"
                          />
                        ) : (
                          row.name
                        )}
                      </td>
                      <td className="p-3 text-sm text-gray-800">
                        {editRow === row.name ? (
                          <input
                            type="text"
                            name="description"
                            value={editedData.description}
                            onChange={handleChange}
                            className="text-sm border p-2 rounded-md"
                          />
                        ) : (
                          row.description
                        )}
                      </td>
                      <td className="p-3 text-sm text-gray-800">
                        {editRow === row.name ? (
                          <input
                            type="number"
                            name="price"
                            value={editedData.price}
                            onChange={handleChange}
                            className="text-sm border p-2 rounded-md"
                          />
                        ) : (
                          row.price
                        )}
                      </td>
                      <td className="p-3 text-sm text-gray-800">
                        {editRow === row.name ? (
                          <input
                            type="number"
                            name="quantity"
                            value={editedData.quantity}
                            onChange={handleChange}
                            className="text-sm border p-2 rounded-md"
                          />
                        ) : (
                          row.quantity
                        )}
                      </td>
                      <td className="p-3 text-right">
                        {editRow === row.name ? (
                          <div
                            className="bg-green-100 rounded-full p-2 cursor-pointer"
                            onClick={() => handleSave(row.name)}
                          >
                            <FontAwesomeIcon
                              icon={faSave}
                              className="text-green-500"
                            />
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center">
                              <div
                                className="bg-blue-100 rounded-full p-2 cursor-pointer mx-2"
                                onClick={() => handleEdit(row)}
                              >
                                <FontAwesomeIcon
                                  icon={faPencilAlt}
                                  className="text-blue-500"
                                />
                              </div>
                              <div
                                className="bg-red-100 rounded-full p-2 cursor-pointer"
                                onClick={() => handleDelete(row.name)}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="text-red-500"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabelDrugs;
