/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";

import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

// Reusable component to render images with a delete button
// const SelectedImagesDisplay = ({ images, onRemoveImage }) => {

//   return (
//     <>
//       {images?.map((image, index) => (
//         <div
//           className="w-fit h-[60px] rounded-md relative mb-5 bg-contain "
//           key={index}
//         >
//           <X
//             className="absolute -top-2 -right-2 bg-[rgba(0,0,0,0.9)] rounded-full text-white p-[5px] cursor-pointer"
//             onClick={() => onRemoveImage(index)}
//           />
//           <img
//             src={URL.createObjectURL(image)}
//             alt={`Selected image ${index}`}
//             className="object-contain h-[60px] w-auto"
//           />
//         </div>
//       ))}
//     </>
//   );
// };

const SelectedImagesDisplay = ({ source, onRemoveImage }) => {
  return source?.map((image, i) => (
    <div
      className="w-full h-[60px] rounded-md relative mb-5   bg-contain"
      key={i}
    >
      {type === "file" && (
        <X
          className="absolute -top-2 -right-2 bg-[rgba(0,0,0,0.9)] rounded-full text-white p-[5px]  cursor-pointer"
          onClick={() => onRemoveImage(i)}
        />
      )}
      <Image
        src={image}
        alt={`images ${i}`}
        width={200}
        height={100}
        className="object-contain h-[60px]"
      />
    </div>
  ));
};

export const renderImages = (source, type, onRemoveImage) => {
  return source?.map((image, i) => (
    <div
      className="w-full h-[60px] rounded-md relative mb-5   bg-contain"
      key={i}
    >
      {type === "file" && (
        <X
          className="absolute -top-2 -right-2 bg-[rgba(0,0,0,0.9)] rounded-full text-white p-[5px]  cursor-pointer"
          onClick={() => onRemoveImage(i)}
        />
      )}
      <Image
        src={image}
        alt={`images ${i}`}
        width={200}
        height={100}
        className="object-contain h-[60px]"
      />
    </div>
  ));
};

export default SelectedImagesDisplay;
