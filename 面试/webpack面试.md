#### Webpack 配置中用过哪些 Loader ？都有什么作用？

> + css-loader：解析css，例如：import/require() 解析成 @import和url()
> 
> + style-loader：将解析好的css以style标签的形式注入到DOM中
> 
> + postcss-loader：浏览器兼容，自动添加 CSS3 部分属性的浏览器前缀，需要配合autoprefixer使用
> 
> + less-loader：编译less转换成css
> 
> + file-loader：解决文件引入问题，并将图片拷贝到指定目录，默认为dist，webpack5内置可不安装
> 
> + url-loader：依赖于file-loader，将小于limit值的图片转成base64编码，webpack5内置可不安装
> 
> + babel-loader：使用 Babel 加载 ES2015+ 代码并将其转换为 ES5，需要配合@babel/core和@babel/preset-env使用
> 
> + thread-loader：项目大可以使用多线程执行loader
> 
> + cache-loader：缓存一些性能开销比较大的 loader 的处理结果，缓存位置：`node_modules/.cache/cache-loader`  **webpack4.x**

#### Webpack 配置中用过哪些 Plugin ？都有什么作用？

> + html-webpack-plugin：创建html文件，引入捆绑文件
> 
> + clean-webpack-plugin：清空之前打包目录
> 
> + mini-css-extract-plugin：把包含在js中的css创建一个css文件，并支持css和sourceMaps的按需加载
> 
> + speed-measure-webpack-plugin：构建耗时分析
> 
> + IgnorePlugin：阻止生成要导入的模块，用于moment等三方类库的国际化依赖包
> 
> + webpack-bundle-analyzer：打包结果分析器图形展示
> 
> + css-minimizer-webpack-plugin：压缩css (optimize-css-assets-webpack-plugin webpack4.x)
> 
> + terser-webpack-plugin：压缩js (uglifyjs-webpack-plugin webpack4.x)
> 
> + purgecss-webpack-plugin：清除不使用的css 
> 
> + copy-webpack-plugin：拷贝静态文件到dist目录中
> 
> + compression-webpack-plugin：开启gzip提高页面加载
> 
> + DllPlugin：创建一个只读的动态链接库
> 
> + DllReferencePlugin：将动态链接库引用到需要预编译的依赖中
> 
> + image-minimizer-webpack-plugin：压缩图片配合imagemin插件优化图像生成
> 
> + ModuleConcatenationPlugin：提升作用域，可以让代码文件更小
> 
> + EnvironmentPlugin：将环境变量添加到process.env中
> 
> + HardSourceWebpackPlugin：中间件缓存模块，加快构建速度

#### Loader 和 Plugin 有什么区别？

loader：可以根据匹配的规则转换各类文件，执行顺序从右到左，从下往上

plugin：贯穿webpack打包生命周期，执行不同的任务

#### 如何编写 Loader ? 介绍一下思路？

loader 本质上是导出为函数的 JavaScript 模块。[loader runner](https://github.com/webpack/loader-runner) 会调用此函数，然后将上一个 loader 产生的结果或者资源文件传入进去。

编写loader需要将源码解析成AST，可以使用 **@babel/parser** 将源码转换成AST，**@babel/traverse** 对AST节点进行递归遍历，生成一个可以操作、转换的path对象，**@babel/type** 对AST节点进行增、删、改、查。**@babel/generator** 将其AST解码成js代码

#### 如何编写 Plugin ? 介绍一下思路？

需要提供一个具有apply方法的js对象，apply方法会被webpack compiler调用，可以使用compiler.hooks中各种生命周期阶段来编写逻辑，compiler代表了整个webpack从启动到关闭的生命周期，其中还有compilation代表一次新的编译过程

#### Webpack  optimization有配置过吗？可以简单说说吗？

webpack4开始会根据不同的mode执行优化，自定义配置使用关键属性**minimizer** 可以定制插件覆盖原本的压缩工具，压缩js使用**terser-webpack-plugin** (4.x uglifyjs-webpack-plugin) ，压缩css使用**css-minimizer-webpack-plugin** （4.x optimize-css-assets-webpack-plugin）,压缩image使用**image-minimizer-webpack-plugin**，其次**splitChunks** 可以配置**cacheGroups**拆分模块方案，一般主要拆分common，vendors，使用**runtimeChunk**将运行中的chunk拆分出来。

#### Webpack 层面如何性能优化？

> **构建时间优化**：
> 
> - 缩减与指定编译范围：**exclude/include** (确定 loader 规则范围)、**resolve.modules** 指明需要查找模块的绝对路径 (减少不必要的查找)、**resolve.extensions** 尽可能减少后缀尝试的可能性、**noParse**对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)、**IgnorePlugin**(完全排除模块)、合理使用 **alias**
> - 指定合适  的mode和devtool
> - 提前与缓存构建：开启cache.type="filesystem"持久缓存，在loader中添加options.cacheDirectory
> - 并行构建：使用thread-loader配置多进程构建打包loader（小项目可以不需要）
> 
> **构建体积优化**：
> 
> - 分割代码：**mini-css-extract-plugin** 在js中提取样式代码到新的css文件中、**optimization.splitChunks** 进行分包配置、**optimization.runtimeChunk**将运行中的chunk拆分出来、**externals** 从外部cdn等方式获取基础包，不打包进bundle、**DllPlugin** 创建一个只读的动态链接库然后配合**DllReferencePlugin**引用到需要预编译的依赖中
> - 摇树优化：webpack5 默认开启 tree-shaking，当打包的 mode 为 production 时，自动开启 tree-shaking 进行优化，需要禁用babel-loader的模块依赖解析，modules:false
> - 动态垫片：babel配置选项中  "useBuiltIns": "entry"使用 polyfill
> - 懒加载：使用内联注释// webpackMode: "lazy" webpackChunkName: "xxx"  webpackPreload: true
> - 作用域提升：production默认提升，原理是将多个模块放在同一个作用域下，并重命名防止命名冲突，**通过这种方式可以减少函数声明和内存开销**。
> - 压缩资源：**css-minimizer-webpack-plugin** 压缩和去重css、**purgecss-webpack-plugin** 清除多余的css、**compression-webpack-plugin** 开起gzip、**image-minimizer-webpack-plugin** 压缩图片、**terser-webpack-plugin**压缩js

