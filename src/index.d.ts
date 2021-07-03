import * as vue from 'vue';
import { PropType, CSSProperties } from 'vue';

declare type EarSize = 'small' | 'big';

declare type EyesType = 'circle' | 'oval' | 'smile';

declare type HairType =
  | 'normal'
  | 'thick'
  | 'mohawk'
  | 'femaleLong'
  | 'femaleShort';

declare type HatType = 'none' | 'beanie' | 'turban';

declare type NoseType = 'short' | 'long' | 'round';

declare type MouthType = 'laugh' | 'smile' | 'peace';

declare type ShirtType = 'hoody' | 'short' | 'polo';

declare type EyeBrowType = 'upMale' | 'upFemale';

declare type GlassesType = 'none' | 'round' | 'square';

declare type AvatarShape = 'circle' | 'rounded' | 'square';

declare type AvatarSex = 'male' | 'female';

interface Options<T> {
  avoidList?: T[];
  usually?: T[];
}

interface Configs {
  bgColor?: string;
  hatColor?: string;
  faceColor?: string;
  hairColor?: string;
  shirtColor?: string;
  hairColorRandom?: boolean;
  sex?: AvatarSex;
  earSize?: EarSize;
  hatType?: HatType;
  eyeType?: EyesType;
  hairType?: HairType;
  noseType?: NoseType;
  mouthType?: MouthType;
  shirtType?: ShirtType;
  eyeBrowType?: EyeBrowType;
  glassesType?: GlassesType;
  shape?: AvatarShape;
}

declare type PickRandomFromList = <T>(data: T[], options?: Options<T>) => T;

declare type GenConfig = (configs?: Configs) => Configs;

declare const genConfig: GenConfig;

declare const Avatar: vue.DefineComponent<
  {
    id: StringConstructor;
    class: StringConstructor;
    bgColor: StringConstructor;
    hatColor: StringConstructor;
    faceColor: StringConstructor;
    hairColor: StringConstructor;
    shirtColor: StringConstructor;
    hairColorRandom: BooleanConstructor;
    sex: PropType<AvatarSex>;
    style: PropType<CSSProperties>;
    earSize: PropType<EarSize>;
    hatType: PropType<HatType>;
    eyeType: PropType<EyesType>;
    hairType: PropType<HairType>;
    noseType: PropType<NoseType>;
    mouthType: PropType<MouthType>;
    shirtType: PropType<ShirtType>;
    glassesType: PropType<GlassesType>;
    shape: {
      type: PropType<AvatarShape>;
      default: string;
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  vue.ComponentOptionsMixin,
  vue.ComponentOptionsMixin,
  Record<string, any>,
  string,
  vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps,
  Readonly<
    {
      hairColorRandom: boolean;
      shape: AvatarShape;
    } & {
      style?: CSSProperties | undefined;
      class?: string | undefined;
      id?: string | undefined;
      bgColor?: string | undefined;
      hatColor?: string | undefined;
      faceColor?: string | undefined;
      hairColor?: string | undefined;
      shirtColor?: string | undefined;
      sex?: AvatarSex | undefined;
      earSize?: EarSize | undefined;
      hatType?: HatType | undefined;
      eyeType?: EyesType | undefined;
      hairType?: HairType | undefined;
      noseType?: NoseType | undefined;
      mouthType?: MouthType | undefined;
      shirtType?: ShirtType | undefined;
      glassesType?: GlassesType | undefined;
    }
  >,
  {
    hairColorRandom: boolean;
    shape: AvatarShape;
  }
>;

type WithInstall = {
  install: (app: vue.App) => void;
};

declare const _default: WithInstall;

export default _default;

export {
  WithInstall,
  Avatar,
  AvatarSex,
  AvatarShape,
  Configs,
  EarSize,
  EyeBrowType,
  EyesType,
  GenConfig,
  GlassesType,
  HairType,
  HatType,
  NoseType,
  Options,
  PickRandomFromList,
  ShirtType,
  genConfig,
};
