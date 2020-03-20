// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-new": 0,
    "no-unused-vars": ["error", {
      "args": "none"
    }],
    "eqeqeq": 0, //设置为0，代表 == 也可以不必要非得 ===
    "quotes": 0,
    "no-extra-boolean-cast": 0,
    "space-infix-ops": 0,
    "handle-callback-err": 0,
    "new-cap": 0, //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    // allow paren-less arrow functions
    "arrow-parens": 0,
    "properties": 0,
    "camelcase": 0, //不必要非得用骆驼拼接法
    "enerator-star-spacing": 0,
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  "globals": {
    "$": true
  }
}
