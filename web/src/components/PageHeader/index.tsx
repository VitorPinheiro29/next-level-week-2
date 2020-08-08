import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import backIcon from '../../assets/icons/back.svg';

interface PageHeaderProps {
  title: string;
  description?: string; //O "?" significa que não é obrigatório
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div>
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar ao início" />
          </Link>
          <img src={logoImg} alt="Logo Proffy" />
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
          {props.description && <p>{props.description}</p>}
          {/*só vai executar o <p></p> se tiver descrição*/}
          {props.children}
        </div>
      </header>
    </div>
  );
};

export default PageHeader;
