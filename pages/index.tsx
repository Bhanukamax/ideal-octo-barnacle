import { StoreProvider } from "easy-peasy";
import type { NextPage } from "next";
import StepForm from "../components/StepForm/StepForm";
import store from "../store/store";

const Home: NextPage = () => {
  return (
    <>
      <StoreProvider store={store}>
        <StepForm />
        <span></span>
      </StoreProvider>
    </>
  );
};

export default Home;
