/* eslint-disable @typescript-eslint/no-non-null-assertion */
import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";

import { Loading } from "../Loading";

interface IScreenshotButtonProps {
  screenshot: string | null;
  setScreenshot: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  setScreenshot,
}: IScreenshotButtonProps) {
  const [isScreenTakes, setIsScreenTakes] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsScreenTakes(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    setScreenshot(base64image);
    setIsScreenTakes(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash onClick={() => setScreenshot(null)} weight="fill" />
      </button>
    );
  }

  return (
    <button
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      type="button"
      onClick={handleTakeScreenshot}
    >
      {isScreenTakes ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
