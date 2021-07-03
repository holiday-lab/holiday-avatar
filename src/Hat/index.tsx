import { defineComponent } from 'vue';

// Components
import Beanie from './Beanie';
import Turban from './Turban';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';

export type HatType = 'none' | 'beanie' | 'turban';

export default defineComponent({
  name: createName('avatar', 'hat'),

  props: {
    color: String,
    type: String as PropType<HatType>,
  },

  setup(props) {
    const renderHat = () => {
      switch (props.type) {
        case 'none':
          return;
        case 'beanie':
          return <Beanie color={props.color} />;
        case 'turban':
          return <Turban color={props.color} />;
        default:
          return;
      }
    };

    return () => <>{renderHat()}</>;
  },
});
