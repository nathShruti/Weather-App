import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchContext } from "./context";
import './Table.css';

const TABLE_HEAD = ["CITY", "COUNTRY", "TIME ZONE"];

export function DefaultTable() {
    const { searchedCities } = useContext(SearchContext);
    const navigate = useNavigate();
    const [cities, setCities] = useState([]);
    const [index, setIndex] = useState(2);
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        axios
            .get(
                `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?order_by=name&limit=20&offset=${
                    index * 2
                }0`
            )
            .then((res) => {
                setCities((prev) => [...prev, ...res.data.results]);
                res.data.results.length > 0 ? setHasMore(true) : setHasMore(false);
            })
            .catch((err) => console.error(err));
        setIndex((prev) => prev + 1);
    };

    useEffect(() => {
        if (searchedCities && searchedCities.length > 0) {
            setCities(searchedCities);
            setHasMore(false);
        } else {
            axios
                .get(
                    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?order_by=name&limit=20"
                )
                .then((res) => {
                    setCities(res.data.results);
                    setHasMore(true);
                })
                .catch((err) => console.error(err));
        }
    }, [searchedCities]);

    return (
        <div className='w-full justify-center'>
            <div className='grid grid-cols-3'>
                {TABLE_HEAD.map((head) => (
                    <div key={head} className='bg-slate-500 py-4'>
                        <Typography className='font-bold text-white'>{head}</Typography>
                    </div>
                ))}
            </div>
            <div className='h-96 overflow-y-auto' id='scrollableDiv'>
                <InfiniteScroll
                    className='h-full flex flex-col'
                    dataLength={cities.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget='scrollableDiv'>
                    {cities.map((item) => (
                        <div key={item.geoname_id} className='table-rows grid grid-cols-3'>
                            <Typography
                                className='table-text flex-auto'
                                onClick={() => {
                                    navigate("/page", { state: item });
                                }}>
                                {item.name}
                            </Typography>
                            <Typography className='table-text flex-auto'>{item.cou_name_en}</Typography>
                            <Typography className='table-text flex-auto'>{item.timezone}</Typography>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
}
