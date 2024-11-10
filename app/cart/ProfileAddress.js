"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function ProfileAddress({
  orderProduct,
  getQuentity,
  subTotal,
}) {
  const [user, setUser] = useState(null);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const customer = JSON.parse(localStorage.getItem("user"));
    setUser(customer);
   
    if (customer) {
      setDeliveryCharge(customer.district === "Dhaka" ? 60 : 120);
    }
  }, []);
 console.log(user)


  const onSubmit = (data) => {
    
    if (!user) {
      toast.error("No user information available");
      return;
    }

    const total = subTotal + deliveryCharge;

    const orderData = {
      city: user.customer.city,
      customerId: user.customer._id,
      deliveryCharge: deliveryCharge,
      district: user.customer.district,
      email: user.customer.email,
      houseAddress: user.customer.houseAddress,
      mobile: user.customer.mobile,
      paymentMethod: data.paymentMethod,
      products: orderProduct,
      status: "Pending",
      subTotal: subTotal,
      total: total,
      totalProduct: getQuentity,
    };

    console.log(orderData);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/order/add/${user.customer._id}`,
        orderData
      )
      .then((response) => {
        toast.success("Order submitted successfully!");
        console.log("Order submitted successfully:", response.data);
        router.push("/dashboard");
        localStorage.removeItem("wishlist")
      })
      .catch((error) => {
        toast.error("Failed to submit order.");
        console.error("Failed to submit order:", error);
      });
  };

  if (
    !user ||
    (!user.customer.district &&
      !user.customer.mobile &&
      !user.customer.houseAddress)
  ) {
    return null;
  }

  return (
    <div>
      <ToastContainer />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <div className="w-full p-1 border">
            <div className="w-full p-2 px-4 bg-gray-200 flex justify-between items-center">
              <h3 className="font-bold">User Address</h3>
              <input type="checkbox" />
            </div>
            <p className="mt-3">
              <strong>Name:</strong>{" "}
              {user ? user.customer.name : "No user information available"}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {user ? user.customer.email : "No user information available"}
            </p>
            <p>
              <strong>City:</strong>{" "}
              {user ? user.customer.city : "No information available"}
            </p>
            <p>
              <strong>District:</strong>{" "}
              {user ? user.customer.district : "No information available"}
            </p>
            <p>
              <strong>House Address:</strong>{" "}
              {user ? user.customer.houseAddress : "No information available"}
            </p>
            <p>
              <strong>Mobile:</strong>{" "}
              {user ? user.customer.mobile : "No information available"}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
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
              <div className="w-full flex flex-col gap-2">
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
            </div>
          </div>

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
            <div className="w-full p-1">
              <button
                onClick={handleSubmit(onSubmit)}
                className="bg-lime-600 text-white font-bold py-1 px-4 w-full mt-4"
              >
                Order by default address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
