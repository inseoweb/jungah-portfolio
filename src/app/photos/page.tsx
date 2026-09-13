'use client';

import Image from 'next/image';

export default function photos() {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-2">[ 2011~ ]</h2>
      <h1 className="text-2xl font-bold text-center mb-2">활동사진</h1>

      <div className="h-5" />
      <div className="pb-[40px]">
        <Image
          src="/images/photos/1.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <div className="pb-[40px]">
        <Image
          src="/images/photos/2.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <div className="pb-[40px]">
        <Image
          src="/images/photos/3.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <div className="pb-[40px]">
        <Image
          src="/images/photos/4.jpg"
          alt="1"
          className="w-[90%] h-autㅈo mx-auto mb-[0px]"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <div className="pb-[40px]">
        <Image
          src="/images/photos/5.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <div className="pb-[40px]">
        <Image
          src="/images/photos/6.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      </div>
  );
}