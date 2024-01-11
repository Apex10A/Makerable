
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";

const Organization = () => {
  return (
    <div className="pt-10 h-full w-[1700px] grid-two-item grid-common grid-c4">
        <div className="pt-10 grid-c-title">
            <h3 className="grid-c-title-text">Organization</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="pt-20">
            <div>
                <img src="" alt="" />
            </div>
            <div>
            <div>
                <p>We are the SportyKids</p>
            </div>
            <div>
                <p>Admin</p>
            </div>
            </div>
        </div>
        
        
     
    </div>
  )
}

export default Organization
