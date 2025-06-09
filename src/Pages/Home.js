import FoodList from "../Components/FoodList/FoodList";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { AppProviders } from "../Components/Providers/AppProviders";

const Home = () => {
  return (
    <AppProviders>
      <Header />
      <Navbar />
      <FoodList />
    </AppProviders>
  );
};

export default Home;
