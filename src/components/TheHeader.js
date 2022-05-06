import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import SearchInput from "./SearchInput";

function TheHeader() {
  return (
    <header className="flex-1 flex justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
      <div className="flex items-center w-full">
        {/* <a
          href="#sidebar"
          className="mr-[8px] text-[#969696] p-1 -ml-1.5 hidden lg:hidden"
        >
          <MenuIcon className="w-6 h-6" />
        </a> */}
        <div className="flex">
          <a
            href="/"
            className="mr-[8px] text-[#969696] p-1 transition-colors hover:text-white bg-black bg-opacity-70 rounded-full cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </a>
          <a
            href="/"
            className="ml-[8px] mr-[8px] text-[#969696] p-1 transition-colors hover:text-white bg-black bg-opacity-70 rounded-full cursor-not-allowed"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </a>
        </div>
        <SearchInput />
      </div>
      <div>
        {/* <TheButtonRegister /> */}
        {/* <TheButtonLogin /> */}
      </div>
    </header>
  );
}

export default TheHeader;
