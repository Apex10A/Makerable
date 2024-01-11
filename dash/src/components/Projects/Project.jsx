
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";

const Project = () => {
  return (
    <div className="pt-6 h-full lg:w-[1700px] grid-two-item grid-common grid-c4">
        <div className="pt-10 grid-c-title">
            <h3 className="grid-c-title-text">Projects</h3>
            <button className="flex grid-c-title-icon">
                Add New Project
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="pt-20">
        <div>
            <p className="text-lg pb-3">Training Project</p>
        </div>
        <div>
        <p className="text-lg pb-3">Adaptation Application</p>
        </div>
        <div>
        <p className="text-lg pb-3">Birmingham youth</p>
        </div>
        </div>

    
        
    </div>
  )
}

export default Project
