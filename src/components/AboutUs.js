import FactoryOne from "../asset/factory/RD-100.jpg";
import FactoryTwo from "../asset/factory/2017-08-08 5-1000.jpg";

const AboutUs = () => {
  return (
    <div className=''>
      <div className='container max-w-[1280px] mx-auto  flex flex-col justify-between items-top  md:flex-row md:text-left'>
        <div className=' py-10 px-10 mx-auto mt-0 md:m-0'>
          <h1 className='text-5xl font-bold font-headLines '>About US </h1>
          <h2 className='text-2xl mt-5 font-parragrap '>Chicago</h2>
          <p className=' mt-5 font-parragrap w-[400px] text-left'>
            We are family own umbrella business company since 1996. We have our
            own umbrella brand, also we can do OEM / ODM business.
          </p>
        </div>
        <div className='relative  w-full h-[400px]'>
          <img
            className='w-[300px] rounded-md  absolute top-24 left-[20%]'
            src={FactoryOne}
            alt='hero'
          />
          <img
            className='w-[300px] rounded-md absolute right-24 '
            src={FactoryTwo}
            alt='hero'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
