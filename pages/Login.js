import Image from "next/image";
import { Button } from "react-bootstrap";
import Link from "next/link";
const Login = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center"
      id="login-page"
    >
      <Link href="/" id="arrow-back">
        <Image src="/images/arrowback.png" alt="" width={40} height={35} />
      </Link>
      <div
        className="text-light d-flex flex-column justify-content-center align-items-center gap-3"
        id="login-container"
      >
        <h5>Login to Your Account</h5>
        <div className="d-flex gap-3">
          <a href="facebook.com">
            <Image
              src="/images/Facebook.png"
              alt="images"
              width={120}
              height={30}
            />
          </a>
          <a href="twitter.com">
            <Image
              src="/images/Twitter.png"
              alt="images"
              width={120}
              height={30}
            />
          </a>
          <a href="google.com">
            <Image
              src="/images/Google.png"
              alt="images"
              width={120}
              height={30}
            />
          </a>
        </div>
        <h6>Or Login with email</h6>
        <input type="text" placeholder="Email" id="form-login"></input>
        <input type="password" placeholder="Password" id="form-login"></input>
        <div className="d-flex justify-content-between" id="login-check">
          <span>
            <input type="checkbox"></input> <label>Remember Me</label>
          </span>
          <a href="#" className="">
            Forgot Password
          </a>
        </div>
        <div className="d-flex gap-5">
          <Button variant="warning" className="mt-2">
            CONTINUE
          </Button>
          <Button variant="danger" className="mt-2" href="/Dashboard">
            Use Demo Account
          </Button>
        </div>
      </div>
      <img src="/images/logoSmall.png" alt="logo" id="decoration" />
    </div>
  );
};

export default Login;
