/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Modal = ({ show, setShow, title, content }) => {
  const container = useRef();

  useGSAP(() => {
    // gsap code here...
    gsap.from(".box", { y: -300, ease: "circ.out", duration: 0.5 }); // <-- automatically reverted
  }, [show, setShow]);
  return (
    <div className="relative z-30">
      {show && (
        <div className="h-screen transition ease-in-out duration-500 w-screen  absolute hover:cursor-not-allowed top-0 flex items-center justify-center z-40 backdrop-sepia-0 bg-slate-600/40">
          <div
            ref={container}
            className="box  bg-white drop-shadow-2xl top-[40%] md:top-[30%] absolute z-50 p-8 md:p-14 lg:p-16 hover:cursor-default w-full max-w-[20rem] md:max-w-[30rem] lg:max-w-[35rem] rounded-3xl"
          >
            <button
              onClick={() => setShow(false)}
              className="absolute bg-red-500 top-0 right-0"
            >
              close
            </button>
            <h2 className="md:text-3xl text-2xl  font-semibold mb-5">Title</h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda voluptates neque soluta quibusdam distinctio recusandae
              fuga rerum velit sequi ducimus!
            </p>
            <div className="flex *:py-1 *:px-4  *:rounded-lg w-full gap-5 justify-center text-white mt-8">
              <button onClick={() => setShow(false)} className="bg-green-600">
                Success
              </button>{" "}
              <button onClick={() => setShow(false)} className="bg-red-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
