import React, { useState, useEffect } from 'react';
import CardList from './components/cards-list/cards-list.component';
import Search from "./components/search/search.component";
import './App.css';


const App = () => {
  
  const [ monsters, setMonsters ] = useState([]);
  const [ searchField, setSearchField ] = useState('');
  const [filteredMonster, setFilteredMonster] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    filterMonster();
  }, [searchField])

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      setFilteredMonster(json);
      setMonsters(json);
    });
  }

  const filterMonster = () => {
    let mon = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMonster([...mon]);
  }

  const handleSearchChange = (value) => {
    setSearchField(value);
  }

  return (
    <div className="App">
      <h1> Monster Roledox </h1>
      <Search placeholder={'Search Monsters'} handleSearchChange={handleSearchChange}></Search>
      <CardList monsters={filteredMonster}></CardList>
    </div>
  );
}

export default App;
