import "./ContentMain.css";
import Cards from "../Cards/PeopleYouFollow";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Boards";
import Budget from "../Budget/Album";
import Subscriptions from "../Subscriptions/Subscriptions";
import Savings from "../Savings/Savings";
import Financial from "../Financial/Events";
import PersonalProject from "../Loans/PersonalProject";
import Contact from "../Contact/Contact";
import Task from "../Task/Task";
import Project from "../Projects/Project";
import Organization from "../Organization/Organization";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="">
            <Transactions />
            </div>
            <div className="col-span-1">
            <Cards />
            <Report />
            <Budget /> 
            </div>
        </div>
        <div>
        <PersonalProject/>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Project/>
          <Organization/>
        </div>

        <div>
        <div>
        <Financial />
        </div>
        <div className="grid grid-cols-2 gap-6">
        <Contact/>
        <Task/>
        </div>
        </div>
        <div className="content-grid-two">
            {/* <Budget /> */}
            <div className="grid-two-item">
              <div className="subgrid-two">
                {/* 
                <Savings /> */}
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                {/* <Loans />
                <Financial /> */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain
