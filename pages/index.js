import Content from '../components/Content';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import VisitorCount from '../components/VisitorCounter';
export default function Home() {
  const classess = useStyles();

  return (
    <Layout className={classess.html}>
      <VisitorCount></VisitorCount>
      <Content></Content>
    </Layout>
  );
}
