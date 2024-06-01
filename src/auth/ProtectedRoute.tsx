import Layout from "@/layouts/Layout";
import HomePage from "@/pages/HomePage";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  // return isAuthenticated ? <Outlet /> : <Navigate to={"/"} replace />;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default ProtectedRoute;
