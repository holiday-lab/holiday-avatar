import kebabCase from 'lodash/kebabCase';

// Types
import type { App, Component } from 'vue';

export type WithInstall = {
  install: (app: App) => void;
};

/**
 * 组件插件化
 * @param component 组件
 * @returns 组件插件（PascalCase + kebab-case）
 */
export default function withInstall<T extends Component>(
  component: T,
): WithInstall {
  return {
    install: (app: App) => {
      const prefixName = 'Hld';
      const { name } = component;
      const fullName = prefixName + name;
      app.component(fullName, component);
      app.component(kebabCase(fullName), component);
    },
  };
}
