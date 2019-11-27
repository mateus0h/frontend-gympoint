import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container, StudentsTable, Content, Actions } from './styles';

import { deleteStudent } from '~/store/modules/student/actions';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [paramStudent, setParamStudent] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get(`students/${paramStudent}`);

      setStudents(response.data);
    }

    loadStudents();
  }, [paramStudent]);

  function handleSearch(e) {
    setParamStudent(e.target.value);
  }

  function handleDelete(idStudent) {
    dispatch(deleteStudent(idStudent));

    const newList = students.filter(item => item.id !== idStudent);

    setStudents(newList);
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
            onChange={handleSearch}
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
                  <Link
                    id="edit"
                    to={{
                      pathname: `/students/edit`,
                      state: {
                        student,
                      },
                    }}
                  >
                    Editar
                  </Link>

                  <button
                    type="button"
                    id="delete"
                    onClick={() => handleDelete(student.id)}
                  >
                    Apagar
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
