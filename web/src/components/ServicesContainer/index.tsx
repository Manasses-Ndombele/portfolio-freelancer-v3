import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { IoConstruct } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import "@/styles/components/services-container.scss";

function ServicesContainer() {
  return (
    <div id="services-container">
      <div id="services-copy">
        <h2>O que eu posso fazer por você?</h2>
        <p>
          Toda a idéia pode ser transformada em um código, e todo código pode
          ser transformado em uma solução para o mercado! Eis algumas das
          soluções que posso prover:
        </p>
      </div>
      <div id="services-items">
        <div className="service-item">
          <FaMoneyBillTrendUp />
          <h3>Site de vendas</h3>
          <p>
            Uma das minhas especialidades é o desenvolvimento de páginas de
            vendas e lojas online onde o foco principal é a venda de um produto
            ou serviço, geralmente apresentados com um design arrojado e
            modelados para o público alvo do vendedor.
          </p>
        </div>
        <div className="service-item">
          <BsApple />
          <h3>Site para branding</h3>
          <p>
            Como resposta a alta demanda por sites que têm o objetivo de passar
            uma mensagem consistente com a identidade visual de uma marca
            trabalho na prestação do serviço de criação de sites institucionais!
            Se você deseja um site que reflita a sua marca este serviço é
            perfeito para si.
          </p>
        </div>
        <div className="service-item">
          <IoConstruct />
          <h3>Sistemas web</h3>
          <p>
            Poucos desenvolvedores conseguem alcançar a excelência em design,
            segurança e eficiência em sistemas web, sites que têm uma
            funcionalidade em específica ou diversas são o desafio que superei e
            posso diligentemente sarar essa grande dor nesse mercado
            adequadamente.
          </p>
        </div>
        <div className="service-item">
          <RiRobot2Fill />
          <h3>Automações</h3>
          <p>
            Em especial através da linguagem Python sou capaz de criar bots,
            fazer integrações com APIs, manipular planilhas do Excel, etc. Para
            criar uma solução bem específica para resolver tarefas repetitivas
            do seu dia à dia de trabalho. Toda tarefa pode ser automatizada para
            aumentar a produtividade e performance do seu negócio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
