# minimalist-website-design

A minimalist website built with React, TypeScript, and Vite.

## Gereksinimler

- **Node.js** ≥ 18 (Vite 7 ve TypeScript ~5.9 gerektirir)
- **npm** ≥ 9

## Kurulum

```bash
npm install
```

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır (HMR ile) |
| `npm run build` | TypeScript derler ve üretim çıktısı oluşturur (`dist/`) |
| `npm run preview` | `dist/` klasörünü yerel sunucuda önizler |
| `npm run lint` | ESLint ile kod kalitesi denetimi yapar |

## Proje Yapısı

```
minimalist-website-design/
├── public/               # Statik varlıklar (favicon, görseller)
│   ├── favicon.svg
│   └── frax-logo.png
├── src/                  # Uygulama kaynak kodu
│   ├── main.tsx          # Uygulama giriş noktası
│   ├── App.tsx           # Kök bileşen
│   ├── design.ts         # Tasarım sistemi / token tanımları
│   └── index.css         # Global stiller (Tailwind)
├── index.html            # HTML şablonu
├── vite.config.ts        # Vite yapılandırması
├── tsconfig.json         # TypeScript yapılandırması
└── package.json          # Bağımlılıklar ve scriptler
```

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
