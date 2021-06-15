import { defineComponent } from 'vue';

// Components
import Round from './Round';
import Square from './Square';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';

export type GlassesType = 'none' | 'round' | 'square';

export default defineComponent({
  name: createName('avatar', 'glasses'),

  props: {
    type: String as PropType<GlassesType>,
  },

  setup(props) {
    const renderGlasses = () => {
      switch (props.type) {
        case 'none':
          return;
        case 'round':
          return <Round />;
        case 'square':
          return <Square />;
        default:
          return;
      }
    };

    return () => <>{renderGlasses()}</>;
  },
});
