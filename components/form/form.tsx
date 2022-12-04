"use client";
const Form = () => {
  return (
    <div>
      <form
        action=""
        className="grid gap-y-[10px] md:grid-cols-[1fr_min-content] md:gap-x-4"
      >
        <input
          type="text"
          className=" w-full grow rounded-[28px] py-[10px] pl-8 shadow-[0_0_7px_3px_rgba(0,0,0,0.0001)] ring-1 ring-blue-pale placeholder:text-xs placeholder:font-light placeholder:leading-5 placeholder:text-blue-pale md:py-[18px] md:pl-[30px] md:placeholder:text-base md:placeholder:leading-5"
          placeholder="Your email address..."
        />
        <button className="relative w-full grow rounded-[28px] bg-blue py-3 text-xs font-semibold text-white shadow-[0_5px_10px_2px_rgba(76,123,243,0.2304)]  hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:h-full hover:after:w-full hover:after:rounded-[28px] hover:after:bg-white hover:after:opacity-25 md:w-[200px] md:text-base">
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default Form;
