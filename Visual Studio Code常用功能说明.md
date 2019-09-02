## 主命令框Command Palette

最重要的功能就是`F1`或`Ctrl+Shift+P`打开的命令面板了，在这个命令框里可以执行VSCode的任何一条命令，可以查看每条命令对应的快捷键，甚至可以关闭这个编辑器。

![](https://nshen.net/image/vscode/20160418095539.png)

按一下`Backspace`会进入到`Ctrl+P`模式里

## Ctrl+P 模式

在`Ctrl+P`下输入`>`又可以回到主命令框 `Ctrl+Shift+P`模式。

在`Ctrl+P`窗口下还可以

1. 直接输入文件名，快速打开文件
2. `?` 列出当前可执行的动作
3. `!` 显示Errors或Warnings，也可以`Ctrl+Shift+M`
4. `:` 跳转到行数，也可以`Ctrl+G`直接进入
5. `@` 跳转到symbol（搜索变量或者函数），也可以`Ctrl+Shift+O`直接进入
6. `@:`根据分类跳转symbol，查找属性或函数，也可以`Ctrl+Shift+O`后输入`:`进入
7. `#` 根据名字查找symbol，也可以`Ctrl+T`

## 常用快捷键

`Ctrl+Shift+N` :打开一个新窗口

`Ctrl+Shift+W`：关闭窗口

`Ctrl+N`：新建文件

`Ctrl+Tab` `Alt+Left` `Alt+Right` ：历史打开文件之间切换

`Ctrl+\`：切出新的编辑器，也可以按住 `Ctrl` 鼠标点击 Exlporer 里的文件名

`Ctrl+1` `Ctrl+2` `Ctrl+3`：左中右3个编辑器的快捷键4

## 插件安装与卸载

#### 安装：

VSCode安装插件十分容易，只需要在Extensions处搜索插件的名称，点击install即可安装。

![1567426100557](https://github.com/SWerllen/mfs-homework/blob/master/Visual%20Studio%20Code%E5%B8%B8%E7%94%A8%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E.assets/1567426100557.png)

#### 卸载：

在已安装的插件界面处，点击卸载，即可卸载

![1567426155603](https://github.com/SWerllen/mfs-homework/blob/master/Visual%20Studio%20Code%E5%B8%B8%E7%94%A8%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E.assets/1567426155603.png)

## 常用插件

### 1. 文件图标 vscode-icons

- 插件名称：vscode-icons
- 插件地址：[https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons](https://link.zhihu.com/?target=https%3A//marketplace.visualstudio.com/items%3FitemName%3Drobertohuertasm.vscode-icons)

首先为了我们在编码时有一个高效、易用的界面，我们需要对一些不明了的组件做一些美化。

vscode-icons 插件可以实现对各种文件类型的文件前的图标进行优化显示，这样我们在查看长长的文件列表的时候，可以直接通过文件的图标就可以快速知道文件的类型，而不是去看文件的后缀。

<div align=center><img src="https://pic3.zhimg.com/80/v2-bfb05278e4757e250ab6f5dcf34dd42e_hd.jpg" width="600"/></div>

### 2. 必备调试工具 Debugger for Chrome

- 插件名称：Debugger for Chrome
- 插件地址：[https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome](https://link.zhihu.com/?target=https%3A//marketplace.visualstudio.com/items%3FitemName%3Dmsjsdiag.debugger-for-chrome)

此工具简直就是前端开发必备，将大大地改变你的开发与调试模式。

以往的前端调试，主要是 JavaScript 调试，你需要在 Chrome 的控制台中找到对应代码的部分，添加上断点，然后在 Chrome 的控制台中单步调试并在其中查看值的变化。

而在使用了 Debugger for Chrome 后，当代码在 Chrome 中运行后，你可以直接在 VSCode 中加上断点，点击运行后，Chrome 中的页面继续运行，执行到你在 VSCode 中添加的断点后，你可以直接在 VSCode 中进行单步调试。

![img](https://pic2.zhimg.com/80/v2-ec559653eb7d3a6c98d1925b96974a21_hd.jpg)
