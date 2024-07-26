import React from 'react'
import faqData from '../assets/data'

function Accordion() {
  return (
    <div className="accordion">
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