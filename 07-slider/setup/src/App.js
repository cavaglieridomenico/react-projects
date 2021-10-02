import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const startNumberOfList = 0;
  const lastNumberOfList = data.length - 1;
  const [currentIndex, setCurrentIndex] = useState(startNumberOfList);

  const checkIndex = number => {
    if (number > lastNumberOfList) {
      return (number = startNumberOfList);
    }
    if (number < startNumberOfList) {
      return (number = lastNumberOfList);
    }
    return number;
  };

  useEffect(() => {
    setCurrentIndex(checkIndex(currentIndex));
  }, [currentIndex]);
}

export default App;
