#### ref与reactive的区别

- ref用来定义：**基本类型数据**。
- ref通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据劫持）。
- ref定义的数据：操作数据需要`.value`，读取数据时模板中直接读取不需要`.value`。
- reactive用来定义：**对象或数组类型数据**。
- reactive通过使用**Proxy**来实现响应式（数据劫持）, 并通过**Reflect**操作源代码内部的数据。
- reactive定义的数据：操作数据与读取数据：均不需要`.value`。
  当然，我之前就说过，ref可以定义对象或数组的，它只是内部自动调用了**reactive**来转换。

### vue3的响应式原理

**基础数据类型**

- 使用ref定义，转换成refIpml对象，里面通过`Object.defineProperty`的`get`，`set`来进行数据劫持，修改。

**引用数据类型**

- 使用reactive定义
- 通过Proxy（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。
- 通过Reflect（反射）: 对源对象的属性进行操作。

### computed，watch与watchEffect

**computed：** 只读属性

**watch**： 监听属性
