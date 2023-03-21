import { useCallback } from 'react';
import { useSetRecoilState } from 'store';
// types
import type { Modal } from 'store/system/modal';

/**
 * 모달 시스템
 */
const useModal = () => {
  const setModalList = useSetRecoilState(state => state.modalSystem.default);

  /** 모달 추가 */
  const pushModal = useCallback(
    (modal: Modal) => {
      setModalList(v => {
        const newModalList = [...v];
        newModalList.push(modal);
        return newModalList;
      });
    },
    [setModalList],
  );

  /** 마지막 모달 제거 */
  const popModal = useCallback(() => {
    setModalList(v => {
      const newModalList = [...v];
      newModalList.pop();
      return newModalList;
    });
  }, [setModalList]);

  /** 특정 모달 제거 */
  const removeModal = useCallback(
    (name: string) => {
      setModalList(v => {
        const newModalList = [...v].filter(modal => modal.name !== name);
        return newModalList;
      });
    },
    [setModalList],
  );

  return {
    pushModal,
    popModal,
    removeModal,
  };
};

export default useModal;
