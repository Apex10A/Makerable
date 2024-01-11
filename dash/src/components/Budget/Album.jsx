import "./Budget.css";
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";
import ContentTop from "../ContentTop/ContentTop";

const Album = () => {
  return (
    <div className="pt-10 h-full w-[1700px] grid-two-item grid-common grid-c4">
        <ContentTop/>
        <div className="pt-20 grid-c-title">
            <h3 className="grid-c-title-text">Albums</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div>
            <div className="mb-6">
                <img src="" alt="" />
                <p>All Hubs</p>
            </div>
            <div className="mb-6">
                <img src="" alt="" />
                <p>Bradford</p>
            </div>
            <div className="mb-6">
                <img src="" alt="" />
                <p>Funders</p>
            </div>

        </div>
        
     
    </div>
  )
}

export default Album
