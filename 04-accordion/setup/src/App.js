import React from 'react';
import data from './data';
import Question from './Question';
function App() {
  return (
    <main>
      <div className='container'>
        <h3>Questions and answere about login</h3>
        <section className='info'>
          {data.map(el => {
            return <Question key={el.id.toString()} {...el} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
