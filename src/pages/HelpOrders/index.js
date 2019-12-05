import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { Container, Content, Actions, PlansTable } from './styles';

import Modal from './ResponseModal';

export default function HelpOrders() {
  const [orders, setOrders] = useState([]);
  const [infosModal, setInfosModal] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('students/help-orders');

      setOrders(response.data);
    }

    loadOrders();
  }, []);

  function hadleInfosModal(order) {
    setInfosModal({
      isOpen: true,
      question: order.question,
      idQuestion: order.id,
    });
  }

  function removeHelpOrder(idHelpOrder) {
    const newList = orders.filter(item => item.id !== idHelpOrder);

    setOrders(newList);

    setInfosModal({
      isOpen: false,
    });
  }

  return (
    <Container>
      <Actions>
        <p>Pedidos de auxílio</p>
      </Actions>
      <Content>
        <PlansTable>
          <Modal
            isOpen={infosModal.isOpen}
            question={infosModal.question}
            idQuestion={infosModal.idQuestion}
            listHelpOrder={removeHelpOrder}
          />
          <thead>
            <tr>
              <th>ALUNO</th>
              <th> </th>
            </tr>
          </thead>

          {orders.map(order => (
            <tbody key={order.id}>
              <tr>
                <td>{order.student.name}</td>
                <td id="buttons">
                  <button
                    id="response"
                    type="button"
                    onClick={() => hadleInfosModal(order)}
                  >
                    Responder
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
