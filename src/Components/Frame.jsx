import React, { useEffect, useState } from "react";
import logo from "../assets/Union.svg"
import "./Frame.css";

export function Frame() {
    const [Platforms, setPlatforms] = useState([]);
    const [Types, setTypes] = useState([]);
    const [Search, setSearch] = useState("");
    const [SearchTags, setSearchTags] = useState([]);
    const [Filters, setFilters] = useState({platforms: Platforms, types: Types});
    const PlatformList = ["Web", "Mobile-iOS", "Mobile-Android"];
    const TypeList = ["Tap", "Hover", "Scroll", "Loading", "Transition", "Entrance", "Exit"]
    const [Animation, setAnimation] = useState("grow");
    useEffect(() => {
        TypeList.forEach(type =>
            { document.querySelector(`#box-${type}`).checked = Types.includes(type); });
        PlatformList.forEach(platform =>
            { document.querySelector(`#box-${platform}`).checked = Platforms.includes(platform); });
        if (Search != document.querySelector("#search-bar-top").value)
            document.querySelector("#search-bar-top").value = Search;
        if (Search != document.querySelector("#search-bar-bottom").value)
            document.querySelector("#search-bar-bottom").value = Search;
        let searchTags = [];
        let searchString = Search.trim();
        while (searchString.includes(" "))
        {
            let i = searchString.indexOf(" ");
            searchTags = [...searchTags, searchString.substring(0, i)]
            searchString = searchString.substring(i).trim();
        }
        searchTags = [...searchTags, searchString];
        setSearchTags(searchTags);
        console.log(searchTags);
        document.querySelector("#search-filter-values").innerHTML = [...Platforms, ...Types, Search].join(", ");
        setFilters({platforms: Platforms, types: Types});
    }, [Platforms, Types, Search, Animation]);
    return (
        <>
            <div id="top-bar">
                <button id="menu" className="menu" onClick={MenuToggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <img src={logo} id="logo" />
                <input type="text" class="search-bar" name="search-bar-top" id="search-bar-top" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div id="side-bar" class={Animation}>
                <input type="text" class="search-bar" name="search-bar-bottom" id="search-bar-bottom" placeholder="Search..." onKeyUp={(e) => e.code === "Enter" && setSearch(document.querySelector("#search-bar-bottom").value) && console.log(e)}/>
                <button id="search-button" onClick={() => setSearch(document.querySelector("#search-bar-bottom").value)}>search</button>
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
                            {Search.length > 0 && SearchTags.map(tag => <li id={`search-input-${SearchTags.indexOf(tag)}`}><button className="filter-button" onClick={remove}>{tag}</button></li>)}
                        </ul>
                        {Text[5]}
                    </>
                }
            </div>
        </>
    );

    function MenuToggle(e) {
        let menu = document.querySelector("#side-bar");
        let toggle = document.querySelector("#menu");
        let cls = toggle.getAttribute("class");

        if (cls == `menu-expanded ${Animation}`)
        {
            menu.setAttribute("class", `menu-collapsed ${Animation}`);
            toggle.setAttribute("class", `menu-collapsed ${Animation}`);
        }
        else
        {
            menu.setAttribute("class", `menu-expanded ${Animation}`);
            toggle.setAttribute("class", `menu-expanded ${Animation}`);
        }
    }

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