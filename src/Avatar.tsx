import { defineComponent } from 'vue';

// Components
import Ear from './Ear';
import Face from './Face';
import Eyes from './Eyes';
import Hair from './Hair';
import Nose from './Nose';
import Mouth from './Mouth';
import Shirt from './Shirt';
import EyeBrow from './EyeBrow';
import Glasses from './Glasses';

// Utils
import createName from '@/utils/createName';

// Types
import type { CSSProperties, PropType } from 'vue';
import type { EarSize } from './Ear';
import type { EyesType } from './Eyes';
import type { HairType } from './Hair';
import type { NoseType } from './Nose';
import type { MouthType } from './Mouth';
import type { ShirtType } from './Shirt';
import type { EyeBrowType } from './EyeBrow';
import type { GlassesType } from './Glasses';

export type AvatarShape = 'circle' | 'rounded' | 'square';
export type AvatarSex = 'male' | 'female';
export interface Options<T> {
  avoidList?: T[];
  usually?: T[];
}
export interface Configs {
  sex?: AvatarSex;
  bgColor?: string;
  faceColor?: string;
  hairColor?: string;
  shirtColor?: string;
  earSize?: EarSize;
  eyeType?: EyesType;
  hairType?: HairType;
  noseType?: NoseType;
  mouthType?: MouthType;
  shirtType?: ShirtType;
  eyeBrowType?: EyeBrowType;
  glassesType?: GlassesType;
}
export type PickRandomFromList = <T>(data: T[], options?: Options<T>) => T;
export type GenConfig = (configs?: Configs) => Configs;

const ARRAY_LENGTH = 15;
const FACE_COLOR_INDEX = 1;

const sex: AvatarSex[] = ['male', 'female'];
const faceColor = ['#f9c9b6', '#ac6651'];
const earSize: EarSize[] = ['small', 'big'];
const hairColor = [
  '#000',
  '#fff',
  '#77311d',
  '#fc909f',
  '#d2eff3',
  '#506af4',
  '#f48150',
];
const hairTypeMale: HairType[] = ['normal', 'thick', 'mohawk'];
const hairTypeFemale: HairType[] = ['normal', 'femaleLong', 'femaleShort'];
const eyeBrowFemale: EyeBrowType[] = ['upMale', 'upFemale'];
const eyeType: EyesType[] = ['circle', 'oval', 'smile'];
const noseType: NoseType[] = ['short', 'long', 'round'];
const mouthType: MouthType[] = ['laugh', 'smile', 'peace'];
const shirtType: ShirtType[] = ['hoody', 'short', 'polo'];
const shirtColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#77311d'];
const bgColor = [
  '#9287ff',
  '#6bd9e9',
  '#fc909f',
  '#f4d150',
  '#e0ddff',
  '#d2eff3',
  '#ffedef',
  '#ffeba4',
  '#506af4',
  '#f48150',
  '#74d153',
];
const glassesType: GlassesType[] = ['round', 'square', 'none'];

const _pickRandomFromList: PickRandomFromList = (
  data,
  { avoidList = [], usually = [] } = {},
) => {
  const avoidSet = new Set(avoidList.filter((item) => Boolean(item)));
  let myData = data.filter((item) => !avoidSet.has(item));
  // eslint-disable-next-line
  const usuallyData = usually.reduce<any[]>(
    (acc, cur) => acc.concat(new Array(ARRAY_LENGTH).fill(cur)),
    [],
  );
  myData = myData.concat(usuallyData);
  const amount = myData.length;
  const randomIdx = Math.floor(Math.random() * amount);
  return myData[randomIdx];
};

