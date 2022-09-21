import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Vegetarians from 'pages/Vegetarians';
import MainCourses from 'pages/MainCourses';
import Cakes from 'pages/Cakes';
import FastFood from 'pages/FastFood';
import KidsMenu from 'pages/KidsMenu';
import Soups from 'pages/Soups';
import ContainersApp from 'ContainersApp';
import NotFound from 'pages/NotFound';

const Container = styled.div``;

const App = () => {
  return (
    <ContainersApp>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vegetarianos' element={<Vegetarians />} />
          <Route path='/platos-principales' element={<MainCourses />} />
          <Route path='/tortas' element={<Cakes />} />
          <Route path='/comida-rapida' element={<FastFood />} />
          <Route path='/menu-ninos' element={<KidsMenu />} />
          <Route path='/sopas' element={<Soups />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </ContainersApp>
  );
};

export default App;
