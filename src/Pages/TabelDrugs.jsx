// import React, { useState } from "react";

// const TabelDrugs = () => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [data, setData] = useState([
//         {
//             name: "Drug A",
//             description: "A description of Drug A",
//             price: 10,
//             quantity: 100
//         },
//         {
//             name: "Drug B",
//             description: "A description of Drug B",
//             price: 15,
//             quantity: 200
//         },
//         {
//             name: "Drug C",
//             description: "A description of Drug C",
//             price: 12,
//             quantity: 150
//         },
//     ]);
//     const [editRow, setEditRow] = useState(null);
//     const [editedData, setEditedData] = useState({
//         name: "",
//         description: "",
//         price: "",
//         quantity: ""
//     });

//     const filteredData = data.filter((row) =>
//         row.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleDelete = (name) => {
//         setData(data.filter((row) => row.name !== name));
//     };

//     const handleEdit = (row) => {
//         setEditRow(row.name);
//         setEditedData({ ...row });
//     };

//     const handleSave = (name) => {
//         const updatedData = data.map((row) =>
//             row.name === name ? { ...row, ...editedData } : row
//         );
//         setData(updatedData);
//         setEditRow(null);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedData({ ...editedData, [name]: value });
//     };

//     return (
//         <div className="flex justify-center my-6">
//             <div className="overflow-x-auto min-h-[631px] w-full max-w-4xl">
//                 <div className="min-w-full inline-block align-middle border border-gray-300 rounded-lg">
//                     <div className="py-3 px-4">
//                         <h1 className="text-2xl font-bold text-center">
//                             All Drugs
//                         </h1>
//                         <div className="relative max-w-xs">
//                             <label htmlFor="search-input" className="sr-only">Search</label>
//                             <input
//                                 type="text"
//                                 id="search-input"
//                                 value={searchQuery}
//                                 onChange={handleSearchChange}
//                                 className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
//                                 placeholder="Search for drugs"
//                             />
//                         </div>
//                     </div>

//                     <div className="overflow-hidden min-h-[509px]">
//                         {filteredData.length === 0 ? (
//                             <div className="flex justify-center items-center h-full">
//                                 <img
//                                     src="/People search-amico.png"
//                                     alt="No results found"
//                                     className="w-1/2 h-auto"
//                                 />
//                             </div>
//                         ) : (
//                             <table className="min-w-full table-auto">
//                                 <thead className="border-y border-gray-200">
//                                     <tr>
//                                         <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
//                                             Name
//                                         </th>
//                                         <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
//                                             Description
//                                         </th>
//                                         <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
//                                             Price
//                                         </th>
//                                         <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
//                                             Quantity
//                                         </th>
//                                         <th className="py-3 pr-10 text-right font-medium text-[#4F9451]">Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="divide-y divide-gray-200">
//                                     {filteredData.map((row) => (
//                                         <tr key={row.name} className="border-b border-gray-300">
//                                             <td className="p-3 text-sm text-gray-800">
//                                                 {editRow === row.name ? (
//                                                     <input
//                                                         type="text"
//                                                         name="name"
//                                                         value={editedData.name}
//                                                         onChange={handleChange}
//                                                         className="text-sm border p-2 rounded-md"
//                                                     />
//                                                 ) : (
//                                                     row.name
//                                                 )}
//                                             </td>
//                                             <td className="p-3 text-sm text-gray-800">
//                                                 {editRow === row.name ? (
//                                                     <input
//                                                         type="text"
//                                                         name="description"
//                                                         value={editedData.description}
//                                                         onChange={handleChange}
//                                                         className="text-sm border p-2 rounded-md"
//                                                     />
//                                                 ) : (
//                                                     row.description
//                                                 )}
//                                             </td>
//                                             <td className="p-3 text-sm text-gray-800">
//                                                 {editRow === row.name ? (
//                                                     <input
//                                                         type="number"
//                                                         name="price"
//                                                         value={editedData.price}
//                                                         onChange={handleChange}
//                                                         className="text-sm border p-2 rounded-md"
//                                                     />
//                                                 ) : (
//                                                     row.price
//                                                 )}
//                                             </td>
//                                             <td className="p-3 text-sm text-gray-800">
//                                                 {editRow === row.name ? (
//                                                     <input
//                                                         type="number"
//                                                         name="quantity"
//                                                         value={editedData.quantity}
//                                                         onChange={handleChange}
//                                                         className="text-sm border p-2 rounded-md"
//                                                     />
//                                                 ) : (
//                                                     row.quantity
//                                                 )}
//                                             </td>
//                                             <td className="p-3 text-right">
//                                                 {editRow === row.name ? (
//                                                     <button
//                                                         onClick={() => handleSave(row.name)}
//                                                         className="px-4 py-2 text-green-600 border-2 border-green-600 rounded hover:bg-green-600 hover:text-white"
//                                                     >
//                                                         Save
//                                                     </button>
//                                                 ) : (
//                                                     <>
//                                                         <button
//                                                             onClick={() => handleEdit(row)}
//                                                             className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white mx-4"
//                                                         >
//                                                             Edit
//                                                         </button>
//                                                         <button
//                                                             onClick={() => handleDelete(row.name)}
//                                                             className="px-4 py-2 text-red-600 border-2 border-red-600 rounded hover:bg-red-600 hover:text-white"
//                                                         >
//                                                             Delete
//                                                         </button>
//                                                     </>
//                                                 )}
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TabelDrugs;
import React, { useState } from "react";

