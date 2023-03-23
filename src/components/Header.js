//creat a components by React, name: Header, props: {title: string}
import logo from "../asset/logo-small.png";
import { useState } from "react";

function Header({ title }) {
  const [hamberg, setHamberg] = useState(false);

  return (
    <div>
      <header className='flex justify-center w-full'>
        <div className='group container flex justify-between items-center px-8 pt-10 pb-10 w-full'>
          <div>
            <img className='w-40 md:w-60 lg:w-80' src={logo} alt='logo' />
          </div>

          <nav className=' my-auto     '>
            <ul className='group-hover:flex absolute left-1 top-[6.05rem] z-10 hidden w-full flex-col items-center justify-center text-lg font-bold px-3 shadow-md md:static md:flex md:w-auto md:flex-row md:space-y-0 md:space-x-4 md:shadow-none '>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#products'>Products</a>
              </li>
              <li>
                <a href='#blog'>Blog</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </nav>

          <div className='md:hidden'>
            <button
              onclink={() => {
                setHamberg(!hamberg);
              }}
            >
              <svg
                width='36'
                height='28'
                viewBox='0 0 26 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z'
                  fill='black'
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
