[English](./README.md) | 简体中文

# holiday-avatar

## 介绍

用于生成炫酷用户头衔的 Vue 组件。（灵感来自 react-nice-avatar）

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

## 在线编辑 / 预览

- https://nice-avatar.chilllab.io/

## 资源

- 设计师：Figma 的 [@Micah](https://www.figma.com/@Micah)
- Figma 文件：[头像插画系统](https://www.figma.com/community/file/829741575478342595)

## 安装

```bash
npm install holiday-avatar
# 或
yarn add holiday-avatar
# 或
pnpm install holiday-avatar
```

## 使用方法

### 直接引入（推荐）

你可以直接导入组件并使用它。这种情况下，只有导入的组件才会被打包。

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

或者

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

### 全局安装（不推荐）

失去 tree-shaking 的能力，打包有冗余代码。

```ts
import { createApp } from 'vue';
import App from './App.vue';
import Avatar from 'holiday-avatar';

createApp(App).use(Avatar).mount('#app');
```

安装后，你可以这样在 SFC 中使用全部组件。

```vue
<template>
  <HldAvatar />
</template>
```

或者

```vue
<template>
  <hld-avatar></hld-avatar>
</template>
```

### 生成配置

生成随机配置，你可以将其保存到你的数据库中以便后续使用。

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

如果你需要自定义配置，有两种方式为你提供了自定义配置的能力。

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
    // 你也可以传入在下面的选项列表中的其他选项 例如 `{ sex: 'female', eyeType: 'smile' }`
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
  <!-- 你也可以使用 kebab-case 的形式传入在下面的选项列表中的其他选项 例如 `sex="female" eye-type="smile"` -->
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

> **注意：位置处于后面的选项将会覆盖前面的！**

```vue
<template>
  <!-- `bg-color` 将会被覆盖为 `#fff` -->
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

同上

```vue
<template>
  <!-- `bg-color` 将会被覆盖为 `#000` -->
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

## 选项列表

选项可以传入 `genConfig` 或者作为 Vue 组件的 `props`。

| 名称              | 类型      | 默认值   | 可选值                                           | 备注 |
| ----------------- | --------- | -------- | ------------------------------------------------ | ---- |
| `bgColor`         | `string`  |          |                                                  |      |
| `hatColor`        | `string`  |          |                                                  |      |
| `faceColor`       | `string`  |          |                                                  |      |
| `hairColor`       | `string`  |          |                                                  |      |
| `shirtColor`      | `string`  |          |                                                  |      |
| `hairColorRandom` | `boolean` | `false`  |                                                  |      |
| `sex`             | `string`  |          | `male, female`                                   |      |
| `earSize`         | `string`  |          | `small, big`                                     |      |
| `eyeType`         | `string`  |          | `circle, oval, smile`                            |      |
| `hatType`         | `string`  |          | `none, beanie, turban`                           |      |
| `hairType`        | `string`  |          | `normal, thick, mohawk, femaleLong, femaleShort` |      |
| `noseType`        | `string`  |          | `short, long, round`                             |      |
| `mouthType`       | `string`  |          | `laugh, smile, peace`                            |      |
| `shirtType`       | `string`  |          | `hoody, short, polo`                             |      |
| `glassesType`     | `string`  |          | `none, round, square`                            |      |
| `shape`           | `string`  | `circle` | `circle, rounded, square`                        |      |

## License

Released under [MIT](/LICENSE) by [@wjq990112](https://github.com/wjq990112).
