import React, { useId } from "react";

type CarouselTabProps = {
  checked: boolean;
  onChecked: () => void;
};

export const CarouselTab = ({
  checked,
  onChecked,
}: CarouselTabProps): JSX.Element => {
  const inputId = useId();

  return (
    <div className="h-4 w-full">
      <input
        className="peer/image absolute appearance-none"
        id={inputId}
        type="radio"
        checked={checked}
        onChange={({ target }) => {
          if (target.checked) {
            onChecked();
          }
        }}
      />
      <label
        className="relative block h-full cursor-pointer 
        before:absolute before:top-1/2 before:block before:h-[2px] before:w-full before:rounded 
      before:bg-black before:opacity-10 before:content-[''] 
        peer-checked/image:before:opacity-100"
        htmlFor={inputId}
      >
        <p className="sr-only">select image</p>
      </label>
    </div>
  );
};
