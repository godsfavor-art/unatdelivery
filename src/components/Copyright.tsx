import { mopesa, discover, visa, paypal, mastercard } from '../utils/image'
import CustomSelect from './CustomSelect';

const Copyright = () => {
  // const languageOptions = [
  //   {
  //     value: "en-us",
  //     label: "English (US)",
  //     icon: (
  //       <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center text-xs">
  //         🇺🇸
  //       </div>
  //     ),
  //   },
  //   {
  //     value: "en-gb",
  //     label: "English (UK)",
  //     icon: (
  //       <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs">
  //         🇬🇧
  //       </div>
  //     ),
  //   },
  //   {
  //     value: "es",
  //     label: "Spanish",
  //     icon: (
  //       <div className="w-5 h-5 rounded-full bg-yellow-200 flex items-center justify-center text-xs">
  //         🇪🇸
  //       </div>
  //     ),
  //   },
  // ];

  // const currencyOptions = [
  //   { value: "kes", label: "KES" },
  //   { value: "usd", label: "USD" },
  //   { value: "eur", label: "EUR" },
  // ];

  const currencyOptions = ["KES", "USD", "EUR"];
  const languageOptions = ["English (US)", "English (UK)", "Spanish"];


  return (
    <div>
      {/* Logo and Payment Methods */}
      <div className="border-t border-[#E4E4E4]"></div>
      <div className="py-6 w-10/12 mx-auto flex flex-col md:flex-row justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-xl font-bold text-[#30797C]">
            Travelsy
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-center space-x-3">
          {/* Payment method logos */}
          <div className="grid grid-cols-2 md:flex gap-8 items-center">
            <img src={mopesa} alt="M-PESA" className=" w-[70px]" />
            <img src={discover} alt="Discover" className=" w-[70px]" />
            <img src={visa} alt="Visa" className=" w-[70px]" />
            <img src={paypal} alt="PayPal" className=" w-[70px]" />
            <img src={mastercard} alt="Mastercard" className=" w-[50px]" />
          </div>

          {/* Language and Currency Selectors */}
          <div className="flex items-center gap-2 md:ml-4 mt-7 md:mt-0">
            {/* <select className="border rounded p-1 text-sm">
              <option>English (United States)</option>
            </select>
            <select className="border rounded p-1 text-sm ml-2">
              <option>KES</option>
            </select> */}
            <CustomSelect
              options={languageOptions}
              defaultValue={languageOptions[0]}
              country={true}
            />

            <CustomSelect
              options={currencyOptions}
              defaultValue={currencyOptions[0]}
              width="w-24"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#E4E4E4]"></div>
      <div className="mt-6 pb-6 w-10/12 mx-auto text-sm flex flex-col gap-2 md:flex-row justify-between items-center text-gray-600">
        <div>Copyright © 2019 Travelsy Ltd. All rights reserved</div>
        <div>Made in Kenya by Ralak</div>
      </div>
    </div>
  );
}

export default Copyright