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
  <hld-avatar></hld-avatar>
</template>
```

or

```vue
<template>
  <HldAvatar />
</template>
```

## Options

| key               | type      | default  | accept                                           | tips |
| ----------------- | --------- | -------- | ------------------------------------------------ | ---- |
| `bgColor`         | `string`  |          |                                                  |      |
| `faceColor`       | `string`  |          |                                                  |      |
| `hairColor`       | `string`  |          |                                                  |      |
| `shirtColor`      | `string`  |          |                                                  |      |
| `hairColorRandom` | `boolean` |          |                                                  |      |
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
