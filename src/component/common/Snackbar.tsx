import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
// styles
import { animations } from 'style';
// types
import type { Snackbar as SnackbarInfo, SnackbarType } from 'store/system/snackbar';
import type { SnackbarPosition } from 'provider/SnackbarProvider';

/**
 * 스낵바
 * @param props
 * @param props.idx 스낵바 순서
 * @param props.snackbar 스낵바 정보
 * @param props.position 위치
 * @param props.duration 지속 시간
 * @param props.animationDuration 애니메이션 진행 시간
 * @param props.closeEnabled 닫기 여부
 * @param props.stackEnabled 스택 여부
 * @param props.maxCount 최대 개수
 * @param props.onRemove 스낵바 닫기 함수
 */
const Snackbar = ({
  idx,
  snackbar,
  position,
  duration,
  animationDuration,
  closeEnabled,
  stackEnabled,
  maxCount,
  onRemove,
}: Props) => {
  const [isClose, setIsClose] = useState(false);

  const onClose = () => closeEnabled && setIsClose(true);

  /** 최대 개수에 따른 오래된 스낵바 제거 */
  useEffect(() => {
    if (idx === maxCount) {
      setIsClose(true);
    }

    if (!stackEnabled && idx === 1) {
      setIsClose(true);
    }
  }, [idx, maxCount, stackEnabled]);

  /** Timer 시작 */
  useEffect(() => {
    if (isClose) {
      return;
    }

    const _ = window.setTimeout(() => setIsClose(true), duration);
    return () => window.clearTimeout(_);
  }, [isClose, duration]);

  /** 닫는 애니메이션 시작 */
  useEffect(() => {
    if (!isClose) {
      return;
    }

    const _ = window.setTimeout(() => onRemove(snackbar.id), animationDuration);
    return () => window.clearTimeout(_);
  }, [isClose, snackbar, animationDuration, onRemove]);

  return (
    <Wrapper
      isClose={isClose}
      isTop={position.startsWith('Top')}
      idx={idx}
      snackbarType={snackbar.type}
      animationDuration={animationDuration}
      closeEnabled={closeEnabled}
      stackEnabled={stackEnabled}
      onClick={onClose}
    >
      {!!snackbar.title && <Title>{snackbar.title}</Title>}
      <Message>{snackbar.message}</Message>
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperType>`
  position: absolute;
  ${({ isTop }) =>
    isTop
      ? css`
          top: 0;
        `
      : css`
          bottom: 0;
        `};
  right: 0;
  width: 100%;
  height: auto;
  padding: 16px;
  border-radius: 8px;
  color: ${({ snackbarType, theme }) => {
    const _ = {
      Info: theme.text.primary_high,
      Success: theme.text.surface_high,
      Warning: theme.text.surface_high,
      Danger: theme.text.primary_high,
    };
    return _[snackbarType];
  }};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  cursor: ${({ closeEnabled }) => (closeEnabled ? 'pointer' : 'initial')};
  pointer-events: initial;
  ${({ isClose, animationDuration }) =>
    isClose
      ? css`
          animation: ${animationDuration}ms ${animations.fadeOut} ease;
        `
      : css`
          animation: ${animationDuration}ms ${animations.fadeIn} ease;
        `};
  transform: ${({ idx, stackEnabled, isTop }) => {
    if (!stackEnabled) {
      return '';
    }

    return `translate(0, calc((100% + 8px) * ${idx} * ${isTop ? 1 : -1}))`;
  }};
  overflow: hidden;
  transition: transform 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ snackbarType, theme }) => {
      const _ = {
        Info: theme.primary_500,
        Success: theme.condition.success,
        Warning: theme.condition.warning,
        Danger: theme.condition.danger,
      };
      return _[snackbarType];
    }};
    opacity: 0.85;
    z-index: -1;
  }
`;

const Title = styled.p`
  margin-bottom: 8px;
  color: inherit;
`;

const Message = styled.p`
  color: inherit;
  text-align: center;
`;

type WrapperType = {
  isClose: boolean;
  isTop: boolean;
  idx: number;
  snackbarType: SnackbarType;
  animationDuration: number;
  closeEnabled: boolean;
  stackEnabled: boolean;
};

type Props = {
  idx: number;
  snackbar: SnackbarInfo;
  position: SnackbarPosition;
  duration: number;
  animationDuration: number;
  closeEnabled: boolean;
  stackEnabled: boolean;
  maxCount: number;
  onRemove: (snackbarId: string) => void;
};

export default Snackbar;
