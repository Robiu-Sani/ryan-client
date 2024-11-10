import Cookies from "js-cookie";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import { GoogleLogin } from "@react-oauth/google";

//internal import

import CustomerServices from "../services/CustomerService";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";

const useLoginSubmit = () => {
  const router = useRouter();

  const { dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = ({
    name,
    email,
    registerEmail,
    verifyEmail,
    password,
  }) => {
    setLoading(true);
    const cookieTimeOut = 0.5;

    if (registerEmail && password) {
      console.log(registerEmail);
      CustomerServices.customerLogin({
        registerEmail,
        password,
      })
        .then((res) => {
          setLoading(false);
          router.push("/");
          toast.success("Login Success!");
          dispatch({ type: "USER_LOGIN", payload: res });
          Cookies.set("userInfo", JSON.stringify(res), {
            expires: cookieTimeOut,
          });
        })
        .catch((err) => {
          toast.error(err ? err.response.data.message : err.message);
          setLoading(false);
        });
    }
    if (name && email && password) {
      CustomerServices.verifyEmailAddress({ name, email, password })
        .then((res) => {
          setLoading(false);
          toast.success(res.message);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err);
        });
    }
    if (verifyEmail) {
      CustomerServices.forgetPassword({ verifyEmail })
        .then((res) => {
          setLoading(false);
          toast.success(res.message);
          setValue("verifyEmail");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err ? err.response.data.message : err.message);
        });
    }
  };

  //   const handleGoogleSignIn = (user) => {
  //     // console.log("google sign in", user?.credential);
  //     const cookieTimeOut = 0.5;

  //     if (user) {
  //       CustomerServices.signUpWithProvider(user?.credential)
  //         .then((res) => {
  //           setModalOpen(false);
  //           notifySuccess("Login success!");
  //           router.push(redirect || "/");
  //           dispatch({ type: "USER_LOGIN", payload: res });
  //           Cookies.set("userInfo", JSON.stringify(res), {
  //             expires: cookieTimeOut,
  //           });
  //         })

  //         .catch((err) => {
  //           notifyError(err.message);
  //           setModalOpen(false);
  //         });
  //     }
  //   };

  return {
    handleSubmit,
    submitHandler,
    // handleGoogleSignIn,
    register,
    errors,
    // GoogleLogin,
    loading,
  };
};

export default useLoginSubmit;
