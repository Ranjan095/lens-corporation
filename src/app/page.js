import About from "@/components/About";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import GetToKnowUs from "@/components/GetToKnowUs";
import Numbers from "@/components/Numbers";
import OurBlogs from "@/components/OurBlogs";
import OurVision from "@/components/OurVision";
import Services from "@/components/Services";
import TimeLine from "@/components/TimeLine";
import WhyChoseLens from "@/components/WhyChoseLens";

export default function Home() {
  return (
    <div>
      <div className="relative dark:bg-black">
        <video autoPlay muted loop className="w-full hidden dark:block ">
          <source src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4" />
        </video>
        <img
          src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=256&q=75"
          alt="home"
          className=" dark:hidden w-full"
        />
        <div className="absolute inset-0 w-full flex flex-col  items-center justify-center bg-transparent">
          <div className="w-full max-w-full mx-auto pl-[40px] dark:text-center">
            <h1 className="text-5xl lg:text-[87px] dark:text-white">
              We are at the forefront of AI
            </h1>
            <p className=" hidden lg:block dark:text-white text-xl  pt-4 pb-8">
              From Conserving Wildlife to Automatically Generating Caricatures{" "}
              <br />
              <b>– We Do It All</b>
            </p>
            <button className=" bg-black text-white dark:text-black dark:bg-white rounded-md px-10 py-3 text-lg mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <WhyChoseLens />
      <OurVision />
      <TimeLine />
      <OurBlogs/>
      <Client />
      <Numbers />
      <GetToKnowUs />
      <GetInTouch />
      <Footer />
    </div>
  );
}
