'use client';
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome, FaLongArrowAltRight, FaUser } from "react-icons/fa";


const Page = () => {
    const [showDiv , setShowDiv] = useState(1)
    const [myOrders, setMyOrders] = useState([])
    const [user, setUser] = useState(null);

  
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        gender: "",
        password: "",
        confirmPassword: "",
        oldPassword: "",
      });
   

    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      useEffect(() => {
        const customer = JSON.parse(localStorage.getItem("user"));
        setUser(customer);
      }, []);

      useEffect(() => {
        axios
          .get(`${process.env.NEXT_PUBLIC_BASE_URL}/order/${user?.customer._id}`)
          .then((result) => setMyOrders(result.data))
          .catch((err) => console.error("Error fetching orders items", err));
      }, [user?.customer._id]);
      
      console.log(user?.customer._id)
      console.log(myOrders.orders)
    
    return (
        <div className="min-h-screen bg-[#F2F2F2] text-black py-4 lg:px-10 px-4 ">
            <div className="flex justify-start items-center gap-2 bg-white px-3 py-1 border  ">
                <FaHome /> <FaLongArrowAltRight /> My Account
            </div>

            <div className='flex lg:flex-row flex-col justify-between my-3 gap-3 items-start'>
            <div className="lg:w-[25%] w-full  "> 
                <div className="p-3 flex justify-start bg-white items-center gap-3 border rounded-md">
                <FaUser className="text-6xl text-[#212529]" />
                <div>
                    <p className="font-semibold text-lg text-[#212529]">N/A</p>
                    <p className="font-semibold text-sm text-gray-600">{user?.customer.mobile}</p>
                    <p className="font-semibold text-sm text-gray-600">N/A</p>
                </div>
                </div>

                <div className="p-2 flex justify-start flex-col bg-white items-center my-2  border rounded-md">
                    <div onClick={()=> setShowDiv(1)} className={`${showDiv === 1?"bg-black text-white":"bg-white text-black"} border-t border-x cursor-pointer border-gray-600 font-bold text-center p-2 w-full text-base`}>
                        Orders
                    </div>
                    <div onClick={()=> setShowDiv(2)} className={`${showDiv === 2?"bg-black text-white":"bg-white text-black"} border border-gray-600 cursor-pointer font-bold text-center p-2 w-full text-base`}>
                        Profile
                    </div>
                    <div onClick={()=> setShowDiv(3)} className={`${showDiv === 3?"bg-black text-white":"bg-white text-black"} border-b border-x cursor-pointer border-gray-600 font-bold text-center p-2 w-full text-base`}>
                        Favorites
                    </div>
                </div>
            </div>
            <div className="lg:w-[75%] w-full"> 

            <div className="p-3 flex justify-start bg-white items-center gap-3 border rounded-md">
           {showDiv === 1 && 
             <div className=" mx-auto p-2 w-full">
             <h2 className="text-lg font-semibold mb-4">My Orders</h2>

             {
            
                myOrders?.orders?.length > 0 ? (
                  myOrders.orders.map((order) => (
                    <div
                      key={order._id}
                      className="bg-gray-100 flex justify-between lg:flex-row flex-col items-center p-4 rounded-sm border border-gray-300 w-full mb-4"
                    >
                      <div>
                        <h3 className="text-lg font-bold">Order # {order._id.slice(0, 7)}</h3>
                        <Link href={"/"}>
                          <p className="text-blue-600 underline text-sm">VIEW ORDER →</p>
                        </Link>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="inline-flex items-center text-red-600 text-sm font-semibold">
                          <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                          {order.status}
                        </span>
                      </div>
              
                      <div className="flex items-center">
                        <span className="text-gray-600 text-sm mr-2">
                          {new Date(order.createdAt).toLocaleDateString("en-US")}
                        </span>
                      </div>
                      
                      <div className="text-lg font-semibold text-gray-700">Tk {order.subTotal}</div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600 text-center">No orders found.</p>
                )
              }
              
           
           </div>
           }
            {showDiv === 2 && 
       
            <div className="min-w-full mx-auto p-2">
            <form onSubmit={handleSubmit} className="border w-full">
            <h2 className="m-2 font-semibold text-base">Account Information</h2>
            <div className="grid lg:grid-cols-2 p-2 grid-cols-1 lg:gap-3 gap-2 w-full">
                <div className="">
                  
                <label className="block text-sm font-medium mb-2"> Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Full Name"
                    className="w-full border border-gray-300 p-2  outline-none h-[35px]"
                />
                </div>

                <div className="">
                <label className="block text-sm font-medium mb-2">Phone No</label>
                <div className="flex">
                    <input
                    type="text"
                    disabled
                    value="880"
                    className="w-16 border border-gray-300 p-2 h-[35px]"
                    />
                    <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="1992756161"
                    className="w-full border border-gray-300 p-2  outline-none h-[35px]"
                    />
                </div>
                </div>

                <div className="">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    className="w-full border border-gray-300 p-2  outline-none h-[35px]"
                />
                </div>

                <div className="">
                <label className="block text-sm font-medium mb-2">Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter Address"
                    className="w-full border border-gray-300 p-2  outline-none h-[35px]"
                />
                </div>

                <div className="">
                <label className="block text-sm font-medium mb-2">Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2  outline-none h-[35px]"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>

                <div className="">
                <label className="block text-sm font-medium mb-2">Profile Image</label>
                <input
                    type="file"
                    name="image"
                    className="w-full border border-gray-300 p-2  outline-none h-[35px]"
                />
                </div>

                </div>

                <button
                type="submit"
                className=" bg-[#1C1F23] m-2 text-white p-2 rounded-md"
                >
                Update Information
                </button>
                
            </form>

            <hr className="my-8" />

            <form onSubmit={handleSubmit} className="border w-full">
            <h2 className="m-2 font-semibold text-base">Password</h2>
            <div className="grid lg:grid-cols-3 p-2 grid-cols-1 lg:gap-3 gap-2 w-full">
                <div className="">
                <label className="block text-sm font-medium mb-2">Old Password</label>
                <input
                    type="password"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleInputChange}
                    placeholder="Enter Old Password"
                    className="w-full border border-gray-300 p-2  outline-none h-[35px]"
                />
                </div>

                <div className="">
                <label className="block text-sm font-medium mb-2">New Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter New Password"
                    className="w-full border border-gray-300 p-2  outline-none h-[35px]"
                />
                </div>

                <div className="">
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Enter Confirm Password"
                    className="w-full border border-gray-300 p-2  outline-none h-[35px]"
                />
                </div>
                </div>
                <button
                type="submit"
                className=" bg-[#1C1F23] m-2 text-white p-2 rounded-md"
                >
                Update Password
                </button>
            </form>
            </div>
 
          
           }
            {showDiv === 3 && 
           <div>
            <div className="flex justify-start items-center gap-2">
                <p className="font-semibold text-base">Favorites </p> <p className="font-semibold text-gray-700 text-sm">(0 Products found)</p>
            </div>
           </div>
           }
           
            </div>
            </div>
            
            </div>

            
        </div>
    );
}

export default Page;
