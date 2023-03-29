const TesimonialsCard = ({ feedback }) => {
  return (
    <div className={feedback.hidden? "hidden md:block":""}>
    <div className='flex-col justify-start bg-white w-60 h-80 m-5 p-5 flex'>
      <div className="pb-5">{feedback.rating}</div>
      <div className="flex flex-row items center pb-5 ">
        <img className="w-20 rounded-[50%]  " src={feedback.image} alt='' />
        <span className="alight-center my-auto pl-3">{feedback.name}</span>
      </div>
      <div>
        <p className="lines">{feedback.review}</p>
      </div>
    </div>
    </div>
  );
};

export default TesimonialsCard;
