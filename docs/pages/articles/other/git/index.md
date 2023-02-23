# Git的简介
## Git的诞生
Linus在1991年创建了开源的Linux，从此，Linux系统不断发展，已经成为最大的服务器系统软件了。
Linus虽然创建了Linux，但Linux的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为Linux编写代码，那Linux的代码是如何管理的呢？
事实是，在2002年以前，世界各地的志愿者把源代码文件通过diff的方式发给Linus，然后由Linus本人通过手工方式合并代码！
你也许会想，为什么Linus不把Linux代码放到版本控制系统里呢？不是有CVS、SVN这些免费的版本控制系统吗？因为Linus坚定地反对CVS和SVN，这些集中式的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比CVS、SVN好用，但那是付费的，和Linux的开源精神不符。
不过，到了2002年，Linux系统已经发展了十年了，代码库之大让Linus很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是Linus选择了一个商业的版本控制系统BitKeeper，BitKeeper的东家BitMover公司出于人道主义精神，授权Linux社区免费使用这个版本控制系统。
安定团结的大好局面在2005年就被打破了，原因是Linux社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发Samba的Andrew试图破解BitKeeper的协议（这么干的其实也不只他一个），被BitMover公司发现了（监控工作做得不错！），于是BitMover公司怒了，要收回Linux社区的免费使用权。
Linus可以向BitMover公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：
Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git！一个月之内，Linux系统的源码已经由Git管理了！牛是怎么定义的呢？大家可以体会一下。
Git迅速成为最流行的分布式版本控制系统，尤其是2008年，GitHub网站上线了，它为开源项目免费提供Git存储，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等。
历史就是这么偶然，如果不是当年BitMover公司威胁Linux社区，可能现在我们就没有免费而超级好用的Git了。
## 集中式VS分布式
集中式：版本库存放在中央服务器，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。  
集中式版本控制系统最大的毛病就是必须联网才能工作（指无网络不可提交），如果在局域网内还好，带宽够大，速度够快，可如果在互联网上，遇到网速慢的话，可能提交一个10M的文件就需要5分钟，这还不得把人给憋死啊。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676862117420-f3849f82-af71-4d77-94ca-0e3c47459966.png#averageHue=%23fcfcfc&clientId=ub9867d19-3662-4&from=paste&height=312&id=u696a05e9&name=image.png&originHeight=312&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=54424&status=done&style=none&taskId=u75c485c1-193a-4e36-b202-1b3b15da5a0&title=&width=473)
分布式： 分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，你工作的时候，就不需要联网了，因为版本库就在你自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。  
 和集中式版本控制系统相比，分布式版本控制系统的安全性要高很多，因为每个人电脑里都有完整的版本库，某一个人的电脑坏掉了不要紧，随便从其他人那里复制一个就可以了。而集中式版本控制系统的中央服务器要是出了问题，所有人都没法干活了。  
 在实际使用分布式版本控制系统的时候，其实很少在两人之间的电脑上推送版本库的修改，因为可能你们俩不在一个局域网内，两台电脑互相访问不了，也可能今天你的同事病了，他的电脑压根没有开机。因此，分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676862181860-8ca4aead-4685-4c12-beb3-1f063dde474f.png#averageHue=%23fcfcfc&clientId=ub9867d19-3662-4&from=paste&height=444&id=u224005ee&name=image.png&originHeight=444&originWidth=542&originalType=binary&ratio=1&rotation=0&showTitle=false&size=96576&status=done&style=none&taskId=udaa3a2a0-facd-4554-be74-625c44cb06f&title=&width=542)
