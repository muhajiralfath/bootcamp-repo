import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm type="text" placeholder="Email" label="Email" name="email" />
      <InputForm
        type="password"
        placeholder="********"
        label="Password"
        name="password"
      />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
