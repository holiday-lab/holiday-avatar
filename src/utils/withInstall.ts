import kebabCase from 'lodash/kebabCase';

// Types
import type { App, Component } from 'vue';

export type WithInstall = (app: App) => void;

/**
 * 组件插件化
 * @param component 组件
 * @returns 组件插件（PascalCase + kebab-case）
 */
export default function withInstall<T extends Component>(
  component: T,
): WithInstall {
  return (app) => {
    const { name = 'HolidayAvatar' } = component;
    app.component(name, component);
    app.component(kebabCase(name), component);
  };
}
