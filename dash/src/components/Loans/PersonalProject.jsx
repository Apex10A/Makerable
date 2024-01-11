import React from 'react';
import { iconsImgs } from '../../utils/images';
import './Loans.css';

const PersonalProject = () => {
  return (
    <div className="pt-6 container-lg subgrid-two-item grid-common grid-c7">
      <div className="pt-10 d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Personal Projects</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Plus Icon" />
        </button>
      </div>
      <div className="pt-5 row row-cols-1 row-cols-md-3">
        <div className="pb-4 col grid-c7-content">
          <div className="progress-bar">
            <div className="percent">
              <svg>
                <circle cx="105" cy="105" r="50"></circle>
                {/* <circle cx="105" cy="105" r="50" style="--percent: 50"></circle> */}
              </svg>
              <div className="number">
                <h3>50<span>%</span></h3>
              </div>
            </div>
          </div>
          <div>
            <p>I feel very lonely</p>
          </div>
        </div>
        <div className="pb-4 col grid-c7-content">
          <div className="progress-bar">
            <div className="percent">
              <svg>
                <circle cx="105" cy="105" r="50"></circle>
                {/* <circle cx="105" cy="105" r="50" style="--percent: 50"></circle> */}
              </svg>
              <div className="number">
                <h3>70<span>%</span></h3>
              </div>
            </div>
          </div>
          <div>
            <p>I feel very lonely</p>
          </div>
        </div>
        <div className="pb-4 col grid-c7-content">
          <div className="progress-bar">
            <div className="percent">
              <svg>
                <circle cx="105" cy="105" r="50"></circle>
                {/* <circle cx="105" cy="105" r="50" style="--percent: 50"></circle> */}
              </svg>
              <div className="number">
                <h3>80<span>%</span></h3>
              </div>
            </div>
          </div>
          <div>
            <p>I have lots of energy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProject;
