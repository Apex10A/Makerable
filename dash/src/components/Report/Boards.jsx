import { iconsImgs } from "../../utils/images";
import "./Report.css";
import { reportData } from "../../data/data";

const Boards = () => {
  return (
    <div className="pt-6 h-full w-[1700px] grid-one-item grid-common grid-c3">
        <div className="pt-10 grid-c-title">
            <h3 className="grid-c-title-text">Boards</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div className="pt-20">
            <div className="mb-6">
                <img src="" alt="" />
                <p>All Hubs</p>
            </div>
            <div className="mb-6">
                <img src="" alt="" />
                <p>Birmingham- Attendance Record</p>
            </div>
            <div className="mb-6">
                <img src="" alt="" />
                <p>Birmingha- Outcomes star</p>
            </div>
        </div>
        <div>
            <p>show all</p>
        </div>
        
    
    </div>
  )
}

export default Boards
