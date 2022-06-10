import propTypes from 'prop-types';

const TitleAquaWordGeneral = ({ title, magicWord, customClass }) => (
  <p className={`w-full font-semibold text-3xl md:text-4xl ${customClass}`}>
    {title.split(' ').map((word) => (
      word === magicWord
        ? <span key={word} className="text-dev-aqua">{`${magicWord}`}</span>
        : `${word} `))}
  </p>
);

TitleAquaWordGeneral.propTypes = {
  title: propTypes.string,
  magicWord: propTypes.string,
  customClass: propTypes.string,
};

TitleAquaWordGeneral.defaultProps = {
  title: 'Section title here',
  magicWord: 'here',
  customClass: '',
};

export default TitleAquaWordGeneral;
