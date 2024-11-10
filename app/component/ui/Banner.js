"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Banner() {
  const [bannerInfo, setBannerInfo] = useState({
    mainBanner: [],
    sideBanner: [],
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/banners`)
      .then((result) => setBannerInfo(result.data))
      .catch((err) => console.error("Error fetching banner info", err));
  }, []);

  const { mainBanner, sideBanner } = bannerInfo;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="w-[95%] md:w-11/12 mx-auto py-5 md:bg-white md:h-[445px] overflow-hidden">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:flex gap-2">
        {/* Main Banner Slider */}
        <Slider {...settings} className="md:w-8/12">
          {mainBanner && mainBanner.length > 0 ? (
            mainBanner.map((item, idx) => (
              <Link href={item.link || "#"} key={idx}>
                <div className="relative">
                  <Image
                    src={item.photo || "/default-image.jpg"} // Placeholder image
                    alt="Main Banner"
                    height={400}
                    width={900}
                    className="h-[195px] md:h-[400px] w-full object-cover object-center"
                    priority
                  />
                </div>
              </Link>
            ))
          ) : (
            <div className="h-[195px] md:h-[400px] w-full bg-white"></div>
          )}
        </Slider>

        {/* Side Banners */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 md:w-4/12">
          {/* Top right banner */}
          {sideBanner[0] ? (
            <Link href={sideBanner[0].link || "#"}>
              <div className="relative h-[100px] md:h-[196px]">
                <Image
                  src={sideBanner[0].photo || "/default-image.jpg"} // Placeholder image
                  alt="Top Side Banner"
                  height={192}
                  width={300}
                  className="h-[100px] md:h-[196px] w-full"
                />
              </div>
            </Link>
          ) : (
            <div className="relative h-[100px] md:h-[196px] bg-white"></div>
          )}

          {/* Bottom right banner */}
          {sideBanner[1] ? (
            <Link href={sideBanner[1].link || "#"}>
              <div className="relative h-[100px] md:h-[196px]">
                <Image
                  src={sideBanner[1].photo || "/default-image.jpg"} // Placeholder image
                  alt="Bottom Side Banner"
                  height={192}
                  width={300}
                  className="h-[100px] md:h-[196px] w-full"
                />
              </div>
            </Link>
          ) : (
            <div className="relative h-[100px] md:h-[196px] bg-white"></div>
          )}
        </div>
      </div>
    </section>
  );
}
