"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CartCheckout from "./CartCheckout";
import UserAddress from "./UserAddress";

export default function Page() {
  const [checkout, setCheckout] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [orderProduct, setOrderProduct] = useState([]);
  const [getQuentity, setGetQuentity] = useState([]);
  const [customer, setCustomer] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const customerData = JSON.parse(localStorage.getItem("user"));
    if (customerData) {
      setCustomer(customerData);
    }
  }, []);

  const handleCheckout = (data, total) => {
    setCheckout(data);
    setSubTotal(total);
  };

  const SelectedProduct = (product, quentity) => {
    setOrderProduct(product);
    setGetQuentity(quentity);

    if (!customer) {
      router.push("/login");
    }
  };

  return (
    <div>
      {checkout ? (
        <UserAddress
          handleCheckout={handleCheckout}
          subTotal={subTotal}
          orderProduct={orderProduct}
          getQuentity={getQuentity}
          customer={customer}
        />
      ) : (
        <CartCheckout
          handleCheckout={handleCheckout}
          SelectedProduct={SelectedProduct}
        />
      )}
    </div>
  );
}
