import styled from 'styled-components';
// hooks
import useMetaData from 'hook/commons/useMetaData';
import useModal from 'hook/commons/useModal';
import useSnackbar from 'hook/commons/useSnackbar';
// types
import type { SnackbarType } from 'store/system/snackbar';

/** 홈 페이지 */
const HomePage = () => {
  const { MetaTitle } = useMetaData();
  const { initSnackbar } = useSnackbar();
  const { pushModal } = useModal();

  const onInitSnackbar = (type: SnackbarType) => {
    initSnackbar({
      type,
      message: 'Snackbar Test',
    });
  };

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

      <div>
        <Button onClick={() => onInitSnackbar('Info')}>스낵바 Info 테스트</Button>
        <Button onClick={() => onInitSnackbar('Success')}>스낵바 Success 테스트</Button>
        <Button onClick={() => onInitSnackbar('Warning')}>스낵바 Warning 테스트</Button>
        <Button onClick={() => onInitSnackbar('Danger')}>스낵바 Ddanger 테스트</Button>
      </div>

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
