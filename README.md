## Setting (Windows)

```
1. [cmd] react-native-cli
npm install -g react-native-cli
npx react-native --version

2. [EnvironmentVariable] ANDROID_HOME
C:\Users\{User}\AppData\Local\Android\Sdk\

3. [EnvironmentVariable] Path
C:\Users\{User}\AppData\Local\Android\Sdk\platform-tools

4. [cmd]
adb
```

## Init React-Native

```
1. [cmd] init
npx react-native init reactnative

2. [cmd] Android Start
-Emulator: react-native run-android
-USB Debugging: npm run android

* [error] Failed to install the following Android SDK packages as some licences have not been accepted.
SDK tools에 구글 라이센스 추가
C:\Users\{User}\AppData\Local\Android\Sdk\licenses
```

## run
```
npm install --save --legacy-peer-deps
```

## React-Native 기능

### 1.절대경로 설정

```bash
npm install babel-plugin-module-resolver -D
```

### 2.Root Import

```bash
npm install babel-plugin-root-import --save-dev
```

### 3. navigation

```bash
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

### 4. Bottom Navigation

```bash
npm install @react-navigation/stack
```

### 5. prettier 설정

```json

// before
{
    "workbench.startupEditor": "none",
    "editor.renderControlCharacters": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "git.enableSmartCommit": true,
    "git.confirmSync": false,
    "git.ignoreRebaseWarning": true,
    "gitlens.codeLens.authors.enabled": false,
    "gitlens.codeLens.recentChange.enabled": false,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}



// after
{
  "workbench.colorTheme": "Material Theme Darker",
  "editor.formatOnSave": true,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "editor.tokenColorCustomizations": {
    "comments": "#fdc1d5"
  },
  "launch": {


    "configurations": [],
    "compounds": []
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "code-runner.runInTerminal": true,
  "[json]": {
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace",
    "gitlens.codeLens.scopes": ["document"]
  },
  "code-runner.executorMap": {
    "cpp": "cd $dir && clang++ -std=c++17 $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
  }
}
```

### 6. react-native-dotenv

```bash
npm i react-native-dotenv
```

### 7. axios

```bash
npm i axios
```

### 8. redux

```bash
npm i react-redux
npm i redux
npm i redux-thunk
npm i @types/react-redux
```

### 9. react-native-webview(component)

```bash
npm i react-native-webview
```

### 10. iconv-lite, buffer (encode)

```bash
npm i iconv-lite
npm i buffer
```

### 11. less

```bash
less, css
```

### 12. iamport-react-native

```bash
npm i iamport-react-native
```

## References

```
절대경로설정: https://csc0705.tistory.com/63
Navigation: https://velog.io/@yhe228/React-NavigationTab-navigation
```
