import React, { useState } from 'react'; // Adicione useState aqui
import './TelaConta.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cabecalho from '../../components/Cabecalho/Cabecalho';

const TelaConta = () => {
  const [formData, setFormData] = useState({
    username: 'nome usuario',
    email: 'nomeusuario@email.com',
    cpf: '123.456.789-00'
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className='geralconta'>
      <div className='topconta'>
        <Cabecalho />
      </div>
      <div className='midconta'>
      <div className='esquerdaconta'>
          <div className='textesquerda'>
            {/* Renderiza a saudação apenas se não estiver editando */}
            {!isEditing && <h1 className='titletextcontaesquerda'>Olá, {formData.username}</h1>}
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Digite um novo nome"
                  className='inputUsername'
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu e-mail"
                  className='inputUsername'
                />
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="Digite seu CPF"
                  className='inputUsername'
                />
              </>
            ) : (
              <>
                <h1 className='textcontaesquerda'>Seu email é {formData.email}</h1>
                <h1 className='textcontaesquerda'>Seu CPF é {formData.cpf}</h1>
              </>
            )}
            <button className='buttoncontaesquerda' onClick={isEditing ? handleSaveClick : handleEditClick}>
              <h1 className='textbutoncontaesquerda'>{isEditing ? 'Salvar' : 'Alterar Dados'}</h1>
              <i className='fas fa-pencil-alt'></i>
            </button>
            <button className='buttoncontaesquerda'>
              <h1 className='textbutoncontaesquerda'>Excluir Conta</h1>
              <i className='fas fa-trash'></i>
            </button>
            <button className='buttoncontaesquerdaadm'>
              <h1 className='textbutoncontaesquerda'>Tela do admin</h1>
            </button>
          </div>
        </div>
        <div className='direitaconta'>
          <div className='titulocontadireita'>
            <h1 className='titletextcontadireita'>Jogos adquiridos:</h1>
          </div>
          <div className='gridconta'>
            <div className='grid1conta'>
              <img className='contaimgdireita' src="/src/imgs/bikiniconta.png" alt="" />
              <h1 className='contatextdireita'>100/100</h1>
            </div>
            <div className='grid2conta'>
              <img className='contaimgdireita' src="/src/imgs/marsconta.png" alt="" />
              <h1 className='contatextdireita'>95/100</h1>
            </div>
            <div className='grid3conta'>
              <img className='contaimgdireita' src="/src/imgs/godconta.png" alt="" />
              <h1 className='contatextdireita'>75/100</h1>
            </div>
            <div className='grid4conta'>
              <img className='contaimgdireita' src="/src/imgs/stranconta.png" alt="" />
              <h1 className='contatextdireita'>Adicionar Avaliação</h1>
            </div>
          </div>
          <div className='carrinhoiconconta'>
          <div className='carrinhoiconconta'>
            <button className='carrinhoconta' type="submit">
              <img className='imgcarrinhoconta' src="/src/imgs/carrinho.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TelaConta;