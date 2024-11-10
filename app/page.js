import { Button } from "@nextui-org/react";
import Image from "next/image";
import Banner from "./component/ui/Banner";
import Services from "./component/ui/services";
import Categories from "./component/ui/Categories";
import Products from "./component/products/Products";
import Brands from "./component/ui/Brands";
import OnlineShop from "./component/ui/OnlineShop";

export default function Home() {
  return (
    <main className="bg-[#F2F2F2]">
      <div>
        <Banner/>
        <Services/>
        <Categories/>
        <Products/>
        <Brands/>
        {/* <OnlineShop/> */}
      </div>
    </main>
  );
}
