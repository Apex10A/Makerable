import { subscriptions } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import CircularProgressBar from "./CircularProgressBar";
import "./Subscriptions.css";

const Subscriptions = () => {
  return (
    <div className="mt-6 subgrid-two-item grid-common grid-c5">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Personal Projects</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div>
       <CircularProgressBar/>
        </div>
        
    </div>
  )
}

export default Subscriptions
