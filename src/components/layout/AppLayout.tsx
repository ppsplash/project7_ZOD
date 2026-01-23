import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Header />
      {isLoading && <div> Loading...</div>}
      <Outlet />
      <Footer />
    </div>
  );
}
