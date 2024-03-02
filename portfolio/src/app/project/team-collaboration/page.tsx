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
                href="mailto:hello@email.com"
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
                Full website design and build for a concept team collaboration
                platform. This website also includes a beautiful blog. I have
                built the website and the blog in Webflow which has one of the
                best CMS for blog hosting.
              </p>

              <a
                href="https://team-72db76.webflow.io/"
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
              src="/teamapp.jpg"
              className="screen-image"
            />
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="want-to-work">
              <div
                data-w-id="4ba57714-af69-1729-2daa-1a97f3884cc6"
                className="left-column opacity-0"
              >
                <h1 className="hero-heading">Want to</h1>
                <div
                  data-w-id="4ba57714-af69-1729-2daa-1a97f3884cc9"
                  className="highlight-box"
                >
                  <div
                    //style="-webkit-transform:translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                    className="highlight"
                  ></div>
                  <h1 className="hero-heading">work?</h1>
                </div>
              </div>
              <div
                data-w-id="4ba57714-af69-1729-2daa-1a97f3884ccd"
                className="right-column opacity-0"
              >
                <p>
                  If you need a modern and powerful website for your business,
                  startup or yourself, I am available for work. You can email me
                  directly at{" "}
                  <a
                    href="mailto:contact@karimmenna.com"
                    className="yellow-link"
                  >
                    contact@karimmenna.com
                  </a>
                </p>
              </div>
            </div>
            <div className="copyright">© All rights reserved – YOUR NAME</div>
          </div>
        </div>
        <div className="_24px"></div>
      </main>
    </>
  );
}
