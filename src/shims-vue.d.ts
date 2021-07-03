declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.module.scss' {
  const styles: Record<string, unknown>;
  export default styles;
}
