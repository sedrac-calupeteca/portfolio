import '../sass/components/sidebar.sass';

import Avatar from '../images/avatar.jpg';
import SocialNetwork from './SocialNetwork';
import InformationContainer from './InformationContainer';

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Sedrac Lucas Calupeteca" />
      <p className="title">Desenvolvedor</p>
      <p className="subtitle text-white mt">Sedrac Lucas Calupeteca</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="#" className="btn">
        Download Currículo
      </a>
    </aside>
  )
}

export default Sidebar
