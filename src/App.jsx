
import './App.css'
import './BigContainer.css'
import './index.css'
import BigContainer from './BigContainer'
import { useState } from 'react'



function App() {


  const [values, setValues] = useState({ X: undefined, Y: undefined, Z: undefined });

  const updateValue = (variable, value) => {
    setValues(prevVals => ({ ...prevVals, [variable]: value }));

  }


  return (
    <>
      <h1 className="Title">Multi-Phasic Injector Step</h1>
      <div className='PuzzleSolver'>
        <BigContainer variable={"X"} bigUpdateValues={updateValue} />
        <BigContainer variable={"Y"} bigUpdateValues={updateValue} />
        <BigContainer variable={"Z"} bigUpdateValues={updateValue} />


      </div>

      <div className="ResultBorder">

        <div className='PuzzleSolver'>
          <span>1</span><span>2</span><span>3</span>

        </div>

        <div className="PuzzleSolver">
          <div>
            <span className="borderLeftRight">
              {!values.X ? "-" : 2 * values.X + 11}
            </span>
          </div>
          <div>
            <span className="borderLeftRight">
              {!values.Y || !values.Z ? "-" : 2 * values.Z + values.Y - 5}
            </span>
          </div>
          <div>
            <span className="borderLeftRight">
              {!values.Y || !values.Z || !values.X ? "-" : Math.abs(values.Y + values.Z - values.X)}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
