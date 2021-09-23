import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [peaple, setPeaple] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{peaple.length} birthday today</h3>
        <List peaple={peaple}></List>
        <button onClick={() => setPeaple([])}>Clear all</button>
      </section>
    </main>
  )
}

export default App
