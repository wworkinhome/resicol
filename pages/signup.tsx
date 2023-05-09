import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/flag/4x3/mx.svg';

/** import images of carousel */
import Slider from '@/components/Slider';

const signup = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="container mx-auto ">
          <div className="flex w-full  mx-auto shadow-lg overflow-hidden">
            <div className="w-2/3 bg-[#E2E2E2]">
              <div className="flex ml-[96px] mt-[36px] ">
                <h1 className="text-4xl mr-[15px]">resimex</h1>
                <Image
                  className="rounded-xl"
                  src={Logo}
                  alt="brand logo"
                  width={40}
                  height={40}
                ></Image>
              </div>

              <h2 className="text-3xl mt-[82.41px] mb-[2px] text-center">
                Create an account
              </h2>
              <p className="mb-[43px] text-center">
                And start your trip safely with us.
              </p>
              <form action="#" className="mx-auto w-[350px] h-[11p1x]">
                <div className="">
                  <span className="block text-sm font-medium text-slate-700">
                    Your email
                  </span>
                  <input
                    className="border border-gray-400 py-1 px-2 w-full"
                    type="text"
                    placeholder="Please enter your email"
                  />
                </div>
                <div className="mt-[30px]">
                  <span className="block text-sm font-medium text-slate-700">
                    Create username
                  </span>
                  <input
                    className="border border-gray-400 py-1 px-2 w-full"
                    type="text"
                    placeholder="Create your username"
                  />
                </div>
                <div className="mt-[30px]">
                  <span className="block text-sm font-medium text-slate-700">
                    Password
                  </span>
                  <input
                    className="border border-gray-400 py-1 px-2 w-full"
                    type="text"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mt-[30px]">
                  <button className="w-full bg-blue-500 py-3 text-center text-white">
                    <Link href="/login">Sign up</Link>
                  </button>
                </div>
                <div className="mt-[20px]">
                  <p>
                    By creating an account you are agreeing to our Terms and
                    Conditions and Privacy Policy
                  </p>
                </div>
                <div className="mt-[20px]">
                  Already have a member?
                  <Link href="/signup"> Log in</Link>
                </div>
              </form>
              <div className="w-full h-[111px] mt-[24px] bg-[#E6ECF5]"></div>
            </div>
            <div className="w-1/3" />
            <Slider></Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
