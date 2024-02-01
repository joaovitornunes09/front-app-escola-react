import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Teste
        <small>oie</small>
      </Title>
      <Paragrafo>TESTE 2</Paragrafo>
      <button type="submit">Enviar</button>
    </Container>
  );
}
