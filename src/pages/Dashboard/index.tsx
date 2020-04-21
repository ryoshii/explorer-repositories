import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do reposiório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/6109271?s=460&u=cc5a1635f24d48562b20fe0d68e99dbdd5149917&v=4"
            alt="Rodrigo Yoshioka"
          />
          <div>
            <strong>ryoshii/be-the-hero</strong>
            <p>
              Projeto desenvolvido na Semana Omnistack 11.0 ministrada pela
              Rocketseat.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
