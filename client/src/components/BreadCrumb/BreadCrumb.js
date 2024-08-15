import React from 'react';
import '../BreadCrumb/BreadCrumb.css'
import { FaAngleRight } from "react-icons/fa6";


const elements = [
  {
    name:"Home",
  },
  {
    name:"Decoration",
  },
  {
    name:"Furniture",
  },
  {
    name:"Storage",
  },
  {
    name:"SideBoard",
  },

]

const Breadcrumb = () => (
  <nav className='nav'>
    {elements.map((element, index) => (
      <div key={index} className='nav-element'>
        <a
          href="#"
          style={{
            color: element.name === "SideBoard" ? '#6c757d' : '#adb5bd',
            fontWeight: element.name === "SideBoard" ? 'bold' : 'normal',
          }}
        >
          {element.name}
        </a>
        {element.name !== "SideBoard" && <FaAngleRight />}
      </div>
    ))}
  </nav>
);


export default Breadcrumb;
