import Image from "next/image";
import Link from "next/link";

const ContainerBody = () => {
  return (
    <div
      className="container text-light d-flex flex-column justify-content-center align-items-center"
      id="container-body"
    >
      <h1 className="text-center mb-3" id="text-body-1">
        Buy and sell with the lowest fees in the industry
      </h1>
      <h3 className="text-center fw-lighter" id="text-body-2">
        Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank
        transfers or your credit/debit card.
      </h3>
      <div className="d-flex flex-column mt-5 gap-3" id="crypto-column">
        <div className="d-flex flex-row gap-5" id="column-1">
          <p>Bitcoin</p>
          <p className="text-primary">BTC</p>
          <p>$56,290.30</p>
          <p className="text-success">+1.68%</p>
          <Image alt="" src="/images/small-graph-1.png" width={100} height={30} />
          <Link href="/">
            <p>Trade Now</p>
          </Link>
        </div>
        <div className="d-flex flex-row gap-5" id="column-2">
          <p>Ethereum</p>
          <p className="text-primary">ETH</p>
          <p>$4,284.81</p>
          <p className="text-success">+4.36%</p>
          <Image alt="" src="/images/small-graph-2.png" width={100} height={30} />
          <Link href="/">
            <p>Trade Now</p>
          </Link>
        </div>
        <div className="d-flex flex-row gap-5" id="column-3">
          <p>Cardano</p>
          <p className="text-primary">ADA</p>
          <p>$1.88</p>
          <p className="text-success">+3.43%</p>
          <Image alt="" src="/images/small-graph-3.png" width={100} height={30} />
          <Link href="/">
            <p>Trade Now</p>
          </Link>
        </div>
        <div className="d-flex flex-row gap-5" id="column-4">
          <p>Wax</p>
          <p className="text-primary">WAXP</p>
          <p>$0.97</p>
          <p className="text-danger">-2.62%</p>
          <Image alt="" src="/images/small-graph-4.png" width={100} height={30} />
          <Link href="/">
            <p>Trade Now</p>
          </Link>
        </div>
        <div className="d-flex flex-row gap-5" id="column-5">
          <p>Polkadot</p>
          <p className="text-primary">DOT</p>
          <p>$42.22</p>
          <p className="text-success">+7.56%</p>
          <Image alt="" src="/images/small-graph-5.png" width={100} height={30} />
          <Link href="/">
            <p>Trade Now</p>
          </Link>
        </div>
      </div>
      <Image alt="" src="/images/BrandCompany.png" width={1400} height={140} className="mt-5" id="brand-company"/>
      {/* <Image alt="" src="/images/decoration-1.png" width={300} height={300} className="position-absolute" id="decoration-2"/> */}
    </div>
  );
};

export default ContainerBody;
