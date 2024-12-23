import { Footer } from "@/components/footer";

export default async function Page() {
  return (
    <>
      <main>
        <div
          data-collapse="tiny"
          data-animation="default"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar w-nav"
        >
          <div className="container w-container">
            <a href="/" className="brand w-nav-brand">
              <div className="logo">Karim.</div>
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="/#Portfolio" className="nav-link yellow-link w-nav-link">
                my work
              </a>
              <a
                href="mailto:contact@karimmenna.com"
                className="nav-link yellow-link w-nav-link"
              >
                get in touch
              </a>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header-wrapper">
            <div
              data-w-id="9768578e-f967-712e-9acc-5bd5bb5e7a7f"
              //    style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
              className="container center"
            >
              <h4>project showcase</h4>
              <h1> Chat app</h1>
              <p className="header-paragraph">
                This is a homepage design and build for a concept project – a
                chat application. I designed the page first then built a
                responsive web page using Webflow.
              </p>

              <a
                href="https://chiefs-fantastic-site.webflow.io/"
                target="_blank"
                className="live-site-link yellow-link"
              >
                visit live site →
              </a>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="screen-container">
            <img
              alt="A screenshot of web page"
              //  style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
              src="/chatapp.jpg"
              className="screen-image"
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
