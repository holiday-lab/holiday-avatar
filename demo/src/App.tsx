import { defineComponent } from 'vue';
import { Avatar, genConfig } from 'holiday-avatar';

export default defineComponent({
  name: 'App',

  setup() {
    const config = genConfig();

    return () => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Holiday Avatar</h1>
        <span>View change by refresh.</span>
        <Avatar
          style={{
            width: '100px',
            height: '100px',
            margin: '50px 0',
          }}
          {...config}
        />
      </div>
    );
  },
});
