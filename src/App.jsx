import { useEffect, useState } from "react";
import "./App.css";
import Header from './components/Header';
import CardList from './components/CardList';

function App() {
  const [stays, setStays] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./stays.json');
        const data = await response.json();
        setStays(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const filteredStays = stays.filter(stay => stay.city.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="App">
    <Header setFilter={setFilter} stays={filteredStays} />
    <CardList stays={filteredStays} />
  </div>
  );
}

export default App;
