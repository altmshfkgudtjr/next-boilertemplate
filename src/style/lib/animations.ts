import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

export const fadeOut = keyframes`
	from { opacity: 1; }
	to { opacity: 0; }
`;

export const fadeInTop = (v = '-2vh') => keyframes`
	from { opacity: 0; transform: translate3d(0, ${v}, 0) }
	to { opacity: 1; transform: translate3d(0, 0, 0) }
`;

export const fadeOutTop = (v = '-2vh') => keyframes`
	from { opacity: 1; transform: translate3d(0, 0, 0) }
	to { opacity: 0; transform: translate3d(0, ${v}, 0) }
`;

export const fadeInBottom = (v = '2vh') => keyframes`
	from { opacity: 0; transform: translate3d(0, ${v}, 0) };
	to { opacity: 1; transform: translate3d(0, 0, 0) };
`;

export const fadeOutBottom = (v = '2vh') => keyframes`
	from { opacity: 1; transform: translate3d(0, 0, 0) };
	to { opacity: 0; transform: translate3d(0, ${v}, 0) };
`;

export const fadeInLeft = (v = '-2vw') => keyframes`
	from { opacity: 0; transform: translate3d(${v}, 0, 0) }
	to { opacity: 1; transform: translate3d(0, 0, 0) }
`;

export const fadeOutLeft = (v = '-2vw') => keyframes`
	from { opacity: 1; transform: translate3d(0, 0, 0) }
	to { opacity: 0; transform: translate3d(${v}, 0, 0) }
`;

export const fadeInRight = (v = '2vw') => keyframes`
	from { opacity: 0; transform: translate3d(${v}, 0, 0) }
	to { opacity: 1; transform: translate3d(0, 0, 0) }
`;

export const fadeOutRight = (v = '2vw') => keyframes`
	from { opacity: 1; transform: translate3d(0, 0, 0) }
	to { opacity: 0; transform: translate3d(${v}, 0, 0) }
`;

export const zoomIn = (v = 0.8) => keyframes`
	from { transform: scale(${v}) };
	to { transform: scale(1) };
`;

export const zoomOut = (v = 0.8) => keyframes`
	from { transform: scale(1) };
	to { transform: scale(${v}) };
`;
