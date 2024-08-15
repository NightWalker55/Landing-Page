import React from 'react'

const Sizes = ({sizes, handleSizeChange, size}) => {
  return (
             <div>
                <p className='size'>Choose a size:</p>
                <div className="radio-group">
                  {sizes.map((option) => (
                    <label key={option} className="radio-label">
                      <input
                        type="radio"
                        name="custom-radio"
                        value={option}
                        className="radio-input"
                        checked={size === option}
                        onChange={() => handleSizeChange(option)}
                      />
                      <span className="custom-radio"></span>
                      {option}
                    </label>
                  ))}
                </div>
              </div>
  )
}

export default Sizes
