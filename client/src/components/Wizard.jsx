import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { createNewProject } from "../utils/API"

import '../styles/wizard.css'

const Wizard = () => {
  const navigate = useNavigate();
  const [timelapseName, setTimelapseName] = useState('')
  const [days, setDays] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit (e) {
    e.preventDefault()

    if (timelapseName && days) {

      const data = {
        name: timelapseName,
        description,
        days
      }

      createNewProject(data)
      // after a successfulpost, redirect to that project page
      
      navigate('/home');

    } else {
      console.log('empty values')
    }
  }


  return (
    <section className="d-flex justify-content-center">
      <div className="wizardContainer p-3">

      <div className="row justify-content-center">

        <form className='col-12' onSubmit={handleSubmit}>
          <legend className="text-center mb-5">New Project </legend>
            <div className="d-flex justify-content-between">
              <label htmlFor='timelapseName' >Your Project's Name </label>
              <input
                className="mb-3"
                type='text'
                id='timelapseName'
                name='timelapseName'
                value={timelapseName}
                onChange={(e) => setTimelapseName(e.target.value)}
                />
            </div>

            <div className="d-flex justify-content-between">
              <label htmlFor='days'>How many days? </label>
              <input
                className="mb-3"
                type='number'
                id='days'
                name='days'
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='description'>Description </label>
              <div className="form-floating">
                <textarea 
                  className="form-control" 
                  id="floatingTextarea"
                  style={{height: 150 + 'px'}}
                  value={description}
                  placeholder={'optional'}
                  onChange={(e) => setDescription(e.target.value)}
                  >
                </textarea>
              </div>
            </div>


            <button type="submit" className="myBtn mt-3" onClick={()=>handleSubmit()}>Submit</button>
        </form>
        </div>


      </div>
      
    </section>
  )
}


export default Wizard