import clalit from '../assets/clalit.png';
import meuhedet from '../assets/meuhedet.png';
import macabi from '../assets/macabi.png';
import leumit from '../assets/leumit.png';
import styled from 'styled-components';

const KuputHolimContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const kuputHolim = (
  <KuputHolimContainer>
    <img src={clalit.src} alt="clalit" />
    <img src={meuhedet.src} alt="meuhedet" />
    <img src={macabi.src} alt="macabi" />
    <img src={leumit.src} alt="leumit" />
  </KuputHolimContainer>
);

export default kuputHolim;
