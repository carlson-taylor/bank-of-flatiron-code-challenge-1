// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import Search from './components/Search';
// import Form from './components/Form';
// import Table from './components/Table';
// function App() {
//   return (
//     <div className="App">
//      <>
//      <Header/>
//      <Search/>
//      <Form/>
//      <Table/>
//      </>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import MyTable from './components/MyTable'; // Assuming MyTable component is properly implemented
import NavBar from './components/NavBar';
import AddItemForm from './components/Form'; // Assuming you have a Form component renamed to AddItemForm
import SearchBar from './components/Search'; // Assuming you have a Search component renamed to SearchBar

const data = [
  { date: '2019-12-01', description: "Paycheck from Bob's Burgers", category: 'Food', amount: 70.00 },
  { date: '2019-12-02', description: 'South from Southwest Quinoa Bowl at Fresh and Co', category: 'Entertainment', amount: 540.00 },
  { date: '2019-12-03', description: 'Chipotle', category: 'John', amount: 57.60 },
];

function App() {
  const [items, setItems] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredItems = items.filter(item =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <AddItemForm onAddItem={handleAddItem} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <MyTable key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
