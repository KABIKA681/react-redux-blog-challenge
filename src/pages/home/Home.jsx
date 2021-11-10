import Title from "../../components/Title/Title"
import { useEffect } from "react";
import fetchProduct from "../../redux/actions/fetchProduct";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css"
import Loader from "../../components/common/Loader";

export default function Home() {
    const { products : { productList }} = useSelector(({products}) => ({products}))
    // const data = useSelector((state) => state.products);
    const dispatch = useDispatch();


    useEffect(() => {
        fetchProduct()(dispatch)
    }, [])

    console.log("productList: ", productList)

    return (
        <>
            <div className="home">
                <Title />
                <div className="homeHomeItems">
                    <div className="homeImg">
                        <img className="homeHomeImg" src="https://images.pexels.com/photos/9705684/pexels-photo-9705684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className="homeParagraph">
                        <span className="homeDate">26 October 2021</span>
                        <span className="homeBody">African Love has been <br></br>Among the best given <br></br>allover the gloge</span>
                        <span className="homeComment">Never try to rush, life is not easy; follow your dreamsNever try to rush, <br></br>life is not easy; follow your dreams Never try <br></br>to rush, life is not easy; follow your dreams</span>
                    </div>
                </div>
            </div>
            <div className="homeList">
            {productList.data ? productList.data.map((item) => (
             
                
                <div className="homeHomeItems1">
                <div className="postsPost"> <Link to="/singlePost">
                <div className="pposts">
                      <div className="homePosts">
                           <img src="https://images.pexels.com/photos/9705763/pexels-photo-9705763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                </div>
                                  <div className="postDate"> 03 November 2021</div>
                                     <div className="postTitle">
                                         <h2>{item.title}</h2>
                                      </div>
                                   <div className="postBody">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt accusamus sit facere aut itaque excepturi rerum hic? Fugiat debitis blanditiis enim eum ibus quidem non.</p>
                                </div>
                            </div>
                    </Link>
                        </div>
                        
                    </div> 
                    
                          
           )) : (<Loader/>)}
            </div>  
        </>


    )
}
