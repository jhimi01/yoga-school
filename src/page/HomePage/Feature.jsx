import React from "react";
import ShareTitle from "../../component/ShareTitle";
import { FcDocument, FcOnlineSupport } from "react-icons/fc";
import { CgCommunity } from "react-icons/cg";
import { TbBooks } from "react-icons/tb";

const Feature = () => {
  return (
    <section className="bg-green-50 py-10">
      <ShareTitle
        subheading={"What different from others"}
        mainTitle={"Features"}
      />
      <div className="text-gray-600 mt-10 w-full md:w-5/6 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="p-4 text-center w-full">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="">
                <div className="p-2 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 flex-shrink-0">
                  <FcOnlineSupport className="text-2xl" />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Strong Support team
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 text-center w-full">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="">
                <div className="inline-flex items-center justify-center rounded-full bg-indigo-500 flex-shrink-0 p-2">
                  <CgCommunity className="text-[#fff] text-2xl" />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Active community
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 text-center w-full">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="">
                <div className="p-2 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                 <TbBooks className="text-[#84e784] text-2xl"/>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Open Education
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 text-center w-full">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="">
                <div className="p-2 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                 <FcDocument className="text-[#84e784] text-2xl"/>
                   
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Outreach
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
