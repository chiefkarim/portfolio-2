import Image from "next/image";
import getData from "./getData";

export default async function Project() {
  const readMe = await getData({
    repoName: "Hiring-software-engineer-frontend",
    username: "chiefkarim",
    branch:"development-karim"
  });
  // console.log("readme",readMe)
  return (
    <div role="listitem" className="w-dyn-item   ">
      <div className="project  ">
        <div className="left-column opacity-0 animate-right-slide-in  [animation-timeline:view()] [animation-range:0_600px]">
          <h4 className="heading-5">latest work</h4>
          <h1>Chat App website</h1>
          <div className="tags-wrapper">
            <div className="tag">Website Design</div>
            <div className="tag">Webflow Development</div>
            <div className="tag">Concept</div>
          </div>
        </div>
        <a
          id="w-node-_5e88b46d-417e-778f-7af0-7ba57a92cc85-f5507c04"
          data-w-id="5e88b46d-417e-778f-7af0-7ba57a92cc85"
          href="/project/chat-app-website"
          className="mockup-column w-inline-block opacity-0 animate-right-slide-in  [animation-timeline:view()] [animation-range:0_600px]"
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
          className="opacity-0 animate-right-slide-in  [animation-timeline:view()] [animation-range:0px_190px]"
        >
          <p className="portfolio-paragraph">
            This is a homepage design and build for a concept project – a chat
            application. I designed the page first then built a responsive web
            page using Webflow.
          </p>
          <div
            data-w-id="51907583-8cfe-0024-ef94-42e104b8f07d"
            className="button-wrapper"
          >
            <div className="button-border">
              <a
                href="/project/chat-app-website"
                className="button w-button preserve-3d w-button duration-200 ease-out  hover:translate-x-0 hover:translate-y-0 translate-z-0 -translate-x-2 -translate-y-2 scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 hover:translate3d(0,0,0)"
              >
                see this project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
