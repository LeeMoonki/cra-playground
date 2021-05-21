# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
`yarn create react-app [project name] --template typescript`

## **Available Scripts**

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## **Learn More**

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## **Lint, Prettier**

- [typescript-eslint Getting Started](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
- [Usage with prettier](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#usage-with-prettier)
- [eslint-plugin-prettier recommended-configuration](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)
- [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [prettier with Git hooks](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#usage-with-prettier)

 ### ESLint가 VSCode에서 동작을 안 한다면 다음 설정을 해줍니다. [React CRA with typescript not working with eslint](https://stackoverflow.com/questions/58264433/react-cra-with-typescript-not-working-with-eslint)
 ```json
 "eslint.validate": [
   "javascript",
   "javascriptreact",
   "typescript",
   "typescriptreact"
 ]
 ```

## **Test, Jest**
- [test configuration](https://create-react-app.dev/docs/running-tests/#configuration)
- [react testing recipes](https://ko.reactjs.org/docs/testing-recipes.html)
- [react-testing-library API](https://testing-library.com/docs/react-testing-library/api)

### 테스트 파일 (\__tests__/*.tsx?)에서 tsconfig를 적용하지 않기
cra의 특징은 `react-scripts`를 실행할 때마다 `tsconfig.json`을 overriding 한다는 것입니다. 따라서 테스트 파일에도 다소 억지스러운 설정이 적용됩니다. 따라서 `tsconfigExtends.json`에서 테스트 디렉터리를 제외시키도록 설정해 `tsconfig.json`에서 `extends` 하도록 합니다.

## **emotion, typescript**
- [emotion typescript](https://emotion.sh/docs/typescript)
- [craco](https://github.com/gsoft-inc/craco)
- [cra+emotion 구축하기](https://velog.io/@mizukikawaii/CRA-Emotion-Storybook-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0)

### 적용 과정
1. `yarn add @emotion/react @craco/craco`
2. `yarn add -D @emotion/babel-preset-css-prop`
3. `package.json`의 `scripts`에서 `react-scripts` 부분을 `craco`로 수정
4. `craco.config.js`를 생성하고 다음과 같이 설정
```js
module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop']
  }
}
```
5. `tsconfigExtends.json`에 다음과 같이 `jsxImportSource`를 추가
```json
{
  "compilerOptions": {
    ...
    "jsxImportSource": "@emotion/react"
  }
}
```
6. `react-app-env.d.ts`에 다음 추가
```ts
/// <reference types="@emotion/react/types/css-prop" />
```

## **storybook**
- [Install Storybook](https://storybook.js.org/docs/react/get-started/install)
- [Can't get emotion's css prop working inside storybook #7540](https://github.com/storybookjs/storybook/issues/7540)
- [Can't get emotion's css prop working inside storybook #7540#issuecomment-571381641](https://github.com/storybookjs/storybook/issues/7540#issuecomment-571381641)
- [Can't get emotion's css prop working inside storybook #7540#issuecomment-779707222](https://github.com/storybookjs/storybook/issues/7540#issuecomment-779707222)
- [cra+emotion 구축하기](https://velog.io/@mizukikawaii/CRA-Emotion-Storybook-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0)

### 적용과정
1. `npx sb init`
2. CRA가 storybook에서 사용하는 babel-loader와 중복 및 충돌한다고 경고를 보내는 경우에 `.env`에 `SKIP_PREFLIGHT_CHECK=true` 세팅
3. 위 내용들을 참고해 다음과 같이 `.storybook/main.js`를 수정
```js
const path = require('path');
const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }],
          require.resolve('@emotion/babel-preset-css-prop')
        ],
      },
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
}
```
