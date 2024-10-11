import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const IMAGE_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function App() {
  const container = useRef<HTMLDivElement | null>(null);

  const pagesWrapperRef = useRef<HTMLDivElement | null>(null);
  const pagesRef = useRef<HTMLDivElement | null>(null);
  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;
    const pagesElement = pagesRef?.current;
    if (!pagesElement) return;
    const pagesWrapperElement = pagesWrapperRef?.current;
    if (!pagesWrapperElement) return;
    setupGsap(pagesElement, pagesWrapperElement);
  }, []);

  // タイトルの回転アニメーション
  useGSAP(
    () => {
      gsap.to("#title", { rotation: 360 });
    },
    { scope: container }
  );

  // スクロールアニメーションの設定
  const setupGsap = (pagesElement: HTMLDivElement, pagesWrapperElement: HTMLDivElement) => {
    gsap.to(pagesElement, {
      x: () => -(pagesElement.clientWidth - pagesWrapperElement.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#horizontal-scroll-section",
        start: "top top",
        end: () => `+=${pagesElement.clientWidth - pagesWrapperElement.clientWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    gsap.to("#scrollcard", {
      scrollTrigger: {
        trigger: "#horizontal-scroll-section",
        start: "top center",
        end: () => `+=${pagesElement.clientWidth - pagesWrapperElement.clientWidth + 200}`,
        scrub: true,
        onEnter: () =>
          gsap.to("#scrollcard", {
            backgroundColor: "#000",
            duration: 1.4,
          }),
        onLeave: () =>
          gsap.to("#scrollcard", {
            backgroundColor: "#fff",
            duration: 1.4,
          }),
        onEnterBack: () =>
          gsap.to("#scrollcard", {
            backgroundColor: "#000",
            duration: 1.4,
          }),
        onLeaveBack: () =>
          gsap.to("#scrollcard", {
            backgroundColor: "#fff",
            duration: 1.4,
          }),
      },
    });
  };

  return (
    <div ref={container} className='app'>
      <div className='my-20 flex justify-center items-center text-black text-9xl' id='title'>Hello</div>
      <div className='my-20 bg-black text-white' id='scrollcard'>
        <section className='w-full flex justify-center items-center h-screen' id='horizontal-scroll-section'>
          <div className='w-full h-screen'>
            <div className='relative h-screen' ref={pagesWrapperRef}>
              <div
                className='absolute top-0 left-0 flex gap-10 h-full justify-center items-center'
                ref={pagesRef}
                id='pages'
              >
                {IMAGE_LIST.map((index) => {
                  return (
                    <div
                      key={index}
                      className='w-[300px] h-[400px] bg-blue-300 text-6xl font-bold flex justify-center items-center'
                    >
                      Card
                    </div>
                  );
                })}
                <div className='text-3xl text-black'>横スクロールのテスト</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
