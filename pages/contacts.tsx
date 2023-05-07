
const Contacts = () => {
  return (
    <>

      <section>
        <div className="bg-[url('/assets/image/Rectangle9.png')] absolute w-[1280px] h-[615px] left-0 top-[2303px] bottom-[198px] -z-50"></div>
        <div className="bg-[#EEEEEE] absolute w-[553px] h-[410px] left-[364px] right-[363px] top-[2386px] bottom-[320px] rounded-[18.96px] box-content shadow-lg shadow-slate-400 z-40">
          <input type="text" className="absolute bg-[#2E0249] w-[474px] h-0 left-[401.92px] right-[404.08px] top-[2450.24px] bottom-[665.76px] z-50 " placeholder="Your name" />

        </div>

        <div>
          <button className="flex flex-row items-center p-[18.96px 50.56px] gap-[12.64px] absolute bg-[#0099E1] rounded-[12.64px] w-[250.72px] h-[61.92px] left-[400px] right-[627.28px] top-[2673px] bottom-[381.1px] z-50"></button>
          <p className="flex-none flex-grow-0 font-Poppins font-medium text-center text-white text-[15.8]
            w-[118px] h-[24px] left-[5500px] right-[677.84px] top-[2691.96px] bottom-[400.04px] z-50">SEND MESSAGE</p>
          <img src="../assets/image/avion.png" alt="Avion" className="absolute w-[18.96px] h-[18.96px] Left-[452.56px]  right-[808.48px]  top-[2694.68px] bottom-[402.46px] z-50 " />

        </div>
      </section>


    </>
  );
};

export default Contacts;