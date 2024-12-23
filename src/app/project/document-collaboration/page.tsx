import { Footer } from "@/components/footer";

export default function page() {
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
              <h1> Document Collaboration</h1>
              <div className="header-paragraph text-left">
                <p className="text-center">
                  this project included these key tasks:
                </p>
                <ol className="list-disc">
                  <li>
                    Shared Document Editing
                    <ul className="list-decimal">
                      <li>
                        Implement Liveblocks to enable real-time collaboration
                        for synchronized document editing.
                      </li>
                      <li>
                        Develop collaborative cursor tracking for an enhanced
                        collaborative experience.
                      </li>
                    </ul>
                  </li>
                  <li>
                    User Presence Indicators
                    <ul className="list-decimal">
                      <li>
                        Incorporate real-time indicators to display the presence
                        of other users currently editing the document.
                      </li>
                    </ul>
                  </li>
                  <li>
                    User Authentication and Ownership
                    <ul className="list-decimal">
                      <li>Integrate Supabase for user authentication. </li>
                      <li>
                        Implement document ownership through Supabase for secure
                        access and management.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>

              <a
                href="https://hiring-software-engineer-frontend.vercel.app/"
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
              src="/document-collaboration.png"
              className="screen-image"
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
