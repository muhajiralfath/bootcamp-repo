import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/Authlayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
