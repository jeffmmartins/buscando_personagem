import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { api } from './services/api';
import Principal from './components/Principal';

function App() {
  const [characterList, setCharacterList] = useState([])

  useEffect(() =>  {
    async function loadData() {
      try {
        const response = await api.get();
        setCharacterList(response.data.results)
      } catch (error) {
        alert("Erro ao carregar a página")
      }
    }
    loadData()
  },[])

  return (
    <div className='cabecalho'>
      <Header/>
      <Principal characterList={characterList} />
    </div>
  );
}

export default App;
