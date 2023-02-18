import '../../styles/homepage.css'
import UserProject from './swiper/userProject-swiper'
import Categories from './swiper/Categories-swiper'

const Homepage = () =>{
    return(
        <div className='container mb-4'>

            <div className="d-flex align-item-center container mb-0">
                <h2 className="title">Your Timelapse:</h2>
            </div>

            <UserProject />
            
            <div className="d-flex align-item-center container mt-3">
                <h2 className="title">Categories:</h2>
            </div>

            <Categories />

        </div>
    )
}

export default Homepage