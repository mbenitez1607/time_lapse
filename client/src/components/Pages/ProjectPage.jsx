import '../../styles/main.css'

import UploadPicture from './swiper/upload-picture-swiper'


const ProjectPage = () =>{
    return(
        <div className='d-flex flex-column mb-4 justify-content-center align-items-center container'>

            <div className="d-flex mb-3">
                {/* project name fetch from db */}
                <h2 className="title">Project Name:</h2>
            </div>

            <UploadPicture />

        </div>
    )
}

export default ProjectPage