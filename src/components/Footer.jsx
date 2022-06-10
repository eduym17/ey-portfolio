import {
  iconLogo, iconLinkedIn, iconGitHub, iconTwitter,
} from './utils/icons';

const Footer = () => (
  <>
    <div className="containerContent min-w-[250px] flex flex-col justify-between items-center p-4 md:px-6 md:py-7">
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <img
            src={iconLogo}
            alt="Asteroidev logof"
            className="h-10"
          />
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="https://www.linkedin.com/in/eduym17/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={iconLinkedIn}
              alt={iconLinkedIn}
              className="h-6 md:h-7"
            />
          </a>
          <a
            href="https://github.com/eduym17"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={iconGitHub}
              alt={iconGitHub}
              className="h-6 md:h-7"
            />
          </a>
          <a href="https://twitter.com/Edu_YM" target="_blank" rel="noreferrer">
            <img
              src={iconTwitter}
              alt={iconTwitter}
              className="h-6 md:h-7"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full whitespace-nowrap md:flex-row-reverse md:items-end">
        <div className="py-4 flex flex-col items-center w-full md:pb-0 md:pt-2 md:items-end">
          <p className="text-sm font-medium">
            Eduardo Yañez Mejía
          </p>
          <p className="text-sm font-extralight">
            Software Developer | UX/UI Designer
          </p>
        </div>
        <div className="flex flex-col items-center text-xs font-extralight w-full whitespace-nowrap md:flex-row md:gap-3">
          <p>
            {`© All rights reserved, ${new Date().getFullYear()}.`}
          </p>
          <p>
            Illustrations @vectorpuch, @upklyak.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
