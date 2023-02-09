import { useEffect, useState } from "react";
import "./App.css";
// import facebook from "./assets/images/icon-facebook.svg";
import FacebookIcon from "./assets/images/icon-facebook.svg";
import TwitterIcon from "./assets/images/icon-twitter.svg";
import YoutubeIcon from "./assets/images/icon-youtube.svg";
import InstagramIcon from "./assets/images/icon-instagram.svg";
import UpIcon from "./assets/images/icon-up.svg";
import DownIcon from "./assets/images/icon-down.svg";

function App() {
  const [themeDark, setThemeDark] = useState(true);
  useEffect(() => {
    if (themeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeDark]);

  return (
    <div className="App text-inter grid bg-white p-5 dark:bg-darkBg lg:h-screen lg:w-screen lg:grid-cols-4 lg:place-content-center lg:justify-center lg:space-x-4 lg:px-[200px]">
      <div className="flex dark:divide-gray-400 dark:text-white sm:flex-col sm:divide-y lg:col-span-4 lg:flex-row lg:justify-between lg:divide-y-0">
        <div className="flex flex-col text-left sm:py-3 lg:ml-4">
          <h1 className="text-xl">Social Media Dashboard</h1>
          <p className="text-sm  dark:text-darkText">Total Followers: 23,004</p>
        </div>
        {/* Toggle Button */}

        <div className="flex items-center justify-between py-3 lg:gap-3">
          <p className="text-[12px] dark:text-darkText">Dark Mode</p>
          <label className="relative inline-flex cursor-pointer items-center ">
            <input
              type="checkbox"
              className="peer sr-only"
              onChange={() => setThemeDark(!themeDark)}
              checked={themeDark === true ? true : false}
            />
            <div
              className="peer h-6  w-11 self-center rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] 
                    after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all 
                    after:content-[''] peer-checked:bg-gradient-to-r peer-checked:from-toggleDarkThemFrom 
                    peer-checked:to-toggleDarkThemTo peer-checked:after:translate-x-full peer-checked:after:border-white 
                    peer-focus:ring-4 "
            ></div>
          </label>
        </div>
      </div>
      <div className="cursor-pointer rounded-lg border border-transparent sm:py-3">
        <div className="h-1 w-full rounded-t-lg border border-transparent bg-faceBook"></div>
        <div className="flex flex-col items-center justify-center bg-lightCardBg py-4 px-5 dark:bg-darkCardBg">
          <div className="flex justify-center gap-2">
            <img src={FacebookIcon} alt="facebook Icon" />
            <p className="text-[12px] text-lightText dark:text-darkText">
              @nathanf
            </p>
          </div>
          <p className="mt-3 text-[40px] font-bold tracking-[4px] text-lightTextSecond dark:text-white">
            1987
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[5px] text-lightText dark:text-darkText">
            Followers
          </p>
          <div className="mt-4 flex items-center gap-2">
            <img src={UpIcon} alt="Up Icon" />
            <p className="text-[10px] font-bold text-limeGreen">12 Today</p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer rounded-lg border border-transparent sm:py-3">
        <div className="h-1 w-full rounded-t-lg border border-transparent bg-twitter"></div>
        <div className="flex flex-col items-center justify-center bg-lightCardBg py-4 px-5 dark:bg-darkCardBg">
          <div className="flex justify-center gap-2">
            <img src={TwitterIcon} alt="facebook Icon" />
            <p className="text-[12px] text-lightText dark:text-darkText">
              @nathanf
            </p>
          </div>
          <p className="mt-3 text-[40px] font-bold tracking-[4px] text-lightTextSecond dark:text-white">
            1044
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[5px] text-lightText dark:text-darkText">
            Followers
          </p>
          <div className="mt-4 flex items-center gap-2">
            <img src={UpIcon} alt="Up Icon" />
            <p className="text-[10px] font-bold text-limeGreen">99 Today</p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer rounded-lg border border-transparent sm:py-3">
        <div className="h-1 w-full rounded-t-lg border border-transparent bg-gradient-to-r from-instagramFrom to-instagramTo"></div>
        <div className="flex flex-col items-center justify-center bg-lightCardBg py-4 px-5 dark:bg-darkCardBg">
          <div className="flex justify-center gap-2">
            <img src={InstagramIcon} alt="facebook Icon" />
            <p className="text-[12px] text-lightText dark:text-darkText">
              @realnathanf
            </p>
          </div>
          <p className="mt-3 text-[40px] font-bold tracking-[4px] text-lightTextSecond dark:text-white">
            11k
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[5px] text-lightText dark:text-darkText">
            Followers
          </p>
          <div className="mt-4 flex items-center gap-2">
            <img src={UpIcon} alt="Up Icon" />
            <p className="text-[10px] font-bold text-limeGreen">1099 Today</p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer rounded-lg border border-transparent sm:py-3">
        <div className="h-1 w-full rounded-t-lg border border-transparent bg-youTube"></div>
        <div className="flex flex-col items-center justify-center bg-lightCardBg py-4 px-5 dark:bg-darkCardBg">
          <div className="flex justify-center gap-2">
            <img src={YoutubeIcon} alt="facebook Icon" />
            <p className="text-[12px] text-lightText dark:text-darkText">
              Nathan F.
            </p>
          </div>
          <p className="mt-3 text-[40px] font-bold tracking-[4px] text-lightTextSecond dark:text-white">
            8239
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[5px] text-lightText dark:text-darkText">
            subscribers
          </p>
          <div className="mt-4 flex items-center gap-2">
            <img src={DownIcon} alt="Up Icon" />
            <p className="text-[10px] font-bold text-brightRed">144 Today</p>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-4 lg:col-span-4">
        <p className="text-left text-2xl text-lightText dark:text-white">
          Overview - Today
        </p>
      </div>
      <div className="rounded-md border border-transparent bg-lightCardBg px-8 py-4 dark:bg-darkCardBg sm:mt-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left">
            <p className="text-[13px] font-bold text-lightText dark:text-darkText">
              Page Views
            </p>
            <p className="mt-8 text-2xl text-lightTextSecond dark:text-white">
              87
            </p>
          </div>
          <div className="text-right">
            <img
              src={FacebookIcon}
              alt="facebook icon"
              className="mb-3 inline"
            />
            <div className="mt-7 flex items-center gap-1">
              <img src={UpIcon} alt="iconUp" />
              <p className="text-[10px] font-bold text-limeGreen">3%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-transparent bg-lightCardBg px-8 py-4 dark:bg-darkCardBg sm:mt-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left">
            <p className="text-[13px] font-bold text-lightText dark:text-darkText">
              Likes
            </p>
            <p className="mt-8 text-2xl text-lightTextSecond dark:text-white">
              52
            </p>
          </div>
          <div className="text-right">
            <img
              src={FacebookIcon}
              alt="facebook icon"
              className="mb-3 inline"
            />
            <div className="mt-7 flex items-center gap-1">
              <img src={DownIcon} alt="iconUp" />
              <p className="text-[10px] font-bold text-brightRed">2%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-transparent bg-lightCardBg px-8 py-4 dark:bg-darkCardBg sm:mt-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left">
            <p className="text-[13px] font-bold text-lightText dark:text-darkText">
              Likes
            </p>
            <p className="mt-8 text-2xl text-lightTextSecond dark:text-white">
              5462
            </p>
          </div>
          <div className="text-right">
            <img
              src={InstagramIcon}
              alt="instagram icon"
              className="mb-3 inline text-right"
            />
            <div className="mt-7 flex items-center gap-1">
              <img src={UpIcon} alt="iconUp" />
              <p className="text-[10px] font-bold text-limeGreen">2254%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-transparent bg-lightCardBg px-8 py-4 dark:bg-darkCardBg sm:mt-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left">
            <p className="text-[13px] font-bold text-lightText dark:text-darkText">
              Profile Views
            </p>
            <p className="mt-8 text-2xl text-lightTextSecond dark:text-white">
              52k
            </p>
          </div>
          <div className="text-right">
            <img
              src={InstagramIcon}
              alt="instagram icon"
              className="mb-3 inline text-right"
            />
            <div className="mt-7 flex items-center gap-1">
              <img src={UpIcon} alt="iconUp" />
              <p className="text-[10px] font-bold text-limeGreen">1375%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-transparent bg-lightCardBg px-8 py-4 dark:bg-darkCardBg sm:mt-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left">
            <p className="text-[13px] font-bold text-lightText dark:text-darkText">
              Retweets
            </p>
            <p className="mt-8 text-2xl text-lightTextSecond dark:text-white">
              117
            </p>
          </div>
          <div className="text-right">
            <img
              src={TwitterIcon}
              alt="instagram icon"
              className="mb-3 inline text-right"
            />
            <div className="mt-7 flex items-center gap-1">
              <img src={UpIcon} alt="iconUp" />
              <p className="text-[10px] font-bold text-limeGreen">303%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-transparent bg-lightCardBg px-8 py-4 dark:bg-darkCardBg sm:mt-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left">
            <p className="text-[13px] font-bold text-lightText dark:text-darkText">
              Likes
            </p>
            <p className="mt-8 text-2xl text-lightTextSecond dark:text-white">
              507
            </p>
          </div>
          <div className="text-right">
            <img
              src={TwitterIcon}
              alt="instagram icon"
              className="mb-3 inline text-right"
            />
            <div className="mt-7 flex items-center gap-1">
              <img src={UpIcon} alt="iconUp" />
              <p className="text-[10px] font-bold text-limeGreen">553%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-transparent bg-lightCardBg px-8 py-4 dark:bg-darkCardBg sm:mt-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left">
            <p className="text-[13px] font-bold text-lightText dark:text-darkText">
              Likes
            </p>
            <p className="mt-8 text-2xl text-lightTextSecond dark:text-white">
              107
            </p>
          </div>
          <div className="text-right">
            <img
              src={YoutubeIcon}
              alt="instagram icon"
              className="mb-3 inline text-right"
            />
            <div className="mt-7 flex items-center gap-1">
              <img src={DownIcon} alt="iconUp" />
              <p className="text-[10px] font-bold text-brightRed">19%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-transparent bg-lightCardBg px-8 py-4 dark:bg-darkCardBg sm:mt-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left">
            <p className="text-[13px] font-bold text-lightText dark:text-darkText">
              Total Views
            </p>
            <p className="mt-8 text-2xl text-lightTextSecond dark:text-white">
              1407
            </p>
          </div>
          <div className="text-right">
            <img
              src={YoutubeIcon}
              alt="instagram icon"
              className="mb-3 inline text-right"
            />
            <div className="mt-7 flex items-center gap-1">
              <img src={DownIcon} alt="iconUp" />
              <p className="text-[10px] font-bold text-brightRed">12%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
