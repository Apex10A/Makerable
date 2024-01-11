import React from 'react';
import Transactions from './Transactions';
import WhatsOnyoMind from './WhatsOnyoMind';
import PostTwo from './PostTwo';
import './Newsfeed.css';
import PostThree from './PostThree';
import ContentTop from '../ContentTop/ContentTop';

const NewsFeed = () => {
  return (
    <div className="container-fluid pt-5 w-100" id='Newsfeed'>
      <ContentTop />
      <div className="row gx-4 gy-4">
        <div className="col-lg-6">
          <WhatsOnyoMind />
        </div>
        <div className="col-lg-6">
          <Transactions />
        </div>
      </div>
      <div className="row gx-4 gy-4">
        <div className="col-lg-6">
          <PostTwo />
        </div>
        <div className="col-lg-6">
          <PostThree />
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
