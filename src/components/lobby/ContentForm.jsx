import React from "react";
import { MdOutlineEdit } from "react-icons/md";
export default function ContentForm() {
  return (
    <div className=" ml-5 mt-5 w-full bg-white shadow-lg ">
      <div className="flex justify-between items-center py-2 bg-[#F8F8FF]">
        <div className="flex justify-start items-center">
          <MdOutlineEdit size={20} className="ml-2"/>
          <h1 className="ml-3">Create Ticket</h1>
        </div>
        <button className="mr-5 px-5 py-1 rounded border border-purple-500">
          Update Ticket
        </button>
      </div>
      <div className="grid mb-10">
        <label htmlFor="cat" className="mx-5 my-2">
          Category
        </label>
        <select
          placeholder="-select-"
          name="fruits"
          id="cat"
          className="w-[300px] mx-5 py-1 rounded border"
        >
          <option default value="-select-">
            -Select-
          </option>
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="mango">Mango</option>
          <option value="guwava">Guwava</option>
        </select>

        <label htmlFor="cat" className="mx-5 my-2">
          Sub-category
        </label>
        <select
          placeholder="-select-"
          name="fruits"
          id="cat"
          className="w-[300px] mx-5 py-1 rounded border"
        >
          <option default value="-select-">
            -Select-
          </option>
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="mango">Mango</option>
          <option value="guava">Guwava</option>
        </select>

        <label htmlFor="" className="mx-5 my-2">
          Issue
        </label>
        <textarea
          className="border w-[300px] h-[120px] mx-5 py-1"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Describe your issue..."
        ></textarea>

        <label htmlFor="cat" className="mx-5 my-2">
          Category
        </label>
        <select
          placeholder="-select-"
          name="fruits"
          id="cat"
          className="w-[300px] mx-5 py-1 rounded border"
        >
          <option default value="-select-">
            -Select-
          </option>

          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="mango">Mango</option>
          <option value="guwava">Guwava</option>
        </select>
      </div>
      <div className="py-2 bg-[#F8F8FF] flex justify-end">
        <button className="mr-5 px-5 py-1 rounded border border-purple-500">
          Cancel
        </button>
        <button className="mr-5 px-5 py-1 bg-purple-700 rounded text-white">
          Submit
        </button>
      </div>
    </div>
  );
}
