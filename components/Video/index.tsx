"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
// import ModalVideo from "react-modal-video";

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Case de sucesso"
          paragraph={`
            Veja abaixo a antiga página do portal da UTFPR e a nova página que desenvolvemos.
            * Como é uma faculdade pública, tivemos que fazer, além do novo portal inteiro
          `}
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="w-full flex justify-between items-center mb-[10px]">
                <Image
                  src="/images/video/before_dark2.png"
                  alt="before dark"
                  width={60}
                  height={50}
                  className="hidden dark:block"
                />
                <Image
                  src="/images/video/before_light2.png"
                  alt="after dark"
                  width={60}
                  height={50}
                  className="dark:hidden"
                />
                <Image
                  src="/images/video/after_dark2.png"
                  alt="before dark"
                  width={60}
                  height={50}
                  className="hidden dark:block"
                />
                <Image
                  src="/images/video/after_light2.png"
                  alt="after dark"
                  width={60}
                  height={50}
                  className="dark:hidden"
                />
              </div>
              <div className="relative aspect-[77/40] items-center justify-center">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src="/images/video/utfpr_velha.png" srcSet="/images/video/utfpr_velha.png" alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src="/images/video/utfpr_nova.png" srcSet="/images/video/utfpr_nova.png" alt="Image two" />
                }
                handle={<ReactCompareSliderHandle buttonStyle={{color: '#090c28'}} linesStyle={{color: '#fab000'}}/>}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
