import heroimg from '../asset/products/3061-1-1000.jpg';

const Hero=()=>{
    return(
       <div className="bg-primaryGreen">
       <div className='container max-w-[1280px] m-auto  flex flex-col justify-between items-center text-center md:flex-row md:text-left'> 
            <div className='py-10 px-8 m-auto md:m-0'>
                <h1 className='text-3xl font-headLines text-primaryYellow'>
                    YiYi Trade </h1>
                <h2 className='text-2xl mt-5 font-parragrap text-white'>Chicago</h2>
                <p className="text-white mt-5 font-parragrap w-[400px] text-left">We are family own umbrella business company since 1996. We have our own umbrella brand, also we can do OEM / ODM business.</p>
                <button className="bg-primaryYellow hover:bg-secondaryPink text-black font-bold py-2 px-4 rounded mt-5">more ...</button>
            </div>
            <div className=" mx-auto md:mr-0">
                <img className="w-[400px] rounded-md mb-10 mt-10 mr-10 md:-mb-10" src={heroimg} alt="hero" />
                
            </div>
            <div>

            </div>
        </div>
        </div>
    )
}

export default Hero;

