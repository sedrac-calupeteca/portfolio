import '../sass/components/maincontent.sass';
import AboutContent from './AboutContent';
import ProjectContent from './ProjectContent';
import TechnologyContent from './TechnologyContent';

const MainContent = () => {
  return (
    <div id="main-content">
      <AboutContent/>
      <TechnologyContent/>
      <ProjectContent/>
    </div>
  )
}

export default MainContent