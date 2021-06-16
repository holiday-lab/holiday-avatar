function startCase(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

/**
 * 快速获取组件名称
 * @param args 组件层级
 * @returns 组件名称（PascalCase）
 */
export default function createName(...args: string[]): string {
  return args.map((value) => startCase(value)).join('');
}
