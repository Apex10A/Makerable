
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";
import CheckList from "./CheckList";

const Task = () => {
  return (
    <div className="pt-6 h-full w-[1700px] grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Tasks</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="pt-20">
            <div className="flex items-center justify-center">
                <div className="">
                <input type="text" placeholder="Add your task" className="px-6 py-3 rounded-3xl w-[350px]" />
                </div>
                <button className="bg-orange-400 px-7 absolute transform translate-x-32 rounded-3xl py-2 font-bold">Add</button>
            </div>
            
          
            <div>
                <CheckList/>
            </div>

        </div>
        
     
    </div>
  )
}

export default Task
