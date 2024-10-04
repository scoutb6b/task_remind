import React from "react";

const loading = () => {
  return (
    <div className='h-full w-full pt-10 flex justify-center items-center aria-label ="読み込み中'>
      <div className="animate-spin h-20 w-20 border-4 border-orange-500 rounded-full border-t-transparent"></div>
    </div>
  );
};

export default loading;
