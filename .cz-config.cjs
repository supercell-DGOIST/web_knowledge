module.exports = {
  types: [
    { value: 'feature', name: 'feat:     新增功能' },
    { value: 'fix', name: 'fix:      修复 bug' },
    { value: 'docs', name: 'docs:     文档变更' },
    {
      value: 'style',
      name: 'style:    代码格式（不影响功能，例如空格、分号等格式修正）'
    },
    {
      value: 'refactor',
      name: 'refactor: 代码重构（不包括 bug 修复、功能新增）'
    },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     添加、修改测试用例' },
    {
      value: 'build',
      name: 'build:    构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）'
    },
    { value: 'ci', name: 'ci:       修改 CI 配置、脚本' },
    {
      value: 'chore',
      name: 'chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）'
    },
    { value: 'revert', name: 'revert:   回滚 commit' }
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['components', '组件相关'],
    ['business', '业务相关'],
    ['utils', 'utils 相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [

        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */

  // 交互提示信息
  messages: {
    type: '选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    // 选择 scope: custom 时会出下面的提示
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？'
  },

  // allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: ['scope', 'body'],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: '|' // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