## 安装Git
## 创建版本库
在文件夹内使用命令`git init -y`初始化仓库，初始化仓库后，会多一个`.git`文件夹，用来跟踪管理版本库。
`.git`文件夹默认隐藏，使用命令`ls -ah`后就可以看见。
### 添加文件到版本库
添加文件到版本库分两步：
第一步：使用命令`git add <file>`，`<file>`是文件名，表示添加文件到暂存区。
```git
git add test.txt # 添加单个文件
git add . # 添加所有文件
```
第二步：使用命令`git commit -m <message>`，`<message>`表示描述信息，建议填写有意义的描述信息，这可以在历史记录里翻盖能占到样，例如：项目初始化完成、bug修复完成。。
> 注意： 添加某个文件时，该文件必须在当前目录下存在，用ls或者dir命令查看当前目录的文件，看看文件是否存在，或者是否写错了文件名。  


# 时光机穿梭
## 版本回退
在Git中，有这么一个词，"快照，"快照"其实就是Git中的`commit`，相当于存档，当上传后想回退上一个版本时，可以从最近的一个`commit`恢复。
使用`git log`可以查看`commit`的记录，从而可以很方便回到想回到的版本。
```git
git log
commit c70171709f9735ba59c85aa8cd3a3f669683c207 (HEAD -> master)
Author: 15779728359 <1731381719@qq.com>
Date:   Mon Feb 20 15:45:14 2023 +0800

    text1

commit e90e1c0c135918c1bbf9d3b0922728201e1bad97 (origin/master)
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 17:44:45 2022 +0800

    update md文件

commit 61fd843ad01f72c54b480bb918f180888c18f170
Merge: 914e39d dcf19df
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 17:38:23 2022 +0800

    Merge branch 'home'

commit 914e39dd16885733c5151f3174a2e48f3683fc19
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 17:34:27 2022 +0800

    主分支提交

commit dcf19df43cb1a15c4a9aefd452e87c519347d0ab
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 17:32:55 2022 +0800

    提交home

commit 734054452aebf44665c65f8eb5c06c7b884b6e48
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 17:31:00 2022 +0800

    这是home分支

commit 597ccc53ed17046d35b9edc61b52178640b41ed5
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 17:28:54 2022 +0800

    更新

commit e3fa486fbbf41553234882b7f03b05a208b23ac0
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 14:38:10 2022 +0800

    最最后一次提交

commit 4382e608f009d4bfff7817d98853a4e687de64e2
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 14:31:36 2022 +0800

    第三次提交

commit 2cbe43e751e3a2b125643a60f9ab03a0b3e5a4fd
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 14:28:43 2022 +0800

    第二次提交

commit e234bc0bd2da690e8c9d413eee756d15d7619803
Author: 15779728359 <1731381719@qq.com>
Date:   Tue Sep 27 14:22:16 2022 +0800

    创建products分支，并第一次上传文件
```
 觉得信息太乱，`git log`后添加`--pretty=oneline`输出：
```git
git log --pretty=oneline
c70171709f9735ba59c85aa8cd3a3f669683c207 (HEAD -> master) text1       
e90e1c0c135918c1bbf9d3b0922728201e1bad97 (origin/master) update md文件
61fd843ad01f72c54b480bb918f180888c18f170 Merge branch 'home'
914e39dd16885733c5151f3174a2e48f3683fc19 主分支提交
dcf19df43cb1a15c4a9aefd452e87c519347d0ab 提交home
734054452aebf44665c65f8eb5c06c7b884b6e48 这是home分支
597ccc53ed17046d35b9edc61b52178640b41ed5 更新
e3fa486fbbf41553234882b7f03b05a208b23ac0 最最后一次提交
4382e608f009d4bfff7817d98853a4e687de64e2 第三次提交
2cbe43e751e3a2b125643a60f9ab03a0b3e5a4fd 第二次提交
e234bc0bd2da690e8c9d413eee756d15d7619803 创建products分支，并第一次上传文件
c809eb629b5a2141d912016c1611f4723984d086 初始化完成
f93d4cbc0f7bce5e2b997eabffdd5a664bb30219 初始化 添加自述文件
```
`c70171709f9735ba59c85aa8cd3a3f669683c207`类似这样的是`commit id`(版本号)
要回退上一个版本，首先要知道现在是哪个版本，在Git中，`HEAD`表示当前版本，`HEAD^`表示上一个版本，`HEAD^^`表示上上个版本，往上100个`^`数不过来，可以简写为`HEAD~100`。
回退上一个版本使用命令`git reset`
```git
git reset --hard HEAD^ # --hard 参数后面讲
HEAD is now at 61fd843 Merge branch 'home'
```
### 场景一
现在发现版本回退到了上一版本，使用`git log`发现最新的版本已经不在了，还想回去怎么办。
办法：只要上面的命令行没有关闭，顺着找，找到那个版本的`comit id`，就是那串特别长的数字，就可以再回去。
```git
git reset --hard c70171709f9735ba59c85aa8cd3a3f669683c207
HEAD is now at c701717 text1
```
> 注意：版本号可以不写全，Git会自动去找。


