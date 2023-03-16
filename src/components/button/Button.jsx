import React from 'react'

export default function Button() {
  return (
    <>
      <div className="pt-4 flex justify-center">
        <input
          className="rounded font-semibold text-white px-7 py-1.5 bg-indigo-500 cursor-pointer"
          type="button"
          value="SUBMIT"
        />
      </div>
    </>
  );
}
