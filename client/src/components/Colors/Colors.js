import React from 'react'

const Colors = ({colors, color, handleColorChange}) => {
  return (
    <div>
      <p className='color'>Choose a Color:</p>
              <div>
                {colors.map((colorOption, index) => (
                <span
            key={index}
            className='product-color'
            style={{
              backgroundColor: colorOption,
              height: "30px",
              width: "30px",
              margin: "5px",
              borderRadius: "50%",
              display: "inline-block",
              position: "relative",
              cursor: "pointer"
            }}
            onClick={() => handleColorChange(colorOption)}
            >
      {color === colorOption && (
        <svg className="checkmark-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '70%'
        }}>
          <circle cx="26" cy="26" r="25" fill="none" stroke="white" stroke-width="2"/>
          <path fill="none" stroke="white" stroke-width="4" d="M14 27l8 8 16-16"/>
        </svg>
      )}
        </span>
        ))}
      </div>
    </div>
  )
}

export default Colors
