import './index'
import { useState } from 'react'

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
]

// console.log(faqs);

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  )
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, idx) => (
        <AccordionItem
          num={idx + 1}
          title={item.title}
          text={item.text}
          key={idx}
        />
      ))}
    </div>
  )
}

function AccordionItem({ num, title, text }) {

  const[isOpen, setIsOpen] = useState(false)

  function handleToggle() {
  setIsOpen ((cur) => !isOpen)
  }
  
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div>
        <p className="number">{num < 9 ?`0${num}`: {num}} </p>
        <p className="title"> {title} </p>
        <span className="icon"> {isOpen ? "-" : "+"}</span>

        {isOpen && <div className="context-box">{text}</div>}
      </div>
    </div>
  )
}
