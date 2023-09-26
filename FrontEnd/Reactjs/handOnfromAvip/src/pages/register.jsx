import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FromRegister";
import AuthLayout from "../components/Layout/Authlayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
