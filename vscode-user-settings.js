{
  "prettier.singleQuote": true,
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.css": "none",
  "stylelint.configOverrides": {
    "ignoreFiles": ["**/**.js", "**/**.vue", "**/**.md"],
    "rules": { "block-no-empty": [true, { "severity": "warning" }] }
  },
  "currentFilePath.defaultPathStartsFrom": "workSpace",
  "prettier.eslintIntegration": true,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "stylelint.enable": false,
  "search.location": "sidebar",
  "eslint.autoFixOnSave": true,
  "todohighlight.keywords": [
    {
      "text": "debugger",
      "color": "red",
      "border": "1px solid red",
      "borderRadius": "2px",
      "backgroundColor": "rgba(0,0,0,.2)"
    }
  ]
}
