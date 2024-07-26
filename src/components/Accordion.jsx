import React, { useState } from 'react'
import faqData from '../assets/data'
import './Accordion.css'

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(false)

  const handleActiveIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(false)
    } else {
      setActiveIndex(index)
    }
  }
  return (
    <div className="accordion d-flex flex-column justify-content-center align-item-center">
      {faqData.map((item, index) => (
        <div
          key={index}
          onClick={() => handleActiveIndex(index)}
          className="faq mb-2"
        >
          <div className="title d-flex justify-content-between align-items-center px-5 py-3">
            <h1>{item.question}</h1>
            {activeIndex === index ? (
              <div className="fa-solid fa-minus"></div>
            ) : (
              <div className="fa-solid fa-plus"></div>
            )}
          </div>
          <div className={`px-5 py-1 content ${activeIndex === index ? "show" : ""}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion