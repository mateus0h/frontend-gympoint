import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import { Container, Content, Actions, PlansTable } from './styles';

import { formatPrice } from '~/util/format';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');

      const data = response.data.map(plan => {
        const priceFormatted = formatPrice(plan.price);

        const durationFormatted =
          plan.duration === 1
            ? `${plan.duration} mês`
            : `${plan.duration} meses`;

        return {
          priceFormatted,
          durationFormatted,
          ...plan,
        };
      });

      setPlans(data);
    }

    loadPlans();
  }, []);

  return (
    <Container>
      <Actions>
        <p>Gerenciado planos</p>
        <div>
          <Link to="plans/create">
            <button type="button">Cadastrar</button>
          </Link>
        </div>
      </Actions>
      <Content>
        <PlansTable>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th className="alignCenter">DURAÇÃO</th>
              <th className="alignCenter">VALOR p/ MÊS</th>
              <th> </th>
            </tr>
          </thead>

          {plans.map(plan => (
            <tbody key={plan.id}>
              <tr>
                <td>{plan.title}</td>
                <td className="alignCenter">{plan.durationFormatted}</td>
                <td className="alignCenter">{plan.priceFormatted}</td>
                <td id="buttons">
                  <Link
                    id="edit"
                    to={{
                      pathname: `/students/edit`,
                      state: {
                        plan,
                      },
                    }}
                  >
                    Editar
                  </Link>

                  <button
                    type="button"
                    id="delete"
                    // onClick={() => handleDelete(student.id)}
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </PlansTable>
      </Content>
    </Container>
  );
}
