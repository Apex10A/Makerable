import "./Transactions.css";
import { transactions } from "../../data/data";
import { iconsImgs } from "../../utils/images";

const PostTwo = () => {
  return (
    <div className="container w-100 mx-4 mb-4 mt-4" id="">
      <div className="row row-cols-1 row-cols-md-2">
        {transactions.map((transaction) => (
          <div className="col mb-4" id="transOne" key={transaction.id}>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="h-40 avatar img-fit-cover me-3">
                      <img src={transaction.image} alt="" className="img-fluid" />
                    </div>
                    <div>
                      <p className="font-weight-bold fs-4" id="font">DEMO SPORTS COACH USER</p>
                      <p className="fs-6" id="font">posted on 11:15am 21st Nov 2023 </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-white fs-6" id="font">posted about 8 hours ago</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button className="btn btn-warning mb-3 px-3 text-sm rounded-xl">Update</button>
                  <div>
                    <p className="text-muted w-70 text-sm">{transaction.updateText}</p>
                    <p className="fs-2 pt-5 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, facere!</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-4">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="M8 14s1-1.614 3-3c1.61-1.476 2.91-2.643 3.467-4C15.105 5 12.893 2 8 2S.895 5 1.533 7c.557 1.357 1.857 2.524 3.467 4C7 12.386 8 14 8 14z" />
                      </svg>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                        <path d="M1 12s1-1 3-1 4 1 4 1 1-1 3-1 4 1 4 1 1-1 3-1 4 1 4 1 1-1 3-1 4 1 4 1 1-1 3-1 4 1 4 1v2s-1 0-2 1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1v2s-1 0-2 1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1-1-1-2-1-2 1-2 1zm11-10H5a2 2 0 0 0-2 2v10a1 1 0 0 0 1 1h2V9h2v4h2V9h2v4h2V9h2v4h2a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
                        <path d="M1.5 1.5h13v5h-13zM1.5 8.5h13v5h-13zM1.5 1.5l-6.44 6.44a2 2 0 0 0 0 2.83l.5.5a1 1 0 0 0 1.42 0L8 6.4l5.56 5.57a1 1 0 0 0 1.42 0l.5-.5a2 2 0 0 0 0-2.83L8.42 1.5a1.5 1.5 0 0 0-2.12 0L1.5 6.4 1.5 1.5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <span>0 comments</span> <span>0 Favorites</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default PostTwo;
