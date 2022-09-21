import { WrapperFlex } from 'components/WrapperFlex';
import imgNotFound from 'assets/svg/no-found.svg';
import { NFoundProps } from 'types/components';

export const NFound: React.FC<NFoundProps> = ({ title, showButton }) => {
  return (
    <WrapperFlex className='nfound-wrapper-flex-container'>
      <span className='n-found-title'> {title} </span>
      <img className='nfound-img' src={imgNotFound} alt='Not Found' />
      {showButton && (
        <button className='nfound-button' onClick={() => window.history.back()}>
          Volver
        </button>
      )}
    </WrapperFlex>
  );
};

NFound.defaultProps = {
  title: 'No se han encontrado la página',
  showButton: true,
};
