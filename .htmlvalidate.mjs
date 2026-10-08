import { recommended } from "html-validate/presets";

// Пресет подключается напрямую: в html-validate 11.x резолвинг
// строки "htmlvalidate:recommended" из JSON-конфига сломан (нет default export).
export default {
  ...recommended,
  root: true,
};
