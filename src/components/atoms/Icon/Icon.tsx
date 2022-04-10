import { Svg } from './Icon.styles';
import icons from '../../../assets/icons.svg';

interface Props {
  name: string;
  size: number;
  color?: string;
  srText?: string;
}

export const Icon = ({ name, size, color, srText }: Props) => {
  return (
    <>
      <Svg aria-hidden="true" size={size} color={color}>
        <use href={`${icons}#${name}`}></use>
      </Svg>
      <span className="visually-hidden">{srText}</span>
    </>
  );
};
