import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container, StudentsTable, Content, Actions } from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [paramStudent, setStudent] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get(`students/${paramStudent}`);

      setStudents(response.data);
    }

    loadStudents();
  }, [paramStudent]);

  function handleSearchStudent(e) {
    setStudent(e.target.value);
  }

  return (
    <Container>
      <Actions>
        <p>Gerenciando alunos</p>
        <div>
          <Link to="students/create">
            <button type="button">Cadastrar</button>
          </Link>
          <input
            name="search"
            type="text"
            placeholder="Buscar aluno"
            onChange={handleSearchStudent}
          />
        </div>
      </Actions>
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
                  <Link id="edit" to="/students/edit">
                    Editar
                  </Link>

                  <Link id="delete" to="/students">
                    Apagar
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </StudentsTable>
      </Content>
    </Container>
  );
}
