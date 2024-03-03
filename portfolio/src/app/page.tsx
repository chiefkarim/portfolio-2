import Image from "next/image";
import Swup from "swup";

export default function Home() {
  if (typeof window !== "undefined") {
    const swup = new Swup();
  }

  return (
    <>
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
          <a
            href="/"
            aria-current="page"
            className="brand w-nav-brand w--current"
          >
            <div className="logo">Karim.</div>
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="/#Portfolio" className="nav-link yellow-link w-nav-link">
              my work
            </a>
            <a href="#footer" className="nav-link yellow-link w-nav-link">
              get in touch
            </a>
          </nav>
          <div className="menu-button w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-wrap">
          <div className="container">
            <div className="headline-wrap fadeInUp   ">
              <h1 className="hero-heading">Hi, I’m Karim,</h1>
              <div className="highlight-box">
                <div className="highlight leftSlideIn opacity-0"></div>
                <h1 className="hero-heading">Software Engineer</h1>
              </div>
              <h1 className="hero-heading">&</h1>
              <div className="highlight-box">
                <div className="highlight leftSlideIn2 opacity-0 !top-[20%] !h-[25%] !w-4/6"></div>
                <h1 className="hero-heading">
                  Freelance<br></br>
                </h1>
                <div className="highlight leftSlideIn2 opacity-0 !top-[65%] !h-[27%]"></div>
                <h1 className="hero-heading">Web Developer</h1>
              </div>
            </div>
            <p className="hero-paragraph fadeInUp delay-500">
              As a software engineer at
              <a href="https://big-mama.io/"> Big-mama</a> working on{" "}
              <a href="https://hyko.ai/about"> Hyko</a>, I specialize in
              crafting robust solutions using Docker, Next.js, and Strapi...
              with a passion for learning new technologies. Additionally, I
              offer freelance services in Shopify and Webflow development. I
              love building websites and apps for global businesses and
              individuals and seeing them rise. If you need a modern, powerful
              website, send me an email for a time and cost estimate.
            </p>
            <div className="button-wrapper fadeInUp delay-500">
              <div className="button-border">
                <a
                  href="#Portfolio"
                  className="button preserve-3d w-button duration-200 ease-out  hover:translate-x-0 hover:translate-y-0 translate-z-0 -translate-x-2 -translate-y-2 scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 hover:translate3d(0,0,0) "
                >
                  see my work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-wrapper">
        <div className="container relative">
          <div className="scroll-block">
            <div
              data-w-id="b36549d8-b780-7fb7-8674-0b37bf71500b"
              className="scroll-arrow"
            ></div>
            <div className="scroll-text">scroll</div>
          </div>
        </div>
      </div>

      <div id="Portfolio" className="section">
        <div className="container">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="project opacity-0 animate-right-slide-in  [animation-timeline:view()] [animation-range:0_600px] ">
                  <div className="left-column">
                    <h4 className="heading-5">latest work</h4>
                    <h1>Team App website</h1>
                    <div className="tags-wrapper">
                      <div className="tag">Website Design</div>
                      <div className="tag">Webflow Development</div>
                      <div className="tag">Concept</div>
                      <div className="tag">Landing page</div>
                    </div>
                  </div>
                  <a
                    id="w-node-_5e88b46d-417e-778f-7af0-7ba57a92cc85-f5507c04"
                    data-w-id="5e88b46d-417e-778f-7af0-7ba57a92cc85"
                    href="/project/team-collaboration"
                    className="mockup-column w-inline-block"
                  >
                    <Image
                      alt="A mockup of a project"
                      src="https://uploads-ssl.webflow.com/5e1e0172db1e6f58d2507c09/5e1e0172db1e6fd673507c1e_Team%20Mockup-min.jpg"
                      width="783"
                      height="668"
                      className="mockup-img preserve-3d   hover:translate3d(8px,-8px,0px) preserve-3d  duration-200 ease-out  hover:translate-x-2 hover:-translate-y-2  hover:translate3d(8px,-8px,0px)"
                    />
                    <Image
                      src="https://uploads-ssl.webflow.com/5e1e0172db1e6f151e507c06/5e1e0172db1e6f27d4507c12_dot%20pattern-min.png"
                      width="101"
                      height="376"
                      alt=""
                      className="dots"
                    />
                    <div className="mockup-hover">
                      <div
                        data-w-id="d9705062-deb4-607b-0803-00a0c2b1317b"
                        className="mockup-hover-text"
                      >
                        See this project
                      </div>
                      <div className="mockup-arrow-wrapper">
                        <img
                          src="https://uploads-ssl.webflow.com/5e1e0172db1e6f151e507c06/5e1e0172db1e6feadc507c16_ic-arrow-forward-18px.svg"
                          data-w-id="1944b083-0408-23b8-a620-61953dbd318c"
                          alt=""
                          className="mockup-arrow"
                        />
                      </div>
                    </div>
                  </a>
                  <div id="w-node-ce64223d-3b0f-84b9-64bf-81bd6806b188-f5507c04">
                    <p className="portfolio-paragraph">
                      Full website design and build for a concept team
                      collaboration platform. This website also includes a
                      beautiful blog. I have built the website and the blog in
                      Webflow which has one of the best CMS for blog hosting.
                    </p>
                    <div className="button-wrapper">
                      <div className="button-border">
                        <a
                          href="/project/team-collaboration"
                          className="button w-button preserve-3d w-button duration-200 ease-out  hover:translate-x-0 hover:translate-y-0 translate-z-0 -translate-x-2 -translate-y-2 scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 hover:translate3d(0,0,0)"
                        >
                          see this project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                className="w-dyn-item  opacity-0 animate-right-slide-in  [animation-timeline:view()] [animation-range:0_600px] "
              >
                <div className="project  ">
                  <div className="left-column ">
                    <h4 className="heading-5">latest work</h4>
                    <h1>Chat App website</h1>
                    <div className="tags-wrapper">
                      <div className="tag">Website Design</div>
                      <div className="tag">Webflow Development</div>
                      <div className="tag">Concept</div>
                      <div className="tag">Landing page</div>
                    </div>
                  </div>
                  <a
                    id="w-node-_5e88b46d-417e-778f-7af0-7ba57a92cc85-f5507c04"
                    data-w-id="5e88b46d-417e-778f-7af0-7ba57a92cc85"
                    href="/project/chat-app"
                    className="mockup-column w-inline-block "
                  >
                    <Image
                      width="523"
                      alt="A mockup of a project"
                      src="https://uploads-ssl.webflow.com/5e1e0172db1e6f58d2507c09/5e1e0172db1e6f47a6507c1f_chat%20app-min.jpg"
                      height="668"
                      className="mockup-img preserve-3d  duration-200 ease-out  hover:translate-x-2 hover:-translate-y-2  hover:translate3d(8px,-8px,0px)"
                    />
                    <Image
                      src="https://uploads-ssl.webflow.com/5e1e0172db1e6f151e507c06/5e1e0172db1e6f27d4507c12_dot%20pattern-min.png"
                      width="101"
                      height="376"
                      alt=""
                      className="dots"
                    />
                    <div className="mockup-hover">
                      <div
                        data-w-id="d9705062-deb4-607b-0803-00a0c2b1317b"
                        className="mockup-hover-text"
                      >
                        See this project
                      </div>
                      <div className="mockup-arrow-wrapper">
                        <img
                          src="https://uploads-ssl.webflow.com/5e1e0172db1e6f151e507c06/5e1e0172db1e6feadc507c16_ic-arrow-forward-18px.svg"
                          data-w-id="1944b083-0408-23b8-a620-61953dbd318c"
                          alt=""
                          className="mockup-arrow"
                        />
                      </div>
                    </div>
                  </a>
                  <div
                    id="w-node-ce64223d-3b0f-84b9-64bf-81bd6806b188-f5507c04"
                    className=""
                  >
                    <p className="portfolio-paragraph">
                      This is a homepage design and build for a concept project
                      – a chat application. I designed the page first then built
                      a responsive web page using Webflow.
                    </p>
                    <div
                      data-w-id="51907583-8cfe-0024-ef94-42e104b8f07d"
                      className="button-wrapper"
                    >
                      <div className="button-border">
                        <a
                          href="/project/chat-app"
                          className="button w-button preserve-3d w-button duration-200 ease-out  hover:translate-x-0 hover:translate-y-0 translate-z-0 -translate-x-2 -translate-y-2 scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 hover:translate3d(0,0,0)"
                        >
                          see this project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project  ">
                  <div className="left-column ">
                    <h4 className="heading-5">latest work</h4>
                    <h1>Document collaboration</h1>
                    <div className="tags-wrapper">
                      <div className="tag">Website Design</div>
                      <div className="tag">Nextjs</div>
                      <div className="tag">Supabase</div>
                      <div className="tag">Liveblocks</div>
                      <div className="tag">Tailwind</div>
                      <div className="tag">Javascript</div>
                      <div className="tag">html</div>
                      <div className="tag">css</div>
                      <div className="tag">User authentication</div>
                    </div>
                  </div>
                  <a
                    id="w-node-_5e88b46d-417e-778f-7af0-7ba57a92cc85-f5507c04"
                    data-w-id="5e88b46d-417e-778f-7af0-7ba57a92cc85"
                    href="/project/document-collaboration"
                    className="mockup-column w-inline-block "
                  >
                    <Image
                      width="523"
                      alt="A mockup of a project"
                      src="/document-collaboration-thumnail.png"
                      height="668"
                      className="mockup-img preserve-3d  duration-200 ease-out  hover:translate-x-2 hover:-translate-y-2  hover:translate3d(8px,-8px,0px)"
                    />
                    <Image
                      src="https://uploads-ssl.webflow.com/5e1e0172db1e6f151e507c06/5e1e0172db1e6f27d4507c12_dot%20pattern-min.png"
                      width="101"
                      height="376"
                      alt=""
                      className="dots"
                    />
                    <div className="mockup-hover">
                      <div
                        data-w-id="d9705062-deb4-607b-0803-00a0c2b1317b"
                        className="mockup-hover-text"
                      >
                        See this project
                      </div>
                      <div className="mockup-arrow-wrapper">
                        <img
                          src="https://uploads-ssl.webflow.com/5e1e0172db1e6f151e507c06/5e1e0172db1e6feadc507c16_ic-arrow-forward-18px.svg"
                          data-w-id="1944b083-0408-23b8-a620-61953dbd318c"
                          alt=""
                          className="mockup-arrow"
                        />
                      </div>
                    </div>
                  </a>
                  <div
                    id="w-node-ce64223d-3b0f-84b9-64bf-81bd6806b188-f5507c04"
                    className=""
                  >
                    <p className="portfolio-paragraph">
                      collaborative document editing platform with user
                      authentication capabilities. Users can create, edit, and
                      collaborate on documents in real-time, with changes being
                      synced across all connected devices instantaneously. The
                      user authentication feature ensures that only authorized
                      individuals can access and contribute to the documents,
                      providing a secure and personalized experience for each
                      user.
                    </p>
                    <div
                      data-w-id="51907583-8cfe-0024-ef94-42e104b8f07d"
                      className="button-wrapper"
                    >
                      <div className="button-border">
                        <a
                          href="/project/document-collaboration"
                          className="button w-button preserve-3d w-button duration-200 ease-out  hover:translate-x-0 hover:translate-y-0 translate-z-0 -translate-x-2 -translate-y-2 scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 hover:translate3d(0,0,0)"
                        >
                          see this project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="what-i-do">
            <div className="left-column ">
              <h1 className="hero-heading">What</h1>
              <div className="highlight-box">
                <div className="highlight leftSlideIn opacity-0"></div>
                <h1 className="hero-heading">I do</h1>
              </div>
            </div>
            <div
              data-w-id="1aa15fbb-7cae-f258-366a-ed68997dbd00"
              className="right-column "
            >
              <div className="opacity-0 animate-right-slide-in  [animation-timeline:view()] [animation-range:0px_190px]">
                <h3>Design</h3>
                <p>
                  I build beautiful websites for modern businesses from any
                  design you want. Any business today needs a website that wins
                  customers’ trust and helps you do your business well. I make
                  sure your website is up to that standard.
                </p>
              </div>
              <div className="opacity-0 animate-right-slide-in  [animation-timeline:view()] [animation-range:0px_190px]">
                <h3 className="development-heading">Development</h3>
                <p>
                  I build websites in Webflow and Shopify where I can create
                  responsive, powerful and fully custom websites. Plus, Webflow
                  and Shopify have an incredibly simple Content Editor for you
                  and your team to edit website content quickly and easily.
                </p>
              </div>
            </div>
          </div>
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
              <p>Social link</p>
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
