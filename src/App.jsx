import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthProvider";
import Loader from "./loader/Loader";

const App = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />
  }
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;