const TabelDrugs = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([
        {
            name: "Drug A",
            description: "A description of Drug A",
            price: 10,
            quantity: 100
        },
        {
            name: "Drug B",
            description: "A description of Drug B",
            price: 15,
            quantity: 200
        },
        {
            name: "Drug C",
            description: "A description of Drug C",
            price: 12,
            quantity: 150
        },
    ]);
    const [editRow, setEditRow] = useState(null);
    const [editedData, setEditedData] = useState({
        name: "",
        description: "",
        price: "",
        quantity: ""
    });
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

    const filteredData = data.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to handle sorting
    const handleSort = (column) => {
        let direction = 'ascending';
        if (sortConfig.key === column && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key: column, direction });
    };

    const sortedData = [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
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
        <div className="flex justify-center my-6">
            <div className="overflow-x-auto min-h-[631px] w-full max-w-4xl">
                <div className="min-w-full inline-block align-middle border border-gray-300 rounded-lg">
                    <div className="py-3 px-4">
                        <h1 className="text-2xl font-bold text-center">
                            All Drugs
                        </h1>
                        <div className="relative max-w-xs">
                            <label htmlFor="search-input" className="sr-only">Search</label>
                            <input
                                type="text"
                                id="search-input"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
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
                            <table className="min-w-full table-auto">
                                <thead className="border-y border-gray-200">
                                    <tr>
                                        <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
                                            {/* <input type="checkbox" /> */}
                                        </th>
                                            
                                        <th
                                            className="py-3 px-2 text-left font-medium text-[#4F9451] cursor-pointer"
                                            onClick={() => handleSort('name')}
                                        >
                                            Name
                                        </th>
                                        <th
                                            className="py-3 px-2 text-left font-medium text-[#4F9451] cursor-pointer"
                                            onClick={() => handleSort('description')}
                                        >
                                            Description
                                        </th>
                                        <th
                                            className="py-3 px-2 text-left font-medium text-[#4F9451] cursor-pointer"
                                            onClick={() => handleSort('price')}
                                        >
                                            Price
                                        </th>
                                        <th
                                            className="py-3 px-2 text-left font-medium text-[#4F9451] cursor-pointer"
                                            onClick={() => handleSort('quantity')}
                                        >
                                            Quantity
                                        </th>
                                        <th className="py-3 pr-10 text-right font-medium text-[#4F9451]">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {sortedData.map((row) => (
                                        <tr key={row.name} className="border-b border-gray-300">
                                            <td className="p-3 text-sm text-gray-800">
                                                <input type="checkbox" />
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
                                                    <button
                                                        onClick={() => handleSave(row.name)}
                                                        className="px-4 py-2 text-green-600 border-2 border-green-600 rounded hover:bg-green-600 hover:text-white"
                                                    >
                                                        Save
                                                    </button>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => handleEdit(row)}
                                                            className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white mx-4"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(row.name)}
                                                            className="px-4 py-2 text-red-600 border-2 border-red-600 rounded hover:bg-red-600 hover:text-white"
                                                        >
                                                            Delete
                                                        </button>
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
