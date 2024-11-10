"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const [tab, setTab] = useState("signup");
  const [country, setCountry] = useState("Bangladesh");
  const [phoneCode, setPhoneCode] = useState("880");
  const [phone, setPhone] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  // Country codes for future use
  const countryPhoneCodes = {
    Afghanistan: "93",
    Albania: "355",
    Algeria: "213",
    Andorra: "376",
    Angola: "244",
    Argentina: "54",
    Armenia: "374",
    Australia: "61",
    Austria: "43",
    Azerbaijan: "994",
    Bahamas: "1-242",
    Bahrain: "973",
    Bangladesh: "880",
    Barbados: "1-246",
    Belarus: "375",
    Belgium: "32",
    Belize: "501",
    Benin: "229",
    Bhutan: "975",
    Bolivia: "591",
    "Bosnia and Herzegovina": "387",
    Botswana: "267",
    Brazil: "55",
    Brunei: "673",
    Bulgaria: "359",
    "Burkina Faso": "226",
    Burundi: "257",
    "Cabo Verde": "238",
    Cambodia: "855",
    Cameroon: "237",
    Canada: "1",
    "Central African Republic": "236",
    Chad: "235",
    Chile: "56",
    China: "86",
    Colombia: "57",
    Comoros: "269",
    "Congo, Democratic Republic of the": "243",
    "Congo, Republic of the": "242",
    "Costa Rica": "506",
    Croatia: "385",
    Cuba: "53",
    Cyprus: "357",
    "Czech Republic": "420",
    Denmark: "45",
    Djibouti: "253",
    Dominica: "1-767",
    "Dominican Republic": "1-809",
    Ecuador: "593",
    Egypt: "20",
    "El Salvador": "503",
    "Equatorial Guinea": "240",
    Eritrea: "291",
    Estonia: "372",
    Eswatini: "268",
    Ethiopia: "251",
    Fiji: "679",
    Finland: "358",
    France: "33",
    Gabon: "241",
    Gambia: "220",
    Georgia: "995",
    Germany: "49",
    Ghana: "233",
    Greece: "30",
    Grenada: "1-473",
    Guatemala: "502",
    Guinea: "224",
    "Guinea-Bissau": "245",
    Guyana: "592",
    Haiti: "509",
    Honduras: "504",
    Hungary: "36",
    Iceland: "354",
    India: "91",
    Indonesia: "62",
    Iran: "98",
    Iraq: "964",
    Ireland: "353",
    Israel: "972",
    Italy: "39",
    Jamaica: "1-876",
    Japan: "81",
    Jordan: "962",
    Kazakhstan: "7",
    Kenya: "254",
    Kiribati: "686",
    "Korea, North": "850",
    "Korea, South": "82",
    Kosovo: "383",
    Kuwait: "965",
    Kyrgyzstan: "996",
    Laos: "856",
    Latvia: "371",
    Lebanon: "961",
    Lesotho: "266",
    Liberia: "231",
    Libya: "218",
    Liechtenstein: "423",
    Lithuania: "370",
    Luxembourg: "352",
    Madagascar: "261",
    Malawi: "265",
    Malaysia: "60",
    Maldives: "960",
    Mali: "223",
    Malta: "356",
    "Marshall Islands": "692",
    Mauritania: "222",
    Mauritius: "230",
    Mexico: "52",
    Micronesia: "691",
    Moldova: "373",
    Monaco: "377",
    Mongolia: "976",
    Montenegro: "382",
    Morocco: "212",
    Mozambique: "258",
    Myanmar: "95",
    Namibia: "264",
    Nauru: "674",
    Nepal: "977",
    Netherlands: "31",
    "New Zealand": "64",
    Nicaragua: "505",
    Niger: "227",
    Nigeria: "234",
    "North Macedonia": "389",
    Norway: "47",
    Oman: "968",
    Pakistan: "92",
    Palau: "680",
    Panama: "507",
    "Papua New Guinea": "675",
    Paraguay: "595",
    Peru: "51",
    Philippines: "63",
    Poland: "48",
    Portugal: "351",
    Qatar: "974",
    Romania: "40",
    Russia: "7",
    Rwanda: "250",
    "Saint Kitts and Nevis": "1-869",
    "Saint Lucia": "1-758",
    "Saint Vincent and the Grenadines": "1-784",
    Samoa: "685",
    "San Marino": "378",
    "Sao Tome and Principe": "239",
    "Saudi Arabia": "966",
    Senegal: "221",
    Serbia: "381",
    Seychelles: "248",
    "Sierra Leone": "232",
    Singapore: "65",
    Slovakia: "421",
    Slovenia: "386",
    "Solomon Islands": "677",
    Somalia: "252",
    "South Africa": "27",
    "South Sudan": "211",
    Spain: "34",
    "Sri Lanka": "94",
    Sudan: "249",
    Suriname: "597",
    Sweden: "46",
    Switzerland: "41",
    Syria: "963",
    Taiwan: "886",
    Tajikistan: "992",
    Tanzania: "255",
    Thailand: "66",
    Togo: "228",
    Tonga: "676",
    "Trinidad and Tobago": "1-868",
    Tunisia: "216",
    Turkey: "90",
    Turkmenistan: "993",
    Tuvalu: "688",
    Uganda: "256",
    Ukraine: "380",
    "United Arab Emirates": "971",
    "United Kingdom": "44",
    "United States": "1",
    Uruguay: "598",
    Uzbekistan: "998",
    Vanuatu: "678",
    "Vatican City": "379",
    Venezuela: "58",
    Vietnam: "84",
    Yemen: "967",
    Zambia: "260",
    Zimbabwe: "263",
  };

  const onSubmit = async (data) => {
    try {
      // Check if the user already exists
      const emailCheckResponse = await axios.get(
        `/api/auth/customers/${data.email}`
      );
      if (emailCheckResponse.data.exists) {
        toast.error("A user with this email already exists!");
        return;
      }

      // Register the new user
      const registerResponse = await axios.post("/api/auth/customers", data);
      if (registerResponse) {
        toast.success("Registration successful!");

        localStorage.setItem("user", JSON.stringify(emailCheckResponse));

        // Redirect to home
        router.push("/user-profile");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
      console.error("Registration error:", error);
    }
  };

  useEffect(() => {
    const customer = JSON.parse(localStorage.getItem("user"));
    {
      customer ? router.push("/") : "";
    }
  }, [router]);

  return (
    <div className="px-2 md:px-12 pt-3 pb-10 mx-auto bg-[#F2F2F2]">
      <ToastContainer />
      <div className="flex justify-start items-center gap-2 bg-white text-black px-3 py-1 border mb-4 text-xs md:text-base">
        Register
      </div>
      <div className="flex items-center justify-center text-gray-700">
        <div className="container mx-auto md:px-4">
          <div className="max-w-full md:max-w-sm mx-auto bg-white overflow-hidden border border-gray-300 transform transition-transform duration-300">
            {/* Tabs */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setTab("signup")}
                className={`px-4 py-2 w-full font-bold text-sm md:text-base ${
                  tab === "signup"
                    ? "bg-black text-white"
                    : "bg-white border-b border-gray-300 text-black"
                }`}
              >
                Register with email
              </button>
            </div>

            {/* Sign Up Form */}
            {tab === "signup" && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 px-5 pb-4"
              >
                <div className="relative">
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-5 py-[6px] text-sm border border-gray-300 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-5 py-[6px] text-sm border border-gray-300 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    {...register("password")}
                    className="w-full px-5 py-[6px] text-sm border border-gray-300 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="w-full bg-[#72BF44] text-white py-[6px] font-semibold text-sm rounded-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => console.log("Cancelled")}
                    className="w-full bg-[#72BF44] text-white py-[6px] font-semibold text-sm rounded-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => reset()}
                    className="w-full bg-[#72BF44] text-white py-[6px] font-semibold text-sm rounded-sm"
                  >
                    Reset
                  </button>
                </div>

                <div className="flex justify-between text-xs md:text-sm">
                  <span>Forgot Password?</span>
                  <span>New Customer? Sign Up Here</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
