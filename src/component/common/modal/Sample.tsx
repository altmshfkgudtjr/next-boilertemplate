import styled from 'styled-components';

/** @key SYSTEM_Alert */
const Alert = ({ onCloseModal, args }) => {
  const { name, message, onSubmit }: Args = args;

  const _onSubmit = () => {
    if (!onSubmit) {
      onCloseModal();
      return;
    }

    const result = onSubmit();
    if (result) {
      result.then(() => onCloseModal());
    }
  };

  return (
    <Wrapper>
      <Content>
        <Name>{name}</Name>
        <Message>{message}</Message>
      </Content>

      <Controller>
        <Button onClick={() => _onSubmit()}>확인</Button>
      </Controller>
    </Wrapper>
  );
};

const Wrapper = styled.dialog`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 480px;
  padding: 24px 40px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.surface};
`;

const Name = styled.h1``;
const Message = styled.p``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${Name} {
    text-align: center;
  }

  ${Message} {
    text-align: center;
  }
`;

const Controller = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.primary_500};
  color: ${({ theme }) => theme.text.primary_high};

  &:hover {
    background-color: ${({ theme }) => theme.primary_600};
  }
`;

type Args = {
  name: string;
  message: string | React.ReactNode;
  onSubmit: () => Promise<any> | void;
};

export default Alert;
