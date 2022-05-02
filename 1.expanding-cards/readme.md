# 扩充卡片
## 开始
乍一看html结构很简单
```html
<div>
    <div class="卡片">
        <div class="名字"></div>
        <img class="图片" src="" alt="">
    </div>
</div>
```
这样就可以显示页面上的所有信息，然后使用flex布局进行排版

但是马上发现如果使用img标签进行图片插入的话，对图片的处理会比较麻烦虽然有object-fit等属性可以使用，
相比之下还是css背景图的形式处理起来比较方便
（关于这点，可以抽象为响应式图片，和img/background-image这个两个引入方式的比较）

所以还是使用background-image的形式来引入

然后是使用flex来进行基本的布局
发现鼠标移到图片上的时候变成了小手，这个是css的cursor属性来控制

基本的布局已经实现，现在要实现点击图片后放大
先找到所有card，然后监听他们的click事件，然后当click发生的时候，使用js去添加css类，来实现页面变化，
在下一次click发生的时候，取消上一次的变化，再添加新变化

新的css类命名为active，内容是flex布局下占多少地方，这个可以查看flex文档(可以flex-grow也可以简写flex)

现在已经实现了大致效果，不过看起来不够优雅丝滑，所以现在添加动画后就可以非常丝滑,这里只需要过渡效果，所以使用transition就可以了







---
### 知识点
[响应式图片](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)

[img or background-image?](https://juejin.cn/post/6844904185612206088)

[background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

[background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)

[background-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)

[cursor](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)

[flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

[transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)
