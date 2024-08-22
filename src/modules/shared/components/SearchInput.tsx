import React from "react";

type Props = {
  value: string;
  onChange: (e: any) => void;
  filterIcon: string;
  searchIcon: string;
  onClickFilter: () => void;
};

const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  onClickFilter,
  searchIcon,
  filterIcon,
}) => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search or filter results"
        value={value}
        onChange={onChange}
        className="w-full h-[52px] p-[9px_13px_9px_20px] bg-gray-200 rounded-lg pl-[40px] pr-[36px] "
      />
      <img
        src={searchIcon}
        alt="Search Icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5"
      />
      <img
        onClick={onClickFilter}
        src={filterIcon}
        alt="Filter Icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
      />
    </div>
  );
};

export default SearchInput;
