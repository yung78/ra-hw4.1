import { useState } from 'react'

export default function HexToRgb() {
  const [state, setState] = useState({
    style: { background: '#ffffff' },
    rgb: 'waiting ...',
  })

  const hexToRgb = (hex) => {
    let red = parseInt(hex.substring(0, 2), 16);
    let green = parseInt(hex.substring(2, 4), 16);
    let blue = parseInt(hex.substring(4, 6), 16);
    
    return `rgb(${red}, ${green}, ${blue})`
  }

  const handlerOnChange = (e) => {
    if (e.target.value.length === 7) {
      if (/^#([A-Fa-f0-9]{6})$/.test(e.target.value)) {
        setState({
          style: { background: e.target.value },
          rgb: hexToRgb(e.target.value.replace('#', ''))
        });
      } else {
        setState({
          style: { background: 'red' },
          rgb: 'Error!',
        });
      }

      return
    }

    setState({
      style: {background: '#ffffff'},
      rgb: 'waiting...',
    })
  }


  return (
    <div className='background' style={state.style}>
      <form className='form'>
        <input 
          className='input'
          onChange={handlerOnChange}
          placeholder='input hex here'
        >
        </input>
        <div className='rgb'>
          { state.rgb }
        </div>
      </form>
    </div>
  )
}
