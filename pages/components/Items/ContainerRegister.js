import Link from "next/link";
import { Button } from "react-bootstrap";

const ContainerRegister = () => {
  return (
    <div
      className="container text-light d-flex flex-column justify-content-center align-items-center"
      id="container-register"
    >
        <h1 className="text-center">30 Million Users Worldwide and counting</h1>
        <h3 className="fw-lighter text-center">Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</h3>
        <h2 className="mt-5">What are you waiting for?</h2>
        <Link href="/" className="mt-3"><Button variant="warning">GET STARTED</Button></Link>
    </div>
  );
};

export default ContainerRegister;