### HEAD指向
Git回退速度很快，因为在 内部有个指向当前版本的HEAD指针，当你回退版本的时候，Git仅仅是把HEAD从指向新的指向
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676880250713-73b9e4d0-6fbf-4b9e-91c6-cc7443be6831.png#averageHue=%23fcfcfb&clientId=ud916808d-0b3b-4&from=paste&height=158&id=u98055d39&name=image.png&originHeight=158&originWidth=290&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7473&status=done&style=none&taskId=u5085805e-6608-448a-8963-08887013e35&title=&width=290)
改为旧的
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676880256412-04713fa4-d749-41b2-b7f5-9023d1e8aa99.png#averageHue=%23fcfbfa&clientId=ud916808d-0b3b-4&from=paste&height=140&id=u8681e072&name=image.png&originHeight=140&originWidth=282&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6669&status=done&style=none&taskId=u2867022c-8543-4983-bbee-e7f71aebeca&title=&width=282)  
 让`HEAD`指向哪个版本号，就把当前版本定位在哪。
### 场景二
回退到了某个版本，关掉了电脑，第二天早上就后悔了，想恢复到新版本怎么办？找不到新版本的`commit id`怎么办？  
办法： Git提供了一个命令`git reflog`用来记录每一次命令：  
```git
git reflog
c701717 (HEAD -> master) HEAD@{0}: reset: moving to c70171709f9735ba59c85aa8cd3a3f669683c207
f93d4cb HEAD@{1}: reset: moving to HEAD^^^^
4382e60 HEAD@{2}: reset: moving to HEAD^^^
7340544 HEAD@{3}: reset: moving to HEAD^^
61fd843 HEAD@{4}: reset: moving to HEAD^
e90e1c0 (origin/master) HEAD@{5}: reset: moving to HEAD^
c701717 (HEAD -> master) HEAD@{6}: commit: text1
```
现在知道了`text1`的`commit id`是`c701717`，现在又可以使用`git reset`回退到最新版本了。
```git
git reset --hard c701717
HEAD is now at c701717 text1
```
## 工作区和暂存区
### 工作区(Working Directory)
 电脑里能看到的目录，比如我的`learngit`文件夹就是一个工作区：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676881177162-6a5d270b-1c1b-477a-b564-9f5cdbb15e00.png#averageHue=%23e6e6e5&clientId=ud916808d-0b3b-4&from=paste&height=362&id=u5f29af72&name=image.png&originHeight=362&originWidth=635&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50104&status=done&style=none&taskId=u898546a7-89f6-42f6-b36d-9e668eee271&title=&width=635)
### 版本库（Repository）
工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库。
Git的版本库里存了很多东西，其中最重要的就是称为`stage`（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。

