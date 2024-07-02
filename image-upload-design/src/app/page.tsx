"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const imageInput = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUploadedImage] = useState<string | undefined>(undefined);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      if (e.currentTarget.files[0].type.includes("image")) {
        setUploadedImage(URL.createObjectURL(e.currentTarget.files[0]));
      }
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div
        className="w-fit h-fit aspect-square rounded border border-white flex items-center justify-center hover:cursor-pointer p-1"
        id="imageUpload"
        onClick={handleClick}
      >
        <input
          className="border z-[999] border-green-500 w-20 h-20 opacity-0 hover:cursor-pointer relative"
          ref={imageInput}
          type="file"
          accept="image/*"
          onChange={handleChange}
        />

        {uploadedImage ? (
          <Image
            className="rounded absolute z-[998] object-cover object-center w-20 aspect-square"
            src={uploadedImage}
            width={80}
            height={80}
            alt="uploaded image"
          />
        ) : (
          <p className="text-white/50 absolute z-[997]">Picture</p>
        )}
      </div>
    </main>
  );
}
