import Switch from "../UI/Switch";
import Range from "../UI/Range";
import SortBy from "../UI/SortBy";
import StarRating from "../UI/StarRating";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isBtnOn, setIsBtnOn] = useState(() => {
    if (searchParams.get("type")) {
      return {
        veg: searchParams.get("type") === "veg" ? true : false,
        nonVeg: searchParams.get("type") === "nonVeg" ? true : false,
      };
    } else {
      return {
        veg: false,
        nonVeg: false,
      };
    }
  });

  function handleVegClick() {
    setIsBtnOn((ps) => {
      return {
        ...ps,
        veg: ps.veg ? false : true,
        nonVeg: false,
      };
    });
  }

  function handleNonVegClick() {
    setIsBtnOn((ps) => {
      return {
        ...ps,
        nonVeg: ps.nonVeg ? false : true,
        veg: false,
      };
    });
  }

  useEffect(() => {
    if (isBtnOn.veg) {
      searchParams.set("type", "veg");
      setSearchParams(searchParams);
    }
    if (isBtnOn.nonVeg) {
      searchParams.set("type", "nonVeg");
      setSearchParams(searchParams);
    }
    if (isBtnOn.veg === false && isBtnOn.nonVeg === false) {
      searchParams.delete("type");
      setSearchParams(searchParams);
    }
  }, [isBtnOn, searchParams, setSearchParams]);

  return (
    <div className="  flex flex-col gap-4 bg-white px-24 py-12 ">
      <h2 className="text-xl font-bold text-DarkGrey">Filters</h2>
      <div className=" flex  items-center justify-between ">
        <div className=" flex  gap-12 ">
          <Switch
            handleVegClick={handleVegClick}
            isBtnOn={isBtnOn}
            color={"green"}
            title={"veg"}
          />
          <Switch
            handleNonVegClick={handleNonVegClick}
            isBtnOn={isBtnOn}
            color={"red"}
            title={"nonVeg"}
          />
          <StarRating />
          <Range />
        </div>
        <SortBy
          options={[
            { value: "default", label: "Sort By" },
            { value: "price-asc", label: "By Price | A-Z" },
            { value: "price-desc", label: "By Price | Z-A" },
          ]}
        />
      </div>
    </div>
  );
}
