"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileAddress from "./ProfileAddress";
import { useRouter } from "next/navigation";

export default function UserAddress({
  subTotal,
  handleCheckout,
  orderProduct,
  getQuentity,
  customer,
}) {
  const router = useRouter();
  const bangladeshDistricts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barishal",
    "Bhola",
    "Bogra",
    "Brahmanbaria",
    "Chandpur",
    "Chapai Nawabganj",
    "Chattogram",
    "Chuadanga",
    "Cox's Bazar",
    "Cumilla",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokathi",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [deliveryCharge, setDeliveryCharge] = useState(120);
  const district = watch("district");

  useEffect(() => {
    setDeliveryCharge(district === "Dhaka" ? 60 : 120);
  }, [district]);

 console.log("Customer cheking" ,customer)
  const onSubmit = async (data) => {
    const orderData = {
      products: orderProduct,
      totalProduct: getQuentity,
      status: "pending",
      email: customer?.customer.email || "",
      customerId: customer? customer.customer._id : "" ,
      status: "Pending",
      email: customer?.email || "",
      subTotal,
      deliveryCharge,
      total: subTotal + deliveryCharge,
      ...data,
    };

    try {
      console.log(customer)
      const response = await axios.post(
        
        `${process.env.NEXT_PUBLIC_BASE_URL}/order/add/${customer.customer._id}`,
        orderData
      );

      console.log(response)
      if (response.status === 201) {
        toast.success("Order placed successfully!");
        handleCheckout(false);
        router.push("/dashboard");
          // localStorage.removeItem("wishlist")
      } else {
        toast.error("Failed to place the order.");
        
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-3 container mx-auto">
      <ToastContainer />
      <div className="flex justify-start items-center gap-2 bg-white px-3 py-1 border mb-4 text-xs md:text-base">
        <FaHome /> Checkout
      </div>
      <ProfileAddress
        orderProduct={orderProduct}
        subTotal={subTotal}
        getQuentity={getQuentity}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <div className="w-full p-1 border">
          <div className="w-full p-2 px-4 bg-gray-200">
            <h3 className="font-bold">1. Delivery</h3>
          </div>
          <div className="w-full p-3">
            <label className="font-bold">District</label>
            <select
              {...register("district", { required: "District is required" })}
              className="w-full p-1 border"
            >
              <option value="">Select District</option>
              {bangladeshDistricts.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.district && (
              <span className="text-red-500 text-sm">
                {errors.district.message}
              </span>
            )}
          </div>
          <div className="w-full p-3">
            <label className="font-bold">City/Upazila</label>
            <input
              type="text"
              {...register("city", { required: "City/Upazila is required" })}
              className="w-full p-1 px-3 border"
              placeholder="City / Upazila"
            />
            {errors.city && (
              <span className="text-red-500 text-sm">
                {errors.city.message}
              </span>
            )}
          </div>
          <div className="w-full p-3">
            <label className="font-bold">House Address</label>
            <input
              type="text"
              {...register("houseAddress", {
                required: "House address is required",
              })}
              className="w-full p-1 px-3 border"
              placeholder="House Address"
            />
            {errors.houseAddress && (
              <span className="text-red-500 text-sm">
                {errors.houseAddress.message}
              </span>
            )}
          </div>
          <div className="w-full p-3">
            <label className="font-bold">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-1 px-3 border"
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full p-3">
            <label className="font-bold">Mobile</label>
            <input
              type="number"
              {...register("mobile", { required: "Mobile number is required" })}
              className="w-full p-1 px-3 border"
              placeholder="Mobile Number"
            />
            {errors.mobile && (
              <span className="text-red-500 text-sm">
                {errors.mobile.message}
              </span>
            )}
          </div>
          <div className="w-full p-3 border">
            <p className="font-bold text-sm">Attention</p>
            <span className="text-sm text-gray-500">
              01. A notification will be sent (within 1 to 7 days) when the
              product is ready for delivery.
            </span>
            <br />
            <span className="text-sm text-gray-500">
              02. Delivery and handling charges must be paid in advance.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full p-1 border">
            <div className="w-full p-2 px-4 bg-gray-200">
              <h3 className="font-bold">2. Payment</h3>
            </div>
            <div className="p-3">
              <label>
                <input
                  {...register("paymentMethod", {
                    required: "Please select a payment method",
                  })}
                  type="radio"
                  value="Cash on Delivery"
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <br />
              <label>
                <input
                  {...register("paymentMethod", {
                    required: "Please select a payment method",
                  })}
                  type="radio"
                  value="Online Payment"
                  className="mr-2"
                />
                Online Payment
              </label>
              {errors.paymentMethod && (
                <span className="text-red-500 text-sm">
                  {errors.paymentMethod.message}
                </span>
              )}
            </div>
          </div>
          <div className="w-full p-1 border">
            <div className="w-full p-2 px-4 bg-gray-200">
              <h3 className="font-bold">Complete Order</h3>
            </div>
            <div className="p-3">
              <small className="mb-4">
                Delivery and additional costs are calculated based on the values
                you have entered. Customer is liable to pay courier fees for
                deliveries to cities without branches.
              </small>
              <div className="w-full flex my-3 flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-bold">Sub Total</h3>
                  <h3 className="font-bold">{subTotal}</h3>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-bold">Delivery</h3>
                  <h3 className="font-bold">{deliveryCharge}</h3>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-bold">Total</h3>
                  <h3 className="font-bold">{subTotal + deliveryCharge}</h3>
                </div>
              </div>
              <div className="p-3">
                <button
                  type="submit"
                  className="p-1 text-center w-full font-bold text-white bg-lime-600"
                >
                  Purches
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
