//creat a components by React, name: Header, props: {title: string}
import logo from "../asset/logo-small.png";

function Header({ title }) {
  return (
    <div>
      <header className="py-6">
        <div className='containter flex justify-between px-8 mx-auto md:px-14 lg:px-24 w-full'>
          <div >
            <img className='w-40 md:w-60 lg:w-80' src={logo} alt='logo' />
          </div>
          <div className=' hidden md:flex my-auto ml-5 '>
            <nav>
              <ul className='flex justify-center text-xl font-bold  items-center space-x-12'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#products'>Products</a></li>
                <li><a href='#blog'>Blog</a></li>
                <li><a href='#'>Contact</a></li>
             </ul>
            </nav>
           </div>
           <div class="my-auto md:hidden ">
          <svg
            width="36"
            height="28"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
              fill="black"
            />
          </svg>
        </div>
          
        </div>
      </header>
    </div>
  );
}

export default Header;
