import React, { useState, useEffect } from 'react';
import { getSingleProject, generateTimelapse } from "../../utils/API";
import '../../styles/main.css';
import {
    useParams,
    useNavigate
} from "react-router-dom";
import UploadPicture from './swiper/upload-picture-swiper';
import Loading from '../Loading';

export default function ProjectPage() {
    const [project, setProject] = useState([]);
    const [image, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams();

    const singularProject = async () => {
        try {
            const singleProject = await getSingleProject(id)
            const { status } = singleProject
            if (status == 401) {
                localStorage.removeItem("@token")

                navigate('/login')
                return
            }
            if (status == 200) {
                setProject(singleProject.data.data.projectData)
                setImages(singleProject.data.data.singleProjectImages)
            }
            else {
                alert("Ooops something went wrong!!")


            }
            console.log("This is singularProject", singleProject);
        } catch (error) {
            console.log(error);
        }
    };

    const generateProjectTimelapse = async () => {
        try {
            setIsLoading(true);
            const projectTimelapse = await generateTimelapse(id)
            const { status, data } = projectTimelapse
            if (status == 401) {
                localStorage.removeItem("@token")

                navigate('/login')
                return
            }
            if (status == 200) navigate(`/result/${data.data.gifFile}`);
            else {
                alert("Ooops something went wrong!!")
            }


        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false); 
        }

    }


    useEffect(() => {
        singularProject();
    }, []);

    return (
        <div className='d-flex flex-column mb-4 justify-content-center align-items-center container'>
            <div className="d-flex mb-4">
                <h2 className="title">Project Name: {project.name}</h2>
            </div>
            <UploadPicture imageData={image} projectId={id} />

            <button className='myBtn my-4' onClick={generateProjectTimelapse}>
                {isLoading ? <Loading /> : 'Generate Your Timelapse'}
                {/* <Loading/> */}
            </button>
        </div>
    );
}
