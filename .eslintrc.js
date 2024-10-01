module.exports = {
  root: true, // 프로젝트 루트 설정
  env: {
    es2021: true, // ECMAScript 2021 환경
    node: true, // Node.js 환경
    'react-native/react-native': true, // React Native 환경
  },
  extends: [
    'eslint:recommended', // ESLint 권장 설정
    'plugin:react/recommended', // React 권장 설정
    'plugin:react-native/all', // React Native 권장 설정
    'prettier', // Prettier와 충돌하는 ESLint 규칙을 비활성화
    'plugin:prettier/recommended', // Prettier 관련 권장 설정
  ],
  parser: '@babel/eslint-parser', // Babel ESLint 파서 사용
  parserOptions: {
    requireConfigFile: false, // Babel 설정 파일을 필요로 하지 않음
    ecmaFeatures: {
      jsx: true, // JSX 사용 가능 설정
    },
    ecmaVersion: 12, // ECMAScript 버전 12 (2021)
    sourceType: 'module', // ES 모듈 사용
  },
  plugins: [
    'react', // React 관련 플러그인
    'react-native', // React Native 관련 플러그인
    'prettier', // Prettier 플러그인
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // Prettier 규칙 적용
    'react/prop-types': 'off', // PropTypes 사용 안함
    'react/react-in-jsx-scope': 'off', // React 17 이상에서 필요없음
    'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
  },
};
