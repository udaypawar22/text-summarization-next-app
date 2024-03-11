"use client";

import React, { useState } from "react";
import UploadIcon from "./UploadIcon";
import axios from "axios";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import SendIcon from "@/components/SendIcon";
import { Slider } from "@nextui-org/react";

export default function InputForm() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("Output will be displayed here");
  const [length, setLength] = useState(150);
  async function upload(ev) {
    ev.preventDefault();
    const file = ev.target.files[0];
    if (file) {
      await axios
        .postForm("http://localhost:8080/api/upload", {
          file,
        })
        .then((res) => {
          setInputText(res.data.text);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  async function submitForm(ev) {
    ev.preventDefault();
    setOutput("Generating summary...");
    try {
      const summaryResponse = await axios.postForm(
        "http://localhost:8080/api/summary",
        { inputText, length }
      );
      const response_data = summaryResponse.data;

      const storeResponse = await axios.post("/api/store", {
        input: inputText,
        summary: response_data.summary,
      });

      setOutput(response_data.summary.replace(/<n>/g, "<br />"));
    } catch (error) {
      setOutput("Output will be displayed here");
      console.error(error);
      throw new Error("Something went wrong");
    }
  }
  return (
    <>
      <div className="flex flex-col gap-1 items-center justify-center">
        <Textarea
          variant="bordered"
          label="Input"
          labelPlacement="outside"
          placeholder="Type here..."
          classNames={{
            input: "resize-y min-h-[400px] thin-scroll resize-none",
          }}
          value={inputText}
          onChange={(ev) => setInputText(ev.target.value)}
        />
        <div className="flex justify-between items-center w-full">
          <Slider
            size="sm"
            step={10}
            value={length}
            label="Length"
            maxValue={1000}
            minValue={0}
            color="foreground"
            showOutline={true}
            aria-label="Temperature"
            defaultValue={0}
            className="w-[200px]"
            onChange={setLength}
          />
          <div className="flex items-center justify-center gap-5">
            <label className="cursor-pointer p-[6px] rounded-xl border-medium border-blue-500 text-blue-500 hover:text-white transition hover:bg-blue-500">
              <UploadIcon />
              <input type="file" className="hidden" onChange={upload} />
            </label>
            <Button
              isIconOnly
              variant="ghost"
              color="primary"
              type="submit"
              onClick={submitForm}
            >
              <SendIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="h-screen lg:h-full overflow-y-scroll bg-slate-100 dark:bg-zinc-950 shadow dark:shadow-gray-800 thin-scroll rounded-lg px-6 py-4">
        <p dangerouslySetInnerHTML={{ __html: output }}></p>
      </div>
    </>
  );
}
