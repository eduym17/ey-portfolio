import propTypes from 'prop-types';

const TitleSpaceWordMain = ({ title, magicWord, customClass }) => (
  <p className={`w-[90%] font-semibold text-4xl md:w-full md:text-6xl lg:text-7xl ${customClass}`}>
    {title.split(' ').map((word) => (
      word === magicWord
        ? <span key={word} className="text-transparent bg-clip-text bg-lightGradient">{`${magicWord}`}</span>
        : `${word} `))}
  </p>
);

TitleSpaceWordMain.propTypes = {
  title: propTypes.string,
  magicWord: propTypes.string,
  customClass: propTypes.string,
};

TitleSpaceWordMain.defaultProps = {
  title: 'Main title here',
  magicWord: 'here',
  customClass: '',
};

export default TitleSpaceWordMain;
