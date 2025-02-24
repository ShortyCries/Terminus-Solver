
import './App.css'
import './BigContainer.css'
import BigContainer from './BigContainer'
import { useState } from 'react'



function App() {


  const [values, setValues] = useState({ X: 0, Y: 0, Z: 0 });

  const updateValue = (variable, value) => {
    setValues(prevVals => ({ ...prevVals, [variable]: value }));

  }


  return (
    <>
      <h1>Multi-Phasic Injector Step</h1>
      <div className='PuzzleSolver'>
        <BigContainer variable={"X"} bigUpdateValues={updateValue} />
        <BigContainer variable={"Y"} bigUpdateValues={updateValue} />
        <BigContainer variable={"Z"} bigUpdateValues={updateValue} />


      </div>

      <div className="ResultBorder">

        <div className='PuzzleSolver'>
          <span>1</span><span>2</span><span>3</span>
        </div>

        <div className='PuzzleSolver'>

          <div>
            <span className="borderLeftRight">{2 * values.X + 11}</span>
          </div>
          <div><span className="borderLeftRight">{(2 * values.Z + values.Y) - 5}</span>
          </div>
          <div>
            <span className="borderLeftRight">{Math.abs((values.Y + values.Z) - values.X)}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
