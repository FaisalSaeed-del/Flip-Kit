import React, { useState } from "react";

const CollapseExpand = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="main-container">
      <div className="accordian">
        {data.map((item, i) => (
          <div className="item" onClick={() => toggle(i)}>
            <div className="title">
              <h2>{item.question}</h2>
              <span>+</span>
            </div>
            <div className="content">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapseExpand;

const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem ipsum pariatur officia repudiandae illo maxime quasi voluptatem laborum. Eaque a quas nesciunt accusantium similique eligendi repudiandae in id facilis.",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem ipsum pariatur officia repudiandae illo maxime quasi voluptatem laborum. Eaque a quas nesciunt accusantium similique eligendi repudiandae in id facilis.",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem ipsum pariatur officia repudiandae illo maxime quasi voluptatem laborum. Eaque a quas nesciunt accusantium similique eligendi repudiandae in id facilis.",
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem ipsum pariatur officia repudiandae illo maxime quasi voluptatem laborum. Eaque a quas nesciunt accusantium similique eligendi repudiandae in id facilis.",
  },
  {
    question: "Question 5",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem ipsum pariatur officia repudiandae illo maxime quasi voluptatem laborum. Eaque a quas nesciunt accusantium similique eligendi repudiandae in id facilis.",
  },
];
