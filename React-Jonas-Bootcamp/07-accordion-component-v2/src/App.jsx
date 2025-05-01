import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setIsOpen] = useState(null);
  function handleOpenItem(number) {
    setIsOpen(number);
  }
  return (
    <div className="accordion">
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            currOpen={currOpen}
            onOpenItem={handleOpenItem}
            number={index}
            title={item.title}
          >
            Message: {item.text}
          </AccordionItem>
        );
      })}
    </div>
  );
}

function AccordionItem({ currOpen, onOpenItem, number, title, children }) {
  //const [isOpen, setIsOpen] = useState(false);

  const isOpen = number === currOpen;

  return (
    <div
      className={isOpen ? `item open` : `item`}
      onClick={() => onOpenItem(isOpen ? null : number)}
    >
      <p className="number">
        {number < 9 ? `0${number + 1}` : `${number + 1}`}
      </p>
      <p className="title">{title}</p>
      <p>{isOpen ? "-" : "+"}</p>
      <div
        style={{ display: isOpen === true ? "block" : "none" }}
        className="content-box"
      >
        {children}
      </div>
    </div>
  );
}
