import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, Content } from './styles';

export default function create() {
  return (
    <Container>
      <Content>
        <Form>
          <div id="double">
            <strong>NOME COMPLETO</strong>
            <Input name="name" type="text" placeholder="John Doe" />

            <strong>ENDEREÇO DE E-MAIL</strong>
            <Input name="email" type="email" placeholder="exemplo@gmail.com" />
          </div>
          <div id="triple">
            <strong>
              IDADE
              <Input name="age" type="text" />
            </strong>

            <strong>
              PESO (em kg)
              <Input name="weight" type="text" />
            </strong>

            <strong>
              ALTURA
              <Input name="height" type="text" />
            </strong>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
