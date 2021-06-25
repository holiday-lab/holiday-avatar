import withInstall from './utils/withInstall';
import Avatar, { genConfig } from './Avatar';

export default withInstall(Avatar);
export { Avatar, genConfig };
export type { WithInstall } from './utils/withInstall';
export type { EarSize } from './Ear';
export type { EyesType } from './Eyes';
export type { HairType } from './Hair';
export type { NoseType } from './Nose';
export type { ShirtType } from './Shirt';
export type { EyeBrowType } from './EyeBrow';
export type { GlassesType } from './Glasses';
export type {
  AvatarShape,
  AvatarSex,
  Options,
  Configs,
  PickRandomFromList,
  GenConfig,
} from './Avatar';
