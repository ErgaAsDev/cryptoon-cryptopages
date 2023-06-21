"use client";

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
      <div className="d-flex flex-column mt-5 gap-3 align-items-center" id="crypto-column">
        <div className="d-flex" id="column-1">
          <div className="d-flex flex-column gap-3 justify-content-between" id="currency">
            <div>Bitcoin</div>
            <div>Ethereum</div>
            <div>Cardano</div>
            <div>Wax</div>
            <div>Polkadot</div>
          </div>
          <div className="d-flex flex-column gap-3 justify-content-between" id="symbol">
            <div className="text-primary">BTC</div>
            <div className="text-primary">ETH</div>
            <div className="text-primary">ADA</div>
            <div className="text-primary">WAXP</div>
            <div className="text-primary">DOT</div>
          </div>
          <div className="d-flex flex-column gap-3 justify-content-between" id="price">
            <div>$56,290.30</div>
            <div>$4,284.81</div>
            <div>$1.88</div>
            <div>$0.97</div>
            <div>$42.22</div>
          </div>
          <div className="d-flex flex-column gap-3 justify-content-between" id="fluctuate">
            <div className="text-success">+1.68%</div>
            <div className="text-success">+4.36%</div>
            <div className="text-success">+3.43%</div>
            <div className="text-danger">-2.62%</div>
            <div className="text-success">+7.56%</div>
          </div>
          <div className="d-flex flex-column gap-2 justify-content-between" id="graph">
            <Image
              alt="images"
              src="/images/small-graph-1.png"
              width={100}
              height={30}
            />
            <Image
              alt="images"
              src="/images/small-graph-2.png"
              width={100}
              height={30}
            />
            <Image
              alt="images"
              src="/images/small-graph-3.png"
              width={100}
              height={30}
            />
            <Image
              alt="images"
              src="/images/small-graph-4.png"
              width={100}
              height={30}
            />
            <Image
              alt="images"
              src="/images/small-graph-5.png"
              width={100}
              height={30}
            />
          </div>
          <div className="d-flex flex-column gap-3 justify-content-between" id="trade">
            <Link href="/">
              <p>Trade Now</p>
            </Link>
            <Link href="/">
              <p>Trade Now</p>
            </Link>
            <Link href="/">
              <p>Trade Now</p>
            </Link>
            <Link href="/">
              <p>Trade Now</p>
            </Link>
            <Link href="/">
              <p>Trade Now</p>
            </Link>
          </div>
        </div>
      </div>
      <Image
        alt="images"
        src="/images/BrandCompany.png"
        width={1400}
        height={140}
        className="mt-5"
        id="brand-company"
      />
      {/* <Image alt="" src="/images/decoration-1.png" width={300} height={300} className="position-absolute" id="decoration-2"/> */}
    </div>
  );
};

export default ContainerBody;
