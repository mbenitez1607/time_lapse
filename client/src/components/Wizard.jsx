import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { createNewProject } from "../utils/API"

import '../styles/wizard.css'

const Wizard = () => {
  const navigate = useNavigate();

  const [timelapseName, setTimelapseName] = useState('')
  const [days, setDays] = useState('')
  const [description, setDescription] = useState('')

  const newProject = async (e) => {
    e.preventDefault()
    if (timelapseName && days) {
      const data = {
        name: timelapseName,
        description,
        days
      }

      const newProject = await createNewProject(data)
      const { status } = newProject
      if (status == 401) {
        navigate('/login')
        return
      }
      if (status == 200) {
        navigate('/home');
      }
      else {
        alert("Ooops something went wrong!!")
      }


    } else {
      console.log('empty values')
    }
  }


  return (
    <section className="d-flex justify-content-center mb-4">
      <div className="wizardContainer">

        <div className="row justify-content-center">

          <form onSubmit={(e) => newProject(e)}>
            <legend className="text-center mb-5 "><span>New</span> Project </legend>
            <div className="d-flex flex-column">
              <label htmlFor='timelapseName' >Your <span>Project's Name</span> </label>
              <input
                className="mb-3 myInput p-2"
                type='text'
                id='timelapseName'
                name='timelapseName'
                value={timelapseName}
                onChange={(e) => setTimelapseName(e.target.value)}
              />
            </div>

            <div className="d-flex flex-column">
              <label htmlFor='days'>How many <span>days?</span> </label>
              <input
                className="mb-3 myInput p-2"
                type='number'
                id='days'
                name='days'
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='description'><span>Description</span> </label>
              <div className="form-floating">
                <textarea
                  className="form-control p-2 "
                  id="floatingTextarea"
                  value={description}
                  placeholder={'optional'}
                  onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
              </div>
            </div>


            <button type="submit" className="myBtn mt-3" >Submit</button>
          </form>
        </div>


      </div>

    </section>
  )
}


export default Wizard