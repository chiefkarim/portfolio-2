export function Footer(): JSX.Element {
  return (
    <>
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
    </>
  );
}
