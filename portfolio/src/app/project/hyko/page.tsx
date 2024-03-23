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
              <h1> Hyko</h1>
              <div className="header-paragraph text-left">
                <p className="text-center">
                  This is currently one of the products am working on at the
                  company{" "}
                  <a
                    className="hover:underline"
                    href="https://big-mama.io/"
                    target="_blank"
                  >
                    Big-mama technology
                  </a>{" "}
                  where am manly focusin gon the front end part and integrating
                  it with the back end and these are the key tasks i worked on:
                </p>
                <ol className="list-disc">
                  <li>
                    Developed Onboarding page
                    <ul className="list-decimal">
                      <li>
                        Transforming Figma design into a functional web page
                      </li>
                      <li>
                        Auto fetch data from backend and fill the form fields
                      </li>
                      <li>Perform Zod validation and utilize React useForms</li>
                      <li>Utilize Shad-cn ui library for the components</li>
                      <li>
                        Implement Success and failing messages as little toast
                        the pops op on the side of the screen
                      </li>
                    </ul>
                  </li>
                  <li>
                    Developed Settings page
                    <ul className="list-decimal">
                      <li>
                        Developed the settings pages with collaboration with the
                        designer
                      </li>
                      <li>
                        Developed the profile page where users can change name
                        email bio and profile photo or delete their accounts
                      </li>
                      <li>
                        Developed the appearance page to give users the ability
                        to change the theme
                      </li>
                    </ul>
                  </li>
                  <li>
                    Developed blue print page
                    <ul className="list-decimal">
                      <li>
                        Developed this page giving users ability to create new
                        blue prints where they can give it name description tags
                        and also the ability to have a private or public
                        blueprint where other users can see it in the hub. also
                        users can chose a icon and color for their blueprints{" "}
                      </li>
                      <li>
                        used TipTap technology for the description to allow
                        users to have links make the font bolder or underline it
                        include code snippets or use ordered and unordered lists
                      </li>
                      <li>
                        Developed the functionality to allow users to see their
                        changes live update on the side of the screen with a
                        card showing their blue print details
                      </li>
                    </ul>
                  </li>
                  <li>
                    Developed feedback button
                    <ul className="list-decimal">
                      <li>
                        Developed feedback button where users can send feedback
                        to the company feedback email where it can be a bug
                        report or feature request or other topics. with the
                        ability to upload images
                      </li>
                      <li>
                        Used NodeMailer technology to send the email along side
                        with the screenshots to the company feedback email
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  Through working on this projects i utilized best practices
                  like absolute imports instead of relative ones and typing your
                  function props to ensure a good developer experience for the
                  team working with me and avoid bugs. i also worked on the
                  documentation of this project to ensure that new developers
                  coming in will have easier time navigating their way through
                  out the codebase.
                </p>
              </div>

              <p>
                when you visit the site click try it now to go to the part i
                worked on
              </p>
              <a
                href="https://hyko.ai/"
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
              src="/hyko.png"
              className="screen-image"
            />
          </div>
        </div>
        <div id="footer" className="footer">
          <div className="container">
            <div className="want-to-work">
              <div className="left-column">
                <h1 className="hero-heading">Want to</h1>
                <div className="highlight-box">
                  <div className="highlight leftSlideIn opacity-0"></div>
                  <h1 className="hero-heading">work?</h1>
                </div>
              </div>
              <div className="right-column ">
                <p>
                  If you need a modern and powerful website for your business,
                  startup or yourself, I am available for work. You can email me
                  directly at
                  <a
                    href="mailto:contact@karimmenna.com"
                    className="yellow-link px-1"
                  >
                    contact@karimmenna.com
                  </a>
                </p>
                <p>Social links</p>
                <div className="flex flex-col">
                  <a href="https://www.linkedin.com/in/karimmenna/">Linkedin</a>
                  <a href="https://github.com/chiefkarim/">Github</a>
                  <a href="https://twitter.com/Karim32882557">Twitter</a>
                </div>
              </div>
            </div>
            <div className="copyright">© All rights reserved – Karim Menna</div>
          </div>
        </div>
        <div className="_24px"></div>
      </main>
    </>
  );
}
