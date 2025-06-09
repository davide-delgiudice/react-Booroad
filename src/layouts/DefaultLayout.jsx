import { Outlet } from "react-router";
import Header from "../components/Header";
import sfondo from "../assets/image/sfondo.jpg";

const DefaultLayout = () => {
  return (
    <>
      <Header />

      <main
        style={{
          backgroundImage: `url(${sfondo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
