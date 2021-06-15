import { defineComponent } from 'vue';

// Components
import Long from './Long';
import Round from './Round';
import Short from './Short';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';

export type NoseType = 'short' | 'long' | 'round';

export default defineComponent({
  name: createName('avatar', 'nose'),

  props: {
    type: String as PropType<NoseType>,
  },

  setup(props) {
    const renderNose = () => {
      switch (props.type) {
        case 'short':
          return <Short />;
        case 'long':
          return <Long />;
        case 'round':
          return <Round />;
        default:
          return <Short />;
      }
    };

    return () => <>{renderNose()}</>;
  },
});
