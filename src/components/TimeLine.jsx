import { Fingerprint, Users } from "lucide-react";
import React from "react";

const TimeLine = () => {
  return (
    <div className=" dark:bg-black p-[30px] flex justify-center items-center ">
      <div className="space-y-8  w-[60%]  relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {/* <!-- Item #1 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Users />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded ">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold dark:text-white lg:text-[30px]">
                Diversity & Fairness
              </div>
              {/* <time className="font-caveat font-medium text-indigo-500">08/06/2023</time> */}
            </div>
            <div className="text-slate-500">
              When training our AI models, we consider ethical and social
              implications of algorithm-based decision making. Our solutions use
              high-quality and fairly-represented data sets to eliminate human
              cognitive biases.
            </div>
          </div>
        </div>

        {/* <!-- Item #2 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Fingerprint />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded ">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold dark:text-white lg:text-[30px] text-slate-900">
                Regulatory Compliance
              </div>
              {/* <time className="font-caveat font-medium text-indigo-500">08/06/2023</time> */}
            </div>
            <div className="text-slate-500">
              Working with clients globally, LENS acknowledges applicable data
              privacy regulations, such as the GDPR, HIPAA and others, in all
              our solutions handling sensitive data. We also ensure our
              algorithms allow for the required level of decision-making
              transparency and explainability.
            </div>
          </div>
        </div>

        {/* <!-- Item #3 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fillRule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded ">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold dark:text-white lg:text-[30px] text-slate-900">
                Code of Ethics
              </div>
              {/* <time className="font-caveat font-medium text-indigo-500">08/06/2023</time> */}
            </div>
            <div className="text-slate-500">
              LENS believes in a just, non-violent world of equality and
              fairness. We prize democratic values, civil liberties and open and
              informed debate. When used to further these values,
              algorithm-based decision-making models can continue to make the
              world a safer, better place for everyone.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
