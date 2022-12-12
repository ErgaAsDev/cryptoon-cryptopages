import Image from "next/image";

const ContainerFeatures = () => {
  return (
    <div
      className="container text-light d-flex flex-column justify-content-center align-items-center"
      id="container-features"
    >
      <h1>Unique Features</h1>
      <h3 className="text-center">
        Windaful makes playing the ID's best raffles easy and fun.
      </h3>
      <div className="row mt-5" id="row-1">
        <div className="col" id="column">
          <div className="d-flex gap-2" id="flex-features">
            <Image src="/images/feature-1.png" width={40} height={40} />
            <h3>Weekly Trading Contest</h3>
          </div>
          <h5 className="fw-lighter">
            Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
            ornare risus.
          </h5>
        </div>
        <div className="col" id="column">
          <div className="d-flex gap-2" id="flex-features">
            <Image src="/images/feature-2.png" width={40} height={40} />
            <h3>Less Commission On Trade</h3>
          </div>
          <h5 className="fw-lighter">
            Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
            ornare risus.
          </h5>
        </div>
        <div className="col" id="column">
          <div className="d-flex gap-2" id="flex-features">
            <Image src="/images/feature-3.png" width={40} height={40} />
            <h3>Safe And Secure Trading platform</h3>
          </div>
          <h5 className="fw-lighter">
            Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
            ornare risus.
          </h5>
        </div>
      </div>
      <div className="row mt-5" id="row-2">
        <div className="col" id="column">
          <div className="d-flex gap-2" id="flex-features">
            <Image src="/images/feature-4.png" width={40} height={40} />
            <h3>Instant Withdraw Process</h3>
          </div>
          <h5 className="fw-lighter">
            Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
            ornare risus.
          </h5>
        </div>
        <div className="col" id="column">
          <div className="d-flex gap-2" id="flex-features">
            <Image src="/images/feature-5.png" width={40} height={40} />
            <h3>Monthly Commition</h3>
          </div>
          <h5 className="fw-lighter">
            Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
            ornare risus.
          </h5>
        </div>
        <div className="col" id="column">
          <div className="d-flex gap-2" id="flex-features">
            <Image src="/images/feature-6.png" width={40} height={40} />
            <h3>24/7 Support Team</h3>
          </div>
          <h5 className="fw-lighter">
            Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
            ornare risus.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ContainerFeatures;
