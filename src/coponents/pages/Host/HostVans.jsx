import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link
      to={van.id}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div
        className="host-van-single"
        key={van.id}
        style={{ borderRadius: "10px", backgroundColor: "#fdf5e6 " }}
      >
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p style={{fontFamily: "monospace", font: "menu"}}>$ {van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  const Spinner = () => {
    return <div className="spinner"></div>;
  };

  return (
    <section>
      <h1
        className="host-vans-title"
        style={{
          fontFamily: "monospace",
          fontWeight: "bolder",
          marginBottom: "15px",
        }}
      >
        Your Listed Vans
      </h1>
      <div className="host-vans-list">
        {vans.length > 0 ? <section>{hostVansEls}</section> : <Spinner /> }
      </div>
    </section>
  );
}
