const Contact = () => {
  return (
    <div className="flex flex-row m-14">
      <div className="w-1/3">
        <h1 className="text-3xl font-semibold text-[#ff8710]">Contact us</h1>
        <p className="mt-4 text-gray-500 text-base">
          We are customer centric. Drop us a mail and we will take care of
          everything
        </p>
      </div>
      <div className="w-2/3 border border-white  px-3 py-5">
        <form className="flex flex-col items-center">
          <input
            type={"text"}
            className="border border-black rounded-sm p-4 w-1/2"
            placeholder="Name"
          ></input>
          <input
            type={"text"}
            className="border border-black rounded-sm p-4 my-3 w-1/2"
            placeholder="Email"
          ></input>
          <input
            type={"text"}
            className="border border-black rounded-sm p-4 w-1/2"
            placeholder="Message"
          ></input>
          <div className="flex flex-row  items-start mt-4">
            <button
              type="{submit}"
              className="border border-black px-4 py-2 mr-2 rounded-sm"
            >
              SEND
            </button>
            <button
              type="{reset}"
              className="border border-black px-4 py-2 rounded-sm"
            >
              CLEAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
