import { useState } from "react";
import { IoMdBookmark } from "react-icons/io";

import SearchBar from "../SearchBar";
import data from "../../assests/games.json";

function HomePage() {
  const [fetchedItems, setFetchedItems] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  // Filter items by platform
  const filterByPlatform = (items) => {
    if (selectedPlatform === "All") return items;
    return items.filter((item) => item.platform === selectedPlatform);
  };

  // Combine fetched items or default data and apply filtering
  const displayedItems = fetchedItems.length > 0 ? fetchedItems : data;
  const filteredItems = filterByPlatform(displayedItems);

  return (
    <section className="bg-stone-600 h-auto min-h-screen w-screen text-white font-sans flex flex-col items-center justify-start pt-5">
      {/* Search container */}
      <div className="text-center relative">
        <h1 className="font-semibold text-4xl">Games Searcher....</h1>
        <p className="text-base">One place for your game's</p>
        <div className="my-10">
          <SearchBar setfetchedData={setFetchedItems} />
        </div>
      </div>

      {/* Platform Filter Dropdown */}
      <div className="w-4/5 mb-5 flex justify-end">
        <select
          className="p-2 bg-stone-700 border-2 border-stone-900 rounded text-white"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option value="All">All Platforms</option>
          {[...new Set(data.map((item) => item.platform))].map(
            (platform, index) => (
              <option key={index} value={platform}>
                {platform}
              </option>
            )
          )}
        </select>
      </div>

      {/* Fetched items container */}
      <div className="flex flex-row flex-wrap w-4/5 gap-3 pb-10">
        {filteredItems.length > 0 ? (
          filteredItems.map((each, i) => (
            <div
              key={i}
              className="rounded flex flex-row bg-stone-700 border-2 border-stone-900 w-72 h-32 px-2"
            >
              <div className="w-full flex flex-col h-full justify-between">
                <h1 className="text-base font-semibold">{each.title}</h1>
                <p className="py-1 text-dark">Platform: {each.platform}</p>
                <p className="text-sm text-dark pb-2">{each.genre}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                {each.editors_choice === "Y" ? (
                  <IoMdBookmark color="yellow" size={20} />
                ) : (
                  <IoMdBookmark size={20} />
                )}
                <p
                  className={`text-right pb-2 ${
                    each.score > 7
                      ? "text-green-500"
                      : each.score > 4.5
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {each.score}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No games available</p>
        )}
      </div>
    </section>
  );
}

export default HomePage;
