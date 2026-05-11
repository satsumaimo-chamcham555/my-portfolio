"use client";

import Image from "next/image";
import { useInViewOnce } from "./useInViewOnce";

function StickerFrame({ children, className = "" }) {
  return (
    <div
      className={`shadow-[4px_6px_0_0_rgba(255,105,180,0.45)] ring-2 ring-hotpink ${className}`}
    >
      {children}
    </div>
  );
}

/** A: wobbly circle — About, slide from right */
export function CollagePhotoA() {
  const [ref, visible] = useInViewOnce();

  return (
    <div
      ref={ref}
      className={`pointer-events-none z-0 mx-auto mt-10 w-full max-w-[260px] transition-all duration-1000 ease-out motion-reduce:transition-none md:absolute md:right-2 md:top-1/2 md:mx-0 md:mt-0 md:w-[min(40vw,380px)] md:max-w-none md:-translate-y-1/2 lg:right-0 ${
        visible
          ? "translate-x-0 opacity-100"
          : "translate-x-14 opacity-0 md:translate-x-24"
      } `}
      aria-hidden
    >
      <StickerFrame className="clip-sticker-wobbly bg-white/40">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src="/aboutMe.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 260px, 380px"
          />
        </div>
      </StickerFrame>
    </div>
  );
}

/** B: app-icon — Skills top-left, spin + scale */
export function CollagePhotoB() {
  const [ref, visible] = useInViewOnce();

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-1 top-1 z-0 md:left-5 md:top-3"
      aria-hidden
    >
      <div
        className={`origin-center transition-all duration-[950ms] ease-out motion-reduce:transition-none ${
          visible
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-[360deg] scale-[0.32] opacity-0"
        }`}
      >
        <StickerFrame className="clip-sticker-app overflow-hidden bg-white/40">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32">
            <Image
              src="/Lkawaii.PNG"
              alt=""
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        </StickerFrame>
      </div>
    </div>
  );
}

/** C: cloud blob — Works, float up */
export function CollagePhotoC() {
  const [ref, visible] = useInViewOnce();

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-1 top-[210px] z-0 w-[min(52vw,210px)] sm:left-4 sm:top-[230px] md:top-[250px] lg:left-8"
      aria-hidden
    >
      <div
        className={`transition-all duration-[1100ms] ease-out motion-reduce:transition-none ${
          visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <StickerFrame className="clip-sticker-cloud overflow-hidden bg-white/40">
          <div className="relative aspect-[5/4] w-full">
            <Image
              src="/Dkawaii.JPG"
              alt=""
              fill
              className="object-cover"
              sizes="210px"
            />
          </div>
        </StickerFrame>
      </div>
    </div>
  );
}

/** D: star — above footer, blink */
export function CollagePhotoD() {
  const [ref, visible] = useInViewOnce({ threshold: 0.18 });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute bottom-full right-6 z-[9] mb-2 md:right-20"
      aria-hidden
    >
      <div
        className={`max-w-[130px] transition-opacity duration-700 motion-reduce:transition-none ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={
            visible ? "animate-sticker-blink motion-reduce:animate-none" : ""
          }
        >
          <StickerFrame className="clip-sticker-star overflow-hidden bg-white/40">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28">
              <Image
                src="/swimkawaii.JPG"
                alt=""
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          </StickerFrame>
        </div>
      </div>
    </div>
  );
}
