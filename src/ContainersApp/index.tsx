import { useEffect } from 'react';

import { useController } from 'hooks/useController';
import { ContainersAppProps } from 'types/components';

const ContainersApp: React.FC<ContainersAppProps> = ({ children }) => {
  const {
    autoSelectActiveItemMenu,
    autoSelectActiveItemMenFloat,
    getRecipesDataInitialForPages,
    setSearchTitle,
  } = useController();

  useEffect(() => {
    autoSelectActiveItemMenu();
    autoSelectActiveItemMenFloat();
    getRecipesDataInitialForPages();
    setSearchTitle();
  }, [
    autoSelectActiveItemMenu,
    autoSelectActiveItemMenFloat,
    getRecipesDataInitialForPages,
    setSearchTitle,
  ]);

  return <div>{children}</div>;
};

export default ContainersApp;
