import HeaderTopMidThree from "./Header-Top/HeaderTopMid-Three";
import HeaderSeven from "./Headers/Header-Seven";

const HeaderStyleNine = () => {
  return (
    <>
      <header className="rbt-header rbt-header-9">
        <div className="rbt-sticky-placeholder"></div>

        <div className="rbt-header-middle position-relative rbt-header-mid-1 bg-color-white rbt-border-bottom">
          <HeaderTopMidThree flexDirection="" />
        </div>

        <HeaderSeven
          transparent="header-not-transparent header-sticky"
          gapSpaceBetween=""
          navigationEnd="rbt-navigation-end"
          btnClass="  btn-sm hover-transform-none rounded-1" //rbt-switch-btn btn-gradient
          btnText="Get Started"
        />
      </header>
    </>
  );
};

export default HeaderStyleNine;
