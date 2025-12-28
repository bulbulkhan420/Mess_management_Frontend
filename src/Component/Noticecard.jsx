import React from "react";

export default function NoticeCard(props) {
  const info = props.info.item;

  return (
    <div className="my-4">
      {/* Main Card */}
      <div className="bg-blue-50 rounded-md border border-gray-300 shadow-sm overflow-auto max-h-[50vh] p-4">
        {/* Header: Number + Mess Name */}
        <div className="flex items-center mb-2">
          <span className="font-bold text-gray-700 mr-3">{props.info.i + 1}.</span>
          <p className="font-semibold text-blue-600">{info.mess_name}</p>
        </div>

        {/* Post Content */}
        <div className="mb-2">
          <span className="font-bold text-gray-800 block mb-1">Post:</span>
          <p className="text-gray-700">{info.mess_post}</p>
        </div>
      </div>

      {/* Footer: Post Date */}
      <div className="mt-1 px-4">
        <p className="text-xs text-green-600 text-left">{info.postdate}</p>
      </div>
    </div>
  );
}
