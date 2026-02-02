import React from 'react';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre-page">
      <div className="container">
        <h1 className="page-title">Sobre Nós</h1>
        
        <div className="sobre-content">
          <section className="sobre-section">
            <h2>🍕 Nossa História</h2>
            <p>
              Fundada em 2016, a Pizzaria Delícia nasceu do sonho de trazer as autênticas 
              pizzas artesanais para sua casa. Com mais de 10 anos de experiência, nos tornamos 
              referência em qualidade e sabor.
            </p>
          </section>

          <section className="sobre-section">
            <h2>📍 Localização</h2>
            <p>
              <strong>Endereço:</strong> Rua das Pizzas, 123 - Centro<br/>
              <strong>Cidade:</strong> São Paulo - SP<br/>
              <strong>CEP:</strong> 01234-567
            </p>
          </section>

          <section className="sobre-section">
            <h2>📞 Contato</h2>
            <p>
              <strong>Telefone:</strong> (11) 3456-7890<br/>
              <strong>WhatsApp:</strong> (11) 98765-4321<br/>
              <strong>Email:</strong> contato@pizzariadelicia.com.br
            </p>
          </section>

          <section className="sobre-section">
            <h2>🕐 Horário de Funcionamento</h2>
            <p>
              <strong>Segunda a Quinta:</strong> 18h às 23h<br/>
              <strong>Sexta e Sábado:</strong> 18h às 00h<br/>
              <strong>Domingo:</strong> 18h às 23h
            </p>
          </section>

          <section className="sobre-section">
            <h2>💳 Formas de Pagamento</h2>
            <p>
              Aceitamos dinheiro, cartão de crédito/débito (todas as bandeiras), 
              PIX e vale-refeição.
            </p>
          </section>

          <section className="sobre-section">
            <h2>🚚 Entrega</h2>
            <p>
              Entregamos em um raio de 5km. Tempo médio de entrega: 40 minutos.<br/>
              Taxa de entrega: R$ 5,00
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
