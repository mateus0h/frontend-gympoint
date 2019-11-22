import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, StudentsTable, Content } from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      setStudents(response.data);
    }

    loadStudents();
  }, []);

  return (
    <Container>
      <Content>
        <StudentsTable>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th id="idadeTh">IDADE</th>
              <th> </th>
            </tr>
          </thead>

          {students.map(student => (
            <tbody key={student.id}>
              <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td id="idadeTd">{student.age}</td>
                <td id="buttons">
                  <button type="button" id="edit">
                    Editar
                  </button>
                  <button type="button" id="delete">
                    Pagar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </StudentsTable>
      </Content>
    </Container>
  );
}
