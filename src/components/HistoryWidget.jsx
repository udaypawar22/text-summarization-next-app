"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function HistoryWidget() {
  const [current, setCurrent] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("/api/summaries")
      .then((res) => {
        setItems(res.data);
        console.log(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] px-8 py-6 grid grid-cols-[1fr_3fr]">
      <div className="shadow bg-gray-100 dark:bg-zinc-900 dark:shadow-gray-800 rounded-xl py-8 px-6 overflow-y-scroll thin-scroll">
        {items.map((item) => (
          <p
            key={item._id}
            className="hover:bg-white dark:hover:bg-zinc-800 p-2 rounded-lg cursor-pointer w-full truncate overflow-hidden"
            onClick={() => setCurrent(item.summary.replace(/<n>/g, "<br />"))}
          >
            {item.input}
          </p>
        ))}
      </div>
      <div className="overflow-y-scroll thin-scroll dark:border-white px-8 py-4">
        <p dangerouslySetInnerHTML={{ __html: current }}></p>
      </div>
    </div>
  );
}
