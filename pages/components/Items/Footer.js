import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container text-light" id="footer">
        <hr></hr>
      <Navbar.Brand href="#home">
        <Image alt="" src="/images/logoSmall.png" width={100} height={100} />
        <Navbar.Brand href="#home" className="text-light fs-2">
          <span id="text-span-1">Cryp</span>toon
        </Navbar.Brand>
      </Navbar.Brand>
      <h4>Integer id orci sed ante tincidunt tincidunt sit amet sed libero.</h4>
      <div className="row" id="row-footer">
        <div className="col">
          <h5 className="text-primary">ABOUT</h5>
          <h6>
            Massa blandit semper varius faucibus. Suspendisse viverra venenatis
            placerat nam ut. Pellentesque sit id tempor turpis.
          </h6>
        </div>
        <div className="col">
          <h5 className="text-primary">LINKS</h5>
          <ul>
            <Link href="/">
              <li>How it works</li>
            </Link>
            <Link href="/">
              <li>Cryptos</li>
            </Link>
            <Link href="/">
              <li>Features</li>
            </Link>
            <Link href="/">
              <li>Testimonial</li>
            </Link>
            <Link href="/">
              <li>Blogs</li>
            </Link>
          </ul>
        </div>
        <div className="col">
          <h5 className="text-primary">LEGAL</h5>
          <ul>
            <Link href="/">
              <li>Terms of use</li>
            </Link>
            <Link href="/">
              <li>Terms of conditions</li>
            </Link>
            <Link href="/">
              <li>Privacy policy</li>
            </Link>
            <Link href="/">
              <li>Cookie policy</li>
            </Link>
          </ul>
        </div>
        <div className="col">
          <h5 className="text-primary">NEWSLETTER</h5>
          <h6 className="fw-lighter">Over 25000 people have subscribed</h6>
          <InputGroup className="mb-3">
            <Form.Control placeholder="E-MAIL" />
            <Link href="/">
              <Button variant="outline-secondary" id="button-addon2">
                SUBSCRIBE
              </Button>
            </Link>
          </InputGroup>
          <h6 className="fw-lighter">We don’t sell your email and spam</h6>
        </div>
      </div>
      <h6 className="text-center fw-lighter fs-6" id="copyright">Copyright <span><Image alt="" src="/images/copyright.png" width={20} height={20} /></span> made by ErgaAsDev. All rights reserved.</h6>
    </div>
  );
};

export default Footer;
