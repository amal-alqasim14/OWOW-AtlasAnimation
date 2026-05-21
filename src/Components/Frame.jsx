import React, { useEffect, useState } from "react";
import logo from "../assets/Union.svg"
import "./Frame.css";

export function Frame() {
    const [Platforms, setPlatforms] = useState([]);
    const [Types, setTypes] = useState([]);
    const [Search, setSearch] = useState("");
    const [Filters, setFilters] = useState({platforms: Platforms, types: Types});
    const PlatformList = ["Web", "Mobile-iOS", "Mobile-Android"];
    const TypeList = ["Scroll", "Hover", "Tap", "Loading", "Transition", "Entrance", "Exit"];
    useEffect(() => {
        TypeList.forEach(type =>
            { document.querySelector(`#box-${type}`).checked = Types.includes(type); });
        PlatformList.forEach(platform =>
            { document.querySelector(`#box-${platform}`).checked = Platforms.includes(platform); });
        document.querySelector("#search-bar").value = Search;
        document.querySelector("#search-filter-values").innerHTML = [...Platforms, ...Types, Search].join(", ");
        setFilters({platforms: Platforms, types: Types});
    }, [Platforms, Types, Search]);
    return (
        <>
            <div id="top-bar">
                <img src={logo} id="logo" />
                <input type="text" name="search-bar" id="search-bar" placeholder="Search animations..." onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div id="side-bar">
                <p>Filters</p>
                <p>Platforms</p>
                <ul id="Platform-Filter" key="Platform-Filter" onChange={update}>
                    {
                        PlatformList.map((platform) => (
                            <li>
                                {
                                    Platforms.includes(platform) &&
                                        <input type="checkbox" name={platform} id={"box-"+platform} checked /> ||
                                        <input type="checkbox" name={platform} id={"box-"+platform} />
                                }
                                {
                                    Platforms.includes(platform) &&
                                        <i><label htmlFor={"box-"+platform}>{platform}</label></i> ||
                                        <label htmlFor={"box-"+platform}>{platform}</label>
                                }
                            </li>
                        ))
                    }
                </ul>
                <p>Types</p>
                <ul id="Type-Filter" key="Type-Filter" onChange={update}>
                    {
                        TypeList.map((type) => (
                            <li>
                                {
                                    Types.includes(type) &&
                                        <input type="checkbox" name={type} id={"box-"+type} checked /> ||
                                        <input type="checkbox" name={type} id={"box-"+type} />
                                }
                                {
                                    Types.includes(type) &&
                                        <i><label htmlFor={"box-"+type}>{type}</label></i> ||
                                        <label htmlFor={"box-"+type}>{type}</label>
                                }
                            </li>
                        ))
                    }
                </ul>
                {
                    (Filters.platforms.length > 0 || Filters.types.length > 0 || Search.length > 0) &&
                    <>
                        <p>Active filters</p>
                        <ul id="active-filters">
                            {Filters.platforms.map((platform) => <i><li id={"platform-"+platform}><button onClick={remove} className="filter-button">{platform}</button></li></i>)}
                            {Filters.types.map((type) => <i><li id={"type-"+type}><button onClick={remove} className="filter-button">{type}</button></li></i>)}
                            {Search.length > 0 && <li id="search-input"><button className="filter-button" onClick={remove}>{Search}</button></li>}
                        </ul>
                    </>
                }
            </div>
        </>
    );

    function remove(e) {
        e = e.target.innerText;
        if (Platforms.includes(e)) { setPlatforms(Platforms.filter(platform => platform != e)); }
        else if (Types.includes(e)) { setTypes(Types.filter(type => type != e)); }
        else if (e === Search) setSearch("");
    }

    function update(e) {
        let platforms = Platforms;
        let types = Types;
        if (document.querySelector("#Platform-Filter").querySelectorAll(`#box-${e.target.name}`).length > 0)
        {
            if (e.target.checked) setPlatforms(platforms = [...platforms, e.target.name]);
            else {
                platforms = platforms.filter(platform => platform != e.target.name);
                setPlatforms(platforms);
            }
        }
        if (document.querySelector("#Type-Filter").querySelectorAll(`#box-${e.target.name}`).length > 0)
        {
            if (e.target.checked) setTypes(types = [...types, e.target.name]);
            else {
                types = types.filter(type => type != e.target.name);
                setTypes(types);
            }
        }
    }
}