import CustomerOne from "../asset/Testimonials/customer01.png";
import CustomerTwo from "../asset/Testimonials/customer02.png";
import CustomerThree from "../asset/Testimonials/customer03.png";
import CustomerFour from "../asset/Testimonials/customer04.png";
import TesimonialsCard from "./TestimonialsCard";

const Tesimonials = () => {
  const feedback = [
    {
      name: "Jane Doe",
      image: CustomerOne,
      rating: "⭐⭐⭐⭐⭐",
      review:
        "I like the design of the umbrella, especially the cloud pictures on the inside surface.",
        hidden:true
    },
    {
      name: "John Doe",
      image: CustomerTwo,
      rating: "⭐⭐⭐⭐",
      review:
        "Customer service is top notch. My umbrella unfortunately broke the first time I took it out to use; the spring mechanism that opens and closes the umbrella somehow broke or something.",
      link: "#",
      hidden:true
    },
    {
      name: "Janet Doe",
      image: CustomerThree,
      rating: "⭐⭐⭐⭐⭐",
      review:
        " I was very thankful to have purchased from such a great and trustworthy company that backs up their products and warranty. ",
      link: "#",
      hidden:false
    },
    {
      name: "Jonathan Doe",
      image: CustomerFour,
      rating: "⭐⭐⭐⭐⭐",
      review:
        "We have been having tons of rain and wind, which makes it hard to use low budget umbrellas and the wind will collapse them.",
      link: "#",
      hidden:false
    },
  ];

  return (
    <div className=" bg-primaryYellow place-contents-center ">
    <div className='container mx-auto my-20 max-w-[1280px]'>
      <div>
        <h1 className='text-5xl font-headLines font-bold mb-5 text-center py-10'>Testimonials</h1>

        <div className='w-full grid md:grid-cols-4 gap-5  place-items-center pb-10'>
          {feedback.map((feedback) => {
            return <TesimonialsCard feedback={feedback} key={feedback.name} />;
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tesimonials;
