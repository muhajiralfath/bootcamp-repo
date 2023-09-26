import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl text-blue-700 font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        {/* {type === "login" && (
          <p className="text-center mt-5 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold text-blue-400">
              Register
            </Link>{" "}
          </p>
        )}
        {type === "register" && (
          <p className="text-center mt-5 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-blue-400">
              Login
            </Link>{" "}
          </p>
        )} */}
        <Navigation type={type} />
      </div>
    </div>
  );
};

export default AuthLayout;

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center mt-5 text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-400">
          Register
        </Link>{" "}
      </p>
    );
  }
  if (type === "register") {
    return (
      <p className="text-center mt-5 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-400">
          Login
        </Link>{" "}
      </p>
    );
  }
};
