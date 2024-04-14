import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 18,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

const DoseListCardBody = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const parentRef = useRef(null);

  const fetchMoreData = () => {
    setItems(prevItems => prevItems.concat(Array.from({ length: 10 })));
  };

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } = parentRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        fetchMoreData();
      }
    }

    parentRef.current.addEventListener("scroll", handleScroll);
    return () => parentRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={parentRef} style={{ height: "400px", overflowY: "scroll" }}>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < 200}
        loader={<h4>Loading...</h4>}
        scrollableTarget="parent"
      >
        {items.map((i, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

ReactDOM.render(<DoseListCardBody />, document.getElementById("root"));

export default DoseListCardBody;
