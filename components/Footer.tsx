const Footer = () => {
  return (
    <>
      <section>
        <div className="bg-[#07469C] absolute w-[1280px] h-[198px] left-0 top-[2918px] -z-50"></div>
        <div className="absolute bg-white rounded-full left-[98px] right-[1127px] top-[3002px] bottom-[59px] w-[55px] h-[55px]"></div>
        <img
          src="/assets/image/mail.png"
          alt=""
          className="absolute w-[25px] h-[20px] left-[113.5px] right-[1141.5px] top-[3020px] bottom-[76px]"
        />
        <p className="absolute font-Inter font-medium text-base text-white w-[216px] h-[19px] left-[160px] top-[3020px]">
          contact.forwork@gmail.com
        </p>
      </section>

      <section>
        <div className="absolute bg-white rounded-full left-[972px] right-[71px] top-[2763px] bottom-[59px] w-[237px] h-[237px]">
          <img
            src="../assets/image/say.png"
            alt=""
            className="absolute w-[16px] h-[16px] Left-[81px] top-[68px] right-[140px]"
          />
          <h1 className=" font-Nunito font-medium text-[30px] absolute w-[81px] h-[82px] left-[77px] right-[79px] top-[90px] text-[#0099E1] ">
            Say, Hola!
          </h1>
          <div className="bg-[#0099E1] absolute w-[57px] h-[57px] Left-[164px] right-[16px] top-[168px] bottom-[128px] rounded-full">
            <img
              src="../assets/image/avion.png"
              alt=""
              className="absolute w-[23.97px] h-[24px] Left-[17.01px] right-[16.01px] top-[17px] bottom-[16px] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
