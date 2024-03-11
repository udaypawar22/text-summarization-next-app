"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Pencil from "./Pencil";
import { Spinner } from "@nextui-org/react";

export default function HistoryWidget() {
  const [current, setCurrent] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/summaries")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  if (loading) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <Spinner label="Loading..." color="primary" />
      </div>
    );
  }
  if (!loading && items.length === 0) {
    console.log("item", items);
    return <p>No previous history available</p>;
  }
  return (
    <div className="min-h-[calc(100vh-80px)] px-8 py-6 flex flex-col gap-5 md:flex-row">
      <div className="w-full flex-shrink-0 md:w-[350px] shadow bg-gray-200 dark:bg-zinc-900 dark:shadow-gray-800 rounded-xl py-8 px-6 overflow-y-scroll thin-scroll">
        {items.map((item) => (
          <div className="p-2 mb-2 hover:bg-white dark:hover:bg-zinc-800 rounded-lg cursor-pointer w-full flex gap-1 items-center justify-center">
            <Pencil />
            <p
              key={item._id}
              className="w-full truncate overflow-hidden"
              onClick={() => setCurrent(item.summary.replace(/<n>/g, "<br />"))}
            >
              {item.input}
            </p>
          </div>
        ))}
      </div>
      <div className="overflow-y-scroll h-screen md:h-full md:flex-auto thin-scroll dark:border-white px-8 py-4">
        {current && <p dangerouslySetInnerHTML={{ __html: current }}></p>}
        {!current && <p className="text-xl">Summary will be displayed here</p>}
      </div>
    </div>
  );
}
