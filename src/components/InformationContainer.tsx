import "../sass/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Contactos</h3>
          <p>+(244) 936-269-780</p>
          <p>+(244) 958-360-876</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>slcsedrac@gmail.com</p>
          <p>sedraccalupeteca@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Luanda / LDA</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;