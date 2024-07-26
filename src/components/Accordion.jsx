import React from 'react'
import faqData from '../assets/data'
import './Accordion.css'

function Accordion() {
  return (
    <div className="accordion d-flex flex-column justify-content-center align-item-center">
      {faqData.map((item, index) => 
        <div className="faq">
          <div className="title">
            <h4>{ item.question }</h4>
          </div>
          <div className="content">
            <p>{ item.answer }</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Accordion