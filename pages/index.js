import Content from '../components/Content';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
export default function Home() {
  const classess = useStyles();
  return (
    <Layout className={classess.html}>
      <Content></Content>
    </Layout>
  );
}
