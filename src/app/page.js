import About from "@/components/About";
import Client from "@/components/Client";
import GetInTouch from "@/components/GetInTouch";
import GetToKnowUs from "@/components/GetToKnowUs";
import Numbers from "@/components/Numbers";
import OurVision from "@/components/OurVision";
import Services from "@/components/Services";
import TimeLine from "@/components/TimeLine";
import WhyChoseLens from "@/components/WhyChoseLens";

export default function Home() {
  return (
    <div>
      <div className="relative dark:bg-black">
        <video autoPlay muted loop className="w-full ">
          <source src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4" />
        </video>
        <div className="absolute inset-0 w-full flex flex-col  items-center justify-center bg-transparent">
          <div className="w-full max-w-full mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl text-white">
              We are at the forefront of AI
            </h1>
            <p className=" hidden lg:block text-white text-xl  pt-4 pb-8">
              From Conserving Wildlife to Automatically Generating Caricatures{" "} <br/>
              <b>– We Do It All</b>
            </p>
            <button className="bg-white rounded-md px-8 py-3 text-lg mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <About/>
      <Services/>
      <WhyChoseLens/>
      <OurVision/>
      <TimeLine/>
      <Client/>
      <Numbers/>
      <GetToKnowUs/>
      <GetInTouch/>
    </div>
  );
}