#### Webpack构建流程简单说一下

- `初始化参数`：从配置文件和 Shell 语句中读取并整合参数。
- `开始编译`：初始化 Compiler 对象，加载所有配置的插件，执行Compiler.run 方法开始执行编译 
- `确定入口`：根据配置中的 entry 找出所有的入口文件 
- `编译模块`：调用所有配置的 Loader 对模块进行转换，再找出该模块依赖的模块，再递归本步骤直到所有的依赖文件都处理完成
- `完成模块编译`：使用 Loader 转换完所有模块后，得到了每个模块被转换后的最终内容以及它们之间的依赖关系
- `输出资源`：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
- `输出完成`：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

#### tree-shaking 实现原理？

- Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中
- Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用
- 生成产物时，若变量没有被其它模块使用则删除对应的导出语句

#### Webpack 热更新（HMR）原理？

可以做到在浏览器不刷新的情况下把旧的模块替换成新的模块，HMR的核心就是执行dev-server后会启动`webpack`生成`compiler`实例，然后编译文件和监听文件变化，接着启动本地服务，启动websocket服务，建立浏览器和本地的双向通信。如果文件有变化会触发重新编译，编译结束后通过websocket发送新的hash值和ok事件给客户端进行检查是否需要热更新，如果需要更新就利用之前保存的hash值发送ajax请求获取热更新模块，再通过jsonp获取新的代码，然后把旧的模块替换成新的再执行。

#### Webpack 打包中 Babel 插件是如何工作的？

- 解析：将代码转换成 AST
  - 词法分析：将代码(字符串)分割为token流，即语法单元成的数组
  - 语法分析：分析token流(上面生成的数组)并生成 AST
- 转换：访问 AST 的节点进行变换操作生产新的 AST
  - [Taro](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FNervJS%2Ftaro%2Fblob%2Fmaster%2Fpackages%2Ftaro-transformer-wx%2Fsrc%2Findex.ts%23L15 "https://github.com/NervJS/taro/blob/master/packages/taro-transformer-wx/src/index.ts#L15")就是利用 babel 完成的小程序语法转换
- 生成：以新的 AST 为基础生成代码

#### Webpack5 更新了哪些新特性？

> **持久化缓存**：
> 
> - 默认开启缓存，缓存默认是在内存里。可以对 cache 进行设置。
> 
> - 缓存淘汰策略：文件缓存存储在 `node_ modules/.cache/webpack`，最大 500 MB, 缓存时常两个星期，旧的缓存先淘汰
> 
> **资源模块**：
> 
> - 资源模块是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader
> 
> **moduleIds & chunkIds的优化**：
> 
> - 在webpack5之前，没有从entry打包的chunk文件，都会以1、2、3...的文件命名方式输出,删除某些些文件可能会导致缓存失效
> - 在生产模式下，默认启用这些功能chunkIds: "deterministic", moduleIds: "deterministic"，此算法采用确定性的方式将短数字 ID(3 或 4 个字符)短hash值分配给 modules 和 chunks  
>   chunkId设置为deterministic，则output中chunkFilename里的[name]会被替换成确定性短数字ID
> 
> **移除Node.js的polyfill**：
> 
> - webpack4带了许多Node.js核心模块的polyfill,一旦模块中使用了任何核心模块(如crypto)，这些模块就会被自动启用，webpack5不再自动引入这些polyfill
> 
> **tree-shaking优化**：
> 
> - webpack4 本身的 tree shaking 比较简单（直接import整个文件或者对象内部未使用的不能被剔除；commonJs模式不支持）,主要是找一个 import 进来的变量是否在这个模块内出现过
> - webpack5可以进行根据作用域之间的关系来进行优化,开始支持  
>   会分析模块的引用关系
