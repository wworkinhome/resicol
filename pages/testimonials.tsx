import Link from 'next/link';

const Testimonials = () => {
  return (
    <>
      <section className="bg-[#E2E2E2]">
        <div>
          <h2 className=" absolute w-[279px] h-[105px] left-[190px] right-[811px] top-[1407px] bottom-[1604px] text-[#07469C] text-[32px]">
            Seamless service targeting your unique needs
          </h2>
          <img src="../assets/image/Rectangle 13.png" alt="" className="absolute w-7 h-[7px] left-[190px] top-[1555px] bottom-[1584px]" />
          <p className="absolute w-[280px] h-[160px] left-[190px] top-[1574px]">
            Lifestyle choices vary, which is why we take the time to learn about your individual situation and requirements.

            We’ll assist you from start to ﬁnish, ensuring you have the insight and knowledge needed to succeed.
          </p>
        </div>

        <div className="bg-[#FFFFFF] shadow-slate-300 ">
          <img src="../assets/image/card.png" alt="Card" className="absolute w-[497px] h-[396px] left-[539px] right-[398px] top-[1380px] rounded-[10px]" />
          <h2 className="absolute w-[190px] h-[22px] left-[692px] top-[1496px] text-[#07469C] text-[20px]">Residency Programs</h2>
          <img src="../assets/image/Ellipse 13.png" alt="Barra azul" className="absolute w-[68px] h-[65px] left-[753px] top-[1407px] " />
          <br />
          <p className="absolute w-[442px] h-[176px] left-[566px] right-[272px] top-[1552px] bottom-[1388px]">
            Mexican residency safeguards against future instability and opens up a world of opportunities for investors and their families.
            A Golden Visa permit provides visa-free access to many countries across the globe.
          </p>
          <img src="../assets/image/Rectangle 13.png" alt="" className="absolute w-7 h-[7px] left-[773px] top-[1532px] bottom-[1577px]" />
          <button className="flex flex-row justify-center items-center rounded-xl gap-3 absolute p-5 w-[130px] h-[44px] left-[722px] right-[428px] top-[1684px] bg-[#0099E1] rounded-bl-xl">
            <Link href="/signup">
              <p className='font-poppins normal-case text-center text-base h-6 grow-0 gap-3 top-9 text-slate-100 '>
                Get started
              </p>
            </Link>
          </button>
        </div>
      </section>

      <section>
        <div>
          <h2 className='absolute w-[609px] h-[35px] left-[335px] top-[1870px] text-center text-[32px] text-[#07469C]'>Why Choose Us</h2>
        </div>

        <div>
          <img src="../assets/image/Rectangle 10.png" alt="" className="absolute w-[241px] h-[219px] left-[243px] right-[796px] top-[1971px] bottom-[926px]" />
          <h2 className='absolute w-[196px] h-[22px] left-[265px] right-[819px] top-[2005px] bottom-[1089px] text-[#07469C] text-[20px] font-Nunito font-semibold text-center font-bold'>
            Speed and Simplicity
          </h2>
          <p className='absolute w-[190px] h-[100px] top-[2045px] left-[268px] right-[822px] bottom-[971px] text-center text-[14px] font-normal'>
            Easy, traveler-friendly application process. Simple and much less complicated than dealing with foreign governments.
          </p>
        </div>

        <div>
          <img src="../assets/image/Rectangle 10.png" alt="" className="absolute w-[241px] h-[219px] left-[519px] top-[1971px] bottom-[926px]" />
          <h2 className='absolute w-[196px] h-[22px] left-[564px] right-[566px] top-[2005px] bottom-[1089px] text-[#07469C] text-[20px] text-center font-bold '>
            Secure and Safe
          </h2>
          <p>
            World-class data centers and state-of-the-art security. Your credit card information will never be exposed to any government websites!
          </p>
        </div>

        <div>
          <img src="../assets/image/Rectangle 10.png" alt="" className="absolute w-[241px] h-[219px] left-[795px] top-[1971px] bottom-[926px]" />
          <h2>
            Awesome support
          </h2>
          <p>
            Our customer support is ready to help 24/7. We want you to enjoy your travels and avoid the stress of getting a residence!
          </p>
        </div>

      </section>
    </>
  );
};

export default Testimonials;
