import { Button } from "@material-tailwind/react"

export const LayoutPassword = () => {
    return (
        <div className="">
            <div className='flex flex-col justify-center items-center h-[100vh] text-center gap-[24px]'>
                <div className="flex items-center gap-[1rem] uppercase text-black font-Nunito font-bold absolute top-[23px] left-[32px] sm:top-[38px] sm:left-[96px]">
                    <h1>
                        RESICOL
                    </h1>
                    <img className="w-[32px]" src="/images/png100px/co.png" alt="" />
                </div>
                <h2 className="font-Nunito font-bold">
                    Create new password
                </h2>
                <p className="w-[255px] h-[40px] font-Mulish flex items-center text-center font-normal">
                    We send a link to reset you password to your email
                </p>
                <div className="">
                    <h3 className='flex font-Mulish font-semibold' >New Password</h3>
                    <div
                        style={{ height: '3.8rem' }}
                        className="relative h-10 w-full min-w-[200px]">
                        <input
                            type="password"
                            style={{ fontSize: '1.5rem', background: '#F2F2F2' }}
                            className="peer h-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50  w-[288px] xs:w-[320px] ml:w-[335px] sm:w-[350px] "
                            placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            <p
                                style={{ padding: '0.5rem', fontSize: '1rem' }}
                                className="text-label">Enter password
                            </p>
                        </label>
                    </div>

                </div>

                <div className="">
                    <h3 className='flex font-Mulish font-semibold' >Repeat Password <p className='text-red-600'>*</p> </h3>
                    <div
                        style={{ height: '3.8rem' }}
                        className="relative h-10 w-full min-w-[200px]">
                        <input
                            type="password"
                            style={{ fontSize: '1.5rem', background: '#F2F2F2' }}
                            className="peer h-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50  w-[288px] xs:w-[320px] ml:w-[335px] sm:w-[350px] "
                            placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            <p
                                style={{ padding: '0.5rem', fontSize: '1rem' }}
                                className="text-label font-Mulish font-normal">Enter password
                            </p>
                        </label>
                    </div>

                </div>

                <Button className="font-Mulish font-bold flex flex-row justify-center items-center p-[9px, 14px] w-[288px] h-[36px] rounded-[3px] gap-[10px]  opacity-[50%] bg-blue-400 text-white xs:w-[320px] ml:w-[335px] sm:w-[350px]" > RESET MY PASSWORD</Button>

                <div className="xss:hidden sm:block"
                    style={{ width: '502px', height: '351px', background: '#0099E1', position: 'absolute', zIndex: '-6', borderRadius: '8px' }}>
                </div>
                <div className="xss:hidden sm:block"
                    style={{ width: '500px', height: '349px', background: 'white', position: 'absolute', zIndex: '-5', borderRadius: '8px' }}>
                </div>

                <img className="sm:hidden absolute w-[100%] bottom-0" src="/images/Img-RP-footer.svg" alt="" />
                <img className="absolute w-[100%] bottom-0" src="/images/Img-RP-PC.svg" alt="" />

                <div className="xss:hidden sm:flex items-center gap-3 relative top-[5rem]">
                    <h3>Or Don't have an account?</h3>
                    <a style={{ textDecorationLine: 'underline', color: '#0099E1' }} href="">
                        Sign up
                    </a>
                </div>

            </div>
        </div>
    )
}