前面说把文件添加进Git版本库的时候，有两步：
第一步：`git add`添加文件进去，实际上就是添加进暂存区。
第二步：`git commit`提交更改，实际上就是把暂存区的所有内容添加到当前分支。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676881866418-7f842b4c-51d6-4536-b53d-284e4332fad1.png#averageHue=%23e8e8e8&clientId=ud916808d-0b3b-4&from=paste&height=234&id=u440d06ab&name=image.png&originHeight=234&originWidth=458&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50012&status=done&style=none&taskId=u4aae268e-8548-4319-9007-fa2bd1c2662&title=&width=458)
创建Git仓库时，Git自动创建了唯一一个`master`分支，所以现在`git commit`就是往`master`分支上提交更改。
当`git commit`后，暂存区所有内容添加到当前分支，又没有任何修改，那么工作区就是"干净"的。现在版本库变成了这样，暂存区就没有任何内容了。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676881696406-a6681359-9d0f-4d4f-946a-9a9b88609c93.png#averageHue=%23ededed&clientId=ud916808d-0b3b-4&from=paste&height=234&id=u93fb9452&name=image.png&originHeight=234&originWidth=463&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44340&status=done&style=none&taskId=u0f513674-5b17-4487-be51-0d7f44eb1b0&title=&width=463)
## 管理修改
> Git跟踪的是修改，不是文件。

什么是修改？比如新增一行，是一个修改；删除一行，也是一个修改；更改某个字符，也是一个修改；删除一些新增一些，也是修改；甚至创建一个新文件，也算一个修改；
例子：
新增内容，text1.txt
`upodata update2`
然后添加：
`git add text1.txt`
`git status #查看状态`
输出：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676884533595-2956047c-a941-42ca-99c5-ef4cf65872dc.png#averageHue=%232a3039&clientId=ud916808d-0b3b-4&from=paste&height=88&id=u08cf6fd1&name=image.png&originHeight=88&originWidth=372&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6231&status=done&style=none&taskId=ua152b77e-beca-4a13-b708-c010aee8917&title=&width=372)
然后，再修改：
`upodata update2 update3`
提交：
`git commit -m 'update text'`
然后查看状态：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676884702431-a01bb226-04ec-421c-82f3-4d9003b9a294.png#averageHue=%232a3039&clientId=ud916808d-0b3b-4&from=paste&height=138&id=u1a9ce45f&name=image.png&originHeight=138&originWidth=515&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12393&status=done&style=none&taskId=u4135adcf-e2f7-4747-a487-fd4f70b264b&title=&width=515)
怎么没有提交？
> 回顾下过程：
> 第一次修改=》`git add`=》第二次修改=》`git commit`
> 前面讲了Git管理的是提交，当使用`git add`命令的时候，在工作区的第一次修改放入了暂存区，准备提交，但是第二次的修改没有被放入暂存区，所以`git commit`只负责把暂存区的修改提交了，也就是第一次的修改被提交，第二次的没有。

 提交后，用`git diff HEAD -- text1.txt`命令可以查看工作区和版本库里面最新版本的区别：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1676885036502-1035f2ec-55fc-4609-a731-1b82a6a0be7b.png#averageHue=%232a3039&clientId=ud916808d-0b3b-4&from=paste&height=212&id=ua90790dc&name=image.png&originHeight=212&originWidth=363&originalType=binary&ratio=1&rotation=0&showTitle=false&size=13431&status=done&style=none&taskId=u4b06ad7c-473c-4643-b2cd-eec3f340286&title=&width=363)
可见第一次修改没有被提交。
那怎么提交第二次修改呢？
> 可以继续`git add`再`git commit`，也可以别着急提交第一次修改，先`git add`第二次修改，再`git commit`，就相当于把两次修改合并后一块提交了： 
> 过程：
> 第一次修改 => `git add` => 第二次修改 => `git add` => `git commit`

结论：证明提交的是修改不是文件，所以确保`commit`之前`add`所有文件。
## 撤销修改
`git checkout -- <file>`
`git reset --hard HEAD^`
## 删除修改
# 远程仓库
# 分支管理
# 标签管理
