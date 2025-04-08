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
          Para mim toda a idéia pode ser transformada em um código, e todo
          código pode ser transformado em uma solução para o mercado! Eis
          algumas das soluções que posso prover:
        </p>
      </div>
      <div id="services-items">
        <div className="service-item">
          <FaMoneyBillTrendUp />
          <h3>Site de vendas</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem
            nemo vel obcaecati, nisi incidunt quibusdam quod sapiente quaerat
            maiores facere accusantium quo nulla deserunt, a officia eos at
            nostrum.
          </p>
        </div>
        <div className="service-item">
          <BsApple />
          <h3>Site para branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maiores dicta accusantium blanditiis consequatur quam dignissimos
            nemo voluptate voluptates repellendus dolorum repudiandae adipisci,
            fugiat nihil, corporis veniam quaerat! Earum, commodi.
          </p>
        </div>
        <div className="service-item">
          <IoConstruct />
          <h3>Sistemas web</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maiores dicta accusantium blanditiis consequatur quam dignissimos
            nemo voluptate voluptates repellendus dolorum repudiandae adipisci,
            fugiat nihil, corporis veniam quaerat! Earum, commodi.
          </p>
        </div>
        <div className="service-item">
          <RiRobot2Fill />
          <h3>Automações</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maiores dicta accusantium blanditiis consequatur quam dignissimos
            nemo voluptate voluptates repellendus dolorum repudiandae adipisci,
            fugiat nihil, corporis veniam quaerat! Earum, commodi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
