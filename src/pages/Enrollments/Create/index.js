import React, { useState, useEffect, useRef, useMemo } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input, useField } from '@rocketseat/unform';

import { addMonths, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import AsyncSelect from 'react-select/async';
import Select from 'react-select';

import ReactDatePicker from 'react-datepicker';

import { formatPrice } from '~/util/format';

import api from '~/services/api';

import {
  Container,
  Content,
  Label,
  InputControl,
  ActionsHeader,
} from './styles';

export default function Create() {
  const ref = useRef(null);
  const [plans, setPlans] = useState();

  const { fieldName, registerField, defaultValue, error } = useField(
    'start_date'
  );

  const [startDate, setStartDate] = useState('');
  const [planSelec, setPlanSelec] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    async function loadlans() {
      const response = await api.get('plans');

      const data = response.data.map(plan => {
        const value = plan.id;
        const label = plan.title;

        return { value, label, ...plan };
      });

      setPlans(data);
    }

    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });

    loadlans();
  }, [setPlans, ref.current, fieldName]); // eslint-disable-line

  const endDate = useMemo(() => {
    if (planSelec !== '' && startDate !== '') {
      const endDateFormatted = addMonths(startDate, planSelec.duration);

      setTotalPrice(formatPrice(planSelec.duration * planSelec.price));

      return format(endDateFormatted, "dd'/'MM'/'Y", { locale: pt });
    }
    return '';
  }, [planSelec, startDate]);

  const filterStudents = inputValue => {
    async function loadStudents() {
      const response = await api.get(`students/${inputValue}`);

      return response.data;
    }

    return loadStudents();
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterStudents(inputValue));
      }, 1000);
    });

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ActionsHeader>
          <p>Cadastro de matrícula</p>
          <div>
            <Link to="/enrollments">
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
              <Label>ALUNO</Label>
              <div className="divSelectColumn">
                <AsyncSelect
                  cacheOptions
                  loadOptions={promiseOptions}
                  defaultOptions
                  getOptionValue={promiseOptions => promiseOptions.id}
                  getOptionLabel={promiseOptions => promiseOptions.name}
                />
              </div>
            </InputControl>
          </div>

          <div className="inputColumn">
            <InputControl>
              <Label>PLANO</Label>
              <div className="divSelectRow">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  onChange={plan => setPlanSelec(plan)}
                  name="color"
                  options={plans}
                />
              </div>
            </InputControl>

            <InputControl>
              <Label>DATA DE INÍCIO</Label>
              <ReactDatePicker
                name={fieldName}
                selected={startDate}
                onChange={date => setStartDate(date)}
                ref={ref}
              />
              {error && <span>{error}</span>}
            </InputControl>

            <InputControl>
              <Label>DATA DE TÉRMINO</Label>
              <Input name="end_date" type="text" value={endDate} readOnly />
            </InputControl>

            <InputControl>
              <Label>VALOR FINAL</Label>
              <Input name="price" type="text" value={totalPrice} readOnly />
            </InputControl>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
