import React from 'react';
import { BsExclamationCircle } from "react-icons/bs";
import {IoCloseSharp} from "react-icons/io5"
import Button from '../button/Button';

function Error() {
  return (
    <div className="bg-black h-[713px] flex items-center justify-center">
      <div className="w-[600px] bg-white px-10 py-10 rounded">
        <div className="relative pb-3 text-xl text-black flex justify-start items-center">
          <BsExclamationCircle size={22} />
          <p className="ml-2">Error Message</p>
          <div className="ml-8 absolute right-0 top-[-15px] cursor-pointer">
            <IoCloseSharp size={27} />
          </div>
        </div>
        <hr />
        <div className="pt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis
            ab at unde voluptates. Commodi architecto quod quasi perferendis
            ullam repellat fuga inventore, porro quis nam nemo neque quae
            deleniti! Quaerat, iste molestias. Dignissimos veniam esse repellat
            mollitia dolorem natus. Cumque culpa necessitatibus distinctio
            itaque molestiae placeat tempora ea. Reiciendis.
          </p>
        </div>
        <Button/>
      </div>
    </div>
  );
}

export default Error