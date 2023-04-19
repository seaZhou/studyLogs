### 一.从迁出仓库git中复制出http地址

### 二.在本地创建文件夹new,进入文件夹中,右键打开git 窗口

### 三.git clone --bare 源码地址

* 
  git clone --bare http://xxx.xx.xx.xxx/xxx.git

### 四.执行命令后，会在new下生成一个xxx.git文件 ，进入这个文件

### 五.以镜像的方式推送到新的代码仓库中去

* git push --mirror http://xxx.xx.xx.xxx/xxx.git 

### 六.在回到new文件中，删除xxx.git文件

* 回到new文件夹中
  * cd ..
* 删除xxx.git文件
  * rm -rf xxx.git

### 七.最后在new文件夹下，用新仓库的地址把代码克隆下来就好

* 在new文件夹下，打卡的bash窗口，输入代命令，初始化新仓库
  git init

* 初始化后，克隆代码至本地
  git clone http://xxx.xx.xx.xxx/xxx.git