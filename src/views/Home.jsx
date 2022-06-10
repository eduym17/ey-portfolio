import {
  asteroid, newBody, inSitu, devStore, pokedex,
} from '../components/utils/images';
import {
  TitleSpaceWordMain, TitleSpaceWordGeneral, TitleAquaWordGeneral, ClickToTop, ProjectCard,
  FormContact,
} from '../components';
import { infoDevStore, infoInSitu, infoPokedex } from '../components/utils/texts';
import {
  iconCSS3, iconExpress, iconFigma, iconGit, iconHTML5, iconIllustrator, iconJavaScript,
  iconJest, iconMongoDB, iconNodeJS, iconPhotoshop, iconPostgreSQL, iconReact, iconVue,
} from '../components/utils/icons';

const Home = () => (
  <>
    <div className="containerFullWidth">
      <div
        id="home"
        className="containerContent justify-start pt-20 pb-24 md:flex-row md:justify-around md:py-14"
      >
        <div className="w-[90%]">
          <p className="w-full md:w-3/6 leading-none font-extralight">
            Welcome to my porfolio
          </p>
          <TitleSpaceWordMain
            title="Ready to reach the asteroids ?"
            magicWord="asteroids"
            customClass=""
          />
        </div>
        <div className="w-[90%] flex flex-col items-center">
          <img
            src={asteroid}
            alt={asteroid}
            className="w-3/4 max-w-xs pt-16 md:w-2/6"
          />
          <div className="flex items-start w-full pt-14 ">
            <a
              href="/#contact"
              className="flex items-center gap-2 border-b-2 hover:text-dev-aqua hover:border-dev-aqua"
            >
              <p>Contact</p>
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.3 19.3q-.275-.275-.288-.7q-.012-.425.263-.7l4.9-4.9H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.175l-4.9-4.9q-.275-.275-.263-.7q.013-.425.288-.7q.275-.275.7-.275q.425 0 .7.275l6.6 6.6q.15.125.213.312q.062.188.062.388t-.062.375q-.063.175-.213.325l-6.6 6.6q-.275.275-.7.275q-.425 0-.7-.275Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="containerFullWidth bg-dev-blue">
      <div
        id="aboutMe"
        className="containerContent py-12"
      >
        <div className="w-[90%] flex flex-col items-start">
          <TitleAquaWordGeneral
            title="Hi, friend !"
            magicWord="friend"
            customClass=""
          />
          <p className="w-full font-extralight text-sm text-justify whitespace-pre-line">
            {`My name's Eduardo, I'm glad you're here! Please take a seat on this ship and let me tell you a little about myself:

              For many years I looked for solutions to help our planet, which was facing a tough climate change. The solution seemed to be renewable energies but... We didn't expect an asteroid collision that destroyed our planet, just a few survived.

              I was heavily injured by the impact and died for a few minutes, but the geniuses from earth managed to implant my brain in a new body, so I had a new opportunity to change the universe's destiny.

              In this second chance, the only thing I want to do is create good things for those few survivors. My new body was only new for me, it belonged to a member of a different race, and it had attached some peculiar skills that now allow me to read new languages in a faster way. I'll tell you about this later, first I want to show you my most recent projects.
            `}
          </p>
          <img
            src={newBody}
            alt={newBody}
            className="w-full pt-10 pb-2"
          />
          <ClickToTop customClass="mt-2" />
        </div>
      </div>
    </div>
    <div className="containerFullWidth">
      <div
        id="projects"
        className="containerContent pt-12"
      >
        <div className="w-[90%] flex flex-col items-start">
          <TitleSpaceWordGeneral
            title="My recent projects"
            magicWord="projects"
            customClass="text-3xl"
          />
          <ProjectCard
            image={inSitu}
            title={infoInSitu.title}
            description={infoInSitu.description}
            stack={infoInSitu.stack}
            linkWebsite={infoInSitu.linkWebsite}
            isWebDisabled={infoInSitu.isWebDisabled}
            linkRepo={infoInSitu.linkRepo}
            isRepoDisabled={infoInSitu.isRepoDisabled}
            customClass="mt-8"
          />
          <ProjectCard
            image={devStore}
            title={infoDevStore.title}
            description={infoDevStore.description}
            stack={infoDevStore.stack}
            linkWebsite={infoDevStore.linkWebsite}
            isWebDisabled={infoDevStore.isWebDisabled}
            linkRepo={infoDevStore.linkRepo}
            isRepoDisabled={infoDevStore.isRepoDisabled}
            customClass="mt-6"
          />
          <ProjectCard
            image={pokedex}
            title={infoPokedex.title}
            description={infoPokedex.description}
            stack={infoPokedex.stack}
            linkWebsite={infoPokedex.linkWebsite}
            isWebDisabled={infoPokedex.isWebDisabled}
            linkRepo={infoPokedex.linkRepo}
            isRepoDisabled={infoPokedex.isRepoDisabled}
            customClass="mt-6"
          />
          <ClickToTop customClass="mt-3" />
        </div>
      </div>
    </div>
    <div className="containerFullWidth">
      <div
        id="stack"
        className="containerContent pt-8 pb-12"
      >
        <div className="w-[90%] flex flex-col items-start">
          <TitleSpaceWordGeneral
            title="My stack"
            magicWord="stack"
            customClass="text-3xl"
          />
          <p className="w-full font-extralight text-sm text-justify whitespace-pre-line pt-2">
            Brands | Products | Features | Websites
          </p>
          <TitleSpaceWordGeneral
            title="Front End"
            magicWord="Front"
            customClass="text-center text-2xl mt-6"
          />
          <div className="w-full flex items-center justify-center gap-4 py-4">
            <img src={iconHTML5} alt={iconHTML5} className="w-10" />
            <img src={iconCSS3} alt={iconCSS3} className="w-10" />
            <img src={iconJavaScript} alt={iconJavaScript} className="w-10" />
            <img src={iconReact} alt={iconReact} className="w-10" />
            <img src={iconVue} alt={iconVue} className="w-10" />
          </div>
          <TitleSpaceWordGeneral
            title="Back End"
            magicWord="Back"
            customClass="text-center text-2xl mt-6"
          />
          <div className="w-full flex items-center justify-center gap-4 py-4">
            <img src={iconNodeJS} alt={iconNodeJS} className="w-10" />
            <img src={iconJest} alt={iconJest} className="w-10" />
            <img src={iconExpress} alt={iconExpress} className="w-10" />
            <img src={iconPostgreSQL} alt={iconPostgreSQL} className="w-10" />
            <img src={iconMongoDB} alt={iconMongoDB} className="w-10" />
          </div>
          <TitleSpaceWordGeneral
            title="My tools"
            magicWord="tools"
            customClass="text-center text-2xl mt-6"
          />
          <div className="w-full flex items-center justify-center gap-4 py-4">
            <img src={iconGit} alt={iconGit} className="w-10" />
            <img src={iconFigma} alt={iconFigma} className="w-10" />
            <img src={iconIllustrator} alt={iconIllustrator} className="w-10" />
            <img src={iconPhotoshop} alt={iconPhotoshop} className="w-10" />
          </div>
          <ClickToTop />
        </div>
      </div>
    </div>
    <div className="containerFullWidth bg-dev-blue">
      <div
        id="contact"
        className="containerContent pt-12 pb-14"
      >
        <div className="w-[90%] flex flex-col items-start">
          <TitleSpaceWordGeneral
            title="Do you have a brilliant idea in mind?"
            customClass="leading-none"
          />
          <TitleAquaWordGeneral
            title="Contact  me!"
            magicWord="Contact"
            customClass=""
          />
          <FormContact customClass="my-6" />
          <TitleSpaceWordGeneral
            title="I'll be happy to hear from you!"
            magicWord="happy"
            customClass="leading-none text-center text-xl"
          />
        </div>
      </div>
    </div>
  </>
);

export default Home;
