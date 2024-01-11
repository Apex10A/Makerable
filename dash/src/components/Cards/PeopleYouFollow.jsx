import { iconsImgs } from "../../utils/images";
import { personsImgs } from "../../utils/images";
import "./Cards.css";

const PeopleYouFollow = () => {
  return (
    <div className="pt-6 h-full lg:w-[1700px] grid-one-item grid-common grid-c1">
        <div className="pt-10 grid-c-title">
            <h3 className="grid-c-title-text">People you follow</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div className="pt-20">
        <div className="flex gap-3 items-center pb-4">
                <div className="h-[40px] w-[40px]">
                <img src={personsImgs.person_two} alt="" className="rounded-full" />
                </div>
                <div>
                <h2>Leminar Josh</h2>
                <p  className="opacity-[0.6] text-sm">Lead Designer</p>
                </div>
            </div>
            <div className="flex gap-3 items-center pb-4">
                <div className="h-[40px] w-[40px]">
                <img src={personsImgs.person_one} alt="" className="rounded-full" />
                </div>
                <div>
                <h2>Scott Mctominay</h2>
                <p  className="opacity-[0.6] text-sm">Backend Developer</p>
                </div>
            </div>
            <div className="flex gap-3 items-center pb-4">
                <div className="h-[40px] w-[40px]">
                <img src={personsImgs.person_three} alt="" className="rounded-full" />
                </div>
                <div>
                <h2>Jack Grealish</h2>
                <p  className="opacity-[0.6] text-sm">ML python Developer</p>
                </div>
            </div>
            <div className="flex gap-3 items-center pb-4">
                <div className="h-[40px] w-[40px]">
                <img src={personsImgs.person_one} alt="" className="rounded-full" />
                </div>
                <div>
                <h2>Scott Mcpherson</h2>
                <p  className="opacity-[0.6] text-sm">Project Manager</p>
                </div>
            </div>
            <div className="flex gap-3 items-center pb-4">
                <div className="h-[40px] w-[40px]">
                <img src={personsImgs.person_one} alt="" className="rounded-full" />
                </div>
                <div>
                <h2>Edmund Elliot</h2>
                <p  className="opacity-[0.6] text-sm">CTO</p>
                </div>
            </div>

        </div>

        <div>
            <p>Load More > </p>
        </div>
        
    </div>
  )
}

export default PeopleYouFollow
