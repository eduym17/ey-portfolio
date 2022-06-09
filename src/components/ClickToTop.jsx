import propTypes from 'prop-types';

const ClickToTop = ({ customClass }) => (
  <svg
    className={`hover:text-dev-aqua self-end cursor-pointer ${customClass}`}
    onClick={() => window.scrollTo(0, 0)}
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5l-.15-.09l-.13-.07a1 1 0 0 0-.72 0l-.13.07l-.15.09l-6 5a1 1 0 0 0-.13 1.41Z"
    />
  </svg>
);

ClickToTop.propTypes = {
  customClass: propTypes.string,
};

ClickToTop.defaultProps = {
  customClass: '',
};

export default ClickToTop;
