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
      {`    נך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.

נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.

קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק..`}
    </div>
  );
  const content1 = (
    <div className="content__divider-container">
      <div className="content__divider-container__speciality">
        <div className="content__divider-speciality">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Symbol_voting_keep.svg/233px-Symbol_voting_keep.svg.png"
            alt="V"
          />
          <p>הגינות</p>
        </div>
        <div className="content__divider-speciality">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Symbol_voting_keep.svg/233px-Symbol_voting_keep.svg.png"
            alt="V"
          />
          <p>מיומנות</p>
        </div>
      </div>

      <div className="content__divider-container__speciality">
        <div className="content__divider-speciality">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Symbol_voting_keep.svg/233px-Symbol_voting_keep.svg.png"
            alt="V"
          />
          <p>מהימנות</p>
        </div>

        <div className="content__divider-speciality">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Symbol_voting_keep.svg/233px-Symbol_voting_keep.svg.png"
            alt="V"
          />
          <p>מחיר</p>
        </div>
      </div>
    </div>
  );

  return (
    <RootWrapper>
      <DividerWrapper>
        <h1>קצת עלינו</h1>
      </DividerWrapper>

      {content}
      <DividerWrapper>למה לבחור בנו</DividerWrapper>

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
    flex-direction: row;
    justify-contetn: center;
    align-items: center;
  }

  .content__divider-container__speciality {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-contetn: center;
    align-items: stretch;
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
