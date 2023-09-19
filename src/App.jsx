import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  // Set the amount in the input field
  const [amount, setAmount] = useState();
  // set the default value at start of the application at the "from" input
  const [from, setFrom] = useState("cad");
  // set the default value at start of the application at the "to" input
  const [to, setTo] = useState("usd");
  // Hooks for display the convertedAmount on the UI, which is converted the value "from" currency to "to" currency
  const [convertedAmount, setConvertedAmount] = useState();
  // from the API we will get the value of the currency and converted rate
  const currencyInfo = useCurrencyInfo(from);
  // It allows to select the values from the Options in the "from" and "to" value, which only select the keys which is available in the API

  const options = Object.keys(currencyInfo);

  // swap button functionality, which allow user to change the currency option "from" to "to" and "to" to "from"
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(amount);
    setConvertedAmount(convertedAmount);
  };

  // convert the amount which take the reference from "from" value and multiply to "to" value
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            // when we submit the form, we are checking that empty form would not be submitted, and we call the convert method. which convert the value and show on the UI
            onSubmit={(e) => {
              e.preventDefault();
              convert;
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={() => setConvertedAmount(convert)}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
