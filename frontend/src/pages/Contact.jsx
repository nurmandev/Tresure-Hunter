import { assets } from "../assets/assets";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t uppercase">
        <Title text1={"Contact"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[380px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600 ">Our Store</p>
          <p className="text-gray-500">
            Your <br /> address
          </p>
          <p className="text-gray-500">
            Tel: (+123) 456789
            <br /> Email: info@treasure-hunter.com
          </p>
          <p className="font-semibold text-xl text-gray-600 ">
            Careers at Treaure Hunter
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            delectus sed, illo eius officiis, non consectetur.
          </p>
          <button className="bg-white text-black border px-4 py-2">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
