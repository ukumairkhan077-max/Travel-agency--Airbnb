import { Link } from "react-router-dom";
import "./LoginReminder.css";

function LoginReminder() {
  return (
    <div className="login-reminder">
      <p>
        <Link to="/login" className="login-reminder-link">
          Log in or sign up
        </Link>{" "}
        to book this trip. Your details are saved so you won't have to enter
        them again.
      </p>
    </div>
  );
}

export default LoginReminder;