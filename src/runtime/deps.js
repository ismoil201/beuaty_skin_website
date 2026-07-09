/** Late-bound app dependencies to avoid circular imports between runtime modules. */
export const deps = {};

export function setDeps(partial) {
  Object.assign(deps, partial);
}
