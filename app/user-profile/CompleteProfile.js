"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CompleteProfile() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

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
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const customer = JSON.parse(localStorage.getItem("user"));
    if (!customer) {
      router.push("/login");
    } else {
      setUserEmail(customer.email);
    }
  }, [router]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.patch(
        `/api/auth/customers/${userEmail}`,
        data
      );
      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify(response.data.customer));
        reset();
      }
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
      <div className="w-full p-1 mb-4 border">
        <ToastContainer />
        <div className="w-full p-2 px-4 bg-gray-200">
          <h3 className="font-bold">Profile Info</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <div className="p-3">
            <button
              type="submit"
              className="w-full p-1 mt-2 font-bold bg-lime-600 cursor-pointer text-white text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
