import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import { setProducts } from "../../redux/actions/productActions";
import PostComponents from "../../components/productComponents/ProductComponents";
import Title from "../../components/Title/Title"
import "./home.css"

export default function Home() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err)
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    });
    console.log("Products: ", products)

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

            <div className="homeHomeItems1">
                <PostComponents />
            </div>
        </>


    )
}
