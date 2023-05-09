import { Button } from '@material-tailwind/react';
import Image from 'next/image';

export const LayaoutLogin = () => {
  return (
    <>
      <div className="container-login">

        <div className='resident' >
          <h1 >
            RESICOL
          </h1>
          <Image src="/images/png100px/co.png" alt="" width={32} height={32} />
        </div>



        <div className='content-login'>

          <div className='resident-pc'  >
            <h1>
              RESICOL
            </h1>
            <Image src="/images/png100px/co.png" alt="" width={32} height={32} />
          </div>
          <div style={{ margin: '2rem' }}>
            <h2>Welcome to you Resicol</h2>
            <p>Login in to you account.</p>
          </div>

          <div className='inputs-container' >
            <div className="w-72">
              <h3>Your username</h3>
              <div
                style={{ height: '3.8rem' }}
                className="relative h-10 w-full min-w-[200px]">
                <input
                  style={{ fontSize: '1.5rem', background: '#F2F2F2' }}
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  <p
                    style={{ padding: '0.5rem', fontSize: '1rem' }}
                    className="text-label">Enter your username
                  </p>
                </label>
              </div>
            </div>

            <div className="w-72">
              <h3>Password</h3>
              <div
                style={{ height: '3.8rem' }}
                className="relative h-10 w-full min-w-[200px]">

                <input
                  style={{ fontSize: '1.5rem', background: '#F2F2F2' }}
                  type='password'
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  <p
                    style={{ padding: '0.5rem', fontSize: '1rem' }}
                    className="text-label">Enter password</p>
                </label>
              </div>
            </div>

            <a
              href="http://"
              style={{ textDecorationLine: 'underline', color: '#0099E1' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Forgot you password?
            </a>
          </div>

          <Button className="button-login">LOG IN</Button>
          <div className="link-signup">
            <h3>Or Don't have an account?</h3>
            <a style={{ textDecorationLine: 'underline', color: '#0099E1' }} href="">
              Sign up
            </a>
          </div>

        </div>

        <footer className='footer-login'>

          {/* <h2 className='none'>Carousel Example</h2> */}
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

            {/* <!-- Indicators --> */}
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner">
              <div id='flex' className="item active">
                {/* <p className='pharse-carousel'>Señor Senior</p> */}
                <Image src="/images/img1.svg" alt="Los Angeles" className='img-person' width={163} height={259.07} />
                <div className='special'>
                  <h2>
                    "This product allows you to collaborate, experiment, and test much more effectively and efficiently"
                  </h2>
                  <h3>
                    John
                  </h3>
                  <h4>
                    DINAMARCA
                  </h4>
                </div>
              </div>

              <div id='flex' className="item">
                {/* <p className='pharse-carousel'>Joven Senior</p> */}
                <Image src="/images/image 2.svg" alt="Chicago" className='img-person' width={163} height={259.07} />
                <div className='special'>
                  <h2>
                    "We are designing for a global user base...
                    we can get feedback not just from drivers we see in San Francisco but from all around the world".
                  </h2>
                  <h3>
                    Kathrine Joy
                  </h3>
                  <h4>
                    CHINA
                  </h4>
                </div>
              </div>

              <div id='flex' className="item">
                {/* <p className='pharse-carousel'>Joven Senior</p> */}
                <Image src="/images/image 4.png" alt="New york" className='img-person' width={163} height={259.07} />
                <div className='special'>
                  <h2>
                    "This product is a critical tool for us to understand our users and identify any pain points where they might be getting stuck".
                  </h2>
                  <h3>
                    Mike Abla
                  </h3>
                  <h4>
                    VENEZUELA
                  </h4>
                </div>
              </div>

              <div id='flex' className="item">
                {/* <p className='pharse-carousel'>Joven Senior</p> */}
                <Image src="/images/image 6.png" alt="New york" className='img-person' width={163} height={259.07} />
                <div className='special'>
                  <h2>
                    "I used to have a bunch of different tools I had to pay for, with this tool you get everything in one bundle".
                  </h2>
                  <h3>
                    Philis Jan
                  </h3>
                  <h4>
                    ESPAÑA
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </footer >

      </div >
    </>
  );
};
