import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import data from "../../assests/games.json";

function SearchBar({setfetchedData}) {
  const [search, setsearch] = useState("");
  const [searchData, setsearchData] = useState([]);
  const [selectedItem, setselectedItem] = useState(-1);

  //   function handles search input
  const handleSearch = (e) => {
    setsearch(e.target.value);
    console.log(search);
  };

  //   function handles clearing search input
  const handleClose = () => {
    setsearch("");
    setsearchData([]);
    setselectedItem(-1);
  };

  const handleKeyDown = (e) => {
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setselectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchData.length - 1
      ) {
        setselectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        setsearch(searchData[selectedItem].title);
      }
    } else {
      setselectedItem(-1);
    }
  };

  const handleClick = (title) => setsearch(title);

  //   wheneven user searches it fetches from json data
  useEffect(() => {
    if (search !== "") {
      //   fetch(
      //     `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`
      //   )
      //     .then((res) => res.json())
      const newFileterData = data.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      setsearchData(newFileterData);
      setfetchedData(newFileterData)
    } else {
      setsearchData([]); // Clear results when search is empty
    }
  }, [search, setfetchedData]);

  return (
    <section >
      {/* Search Bar - input container */}
      <div className="flex flex-row items-center justify-between rounded-md border-2 bg-stone-400 border-stone-800">
        <input
          type="text"
          className="w-80 h-9 p-2 bg-stone-400 outline-none text-black placeholder-slate-700 rounded-md"
          placeholder="Search..."
          autoComplete="off"
          value={search}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <div className="bg-stone-300 w-14 h-10 rounded-md flex flex-col items-center justify-center">
          {search === "" ? (
            <IoSearch size={25} color="black" />
          ) : (
            <IoMdClose onClick={handleClose} size={25} color="black" />
          )}
        </div>
      </div>

      {/* Search result container */}
      <div className=" w-80 flex flex-col absolute">
        {searchData.slice(0, 10).map((each, index) => {
          return (
            <p
              key={index}
              className={`bg-stone-500 py-1 border-b-2 border-stone-700 text-black ${
                selectedItem === index ? "bg-stone-200 text-white" : ""
              }`}
              onClick={() => handleClick(each.title)}
            >
              {each.title}
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default SearchBar;
