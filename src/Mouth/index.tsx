import { defineComponent } from 'vue';

// Components
import Laugh from './Laugh';
import Smile from './Smile';
import Peace from './Peace';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';

export type MouthType = 'laugh' | 'smile' | 'peace';

export default defineComponent({
  name: createName('avatar', 'mouth'),

  props: {
    type: String as PropType<MouthType>,
  },

  setup(props) {
    const renderMouth = () => {
      switch (props.type) {
        case 'laugh':
          return <Laugh />;
        case 'smile':
          return <Smile />;
        case 'peace':
          return <Peace />;
        default:
          return <Peace />;
      }
    };

    return () => <>{renderMouth()}</>;
  },
});
