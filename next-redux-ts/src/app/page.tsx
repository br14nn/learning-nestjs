"use client";

import { Provider } from "react-redux";

//utils
import store from "@/utils/redux/store";

//components
import HomePage from "@/components/pages/HomePage";

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
