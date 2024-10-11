# vite-gsap-sample
![demo](https://github.com/user-attachments/assets/e7baefb6-f397-472f-a775-93d657f0d9af)



Vite x React x GSAP を使ったアニメーションサンプル

クライアントコンポーネントでのアニメーション実装を学ぶ

参考：https://zenn.dev/thetalemon/articles/f759b1acd0053a

urlはこちら
https://github.com/massu-159/vite-gsap-sample

## アプリケーションの仕様

### 1. 仕様
- GSAPアニメーション
  - オブジェクトの回転
  - 横スクロール
  - スクロールに応じて背景色変更

### 2. 構成技術
    @gsap/react: ^2.1.1
    gsap: ^3.12.5
    react: ^18.3.1
    react-dom: ^18.3.1
    @eslint/js: ^9.11.1
    @types/react: ^18.3.10
    @types/react-dom: ^18.3.0
    @vitejs/plugin-react-swc: ^3.5.0
    autoprefixer: ^10.4.20
    eslint: ^9.11.1
    eslint-plugin-react-hooks: ^5.1.0-rc.0
    eslint-plugin-react-refresh: ^0.4.12
    globals: ^15.9.0
    postcss: ^8.4.47
    tailwindcss: ^3.4.13
    typescript: ^5.5.3
    typescript-eslint: ^8.7.0
    vite: ^5.4.8


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
