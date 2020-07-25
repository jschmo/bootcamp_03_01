import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// function Dashboard () {}
// const Dashboard: React.FunctionComponent = () => {};
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Reposit&oacute;rios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="rwarw">
          <img
            src="https://avatars3.githubusercontent.com/u/12284666?s=460&u=373816c36b5aadbfbba446c3cd9c8b0642138642&v=4"
            alt="Alisson Veras"
          />
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJS & React Nativ forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="rwarw">
          <img
            src="https://avatars3.githubusercontent.com/u/12284666?s=460&u=373816c36b5aadbfbba446c3cd9c8b0642138642&v=4"
            alt="Alisson Veras"
          />
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJS & React Nativ forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="rwarw">
          <img
            src="https://avatars3.githubusercontent.com/u/12284666?s=460&u=373816c36b5aadbfbba446c3cd9c8b0642138642&v=4"
            alt="Alisson Veras"
          />
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJS & React Nativ forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
