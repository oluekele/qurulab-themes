import HomePage from "./01-main-demo";
import BackToTop from "./backToTop";
import MarketplacePage from "./marketplace";

export default function Home() {
  return (
    <>
      <main className="">
        {/* <HomePage /> */}
        <MarketplacePage />
        <BackToTop />
      </main>
    </>
  );
}
