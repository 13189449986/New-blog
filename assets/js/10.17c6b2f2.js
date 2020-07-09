(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{222:function(e,t,n){"use strict";n.r(t);var r=n(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"分享-vscode-配置与团队-eslint-和-tslint-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分享-vscode-配置与团队-eslint-和-tslint-配置"}},[e._v("#")]),e._v(" [分享] VSCode 配置与团队 ESLint 和 TSLint 配置")]),e._v(" "),n("h3",{attrs:{id:"_2019-12-25-更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2019-12-25-更新"}},[e._v("#")]),e._v(" 2019/12/25 更新")]),e._v(" "),n("hr"),e._v(" "),n("h3",{attrs:{id:"vscode-官网"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vscode-官网"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode 官网"),n("OutboundLink")],1)]),e._v(" "),n("hr"),e._v(" "),n("p",[n("strong",[e._v("常用插件")])]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"%5Bhttps://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint%5D(https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)"}},[e._v("Eslint")]),e._v("：代码检查, 跑 ESlint 的时候直接跑 VSCode 配置里的 Rule。")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=drKnoxy.eslint-disable-snippets",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eslint-disable-snippets"),n("OutboundLink")],1),e._v(": 代码内快速生成 eslint-disable 代码块")])]),e._v(" "),n("hr"),e._v(" "),n("p",[n("strong",[e._v("setting.json")])]),e._v(" "),n("div",{staticClass:"language-setting.json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  /**  vscode 系统配置项 */\n  "window.zoomLevel": 0,\n  "files.autoSave": "afterDelay",\n  "explorer.confirmDelete": false,\n  "explorer.confirmDragAndDrop": false,\n  "vsicons.dontShowNewVersionMessage": true,\n  "editor.foldingStrategy": "indentation",\n  "git.autofetch": true,\n  "git.enableSmartCommit": true,\n  "editor.tabCompletion": "on",\n  "editor.codeActionsOnSave": {\n    "source.fixAll.tslint": true,\n    "source.fixAll.eslint": true\n  },\n  "editor.accessibilitySupport": "off",\n  "terminal.integrated.rendererType": "dom",\n\n  /**  代码格式化配置 */\n  "editor.tabSize": 2,\n  // 打开对vue的lint,并自动fix\n  "eslint.validate": [\n    "javascript",\n    "javascriptreact",\n    {\n      "language": "vue",\n      "autoFix": true\n    }\n  ],\n  // 尽可能控制尾随逗号的打印\n  "prettier.trailingComma": "all",\n  // 在保存时格式化文件\n  "editor.formatOnSave": true,\n  // 保存时自动fix\n  "eslint.autoFixOnSave": true,\n  // 格式化插件的配置\n  "vetur.format.defaultFormatterOptions": {\n    "js-beautify-html": {}\n  },\n   // 对于.vue文件,交给prettier,stylus因为prettier不支持改用vertur选项\n  "vetur.format.defaultFormatter.html": "js-beautify-html",\n  "vetur.format.defaultFormatter.css": "prettier",\n  "vetur.format.defaultFormatter.postcss": "prettier",\n  "vetur.format.defaultFormatter.scss": "prettier",\n  "vetur.format.defaultFormatter.less": "prettier",\n  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",\n  "vetur.format.defaultFormatter.js": "prettier",\n  "vetur.format.defaultFormatter.ts": "prettier",\n  "[javascript]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[jsonc]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[json]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[typescript]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[scss]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[javascriptreact]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[typescriptreact]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n\n  /**  第三方插件库配置 */\n  "px2rem-plus.base": 100,\n  "workbench.iconTheme": "vscode-icons",\n  "workbench.startupEditor": "newUntitledFile",\n  "liveServer.settings.donotShowInfoMsg": true,\n  // 自动导入\n  "typescript.updateImportsOnFileMove.enabled": "prompt",\n  "javascript.updateImportsOnFileMove.enabled": "prompt",\n  "javascript.suggest.autoImports": true,\n  // 文件修改自动载入作者与时间\n  "fileheader.configObj": {\n    "createFileTime": true,\n    "language": {\n      "languagetest": {\n        "head": "/$$",\n        "middle": " $ @",\n        "end": " $/"\n      }\n    },\n    "autoAdd": false,\n    "autoAlready": true,\n    "annotationStr": {\n      "head": "/*",\n      "middle": " * @",\n      "end": " */",\n      "use": false\n    },\n    "headInsertLine": {\n      "php": 2\n    },\n    "beforeAnnotation": {},\n    "afterAnnotation": {},\n    "specialOptions": {},\n    "switch": {\n      "newlineAddAnnotation": true\n    },\n    "config": {\n      "dateFormat": "YYYY-MM-DD HH:mm:ss",\n      "prohibitAutoAdd": ["json"],\n      "moveCursor": true\n    }\n  },\n  "fileheader.cursorMode": {},\n  "fileheader.customMade": {\n    "Author": "ZStop",\n    "Date": "Do not edit", // 文件创建时间(不变)\n    "LastEditors": "ZStop", // 文件最后编辑者\n    "LastEditTime": "Do not edit" // 文件最后编辑时间\n  },\n  "diffEditor.ignoreTrimWhitespace": false,\n  "[vue]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n}\n\n')])])]),n("hr"),e._v(" "),n("p",[n("strong",[e._v("tslint.json")])]),e._v(" "),n("div",{staticClass:"language-tslint.json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "defaultSeverity": "warning",\n  "extends": ["tslint:recommended"],\n  "linterOptions": {\n    "exclude": ["node_modules/**"]\n  },\n  "rules": {\n    "indent": [true, "spaces", 2],\n    "interface-name": false,\n    "ordered-imports": false,\n    "object-literal-sort-keys": false,\n    "max-line-length": false,\n    "no-consecutive-blank-lines": false,\n    "trailing-comma": false,\n    "eofline": false,\n    "quotemark": false,\n    "typedef-whitespace": false,\n    "no-console": false,\n    "no-var-requires": false,\n    "prefer-for-of": false,\n    "forin": false,\n    "variable-name": false,\n    "no-empty": false,\n    "noImplicitThis": false,\n    "arrow-parens": false,\n    "no-shadow": false,\n    "no-shadowed-variable": false,\n    "only-arrow-functions": false\n  }\n}\n\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);