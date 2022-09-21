import { useEffect } from 'react';

import { NFound } from 'components/NFound';
import { setPageTitle } from 'utils/setPageTitle';

const NotFound = () => {
  useEffect(() => {
    setPageTitle('Not Found');
  }, []);

  return (
    <div style={{ marginTop: '15%' }}>
      <NFound title='No se han encontrado la página' showButton />
    </div>
  );
};

export default NotFound;
