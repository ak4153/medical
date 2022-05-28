import Layout from '../components/Layout';
import { styled } from '@mui/material/styles';
import React from 'react';
import qrcode from '../assets/frame.png';
export default function Services() {
  return (
    <FlyerWrapper>
      <h1>
        <span>ניקוי עמוק למזגן בחינם!!!</span>
      </h1>

      <p>
        בעזרת <span>קיטור</span> <span>וחומר אנטיבקטריאלי</span>
      </p>
      <h3>מתי בדקת את פתחי האוורור במזגן?</h3>
      <p> עובש וחיידקים מצטברים במזגן במשך כל עונות השנה</p>
      <p>וגורמים למחלות בדרכי הנשימה העליונות</p>
      <h2>
        חיטוי, עיקור המזגן הראשון <span>בחינם</span>
      </h2>
      <p>למיזוג אוויר נקי חייגו</p>
      <a href="tel:0527456683">052-7456683 אלכס</a>

      <div className="qrcode">
        <p>לאתר תדמית תסרקו אותי</p>
        <img src={qrcode.src} alt="QR" />
      </div>
    </FlyerWrapper>
  );
}

const FlyerWrapper = styled('div')`
  font-size: 2.5rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ariel;
  line-height: 1px;
  span {
    text-decoration: underline;
  }
  p {
    font-weight: 800;
  }
  div {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 200px;
      width: 200px;
    }
  }
  h1 {
    justify-self: center;
  }
`;
