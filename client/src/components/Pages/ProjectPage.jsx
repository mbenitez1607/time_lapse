import React, { useState, useEffect } from 'react';
import { getSingleProject, generateTimelapse } from "../../utils/API";
import '../../styles/main.css'
import {
    useParams
  } from "react-router-dom";
import UploadPicture from './swiper/upload-picture-swiper'


export default function ProjectPage(){
    const [project, setProject] = useState([])
    const [image, setImages] = useState([])

    const  { id } = useParams();
    const singularProject = async () => {
        try {
            const singleProject = await getSingleProject(id)
            const { status } = singleProject
            if (status == 200){
                 setProject(singleProject.data.projectData)
                 setImages(singleProject.data.singleProjectImages)
            }
            else {
              alert("Ooops something went wrong!!")
            }
            console.log("This is singularProject", singleProject)
        } catch (error) {
            console.log(error)
        }
    }
 
    useEffect(() => {
        singularProject()
      }, []);
    
    return(

        <div className='d-flex flex-column mb-4 justify-content-center align-items-center container'>

            <div className="d-flex mb-4">
                {/* project name fetch from db */}
                <h2 className="title">Project Name: {project.name}</h2>
            </div>

            <UploadPicture imageData={image} projectId={id}/>

            <button className='myBtn my-4' onClick={()=> generateTimelapse(id)}>Generate Your Timelapse</button>

            

        </div>
    )
}
