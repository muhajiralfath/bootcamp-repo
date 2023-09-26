import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        type="text"
        placeholder="Ext. John Doe"
        label="Full Name"
        name="fullname"
      />
      <InputForm
        type="text"
        placeholder="Ext. jondoe@gmail.com"
        label="Email"
        name="email"
      />
      <InputForm
        type="password"
        placeholder="********"
        label="Password"
        name="password"
      />
      <InputForm
        type="password"
        placeholder="********"
        label="Confirm Password"
        name="confirmpassword"
      />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormRegister;
