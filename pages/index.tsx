import styled from 'styled-components';
// hooks
import useMetaData from 'hook/commons/useMetaData';
import useModal from 'hook/commons/useModal';

/** 홈 페이지 */
const HomePage = () => {
  const { MetaTitle } = useMetaData();
  const { pushModal } = useModal();

  const onPushModal = () => {
    pushModal({
      name: 'Sample',
      args: {
        name: 'Modal Test',
        message: 'This is Modal',
      },
      options: {
        position: 'center',
        isEnableCloseByBackground: true,
      },
    });
  };

  return (
    <>
      <MetaTitle content="Welcome, Next.js" />

      <h1>Welcome. Alocados FE</h1>

      <Button onClick={onPushModal}>모달 테스트</Button>
    </>
  );
};

const Button = styled.button`
  padding: 8px 12px;
  margin: 8px;
  border: 1px solid ${({ theme }) => theme.grayscale_200};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.grayscale_050};

  &:hover {
    background-color: ${({ theme }) => theme.grayscale_100};
  }
`;

export default HomePage;
