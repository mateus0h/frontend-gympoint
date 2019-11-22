import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-dashboard.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GYM Point" />
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/enrollments">MATRÍCULAS</Link>
          <Link to="/students/help-orders">PEDIDOS DE AUXÍLIO</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Mateus Aguiar</strong>
              <Link to="/profile">Sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
