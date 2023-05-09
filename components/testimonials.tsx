import Link from 'next/link';

const Testimonials = () => {
  return (
    <>
      <div className="to-zinc-900 shadow-zinc-500" id="#testimonials">
        <section>
          {/* Todo el texto Izquierdo */}
          <div>
            <h2 className=" font-Nunito font-semibold text-[32px] text-[#07469C] absolute w-[279px] h-[105px] left-[190px] right-[811px] top-[1407px] bottom-[1604px]" id='testimonials'>
              Seamless service targeting your unique needs
            </h2>
            <img
              src="../assets/image/Rectangle 13.png"
              alt="linea Azul"
              className="absolute w-7 h-[7px] left-[190px] top-[1525px] bottom-[1584px]"
            />
            <p className="font-Mulish text-[16px] absolute w-[280px] h-[160px] left-[190px] top-[1574px]">
              Lifestyle choices vary, which is why we take the time to learn
              about your individual situation and requirements.
            </p>
            <br />
            <p className="font-Mulish text-[16px] absolute w-[280px] h-[160px] left-[190px] top-[1670px]">
              {' '}
              We’ll assist you from start to ﬁnish, ensuring you have the
              insight and knowledge needed to succeed.
            </p>
          </div>

          {/* Card y su información. */}

          <div
            className="bg-[#FFFFFF] absolute w-[497px] h-[396px] left-[539px] right-[244px] top-[1380px] bottom-[1340px] 
              rounded-[10px] box-content shadow-lg shadow-slate-400"
          >
            <div className="bg-[#D9D9D9] absolute w-[68px] h-[65px] left-[214px] top-[27px] rounded-full"></div>

            <h2 className="absolute w-[190px] h-[22px] left-[153px] top-[116px] font-Nunito font-semibold text-[#07469C] text-[20px]">
              Residency Programs
            </h2>

            <br />
            <p
              className="absolute w-[442px] h-[176px] left-[27px] right-[28px] top-[172px] bottom-[48px]
                font-Mulish font-normal text-[16px]"
            >
              Colombian residency safeguards against future instability and
              opens up a world of opportunities for investors and their
              families. A Golden Visa permit provides visa-free access to many
              countries across the globe.
            </p>
            <img
              src="../assets/image/Rectangle 13.png"
              alt="line"
              className="absolute w-[28px] h-[7px] left-[234px] top-[152px] bottom-[237px]"
            />
            <button
              className="absolute items-center p-5 rounded-[12.64px] gap-3 w-[157px] h-[44px] 
              left-[183px] right-[184px] top-[304px] bottom-[48px] bg-[#0099E1] 
              font-Poppins font-medium text-[15.8px] text-center text-white"
            >
              <Link href="/signup">Get started</Link>
            </button>
          </div>

          <div>
            <h2 className="absolute w-[609px] h-[35px] left-[335px] top-[1870px] font-Nunito font-semibold text-center text-[32px] text-[#07469C]">
              Why Choose Us
            </h2>
            <img
              src="../assets/image/Rectangle 13.png"
              alt="line"
              className="absolute w-7 h-[7px] left-[626px] right-[626px] top-[1918px] bottom-[1191px]"
            />
          </div>

          {/* Grupo de cards */}

          <div>
            <div className="absolute w-[241px] h-[219px] left-[243px] right-[796px] top-[1971px] bottom-[926px] shadow-lg shadow-slate-400">
              <h2 className="absolute w-[196px] h-[22px] left-[22px] right-[23px] top-[34px] bottom-[163px] text-[#07469C] text-[20px] font-Nunito font-semibold text-center">
                Speed and Simplicity
              </h2>
              <p className="absolute w-[190px] h-[100px] top-[74px] left-[25px] right-[26px] bottom-[45px] font-Mulish text-center text-[14px] font-normal">
                Easy, traveler-friendly application process. Simple and much
                less complicated than dealing with foreign governments.
              </p>
            </div>

            <div className="absolute w-[241px] h-[219px] left-[519px] right-[520px] top-[1971px] bottom-[926px] shadow-lg shadow-slate-400">
              <h2 className="absolute w-[196px] h-[22px] left-[45px] right-[46px] top-[34px] bottom-[163px] font-Mulish text-[#07469C] text-[20px] text-center font-bold ">
                Secure and Safe
              </h2>
              <p className="absolute w-[190px] h-[100px] top-[74px] left-[25px] right-[26px] bottom-[25px] font-Mulish text-center text-[14px] font-normal">
                World-class data centers and state-of-the-art security. Your
                credit card information will never be exposed to any government
                websites!
              </p>
            </div>

            <div className="absolute w-[241px] h-[219px] left-[795px] right-[244px] top-[1971px] bottom-[926px] shadow-lg shadow-slate-400">
              <h2 className="absolute w-[171px] h-[22px] left-[35px] right-[35px] top-[34px] bottom-[163px] font-Mulish text-[#07469C] text-[20px] text-center font-bold">
                Awesome support
              </h2>
              <p className="absolute w-[190px] h-[100px] top-[85px] left-[25px] right-[26px] bottom-[25px] font-Mulish text-center text-[14px] font-normal">
                Our customer support is ready to help 24/7. We want you to enjoy
                your travels and avoid the stress of getting a residence!
              </p>
            </div>
          </div>

          {/* Grupo de flecha arriba */}
          <div>
            <div className="bg-white absolute w-[30px] h-[30px] left-[1077px] right-[173px] top-[2241px] bottom-[845px] animate-bounce"></div>
            <Link href= '/' >
            <img
              src="../assets/image/flechaarriba.png"
              className="absolute w-[14] h-[16] left-[1085px] right-[181px] top-[2248px] bottom-[882px] animate-bounce"
            /></Link>
          </div>
          <h2 className="absolute font-Mulish font-medium text-[14px] w-[75px] h-[18px] left-[1121px] right-[84px] top-[2247px] bottom-[851px]">
            Back to top
          </h2>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
