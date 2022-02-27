import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

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
      {`     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet ipsa id quisquam, cupiditate, maxime reprehenderit aliquam corrupti quibusdam adipisci quae ipsam non veritatis labore, at excepturi. Enim, qui id?
וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.

צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.

נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.

קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק..`}
    </div>
  );

  return (
    <Root>
      {content}
      <Divider>כותרת</Divider>
      {content}
    </Root>
  );
}
