const Banner = () => {
  return (
    <>
      <section>
        {/* Fondo Banner */}
        <div>
          <img
            src="/assets/image/fondo.png"
            alt="Fondo"
            className="absolute w-full
                h-[831.5px] left-0  top-0 bottom-[83.7px] font-"
            z-50
          />
        </div>

        <div>
          <p className="font-Nunito font-semibold text-black absolute w-24 h-20 left-[408.93px] top-[144.79px] rotate-[24.93deg] text-[62px]">
            We
          </p>
          <p className="font-Nunito font-semibold text-black absolute w-[192px] h-[85px] left-[525.75px] top-[160px] rotate-[-14.8deg] text-[62px] text-center">
            love to{' '}
          </p>
          <p className="font-Nunito font-semibold text-black absolute w-[275px] h-[85px] left-[740.99px] top-[155.48px] rotate-[19.23deg] text-[62px] text-center">
            help you!{' '}
          </p>
        </div>

        {/* Esta es el mapa mundi.. */}
        <img
          src="/assets/image/Frame.png"
          alt="Mapa"
          className="absolute w-[606.7px] 
                [h-416.8px] left-[15px] right-[688.3px] top-[320px] bottom-[83.7px] font-"
        />

        {/* Circulos Blanco y Azul */}
        <div className="bg-white absolute w-[237px] h-[237px] left-[191px] top-[342px] rounded-full">
          {/* Icono mano */}
          <img
            src="../assets/image/say.png"
            alt=""
            className="absolute w-[16px] h-[16px] Left-[81px] 
                    top-[68px] right-[140px] bottom-[153px]"
          />
          <h1 className=" font-Nunito font-medium text-[30px] absolute w-[72px] h-[78px] 
          left-[77px] right-[88px] top-[90px] bottom-[69px] text-[#0099E1] ">
            Say, Hola!
          </h1>

          <div className="bg-[#0099E1] absolute w-[57px] h-[57px] Left-[164px] top-[168px] right-[16px] bottom-[12px] rounded-full">
            {/* Icono de avión */}
            <img
              src="../assets/image/avion.png"
              alt="Avion"
              className="absolute w-[23.94px] h-[24px] Left-[17.01px] 
                    top-[17px] right-[16.01px] bottom-[16px]"
            />
          </div>
        </div>
      </section>

      <section>
        <p className="absolute font-Mulish font-bold w-[509px] h-[75px] text-[20px] left-[505px] top-[417px] bottom-[339.5px]">
          Global citizenship and residency at your fingertips
        </p>
        <p className="absolute font-Mulish w-[509px] h-[75px] text-[20px] left-[505px] top-[445px] bottom-[339.5px]">
          {' '}
          Everyone has the opportunity to thrive, no matter where home is{' '}
        </p>

        <div>
          {/* Imagenes y Banderas*/}
          <div>
            <img
              src="../assets/image/Ellipse8.png"
              alt=""
              className="absolute w-[64px] h-[64px] left-[513px] top-[538px] bottom-[229.5px]"
            />
            <img
              src="../assets/flag/4x3/br.svg"
              alt=""
              className="absolute w-[26.04px] h-[17.9px] left-[560px] right-[691.96px] top-[541.07px] bottom-[272.53px]"
            />
          </div>

          <div>
            <img
              src="../assets/image/Ellipse 9.png"
              alt=""
              className="absolute w-[64px] h-[64px] left-[594px] top-[538px] bottom-[229.5px]"
            />
            <img
              src="../assets/flag/4x3/co.svg"
              alt=""
              className="absolute w-[26.04px] h-[17.9px] left-[643.04px] right-[610.92px] top-[541.07px] bottom-[272.53px]"
            />
          </div>

          <div>
            <img
              src="../assets/image/Ellipse 10.png"
              alt=""
              className="absolute w-[64px] h-[64px] left-[675px] top-[538px] bottom-[229.5px]"
            />
            <img
              src="../assets/flag/4x3/fr.svg"
              alt=""
              className="absolute w-[26.04px] h-[17.9px] left-[724.08px] right-[547.13px] top-[541.07px] bottom-[272.53px]"
            />
          </div>

          <div>
            <img
              src="../assets/image/Ellipse 11.png"
              alt=""
              className="absolute w-[64px] h-[64px] left-[756px] top-[538px] bottom-[229.5px]"
            />
            <img
              src="../assets/flag/4x3/ar.svg"
              alt=""
              className="absolute w-[26.04px] h-[17.9px] left-[804.65px] right-[449.3px] top-[541.07px] bottom-[272.53px]"
            />
          </div>

          <div>
            <img
              src="../assets/image/Ellipse 12.png"
              alt=""
              className="absolute w-[64px] h-[64px] left-[837px] top-[538px] bottom-[229.5px]"
            />
            <img
              src="../assets/flag/4x3/pe.svg"
              alt=""
              className="absolute w-[26.04px] h-[17.9px] left-[885.7px] right-[368.26px] top-[541.07px] bottom-[272.53px]"
            />
          </div>
        </div>

        {/* Triangulo diagonal Azul */}
        <div>
          <img
            src="../assets/image/trianguloazul.svg"
            alt="rectangulo"
            className="absolute left-[0.07px] 
                    right-[639.85px] top-[720.33px] bottom-[1.04px] z-50"
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
