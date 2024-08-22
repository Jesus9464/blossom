import React, { useState, useRef, useEffect } from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterIcon: string;
  searchIcon: string;
};

const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  searchIcon,
  filterIcon,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const closePopover = (e: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(e.target as Node) &&
      filterButtonRef.current &&
      !filterButtonRef.current.contains(e.target as Node)
    ) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closePopover);
    return () => {
      document.removeEventListener("mousedown", closePopover);
    };
  }, []);

  return (
    <>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search or filter results"
          value={value}
          onChange={onChange}
          className="w-full h-[52px] p-[9px_13px_9px_20px] bg-gray-200 rounded-lg pl-[40px] pr-[36px]"
        />
        <img
          src={searchIcon}
          alt="Search Icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5"
        />
        <button ref={filterButtonRef} onClick={togglePopover} type="button">
          <img
            src={filterIcon}
            alt="Filter Icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </button>
        {isPopoverOpen && (
          <div
            ref={popoverRef}
            className="absolute z-10 w-80 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm"
            style={{ top: "60px", right: "10px" }}
          >
            <div className="px-4 py-3">
              <h3 className="text-[#6B7280] mb-2">Character</h3>
              <div className="flex flex-wrap gap-2">
                <button className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-[#EEE3FF] text-[#8054C7] text-center transition-colors duration-300 hover:bg-[#E5D9FF]">
                  All
                </button>
                <button className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-[#EEE3FF] text-[#8054C7] text-center transition-colors duration-300 hover:bg-[#E5D9FF]">
                  Starred
                </button>
                <button className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-[#EEE3FF] text-[#8054C7] text-center transition-colors duration-300 hover:bg-[#E5D9FF]">
                  Others
                </button>
              </div>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-[#6B7280] mb-2">Species</h3>
              <div className="flex flex-wrap gap-2">
                <button className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-[#EEE3FF] text-[#8054C7] text-center transition-colors duration-300 hover:bg-[#E5D9FF]">
                  All
                </button>
                <button className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-[#EEE3FF] text-[#8054C7] text-center transition-colors duration-300 hover:bg-[#E5D9FF]">
                  Human
                </button>
                <button className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-[#EEE3FF] text-[#8054C7] text-center transition-colors duration-300 hover:bg-[#E5D9FF]">
                  Alien
                </button>
              </div>
            </div>

            <div className="px-4 py-3">
              <button
                className={`w-full px-4 py-2 font-semibold rounded-md transition-colors duration-300 ${
                  true
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#8054C7] text-white hover:bg-[#6A3F7C]"
                }`}
              >
                Filter
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchInput;
