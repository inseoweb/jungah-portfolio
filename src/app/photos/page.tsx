'use client';

import Image from 'next/image';
import { loc, useLocalized } from '../../lib/language';

const LABEL = loc('[ 2011~ ]', '[ 2011– ]');
const TITLE = loc('활동사진', 'Activity Photos');

export default function PhotosPage() {
  const label = useLocalized(LABEL);
  const title = useLocalized(TITLE);
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-2">{label}</h2>
      <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>

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