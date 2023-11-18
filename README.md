# typescript-vite-react-text-terminal-imitation

テキストターミナル風 UI

![demo](./demo.gif)

[react-text-terminal-imitation](https://github.com/hironomiu/react-text-terminal-imitation)を Vite ＋ TypeScript + Tailwind + Jotai で再作成

## Set Up

`git clone`後

```
npm install
```

## Dev Server Run

```
npm run dev
```

## How to move the cursor

### Left

ArrowLeft or CTRL + b

### Right

ArrowRight or CTRL + f

## Commands

### echo

## Install Memo

`React`,`TypeScript + SWC`を選択

```
npm create vite@latest .
npm install
```

### Tailwind

[Tailwind 公式](https://tailwindcss.com/docs/guides/vite)

### Jotai

```
npm install jotai
```

### Testing

```
npm install --save-dev jest jsdom eslint-plugin-jest @types/jest @types/jsdom ts-jest jest-environment-jsdom
npx jest --init
```

```
✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … no
```

`jest.config.ts`

```
  moduleFileExtensions: [
    'js',
    //   "mjs",
    //   "cjs",
    'jsx',
    'ts',
    'tsx',
    //   "json",
    //   "node"
  ],

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },
```

```
touch tsconfig.jest.json
```

```
{
  "extends": "./tsconfig.json"
}
```

```
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
```

```
npm install --save-dev ts-node
```

```
npm install --save-dev babel-jest @babel/preset-env @babel/preset-react
touch babel.config.js
```

`babel.config.js`

```
export const presets = ['@babel/preset-env', '@babel/preset-react']
```

`tsconfig.json`

```
"esModuleInterop": true,
```

`package.json`

```
- "test": "jest"
+ "test": "jest --watchAll"
```
