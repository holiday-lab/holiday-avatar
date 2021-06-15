import { defineComponent } from 'vue';

// Components
import Big from './Big';
import Small from './Small';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';

export type EarSize = 'small' | 'big';

export default defineComponent({
  name: createName('avatar', 'ear'),

  props: {
    color: String,
    size: String as PropType<EarSize>,
  },

  setup(props) {
    const renderEar = () => {
      switch (props.size) {
        case 'big':
          return <Big color={props.color} />;
        case 'small':
          return <Small color={props.color} />;
        default:
          return <Small color={props.color} />;
      }
    };

    return () => <>{renderEar()}</>;
  },
});
