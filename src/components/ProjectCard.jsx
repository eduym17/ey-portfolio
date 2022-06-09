import propTypes from 'prop-types';

const ProjectCard = ({
  image, title, description, stack, website, isWebsiteDisabled, repo, customClass,
}) => (
  <div className={`w-full flex flex-col items-center mt-6 bg-dev-nightSoft border-b-4 rounded-t-md border-dev-violet hover:border-dev-aqua ${customClass}`}>
    <img
      src={image}
      alt={image}
      className="rounded-t-md w-full"
    />
    <p className="w-full text-center font-medium pt-4">
      {title}
    </p>
    <p className="w-full text-center font-extralight text-sm pt-4">
      {description}
    </p>
    <p className="w-[90%] text-center font-medium text-sm pt-4">
      {stack}
    </p>
    <div className="flex items-center justify-center gap-4 py-6 w-full">
      <button
        type="button"
        href={website}
        target="_blank"
        rel="noreferrer"
        className="bg-dev-violet py-1.5 w-[130px] rounded-md flex items-center justify-center gap-1 font-medium text-dev-gray-20 hover:bg-lightGradient hover:text-dev-white disabled:cursor-wait"
        disabled
      >
        <svg width="20px" height="20px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
          />
        </svg>
        website
      </button>
      <button
        type="button"
        href={repo}
        target="_blank"
        rel="noreferrer"
        className={`py-1.5 w-[130px] rounded-md flex items-center justify-center gap-1 font-medium text-dev-gray-20 ${isWebsiteDisabled ? 'cursor-not-allowed bg-dev-gray-40' : 'bg-dev-violet hover:bg-lightGradient hover:text-dev-white'}`}
        disabled
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M216 216a16 16 0 0 1-16-16v-8a32.1 32.1 0 0 0-14.8-27a55.8 55.8 0 0 0 22.8-45v-8a58 58 0 0 0-7.7-28.3a59.9 59.9 0 0 0-5.4-47.7a7.8 7.8 0 0 0-6.9-4a59.7 59.7 0 0 0-48 24h-24a59.7 59.7 0 0 0-48-24a7.8 7.8 0 0 0-6.9 4a59.9 59.9 0 0 0-5.4 47.7A58 58 0 0 0 48 112v8a55.8 55.8 0 0 0 22.8 45A32.1 32.1 0 0 0 56 192v8a16 16 0 0 1-16 16a8 8 0 0 0 0 16a32.1 32.1 0 0 0 32-32v-8a16 16 0 0 1 16-16h12v40a16 16 0 0 1-16 16a8 8 0 0 0 0 16a32.1 32.1 0 0 0 32-32v-40h24v40a32.1 32.1 0 0 0 32 32a8 8 0 0 0 0-16a16 16 0 0 1-16-16v-40h12a16 16 0 0 1 16 16v8a32.1 32.1 0 0 0 32 32a8 8 0 0 0 0-16ZM64 120v-8a42.7 42.7 0 0 1 6.9-22.5a7.9 7.9 0 0 0 1.1-7.7a43.7 43.7 0 0 1 .8-33.5a43.6 43.6 0 0 1 32.3 20a8 8 0 0 0 6.7 3.7h32.4a8 8 0 0 0 6.7-3.7a43.6 43.6 0 0 1 32.3-20a43.7 43.7 0 0 1 .8 33.5a8.2 8.2 0 0 0 1.1 7.7A42.7 42.7 0 0 1 192 112v8a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40Z"
          />
        </svg>
        repository
      </button>
    </div>
  </div>
);

ProjectCard.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  stack: propTypes.string,
  website: propTypes.string,
  isWebsiteDisabled: propTypes.bool,
  repo: propTypes.string,
  customClass: propTypes.string,
};

ProjectCard.defaultProps = {
  image: 'Image here',
  title: 'Title here',
  description: 'Description here',
  stack: 'Stack here',
  website: '',
  isWebsiteDisabled: false,
  repo: '',
  customClass: '',
};

export default ProjectCard;
