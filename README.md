# holiday-avatar

Vue library for generating nice user avatar. (Inspired by react-nice-avatar)

[![Version](http://img.shields.io/npm/v/holiday-avatar.svg)](https://www.npmjs.org/package/react-nice-avatar)
[![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/holiday-avatar.svg?style=flat-square
[download-url]: https://npmjs.org/package/holiday-avatar

<div align="center">
    <a href="https://nice-avatar.chilllab.io/">
        <img src="https://user-images.githubusercontent.com/5305874/120076504-68e15980-c0d8-11eb-896c-3824b5eb05bb.png"
             width="600" alt="imagewall" />
    </a>
</div>

## Online editor / preview

- https://nice-avatar.chilllab.io/

## Assets

- Designer: [@Micah](https://www.figma.com/@Micah) on Figma
- Figma Files: [Avatar Illustration System](https://www.figma.com/community/file/829741575478342595)

## Installation

```bash
npm install holiday-avatar
# or
yarn add holiday-avatar
# or
pnpm install holiday-avatar
```

## Usage

### Import Directly (Recommended)

You can import component directly and use it. In this form, only components imported will be bundled.

```vue
<template>
  <HldAvatar />
</template>

<script>
import { defineComponent } from 'vue';
import { Avatar } from 'holiday-avatar';

export default defineComponent({
  components: {
    HldAvatar: Avatar,
  },
});
</script>
```

or

```vue
<template>
  <hld-avatar></hld-avatar>
</template>

<script>
import { defineComponent } from 'vue';
import { Avatar } from 'holiday-avatar';

export default defineComponent({
  components: {
    HldAvatar: Avatar,
  },
});
</script>
```

### Install Globally (Not Recommended)

No tree-shaking. Bundle will have redundant codes.

```ts
import { createApp } from 'vue';
import App from './App.vue';
import Avatar from 'holiday-avatar';

createApp(App).use(Avatar).mount('#app');
```

After the installation. You can use all the components in you SFC like this.

```vue
<template>
  <HldAvatar />
</template>
```

or

```vue
<template>
  <hld-avatar></hld-avatar>
</template>
```

### Generate Config

Generate random config, the config can be saved into your database to use later.

```vue
<template>
  <HldAvatar v-bind="{ ...config }" />
</template>

<script>
import { defineComponent } from 'vue';
import { Avatar, genConfig } from 'holiday-avatar';

export default defineComponent({
  components: {
    HldAvatar: Avatar,
  },
  setup() {
    const config = genConfig();

    return {
      config,
    };
  },
});
</script>
```

If you need to customize the configuration, there are two ways to provide you with the ability to customize.

```vue
<template>
  <HldAvatar v-bind="{ ...config }" />
</template>

<script>
import { defineComponent } from 'vue';
import { Avatar, genConfig } from 'holiday-avatar';

export default defineComponent({
  components: {
    HldAvatar: Avatar,
  },
  setup() {
    // You can also pass in other options in the option list below. e.g. `{ sex: 'female', eyeType: 'smile' }`
    const config = genConfig({ bgColor: '#000' });

    return {
      config,
    };
  },
});
</script>
```

or

```vue
<template>
  <!-- You can also pass in other options in the option list below with kebab-case. e.g. `sex="female" eye-type="smile"` -->
  <HldAvatar v-bind="{ ...config }" bg-color="#000" />
</template>

<script>
import { defineComponent } from 'vue';
import { Avatar, genConfig } from 'holiday-avatar';

export default defineComponent({
  components: {
    HldAvatar: Avatar,
  },
  setup() {
    const config = genConfig();

    return {
      config,
    };
  },
});
</script>
```

> **NOTE: The latter option will override the previous!**

```vue
<template>
  <!-- `bg-color` will be overridden as `#fff` -->
  <HldAvatar v-bind="{ ...config }" bg-color="#fff" />
</template>

<script>
import { defineComponent } from 'vue';
import { Avatar, genConfig } from 'holiday-avatar';

export default defineComponent({
  components: {
    HldAvatar: Avatar,
  },
  setup() {
    const config = genConfig({ bgColor: '#000' });

    return {
      config,
    };
  },
});
</script>
```

Same as above.

```vue
<template>
  <!-- `bg-color` will be overridden as `#000` -->
  <HldAvatar bg-color="#fff" v-bind="{ ...config }" />
</template>

<script>
import { defineComponent } from 'vue';
import { Avatar, genConfig } from 'holiday-avatar';

export default defineComponent({
  components: {
    HldAvatar: Avatar,
  },
  setup() {
    const config = genConfig({ bgColor: '#000' });

    return {
      config,
    };
  },
});
</script>
```

## Options

The options can be passed into `genConfig` or as Vue props.

| key               | type      | default  | accept                                           | tips |
| ----------------- | --------- | -------- | ------------------------------------------------ | ---- |
| `bgColor`         | `string`  |          |                                                  |      |
| `faceColor`       | `string`  |          |                                                  |      |
| `hairColor`       | `string`  |          |                                                  |      |
| `shirtColor`      | `string`  |          |                                                  |      |
| `hairColorRandom` | `boolean` | `false`  |                                                  |      |
| `sex`             | `string`  |          | `male, female`                                   |      |
| `earSize`         | `string`  |          | `small, big`                                     |      |
| `eyeType`         | `string`  |          | `circle, oval, smile`                            |      |
| `hairType`        | `string`  |          | `normal, thick, mohawk, femaleLong, femaleShort` |      |
| `noseType`        | `string`  |          | `short, long, round`                             |      |
| `mouthType`       | `string`  |          | `laugh, smile, peace`                            |      |
| `shirtType`       | `string`  |          | `hoody, short, polo`                             |      |
| `glassesType`     | `string`  |          | `none, round, square`                            |      |
| `shape`           | `string`  | `circle` | `circle, rounded, square`                        |      |

## License

Released under [MIT](/LICENSE) by [@wjq990112](https://github.com/wjq990112).
