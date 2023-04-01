import logoFooter from '../asset/logo-footer.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className='w-full  my-5 border-solid border-y-8 border-primaryGreen bg-secondary3'>
      <div className="flex flex-row mx-auto max-w-[1280px] items justify-around my-5">
        <div className="">
            <img src={logoFooter} alt="logo footer" className='w-40' />
        </div>
        <div className="flex flex-col justify-start">
            <h4 className="text-2xl font-parragrap">Navigation</h4>
            <div className="">
            <ul className='flex flex-col'>
              <li>
                <a href='#home'>Home</a>
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
                <a href='#contact'>Contact</a>
              </li>
            </ul>
            </div>
        </div>
        <div className="">
            <h4 className="text-2xl font-parragrap">Contact</h4>
            <p>20B Lorem Street<br/>Chicago, us</p>
        </div>
        <div className="">
            <h4 className="text-2xl font-parragrap">Social media</h4>
            <ul className="flex flex-row justify-between">
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter}/></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram}/></a></li>
                                <li><a href="https://youtube.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faYoutube}/></a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"> 
                                <FontAwesomeIcon icon={faLinkedin}/></a></li>
                        
                        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
