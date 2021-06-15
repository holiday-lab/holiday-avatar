import { defineComponent } from 'vue';

// Components
import Oval from './Oval';
import Smile from './Smile';
import Circle from './Circle';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';

export type EyesType = 'circle' | 'oval' | 'smile';

export default defineComponent({
  name: createName('avatar', 'eyes'),

  props: {
    type: String as PropType<EyesType>,
  },

  setup(props) {
    const renderEyes = () => {
      switch (props.type) {
        case 'circle':
          return <Circle />;
        case 'oval':
          return <Oval />;
        case 'smile':
          return <Smile />;
        default:
          return <Oval />;
      }
    };

    return () => <>{renderEyes()}</>;
  },
});
