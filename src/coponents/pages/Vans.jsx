import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";


// import { PiVanFill } from "react-icons/pi";

/**
 * {
 * id: "1",
 * name: "Modest Explorer",
 * price: 60,
 * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
 * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
 * type: "simple"
 * }
 */


export function loader() {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [vans, setVans] = React.useState([]);
  // const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState(null);

 const vans = useLoaderData();

  const typeFilter = searchParams.get("type");


  // React.useEffect(() => {
  //   async function loadVans() {
  //     setLoading(true)

  //      try {
  //        const data = await getVans();
  //        setVans(data);
  //      } catch (err) {
  //        setError(err);
  //      } finally {
  //        setLoading(false);
  //      }
  //   }

  //   loadVans();
  // }, []);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: capitalize(typeFilter),
        }}
      >
        <img alt={van.name} src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  // ***********loading state*************************************************************
  
  // if (loading) {
  //   return (
  //     // <!-- Spinner Container -->
  //     <div class="spinner-container">
  //       {/* <!-- Spinner Animation --> */}
  //       <div class="spinner"></div>
  //     </div>
  //   );
  // }

   if (error) {
     return <h1>There was an error: {error.message}</h1>;
   }


  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          style={{ fontFamily: "monospace" }}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          style={{ fontFamily: "monospace" }}
          className={`van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          style={{ fontFamily: "monospace" }}
          className={`van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type.clear-filters"
            style={{
              fontFamily: "monospace",
              border: "none",
              borderRadius: "7px",
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            Clear filter
          </button>
        ) : null}

        {/* <Link to="?type=simple" className="van-type simple">
          Simple
        </Link>
        <Link to="?type=luxury" className="van-type luxury">
          Luxury
        </Link>
        <Link to="?type=rugged" className="van-type rugged">
          Rugged
        </Link>
        <Link to="." className="van-type clear-filters">
          Clear filter
        </Link> */}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
