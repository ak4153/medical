import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import tick from '../assets/tick.png';
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
  fontFamily: 'Amatic SC',
  fontWeight: 1000,
  fontSize: '30px',
  lineHeight: '40px',
  marginTop: '70px',
}));

export default function DividerText() {
  const content = (
    <div>
      <h2>אם הוא נראה כמו בתמונות שלמעלה, כדאי מאוד להזמין ניקוי עמוק</h2>
      <h3
        style={{
          textAlign: 'center',
        }}
      >
        כבר אמרתי שהמחיר ליגה?
      </h3>
      <h3
        style={{
          textAlign: 'center',
        }}
      >
        וכנראה המחיר הזול ביותר בשוק
      </h3>

      <h2
        style={{
          textAlign: 'center',
          border: '2px solid blue',
          padding: '6px',
        }}
      >
        עיקור מזגן ראשון <span style={{ color: 'darkblue' }}>250&#8362;</span>{' '}
        <span style={{ color: 'darkgreen' }}> והשני בחינם</span>
      </h2>
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        052-7456683 אלכס
      </h2>
    </div>
  );
  const content1 = (
    <div className="content__divider-container">
      <div className="content__divider-container__speciality">
        <h2>אז... אם לא השתכנעתם מהתמונות ומהסרטון הנה כמה סיבות:</h2>
        <div className="content__divider-speciality">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Symbol_voting_keep.svg/233px-Symbol_voting_keep.svg.png"
            alt="V"
          />
          <p>השמדת 99% מהחיידקים שחיים במזגן</p>
        </div>
        <div className="content__divider-speciality">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Symbol_voting_keep.svg/233px-Symbol_voting_keep.svg.png"
            alt="V"
          />
          <p>מניעת פיזור עובש וחיידקים בחלל החדר</p>
        </div>
      </div>

      <div className="content__divider-container__speciality">
        <div className="content__divider-speciality">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Symbol_voting_keep.svg/233px-Symbol_voting_keep.svg.png"
            alt="V"
          />
          <p>טיהור האוויר בחדר</p>
        </div>

        <div className="content__divider-speciality">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Symbol_voting_keep.svg/233px-Symbol_voting_keep.svg.png"
            alt="V"
          />
          <p>תפוקת המזגן תעלה ב30%</p>
        </div>

        <div className="content__divider-speciality">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Symbol_voting_keep.svg/233px-Symbol_voting_keep.svg.png"
            alt="V"
          />
          <p>מניעת פיזור עובש וחיידקים בחלל החדר</p>
        </div>
      </div>
    </div>
  );

  return (
    <RootWrapper>
      <DividerWrapper>
        <h1>בדקו את המזגן שלכם</h1>
      </DividerWrapper>

      {content}
      <DividerWrapper>"מה יוצא לי מזה??"</DividerWrapper>

      {content1}
    </RootWrapper>
  );
}
const DividerWrapper = styled(Divider)`
  font-size: 50px;
`;
const RootWrapper = styled(Root)`
  .content__divider-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content__divider-container__speciality {
    display: flex;
    flex-direction: column;
  }

  .content__divider-speciality {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 2.5rem;
    }
    img {
      width: 20%;
      height: 20%;
    }
  }
`;
