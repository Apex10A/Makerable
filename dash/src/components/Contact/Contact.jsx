import React from 'react';
import { iconsImgs, personsImgs } from '../../utils/images';
import ContentTop from '../ContentTop/ContentTop';

const Contact = () => {
  return (
    <div className="pt-3 container-lg main-content-holder flex-1">
      <ContentTop />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">21 Contacts</h3>
        <button className="btn btn-primary">
          Create New Contact
          <img src={iconsImgs.plus} alt="Plus Icon" className="ms-2" />
        </button>
      </div>

      <div className="pt-2">
        <div className="d-flex align-items-center mb-3">
          <div className="h-40px w-40px">
            <img src={personsImgs.person_one} alt="" className="rounded-full" />
          </div>
          <div className="ps-3">
            <p className="font-weight-bold fs-lg">Adriana Jones</p>
            <p className="opacity-60">Your last update was 1 day ago</p>
          </div>
        </div>

        <div className="d-flex align-items-center mb-3">
          <div className="h-40px w-40px">
            <img src={personsImgs.person_four} alt="" className="rounded-full" />
          </div>
          <div className="ps-3">
            <p className="font-weight-bold fs-lg">Adolescent wellbeing scale respondent 9</p>
            <p className="opacity-60">Your last update was 21 days ago</p>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="h-40px w-40px">
            <img src={personsImgs.person_two} alt="" className="rounded-full" />
          </div>
          <div className="ps-3">
            <p className="font-weight-bold fs-lg">Becky</p>
            <p className="opacity-60">Your last update was 11 days ago</p>
          </div>
        </div>
      </div>

      <div className="pt-3 d-flex justify-content-end cursor-pointer">
        <p className="text-lg text-warning">show more ></p>
      </div>
    </div>
  );
};

export default Contact;
