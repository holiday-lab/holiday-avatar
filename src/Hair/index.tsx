import { defineComponent } from 'vue';

// Components
import Thick from './Thick';
import Mohawk from './Mohawk';
import Normal from './Normal';
import FemaleLong from './FemaleLong';
import FemaleShort from './FemaleShort';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';

export type HairType =
  | 'normal'
  | 'thick'
  | 'mohawk'
  | 'femaleLong'
  | 'femaleShort';

export default defineComponent({
  name: createName('avatar', 'hair'),

  props: {
    color: String,
    colorRandom: Boolean,
    type: String as PropType<HairType>,
  },

  setup(props) {
    const renderHair = () => {
      switch (props.type) {
        case 'normal':
          return <Normal color={props.color} />;
        case 'thick':
          return <Thick color={props.color} colorRandom={props.colorRandom} />;
        case 'mohawk':
          return <Mohawk color={props.color} colorRandom={props.colorRandom} />;
        case 'femaleLong':
          return <FemaleLong color={props.color} />;
        case 'femaleShort':
          return <FemaleShort color={props.color} />;
        default:
          return <Normal color={props.color} />;
      }
    };

    return () => <>{renderHair()}</>;
  },
});
