import "./Transactions.css";
import { transactions } from "../../data/data";
import { iconsImgs } from "../../utils/images";


const PostFour = () => {
  return (
    <div>
        <div className="mt-6 grid-one-item grid-common grid-c2 " >
   

        <div className="">
            <div className="">
                {
                    transactions.map((transaction) => (
                        <div className="" key = { transaction.id }>
                            <div className="flex items-center justify-between ">
                            <div className="grid-item-l">
                                <div className="avatar img-fit-cover">
                                    <img src={ transaction.image } alt="" />
                                </div>
                               <div>
                               <p className="font-bold pl-3">Demo sports coach</p>
                                <p className="pl-3 opacity-[0.6]">posted on 11:15 on 21st Nov 2023</p>
                               </div>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-white opacity-[0.6]">posted about 8 hours ago</span>
                            </div>
                            </div>


                            <div className="pt-2">
                            <button className="bg-orange-500 px-2 text-sm rounded-xl">Update</button>
                                    <div className="">
                                    <p className="opacity-[0.5] w-[70%]">New update by demo sports coach user working on the sample project for we are the SPortykids</p>
                                    <p className="text-2xl pt-3">Indoor Cricket session witnessed on attendance of 100 people</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between ">
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <span>0 comments</span> <span>0 Favorites</span>
                                </div>
                                </div>
                            
                            
                        </div>
                    ))
                }
                <div>
                </div>
                <div className="flex items-center justify-between pt-4">
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <input type="text" placeholder="Write a comment" className="py-3 rounded-3xl px-3 w-[300px]" />
                </div>
                <div>
                    <button className="bg-orange-500 rounded-3xl px-6 hover:bg-orange-400 py-2">Post</button>
                </div>
                </div>
            </div>
        </div>

        
    </div>
    </div>
  )
}

export default PostFour
