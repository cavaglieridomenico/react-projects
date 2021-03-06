import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobsData, setJobsData] = useState([]);
  const [jobValue, setJobValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setJobsData(data);
        setLoading(false);
      } else {
        throw new Error('Errore!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }
  const { title, dates, company, duties } = jobsData[jobValue];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobsData.map((el, index) => {
            return (
              <button
                key={index}
                className={`job-btn ${jobValue === index && 'active-btn'}`}
                onClick={() => setJobValue(index)}
              >
                {el.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((el, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{el}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type='button' className='btn'>
        more info
      </button>
    </section>
  );
}

export default App;
