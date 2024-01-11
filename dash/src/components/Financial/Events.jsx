import React from 'react';
import { iconsImgs } from '../../utils/images';
import ContentTop from '../ContentTop/ContentTop';

const Events = () => {
  return (
    <div className="pt-3 container-lg main-content-holder flex-1">
      <ContentTop />
      <div className="pb-3">
        <h3 className="mb-0">Events</h3>
        <button className="btn btn-warning px-3 py-2 rounded-xl">
          Create Event
          <img src={iconsImgs.plus} alt="Plus Icon" className="ms-2" />
        </button>
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div className="col-md-3 mb-2">
          <p className="font-weight-bold mb-0">Event Title</p>
        </div>
        <div className="col-md-3 mb-2">
          <p className="font-weight-bold mb-0">Event Date</p>
        </div>
        <div className="col-md-3 mb-2">
          <p className="font-weight-bold mb-0">People featured</p>
        </div>
        <div className="col-md-3 mb-2 text-end">
          <p className="font-weight-bold mb-0">Edit Events</p>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-center pt-2 pb-2">
        <div className="col-md-3 mb-2">
          <p className="opacity-75 mb-0">Indoor Cricket challenge</p>
        </div>
        <div className="col-md-3 mb-2">
          <p className="opacity-75 mb-0">21/11/23-22/11/23, 10:00-13:00</p>
        </div>
        <div className="col-md-4 mb-2">
          <p className="opacity-75 mb-0">1 manager, 2 workers, 2 guests and 2 fish</p>
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-outline-success me-2">View</button>
          <button className="btn btn-outline-danger rounded-xl">Delete</button>
        </div>
      </div>
      <hr className="opacity-25 mb-3" />

      {/* Repeat the above structure for other events */}
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-2 pb-2">
        <div className="col-md-3 mb-2">
          <p className="opacity-75 mb-0">Football Group cup</p>
        </div>
        <div className="col-md-3 mb-2">
          <p className="opacity-75 mb-0">21/11/23 - 22/11/23, 2:00pm - 4:00pm</p>
        </div>
        <div className="col-md-4 mb-2">
          <p className="opacity-75 mb-0">1 manager, 2 workers, 2 CEOs</p>
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-outline-success me-2">View</button>
          <button className="btn btn-outline-danger rounded-xl">Delete</button>
        </div>
      </div>
      <hr className="opacity-25 mb-3" />

      <div className="d-flex flex-wrap justify-content-between align-items-center pt-2 pb-2">
        <div className="col-md-3 mb-2">
          <p className="opacity-75 mb-0">Indoor Badminton league</p>
        </div>
        <div className="col-md-3 mb-2">
          <p className="opacity-75 mb-0">21/11/23 - 22/11/23, 11:00am - 12:30pm</p>
        </div>
        <div className="col-md-4 mb-2">
          <p className="opacity-75 mb-0">1 manager, 2 workers, 3 Teachers</p>
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-outline-success me-2">View</button>
          <button className="btn btn-outline-danger rounded-xl">Delete</button>
        </div>
      </div>
      <hr className="opacity-25 mb-3" />

      {/* Repeat the above structure for more events */}
      
      <div className="pt-3 d-flex justify-content-end cursor-pointer">
        <p className="text-warning text-lg mb-0">show all ></p>
      </div>
    </div>
  );
}

export default Events;
