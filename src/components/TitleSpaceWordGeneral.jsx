import propTypes from 'prop-types';

const TitleSpaceWordGeneral = ({ title, magicWord, customClass }) => (
  <p className={`w-full font-semibold ${customClass}`}>
    {title.split(' ').map((word) => (
      word === magicWord
        ? <span key={word} className="text-transparent bg-clip-text bg-lightGradient">{`${magicWord} `}</span>
        : `${word} `))}
  </p>
);

TitleSpaceWordGeneral.propTypes = {
  title: propTypes.string,
  magicWord: propTypes.string,
  customClass: propTypes.string,
};

TitleSpaceWordGeneral.defaultProps = {
  title: 'Section title here',
  magicWord: 'here',
  customClass: '',
};

export default TitleSpaceWordGeneral;
