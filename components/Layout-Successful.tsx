import { Button } from "@material-tailwind/react";
import Image from "next/image";

export const LayoutSuccessful = () => {
    return (
        <div className="">

            <div className='flex flex-col justify-center items-center h-[100vh] text-center gap-[9px]'>

                <div className="flex items-center gap-[1rem] uppercase text-black font-Nunito font-bold absolute top-[23px] left-[32px] sm:top-[38px] sm:left-[96px]">
                    <h1>
                        RESICOL
                    </h1>
                    <img className="w-[32px]" src="/images/png100px/co.png" alt="" />
                </div>
                <h2 className="font-Nunito font-bold">
                    Successful password reset!
                </h2>
                <p className="w-[255px] h-[40px] font-Mulish flex items-center text-center mb-[43px] font-normal">
                    You can use you new password to login to your account 🙌
                </p>

                <Button className="font-Mulish font-bold flex flex-row justify-center items-center p-[9px, 14px] w-[288px] h-[36px] rounded-[3px] gap-[10px]  opacity-[50%] bg-blue-400 text-white xs:w-[320px] ml:w-[335px] sm:w-[350px]" > LOGIN</Button>

                <div className="xss:hidden sm:block"
                    style={{ width: '502px', height: '273px', background: '#0099E1', position: 'absolute', zIndex: '-6', borderRadius: '8px' }}>
                </div>
                <div className="xss:hidden sm:block"
                    style={{ width: '500px', height: '271px', background: 'white', position: 'absolute', zIndex: '-5', borderRadius: '8px' }}>
                </div>

                <Image width={1} height={1} className="sm:hidden absolute w-[100%] bottom-0" src="/images/Img-RP-footer.svg" alt="" />
                <Image width={1} height={1} className="absolute w-[100%] bottom-0" src="/images/Img-RP-PC.svg" alt="" />

            </div>

        </div>
    )

};