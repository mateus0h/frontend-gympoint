import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { createStudent } from '~/store/modules/student/actions';
import { formatPrice } from '~/util/format';

import {
  Container,
  Content,
  Label,
  InputControl,
  ActionsHeader,
} from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O Título é obrigatorio'),
  duration: Yup.string().required('A Duração é obrigatoria'),
  price: Yup.string().required('O preço é obrigatório'),
});

export default function Create() {
  const [plan, setPlan] = useState(0);

  function handleSubmit({ title, duration, price }) {}

  const totalPrice = useMemo(() => {
    let total = 0.0;

    if (plan.duration && plan.price) {
      total = plan.duration * plan.price;
    }

    return formatPrice(total);
  }, [plan.duration, plan.price]);

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ActionsHeader>
          <p>Cadastro de plano</p>
          <div>
            <Link to="/plans">
              <button id="back" type="button">
                Voltar
              </button>
            </Link>
            <button id="save" type="submit">
              Salvar
            </button>
          </div>
        </ActionsHeader>

        <Content>
          <div className="inputRow">
            <InputControl>
              <Label>TÍTULO DO PLANO</Label>
              <Input name="title" type="text" />
            </InputControl>
          </div>

          <div className="inputColumn">
            <InputControl>
              <Label>DURAÇÃO (em meses)</Label>
              <Input
                name="duration"
                id="duration"
                type="number"
                onChange={e => setPlan({ ...plan, duration: e.target.value })}
              />
            </InputControl>

            <InputControl>
              <Label>PREÇO MENSAL</Label>
              <Input
                name="price"
                type="number"
                onChange={e => setPlan({ ...plan, price: e.target.value })}
              />
            </InputControl>

            <InputControl>
              <Label>PREÇO TOTAL</Label>
              <Input
                name="priceMonthly"
                type="text"
                readOnly
                value={totalPrice}
              />
            </InputControl>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
