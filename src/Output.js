import React from 'react'

export default function Output(props) {
    const {output} = props
  return (
    <div>Output
        <input type="number" className='input' value={output} />
    </div>
  )
}
