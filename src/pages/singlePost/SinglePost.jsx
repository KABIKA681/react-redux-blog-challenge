import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../../redux/actions/fetchProduct";
import "./singlePost.css"

const SingleProduct = () => {
    const product = useSelector(state => state.product);
    console.log(product)
    const { productId } = useParams();
    const dispatch = useDispatch()

    console.log(productId)

    const fetchSinglePost = async() => {
        const res = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => {
             console.log("Err", err)
            })
        
        // dispatch(selectedProduct(res.data));
    }
    useEffect(() => {
         fetchSinglePost()
    },);

    return (
        <div className="single">
        <div className="singlePicture">
            <img src="https://images.pexels.com/photos/9705684/pexels-photo-9705684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </div>
        <div className="singleParagraph">
            <h1>title</h1>
                <p> Lorem ipsum dolor sit amet conse
                    ctetur adipisicing elit. Dolor omnis
                    , blanditiis dolorem at eaque eius no
                    strum ex nisi quas m
                    inima facilis corporis, inventore dese
                    runt nemo illum, recusandae possimus harum incidunt.</p>
        </div>
    </div>
    );
};
export default SingleProduct;






// export default function SinglePost() {

//     const products = useSelector(state => state.products);
//     const { body} = products

//     const {productBody} = useParams()
//     const dispatch = useDispatch()
//     console.log(productBody)

//     const fetchSinglePost = async () => {
//         const res = await axios
//             .get("https://fakestoreapi.com/products/1")
//             .catch((err) => {
//                 console.log("Err", err)
//             })
//         dispatch(selectedProduct(res.data))
//         // console.log(res.data)
//     };
//     useEffect(() => {
//         fetchSinglePost();
//     })
//     return (
//         <div className="single">
//             <div className="singlePicture">
//                 <img src="https://images.pexels.com/photos/9705684/pexels-photo-9705684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
//             </div>
//             <div className="singleParagraph">
//                 <h1>{body.title}</h1>
//                 <p> {body.body}</p>
//             </div>
//         </div>
//     );
// };
