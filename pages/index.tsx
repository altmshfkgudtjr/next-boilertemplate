// hooks
import useMetaData from 'hook/commons/useMetaData';

/** 홈 페이지 */
const HomePage = () => {
  const { MetaTitle } = useMetaData();

  return (
    <>
      <MetaTitle content="Welcome, Next.js" />

      <h1>Welcome. Alocados FE</h1>
    </>
  );
};

export default HomePage;
