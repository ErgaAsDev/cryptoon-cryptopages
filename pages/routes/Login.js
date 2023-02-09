import Image from "next/image";
import { Button } from "react-bootstrap";
import Link from "next/link";
const Login = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" >
        <Link href="/" id="arrow-back"><Image src="/images/arrowback.png" alt="" width={40} height={35} /></Link>
      <div
        className="text-light d-flex flex-column justify-content-center align-items-center gap-3"
        id="login-page"
      >
        <h5>Login to Your Account</h5>
        <div className="d-flex gap-3">
          <a href="facebook.com">
            <Image src="/images/Facebook.png" alt="" width={120} height={30} />
          </a>
          <a href="twitter.com">
            <Image src="/images/Twitter.png" alt="" width={120} height={30} />
          </a>
          <a href="google.com">
            <Image src="/images/Google.png" alt="" width={120} height={30} />
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
        <Button variant="warning" className="mt-2">CONTINUE</Button>
      </div>
    </div>
  );
};

export default Login;
