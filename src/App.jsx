import { useState } from "react";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const loanAmount = purchasePrice - downPayment;

  const estimatedValue =
    ((((purchasePrice - downPayment) *
      (interestRate *
        ((1 + interestRate) * ((repaymentTime / 12) * (1 + interestRate))))) /
      (1 + interestRate)) *
      (repaymentTime / 12) *
      (1 + interestRate)) /
    10;

  return (
    <div className="w-[60%] h-[88] mx-auto mt-12 rounded-xl border-[8px] border-stone-50 text-stone-950 py-8 px-6">
      {/* * <Header /> */}
      <h1 className="font-semibold text-md">Mortgage calculator</h1>
      {/* <Calculator /> */}
      <div className="pt-5 pb-9 grid grid-cols-3 gap-x-2 gap-y-3.5">
        <div>
          <div className="flex items-center gap-x-1">
            <h3 className="text-[8px] font-semibold">Purchase price:</h3>
            <span className="text-xs font-semibold">${purchasePrice}</span>
          </div>
          <input
            type="range"
            className=" win10-thumb w-[120px]"
            min={0}
            max={500000}
            step={25000}
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </div>
        <div>
          <div className="flex items-center gap-x-1">
            <h3 className="text-[8px] font-semibold">Down payment:</h3>
            <span className="text-xs font-semibold ">${downPayment}</span>
          </div>
          <input
            type="range"
            className="win10-thumb w-[120px]"
            min={0}
            max={purchasePrice - 25000}
            step={25000}
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
        <div>
          <div className="flex items-center gap-x-1">
            <h3 className="text-[8px] font-semibold">Repayment time:</h3>
            <span className="text-xs font-semibold ">
              {repaymentTime} years
            </span>
          </div>
          <input
            type="range"
            className="win10-thumb w-[120px]"
            min={0}
            max={50}
            step={1}
            value={repaymentTime}
            onChange={(e) => setRepaymentTime(e.target.value)}
          />
        </div>
        <div>
          <div className="flex items-center gap-x-1">
            <h3 className="text-[8px] font-semibold">Interest rate:</h3>
            <span className="text-xs font-semibold ">{interestRate}%</span>
          </div>
          <input
            type="range"
            className="win10-thumb w-[120px]"
            min={0}
            max={10}
            step={1}
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div>
          <h3 className="text-[8px] font-semibold">Loan amount:</h3>
          <span className="text-xs font-semibold">${loanAmount}</span>
        </div>
        <div>
          <h3 className="text-[8px] font-semibold">Estimated pr. month:</h3>
          <span className="text-xs font-semibold">
            {estimatedValue < 0 ? 0 : `$${Math.ceil(estimatedValue)}`}
          </span>
        </div>
      </div>
      {/* Footer */}
      <div>
        <button className="text-[8px] text-stone-50 py-3 px-5 bg-purple-700">
          Get a mortgage quote
        </button>
      </div>
    </div>
  );
}

export default App;
