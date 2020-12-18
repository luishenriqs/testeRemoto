import React, { useState } from 'react';
import { Container } from './styles';

const FormContainer: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  // async function handleSubmit() => {
  //   console.log()
  // }

  return (
    <Container>
      <form >
        <fieldset>
          <legend>Preencha seus dados.</legend>
          <input
            type="input"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Seu nome"
          />
          <input
            type="input"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            placeholder="Seu CPF"
          />     
          <button type="submit">Enviar</button>
        </fieldset>
      </form>
    </Container>
  );
};

export default FormContainer;
