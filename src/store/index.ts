import { createPinia } from 'pinia';
// import { useUserStore } from './user';
import { useCommonStore } from './common';

const pinia = createPinia();
import piniaPersisted from 'pinia-plugin-persistedstate';
pinia.use(piniaPersisted);

export { useCommonStore }
export default pinia