import { useEffect, useState } from "react";

// this method will call the API data and convert into JSON file, which is take the reference from the "currency" value to display the data, which the selected currency value will multiply with targeted value, which is available in the "to" field.
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
