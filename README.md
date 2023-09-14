# Currency Converter

- This is the react application, which is converting the currency value amount to different targeted currency value. Which support all the currency in the world.

# Features

- `API call` for all the currency in the world, e.g. when you select the `USD` as the currency which will convert value of `1` `USD` into all the currency in the world. In the App, we can select the different currency to check the value of it.

## Technology and approach

- `useCurrencyInfo.js` is the `custom hooks` which is created and can be used in the application, `useEffect` hooks will fetch the `API` data as per selected currency. Which will convert into `JSON` file, followed by store in the variable, it was depend on the selection of the `currency` value. `useState` hook will used to store the data.

- `useID` hook used in the application to provide the unique ID to the `Input` field and the `label` for the `optimization`, so that, react distinguish between the same `Input` skeleton was used at the different places.

### Technology

- Javascript
- HTML
- Tailwind, Mobile Responsive.
- vite
- React
- Currency API

# Let's Try The APP

[Currency Converter](.)
