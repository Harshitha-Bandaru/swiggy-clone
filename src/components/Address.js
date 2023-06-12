const Address = () => {
  return (
    <div className="border border-black m-2 p-5 w-1/3">
      <div className="address">
        <h1 className="text-base font-bold">Address</h1>
        <form className="flex flex-col">
          <div className="flex justify-between my-2">
            <label>Street:</label>
            <input
              type={"text"}
              className="border border-black rounded-sm p-1"
              placeholder="Street"
            ></input>
          </div>
          <div className="flex justify-between my-2">
            <label>Area:</label>
            <input
              type={"text"}
              className="border border-black rounded-sm p-1"
              placeholder="Area"
            ></input>
          </div>
          <div className="flex justify-between my-2">
            <label>Pincode:</label>
            <input
              type={"number"}
              className="border border-black rounded-sm p-1"
              placeholder="Pincode"
            ></input>
          </div>
          <div className="flex justify-between mt-2 mb-1">
            <label>Phone Number:</label>
            <input
              type={"number"}
              className="border border-black rounded-sm p-1"
              placeholder="Phone Number"
            ></input>
          </div>
          <br />
          <button
            type="submit"
            className="self-center border border-black p-2 rounded-md bg-[#60b246]"
          >
            Add Address
          </button>
        </form>
      </div>
      <div className="payment my-2">
        <h1 className="text-base font-bold">Choose Payment Method</h1>
        <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
          Wallets
        </button>
        <br />
        <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
          UPI
        </button>
        <br />
        <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
          Sodexo
        </button>
        <br />
        <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
          Netbanking
        </button>
        <br />
        <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
          Credit & Debit Cards
        </button>
      </div>
    </div>
  );
};
export default Address;
