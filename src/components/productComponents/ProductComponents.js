import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./productComponents.css"

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderPosts = products.map((product) => {
    const {id, title, body } = product;
        return (
          <div className="postsPost"> <Link to="/singlePost">
          <div className="pposts">
                 <div className="homePosts">
                     <img src="https://images.pexels.com/photos/9705763/pexels-photo-9705763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                          </div>
                             <div className="postDate"> 03 November 2021</div>
                                 <div className="postTitle">
                                   <h2>{ title}</h2>
                                 </div>
                             <div className="postBody">
                               <p>{body }</p>
                         </div>
                     </div>
                </Link>
                     </div>
      )
    })

  return (
        <>{renderPosts}</>
    );
  };

export default ProductComponents;

