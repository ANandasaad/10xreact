import React from 'react';

const ColorSelection = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button  style={{width:'100px', height:'20px', background:{background}}} onClick={() => selectNextBackground({background: background})}>
      {config.key}
    </button>
  )
}
export default ColorSelection;