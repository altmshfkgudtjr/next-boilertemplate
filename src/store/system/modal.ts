import { atom } from 'recoil';
import * as modals from 'component/common/modal';

/* ============================== Atom =============================== */

const modalState = atom<State>({
  key: 'modalState',
  default: [],
  dangerouslyAllowMutability: true,
});

export type ModalOptions = {
  /** 모달 생성 위치 (Default: `center`) */
  position?: 'center' | 'left' | 'right';
  /** 모달 외 영역 클릭으로 모달 닫기 여부 (Default: `true`) */
  isEnableCloseByBackground?: boolean;
};

export type Modal = {
  /** 모달 컴포넌트명 - 고유값 */
  name: keyof typeof modals;
  /** 모달 Arguments */
  args?: object | any;
  /** 모달 Options */
  options?: ModalOptions;
};

export type State = Modal[];

/* ============================= Selector ============================= */

export default modalState;
