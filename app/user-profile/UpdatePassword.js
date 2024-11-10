"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpdatePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const customer = JSON.parse(localStorage.getItem("user"));
    setUser(customer);
  }, []);

  const onSubmit = async (data) => {
    // Validate previous password
    if (user && data.previousPassword !== user.password) {
      setError("previousPassword", {
        type: "manual",
        message: "Previous password is incorrect",
      });
      return;
    }

    // Validate new password and confirm password match
    if (data.newPassword !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    // Update password in database
    try {
      const response = await axios.patch(`/api/auth/customers/${user.email}`, {
        password: data.newPassword,
      });

      // Update localStorage with new password
      const updatedUser = { ...user, password: data.newPassword };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);

      toast.success("Password updated successfully!");
    } catch (error) {
      toast.error("Failed to update password. Please try again.");
      console.error("Error updating password:", error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <ToastContainer />
      <div className="w-full p-1 mt-0 sm:-mt-4 border">
        <div className="w-full p-2 px-4 bg-gray-200">
          <h3 className="font-bold">User Information</h3>
        </div>
        <p className="mt-3">
          <strong>Name:</strong>{" "}
          {user ? user.name : "No user information available"}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {user ? user.email : "No user information available"}
        </p>
        <p>
          <strong>City:</strong> {user ? user.city : "No information available"}
        </p>
        <p>
          <strong>District:</strong>{" "}
          {user ? user.district : "No information available"}
        </p>
        <p>
          <strong>House Address:</strong>{" "}
          {user ? user.houseAddress : "No information available"}
        </p>
        <p>
          <strong>Mobile:</strong>{" "}
          {user ? user.mobile : "No information available"}
        </p>
      </div>

      <div className="w-full sm:mb-4 p-1 border">
        <div className="w-full p-2 px-4 bg-gray-200">
          <h3 className="font-bold">Change Password</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full p-3">
            <label className="font-bold">New Password</label>
            <input
              type="password"
              {...register("newPassword", {
                required: "New password is required",
              })}
              className="w-full p-1 px-3 border"
              placeholder="New Password"
            />
            {errors.newPassword && (
              <span className="text-red-500 text-sm">
                {errors.newPassword.message}
              </span>
            )}
          </div>
          <div className="w-full p-3">
            <label className="font-bold">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your new password",
              })}
              className="w-full p-1 px-3 border"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="w-full p-3">
            <label className="font-bold">Previous Password</label>
            <input
              type="password"
              {...register("previousPassword", {
                required: "Previous password is required",
              })}
              className="w-full p-1 px-3 border"
              placeholder="Previous Password"
            />
            {errors.previousPassword && (
              <span className="text-red-500 text-sm">
                {errors.previousPassword.message}
              </span>
            )}
          </div>
          <div className="p-3">
            <button
              type="submit"
              className="mt-4 bg-lime-600 text-white font-bold py-1 px-4 w-full"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
