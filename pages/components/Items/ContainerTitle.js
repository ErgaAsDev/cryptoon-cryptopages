import Image from "next/image";
import {Button} from "react-bootstrap";

const ContainerTitle = () => {
  return (
    <div className="position-relative container text-light" id="container-title">
      <h1 className="mb-3" id="text-title-1">Digital currency leads at market in the right amount.</h1>
      <h3 className="mb-5 fw-light" id="text-title-2">
        Vestibulum faucibus eget erat eget pretium. Donec commodo convallis
        ligula, eget suscipit orci. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis
        ligula, eget suscipit orci.
      </h3>
      <Button variant="warning">GET STARTED</Button>
      <Image src="/images/Icon-big.svg" width={700} height={700} alt="" className="position-absolute" id="big-icon"/>
      {/* <Image src="/images/decoration-1.png" width={300} height={300} className="position-absolute" id="decoration-1"/> */}
    </div>
  );
};

export default ContainerTitle;
