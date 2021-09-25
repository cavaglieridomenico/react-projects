import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const fetchResponse = await fetch(url);
      if (fetchResponse.ok) {
        const fetchData = await fetchResponse.json();
        setLoading(false);
        setTours(fetchData);
      } else {
        throw new Error('Errore!');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
}

export default App
