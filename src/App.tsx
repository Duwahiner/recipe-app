import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';

const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Container>
  );
};

export default App;
