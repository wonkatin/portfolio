import Navbar from '../components/Navbar'
import Flyers from '../components/Flyers'
import Collages from '../components/Collages'


export default function Gallery() {

    return (
        <div className="main-gallery">
            <Navbar />
            <div className="gallery">
                <Collages />
                <Flyers />
            </div>
        </div>
    )
}