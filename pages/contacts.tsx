const Contacts = () => {
  return (
    <>
      <section>
        <div className="bg-[url('/assets/image/Rectangle9.png')] absolute w-[1280px] h-[615px] left-0 top-[2303px] bottom-[198px] -z-50"></div>
        <div className="bg-[#EEEEEE] absolute w-[553px] h-[410px] left-[364px] right-[363px] top-[2386px] bottom-[320px] rounded-[18.96px] box-content shadow-lg shadow-slate-400 z-40">
          <input
            placeholder=""
            className="peer w-[474px] h-0 border-b-[2.37px] border-blue-[#0099E1] bg-transparent pt-4 
                pb-1.5 font-Poppins text-base font-medium text-blue-gray-700 outline outline-0 
                transition-all placeholder-shown:border-blue-gray-200 
                focus:border-[#0099E1] focus:outline-0 disabled:border-0 
                disabled:bg-blue-gray-50 left-[47.92px] right-[41.08px] top-[64.24px] bottom-[345.76px]
                absolute items-center z-50 "
          />

          <label
            className=" after:content[' '] pointer-events-none absolute flex h-[20px] w-[84px] 
              select-none font-Mulish text-base font-medium leading-tight text-[#2E0249] 
            transition-all after:absolute after:block after:w-full after:scale-x-0 
            after:border-b-2 after:border-[#0099E1] after:transition-transform after:duration-300 
            peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-base 
            peer-focus:leading-tight peer-focus:text-[#0099E1] peer-focus:after:scale-x-100 
            peer-focus:after:border-[#0099E1] peer-disabled:text-transparent after:font-Poppins
            peer-disabled:peer-placeholder-shown:text-blue-gray-500 
            left-[50px] right-[431.08px] top-[60px] bottom-[352.08px] 
            after:-top-[64.24px] after:-bottom-[345.76px] after:left-[47.92px] after:right-[41.08px] z-50 "
          >
            Your Name
          </label>

          <input
            placeholder=""
            className="peer w-[474px] h-0 border-b-[2.37px] border-blue-[#0099E1] bg-transparent pt-4 
                pb-1.5 font-Poppins text-base font-medium text-blue-gray-700 outline outline-0 
                transition-all placeholder-shown:border-blue-gray-200 
                focus:border-[#0099E1] focus:outline-0 disabled:border-0 
                disabled:bg-blue-gray-50 left-[47.92px] right-[41.08px] top-[141.12px] bottom-[268.88px]
                absolute items-center z-50 "
          />

          <label
            className=" after:content[' '] pointer-events-none absolute flex h-[20px] w-[84px] 
              select-none font-Mulish text-base font-medium leading-tight text-[#2E0249] 
            transition-all after:absolute after:block after:w-full after:scale-x-0 
            after:border-b-2 after:border-[#0099E1] after:transition-transform after:duration-300 
            peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-base 
            peer-focus:leading-tight peer-focus:text-[#0099E1] peer-focus:after:scale-x-100 
            peer-focus:after:border-[#0099E1] peer-disabled:text-transparent after:font-Poppins
            peer-disabled:peer-placeholder-shown:text-blue-gray-500 
            left-[50px] right-[437.08px] top-[132px] bottom-[275.2px] 
            after:-top-[64.24px] after:-bottom-[345.76px] after:left-[47.92px] after:right-[41.08px] "
          >
            Your email
          </label>

          <input
            placeholder=""
            className="peer w-[474px] h-0 border-b-[2.37px] border-blue-[#0099E1] bg-transparent pt-4 
                pb-1.5 font-Poppins text-base font-medium text-blue-gray-700 outline outline-0 
                transition-all placeholder-shown:border-blue-gray-200 
                focus:border-[#0099E1] focus:outline-0 disabled:border-0 
                disabled:bg-blue-gray-50 left-[47.92px] right-[41.08px] top-[218px] bottom-[192px]
                absolute items-center z-50 "
          />

          <label
            className=" after:content[' '] pointer-events-none absolute flex h-[20px] w-[84px] 
              select-none font-Mulish text-base font-medium leading-tight text-[#2E0249] 
            transition-all after:absolute after:block after:w-full after:scale-x-0 
            after:border-b-2 after:border-[#0099E1] after:transition-transform after:duration-300 
            peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-base 
            peer-focus:leading-tight peer-focus:text-[#0099E1] peer-focus:after:scale-x-100 
            peer-focus:after:border-[#0099E1] peer-disabled:text-transparent after:font-Poppins
            peer-disabled:peer-placeholder-shown:text-blue-gray-500 
            left-[50px] right-[437.08px] top-[210px] bottom-[198.32px] 
            after:-top-[64.24px] after:-bottom-[345.76px] after:left-[47.92px] after:right-[41.08px] "
          >
            Your message
          </label>
        </div>

        <div>
          <button className="flex flex-row items-center p-[18.96px 50.56px] gap-[12.64px] absolute bg-[#0099E1] rounded-[12.64px] w-[250.72px] h-[61.92px] left-[400px] right-[627.28px] top-[2673px] bottom-[381.1px] z-50">
            <p
              className="absolute font-Poppins font-medium text-center text-white text-[15.8]
            w-[118px] h-[24px] left-[82.16px] right-[50.56px] top-[18.96px] bottom-[18.96px] z-50"
            >
              SEND MESSAGE
            </p>
            <img
            src="../assets/image/avion.png"
            alt="Avion"
            className="absolute w-[18.96px] h-[18.96px] Left-[50.56px]  right-[181.2px]  top-[22.68px] bottom-[21.48px] z-50 "
          />
          </button>
        </div>
      </section>
    </>
  );
};

export default Contacts;
