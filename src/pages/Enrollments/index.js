import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, Content, Actions, EnrollmentTable } from './styles';

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      const response = await api.get('enrollments');

      const data = response.data.map(enrollment => {
        const startDateFormatted = format(
          parseISO(enrollment.start_date),
          "d 'de' MMMM 'de' Y",
          { locale: pt }
        );

        const endDateFormatted = format(
          parseISO(enrollment.end_date),
          "d 'de' MMMM 'de' Y",
          { locale: pt }
        );

        return {
          startDateFormatted,
          endDateFormatted,
          ...enrollment,
        };
      });

      setEnrollments(data);
    }

    loadEnrollments();
  }, []);

  return (
    <Container>
      <Actions>
        <p>Gerenciado matrículas</p>
        <div>
          <Link to="/enrollments/create">
            <button type="button">Cadastrar</button>
          </Link>
        </div>
      </Actions>
      <Content>
        <EnrollmentTable>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th className="alignCenter">PLANO</th>
              <th className="alignCenter">INÍCIO</th>
              <th className="alignCenter">TÉRMINO</th>
              <th className="alignCenter">ATIVA</th>
              <th> </th>
            </tr>
          </thead>

          {enrollments.map(enrollment => (
            <tbody key={enrollment.id}>
              <tr>
                <td>{enrollment.student.name}</td>
                <td className="alignCenter">{enrollment.plan.title}</td>
                <td className="alignCenter">{enrollment.startDateFormatted}</td>
                <td className="alignCenter">{enrollment.endDateFormatted}</td>
                <td className="alignCenter">
                  {enrollment.active ? 'True' : 'False'}
                </td>
                <td id="buttons">
                  <Link
                    id="edit"
                    to={{
                      pathname: `/plans/edit`,
                      // state: {
                      //   plan,
                      // },
                    }}
                  >
                    Editar
                  </Link>

                  <button
                    type="button"
                    id="delete"
                    // onClick={() => handleDelete(plan.id)}
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </EnrollmentTable>
      </Content>
    </Container>
  );
}
