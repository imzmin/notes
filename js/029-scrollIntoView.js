// scrollIntoView():该方法存在于所有HTML元素上，可以滚动浏览器窗口或者容器元素以便包含元素进入视口
//这个方法参数如下：
//（1）alignToTop：是一个布尔值。true：窗口滚动后元素的顶部与视口顶部对齐。false：窗口滚动后元素的底部与视口底部对齐
//（2）scrollIntoViewOptions:是一个选项对象。
//behavior:定义过渡动画，可取的值为'smooth'和'auto'，默认auto。
//block:定义垂直方向的对齐，可取的值：start,center,end和nearest。默认start
//inline:定义水平方向的对齐，可取的值：start,center,end和nearest。默认nearest
//（3）不传参数等同于alignToTop为true

//确保元素可见
document.forms[0].scrollIntoView()
//确保元素可见
document.forms[0].scrollIntoView(true)
//确保元素可见
document.forms[0].scrollIntoView({block:'start'})

//尝试将元素平滑滚入视口
document.forms[0].scrollIntoView({block:'start',behavior:'smooth'})


// document.forms：表示获取当前页面的所有表单
// document.forms[0]：表示获取当前页面的第一个表单
