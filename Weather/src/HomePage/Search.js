import React, { useContext, useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import { SearchContext } from "./context";

export default function SearchBar() {
    const { setSearchedCities } = useContext(SearchContext);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(async () => {
            try {
                const res = await axios.get(
                    `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?where=name%20like%20%22${search}%22`
                );
                setSearchedCities(res.data.results);
            } catch (err) {
                console.error(err);
            }
        }, 1300);
        return () => {
            clearTimeout(timer);
        };
    }, [search]);

    return (
        <>
            <div className='py-2 bg-black'>
                <input
                    type='text'
                    value={search}
                    className="w-2/5"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
            </div>
        </>
    );
}
