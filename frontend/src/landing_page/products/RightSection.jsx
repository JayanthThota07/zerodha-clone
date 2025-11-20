import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-20 d-flex flex-column flex-md-row align-items-center gap-5">
      {/* Left - Product Info */}
      <div className="col-md-6 mt-4 order-2 order-md-1">
        <h2 className="fw-semibold mb-3">{productName}</h2>
        <p className="text-muted">{productDescription}</p>

        {/* Links */}
        <div className="flex gap-10 text-[#387ed1] font-medium mt-6 ">
          {tryDemo && (
            <a href={tryDemo} className="text-primary gap-2  text-decoration-none">
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>
          )}
          <a href={learnMore} className="text-primary gap-2 text-decoration-none">
            Learn More <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* App Links */}
        <div className="d-flex gap-4 mt-3">
          {googlePlay && (
            <a href={googlePlay}>
              <img
                src="/media/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          )}
          {appStore && (
            <a href={appStore}>
              <img
                src="/media/appStoreBadge.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          )}
        </div>
      </div>

      {/* Right - Product Image */}
      <div className="col-md-6 text-center order-1 order-md-2">
        <img src={imageURL} alt={productName} className="img-fluid" />
      </div>
    </div>
  );
}

export default RightSection;
