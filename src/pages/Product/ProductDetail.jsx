import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import data from "../../data";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate()
  const myProduct = data.find((item) => item.id == productId);
  const handleGoBack = ()=> {navigate(-1)}
  return (
    <div className="min-h-[calc(100vh-310px)] px-11 py-5 justify-self-center mx-auto items-stretch rounded-lg shadow w-full max-w-6xl  flex flex-col m-3 relative">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black pt-3 pb-10  w-full text-center">
        Order us using telegram QR Code or call (0933654654)
      </h5>
      <div className="flex flex-col md:flex-row gap-10">
        <img
          className="p-0 rounded-t-lg h-auto max-h-72 w-fit bg-origin-content place-self-center"
          src="/qr.jpg"
          alt="product image"
        />
        <div className="px-0 pb-5 w-full min-w-xl">
          <img
            className="p-0 rounded-t-lg md:max-h-80 max-h-72 w-full bg-origin-content bg-cover"
            src={myProduct.url}
            alt="product image"
          />
          <div className="mb-10">
          <h1 className="font-bold text-gray-700 pt-3 ">Product - <span className="font-normal">{myProduct.title}</span></h1>
          <h1 className="font-bold text-gray-700 pt-3 ">Status - {myProduct.status == 1 ? <span className="font-normal rounded-md bg-yellow-400 px-3 text-black">Available</span> : <span className="font-normal px-2 rounded-md bg-red-500 text-white">Out of stock</span>}</h1>
          <h1 className="font-bold text-gray-700 ">Price - <span className="font-normal">{myProduct.price} Birr</span></h1>
          <h1 className="font-bold text-gray-700 ">Phone - <span className="font-normal">0933654654</span></h1>
          <h1 className="font-bold text-gray-700 ">Description - <span className="font-normal">{myProduct.description}</span></h1>

          {myProduct.features == "" ? "":
             <h1 className="font-bold text-gray-700 ">Features 
             <span className="font-normal">
               {myProduct.features.map(item=>
                 <li className="ml-10">{item}</li>
               )}
             </span>
           </h1>
          }
          {myProduct.whatIsInside == "" ? "":
              <h1 className="font-bold text-gray-700 ">What is inside: 
              <span className="font-normal">
                {myProduct.whatIsInside.map(item=>
                  <li className="ml-10">{item}</li>
                )}
              </span>
            </h1>
          }
         
          {myProduct.disclaimer?
            <h1 className="font-bold text-gray-700 ">Disclaimer - <span className="font-normal">{myProduct.disclaimer}</span></h1>: ""
          }

          {myProduct.warning?
            <h1 className="font-bold text-gray-700 ">Warning - <span className="font-normal">{myProduct.warning}</span></h1>: ""
          }

          {myProduct.available?
            <h1 className="font-bold text-gray-700 ">Available in - 
            <span className="font-normal">
              {myProduct.available.map(item=>(
                <li className="ml-10 ">{item}</li>
              ))}
            </span>
            </h1>: ""
          }
         


          {/* <div className="flex items-center mt-2.5 mb-5">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div> */}
          {/* <Link
            
            to="/Products"
          > */}
          {/* </Link> */}
          </div>
          <h1 className="text-right text-gray-500 hover:text-gray-800 cursor-pointer absolute bottom-5 right-10" onClick={handleGoBack}>Back to products</h1>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