export const genConfig: GenConfig = (userConfig = {}) => {
  const response: Configs = {};

  response.sex = userConfig.sex || _pickRandomFromList(sex);
  response.faceColor = userConfig.faceColor || _pickRandomFromList(faceColor);
  response.earSize = userConfig.earSize || _pickRandomFromList(earSize);
  response.eyeType = userConfig.eyeType || _pickRandomFromList(eyeType);
  response.noseType = userConfig.noseType || _pickRandomFromList(noseType);
  response.mouthType = userConfig.mouthType || _pickRandomFromList(mouthType);
  response.shirtType = userConfig.shirtType || _pickRandomFromList(shirtType);
  response.glassesType =
    userConfig.glassesType ||
    _pickRandomFromList(glassesType, { usually: ['none'] });

  // Hair
  let hairColorAvoidList: string[] = [];
  let hairColorUsually: string[] = [];
  if (!userConfig.hairColor) {
    switch (response.sex) {
      case 'female': {
        hairColorAvoidList =
          (response.faceColor === faceColor[FACE_COLOR_INDEX] && ['#77311d']) ||
          [];
        break;
      }
      case 'male': {
        hairColorUsually = ['#000'];
      }
    }
  }
  response.hairColor =
    userConfig.hairColor ||
    _pickRandomFromList(hairColor, {
      avoidList: hairColorAvoidList,
      usually: hairColorUsually,
    });

  let myHairType = userConfig.hairType;
  if (!myHairType) {
    switch (response.sex) {
      case 'male': {
        myHairType = _pickRandomFromList(hairTypeMale, {
          usually: ['normal', 'thick'],
        });
        break;
      }
      case 'female': {
        myHairType = _pickRandomFromList(hairTypeFemale);
        break;
      }
    }
  }
  response.hairType = myHairType;

  // EyeBrow
  let myEyeBrowType: EyeBrowType = userConfig.eyeBrowType || 'upMale';
  if (!userConfig.eyeBrowType && response.sex === 'female') {
    myEyeBrowType = _pickRandomFromList(eyeBrowFemale);
  }
  response.eyeBrowType = myEyeBrowType;

  // Shirt Color
  response.shirtColor =
    userConfig.shirtColor ||
    _pickRandomFromList(shirtColor, { avoidList: [response.hairColor] });

  // Background Color
  response.bgColor =
    userConfig.bgColor ||
    _pickRandomFromList(bgColor, {
      avoidList: [response.hairColor, response.shirtColor],
    });

  return response;
};

export default defineComponent({
  name: createName('avatar'),

  props: {
    id: String,
    class: String,
    bgColor: String,
    faceColor: String,
    hairColor: String,
    shirtColor: String,
    hairColorRandom: Boolean,
    sex: String as PropType<AvatarSex>,
    style: Object as PropType<CSSProperties>,
    earSize: String as PropType<EarSize>,
    eyeType: String as PropType<EyesType>,
    hairType: String as PropType<HairType>,
    noseType: String as PropType<NoseType>,
    mouthType: String as PropType<MouthType>,
    shirtType: String as PropType<ShirtType>,
    glassesType: String as PropType<GlassesType>,
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'circle',
    },
  },

  setup(props) {
    const config = genConfig(props);

    // Background shape
    let borderRadius: string;
    switch (props.shape) {
      case 'circle': {
        borderRadius = '100%';
        break;
      }
      case 'rounded': {
        borderRadius = '6px';
        break;
      }
      case 'square': {
        borderRadius = '0';
        break;
      }
    }

    return () => (
      <div
        id={props.id}
        class={props.class}
        style={{
          background: config.bgColor,
          overflow: 'hidden',
          borderRadius,
          ...props.style,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '90%',
            }}
          >
            <Face color={config.faceColor as string} />
            <Hair
              color={config.hairColor}
              type={config.hairType}
              colorRandom={props.hairColorRandom}
            />

            {/* Face Detail */}
            <div
              style={{
                position: 'absolute',
                right: '-3%',
                top: '30%',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <EyeBrow type={config.eyeBrowType} />
              <Eyes type={config.eyeType} />
              <Glasses type={config.glassesType} />
              <Ear color={config.faceColor} size={config.earSize} />
              <Nose type={config.noseType} />
              <Mouth type={config.mouthType} />
            </div>

            <Shirt color={config.shirtColor} type={config.shirtType} />
          </div>
        </div>
      </div>
    );
  },
});
