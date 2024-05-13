import { useEffect, useRef } from "react";

type Props = {
  text: string;
  reverse: boolean;
};

function AutoScrollText(props: Props) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      const element = textRef.current;
      if (!element) return;
      const animationDuration = (element.scrollWidth / 180) * 1000;
      element.style.animation = `${
        props.reverse ? "reverse-scroll" : "scroll"
      } ${animationDuration}ms linear infinite`;
    };

    scroll();

    return () => {
      const element = textRef.current;
      if (!element) return;
      element.style.animation = "";
    };
  }, [textRef]);
  return (
    <>
      <div className="auto-scroll-text-container">
        <div ref={textRef} className="auto-scroll-text text-6xl">
          {props.text}
        </div>
      </div>
    </>
  );
}

export default AutoScrollText;
