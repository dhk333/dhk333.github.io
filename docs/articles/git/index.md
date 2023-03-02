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
###  场景一
当改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，使用`git checkout -- <file>`。
###  场景二
当不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令`git reset HEAD <file>`，就回到了场景1，第二步按场景1操作。  
### 场景三
 已经提交了不合适的修改到版本库时，想要撤销本次提交，使用`git reset --hard HEAD^`，返回上一版本，不过前提是没有推送到远程库。  
## 删除文件
 在Git中，删除也是一个修改操作。 一般情况下，通常直接在文件管理器中把没用的文件删了，或者用`rm`命令删了：  
```
 rm text.txt
```
这个时候，Git知道删除了文件，因此，工作区和版本库就不一致了，`git status`命令会立刻告诉哪些文件被删除了：  
```git
git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    text.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
 现在有两个选择，一是确实要从版本库中删除该文件，那就用命令`git rm`删掉，并且`git commit`：  
```git
git rm text.txt
rm 'text.txt'

git commit -m 'rm text.txt'
[master eb18dde] rm text.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 text.txt
```
 现在，文件就从版本库中被删除了。  
 提示：先手动删除文件，然后使用`git rm <file>`和`git add<file>`效果是一样的。  
```git
$ git status
On branch master
nothing to commit, working tree clean
```
 另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：  
```git
$ git checkout -- text.txt
```
`git checkout -- <file>`其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。 

## 小结

1. 使用命令`git add`可以将文件添加到暂存区；
2. 使用命令`git commit`将暂存区的文件添加到版本库；
3. 使用命令`git status`可以查看当前状态；
4. 使用`git log`可以打印历史记录，一长串数字是`commit id`，`git log`后面加`--pretty=oneline`可以简化输出；
5. 使用命令`git reset`回退上一个版本；
6. `git reflog`用来记录每一次命令；
7. 当改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，使用`git checkout -- <file>`。
8. 命令`git rm`用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容；  
# 远程仓库
## 添加远程仓库
### gitee
首先登录，登录后点击新建仓库：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1677553422178-5878bc02-ae21-44ba-8dbb-24306284c27c.png#averageHue=%23f8f9eb&clientId=ufd20c8fc-48e0-4&from=paste&height=259&id=u05d45f9b&name=image.png&originHeight=259&originWidth=342&originalType=binary&ratio=1&rotation=0&showTitle=false&size=19637&status=done&style=none&taskId=u70b51dae-745f-4579-9ea1-00d3ebae620&title=&width=342)
输入相关仓库信息，然后点击创建：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1677553586604-8f6da4e0-a451-4b46-a34f-c161510a2013.png#averageHue=%23fdfcfb&clientId=ufd20c8fc-48e0-4&from=paste&height=669&id=ub208b682&name=image.png&originHeight=669&originWidth=800&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47421&status=done&style=none&taskId=u7d323803-1f80-46ce-9a3d-6d6dd2a2090&title=&width=800)
现在可以看到Git全局设置，第一次安装Git后可使用命令设置用户名及邮箱：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1677553810328-23d5834f-946b-4cbb-a405-7c2c9cd70029.png#averageHue=%23b2b2b1&clientId=ufd20c8fc-48e0-4&from=paste&height=145&id=u8b59c90b&name=image.png&originHeight=145&originWidth=456&originalType=binary&ratio=1&rotation=0&showTitle=false&size=8197&status=done&style=none&taskId=ucdac21ae-1107-4860-bfa0-9e3b2344265&title=&width=456)
如果还未创建本地仓库，可按以下命令创建本地仓库：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1677553854951-2468f47d-67ce-4d10-baa5-0fd0d57ae88f.png#averageHue=%23565655&clientId=ufd20c8fc-48e0-4&from=paste&height=207&id=ucbf54fcd&name=image.png&originHeight=207&originWidth=548&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11579&status=done&style=none&taskId=u00681798-3b7c-423e-9f31-696c5349705&title=&width=548)
如果已有仓库按照以下命令将本地仓库推送到远程仓库：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32665636/1677553890558-4368f556-1805-4467-b2ef-94c35167e3a5.png#averageHue=%237b7b7a&clientId=ufd20c8fc-48e0-4&from=paste&height=117&id=u268e9108&name=image.png&originHeight=117&originWidth=575&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6285&status=done&style=none&taskId=u6aee2379-5204-4b09-abf5-41608873ea1&title=&width=575)
把本地库的内容推送到远程，用`git push`命令，实际上是把当前分支`master`推送到远程。
由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。
## 删除远程仓库
 如果添加的时候地址写错了，或者就是想删除远程库，可以用`git remote rm <name>`命令。使用前，建议先用`git remote -v`查看远程库信息：  
```git
$ git remote -v
origin  git@github.com:michaelliao/learn-git.git (fetch)
origin  git@github.com:michaelliao/learn-git.git (push)
```
 然后，根据名字删除，比如删除`origin`：  
```git
$ git remote rm origin
```
 此处的“删除”其实是解除了本地和远程的绑定关系，并不是物理上删除了远程库。远程库本身并没有任何改动。要真正删除远程库，需要登录到Gitee，在后台页面找到删除按钮再删除。  
## 从远程库克隆
 假设我们从零开发，那么最好的方式是先创建远程库，然后，从远程库克隆。  
 首先，登陆GitHub，创建一个新的仓库，名字叫`gitskills`：  
 现在，远程库已经准备好了，下一步是用命令`git clone`克隆一个本地库：  
```git
$ git clone git@github.com:michaelliao/gitskills.git
Cloning into 'gitskills'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 3
Receiving objects: 100% (3/3), done.
```
 注意把Git库的地址换成你自己的，然后进入`gitskills`目录看看，已经有`README.md`文件了：  
```git
$ cd gitskills
$ ls
README.md
```
 如果有多个人协作开发，那么每个人各自从远程克隆一份就可以了。  

## 小结

1. 要关联一个远程库，使用命令`git remote add origin git@server-name:path/repo-name.git`；
2. 关联一个远程库时必须给远程库指定一个名字，`origin`是默认习惯命名；
3. 关联后，使用命令`git push -u origin master`第一次推送`master`分支的所有内容；
4. 此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改；
5. 分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而SVN在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！
6. 要克隆一个仓库，首先必须知道仓库的地址，然后使用`git clone`命令克隆。
7. Git支持多种协议，包括`https`，但`ssh`协议速度最快。
# 分支管理
分支就是科幻电影里面的平行宇宙，当你正在电脑前努力学习Git的时候，另一个你正在另一个平行宇宙里努力学习SVN。
如果两个平行宇宙互不干扰，那对现在的你也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，你既学会了Git又学会了SVN！
![](https://cdn.nlark.com/yuque/0/2023/png/32665636/1677552703280-49e8004a-f47e-4345-a2cf-d6d10c8fafb9.png#averageHue=%23f9f9f9&clientId=ufd20c8fc-48e0-4&from=paste&id=u920bee9a&originHeight=174&originWidth=509&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue2bc7e85-0f00-43a3-825d-b4d2d043c75&title=)
分支在实际中有什么用呢？假设你准备开发一个新功能，但是需要两周才能完成，第一周你写了50%的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。
现在有了分支，就不用怕了。你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。
其他版本控制系统如SVN等都有分支管理，但是用过之后你会发现，这些版本控制系统创建和切换分支比蜗牛还慢，简直让人无法忍受，结果分支功能成了摆设，大家都不去用。
但Git的分支是与众不同的，无论创建、切换和删除分支，Git在1秒钟之内就能完成！无论你的版本库是1个文件还是1万个文件。
## 创建与合并分支
### 创建分支
首次创建`dev`分支，然后切换到`dev`分支
```git
$ git checkout -b dev
```
`git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令：  
```git
$ git branch dev
$ git checkout dev
```
 然后，用`git branch`命令查看当前分支：  
```git
$ git branch
* dev
  master
```
`git branch`命令会列出所有分支，当前分支前面会标一个`*`号。
然后，我们就可以在`dev`分支上正常提交，比如对`readme.txt`做个修改，加上一行：
```git
Creating a new branch is quick.
```
 然后提交：  
```git
$ git add readme.txt 
$ git commit -m "branch test"
[dev b17d20e] branch test
 1 file changed, 1 insertion(+)
```
 现在，`dev`分支的工作完成，我们就可以切换回`master`分支：  
```git
$ git checkout master
Switched to branch 'master'
```
切换回master分支后，再查看一个readme.txt文件，刚才添加的内容不见了！因为那个提交是在dev分支上，而master分支此刻的提交点并没有变：  
![](https://cdn.nlark.com/yuque/0/2023/png/32665636/1677552974380-a480e114-b0b4-42e3-92bc-7f27f4e1d840.png#averageHue=%23fbfafa&clientId=ufd20c8fc-48e0-4&from=paste&id=u3587250b&originHeight=222&originWidth=419&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u2c4b1ea5-ccca-4c50-a88b-4452949a697&title=)
### 合并分支
现在，我们把`dev`分支的工作成果合并到`master`分支上：
```git
$ git merge dev
Updating d46f35e..b17d20e
Fast-forward
 readme.txt | 1 +
 1 file changed, 1 insertion(+)
```
`git merge`命令用于合并指定分支到当前分支。合并后，再查看`readme.txt`的内容，就可以看到，和`dev`分支的最新提交是完全一样的。
注意到上面的`Fast-forward`信息，Git告诉我们，这次合并是“快进模式”，也就是直接把master指向dev的当前提交，所以合并速度非常快。
当然，也不是每次合并都能`Fast-forward`，我们后面会讲其他方式的合并。
合并完成后，就可以放心地删除`dev`分支了：
```git
$ git branch -d dev
Deleted branch dev (was b17d20e).
```
删除后，查看`branch`，就只剩下`master`分支了：  
```git
$ git branch
* master
```
因为创建、合并和删除分支非常快，所以Git鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在`master`分支上工作效果是一样的，但过程更安全。  
### switch
我们注意到切换分支使用`git checkout <branch>`，而前面讲过的撤销修改则是`git checkout -- <file>`，同一个命令，有两种作用，确实有点令人迷惑。
实际上，切换分支这个动作，用`switch`更科学。因此，最新版本的Git提供了新的`git switch`命令来切换分支：
创建并切换到新的`dev`分支，可以使用：
```git
$ git switch -c dev
```
 直接切换到已有的`master`分支，可以使用 ：
```git
git switch master
```
 使用新的`git switch`命令，比`git checkout`要更容易理解。  
### 小结
Git鼓励大量使用分支：
查看分支：`git branch`
创建分支：`git branch <name>`
切换分支：`git checkout <name>`或者`git switch <name>`
创建+切换分支：`git checkout -b <name>`或者`git switch -c <name>`
合并某分支到当前分支：`git merge <name>`
删除分支：`git branch -d <name>`

## 解决冲突
## 分支管理策略
通常，合并分支时，如果可能，Git会用`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息。
如果要强制禁用`Fast forward`模式，Git就会在`merge`时生成一个新的`commit`，这样，从分支历史上就可以看出分支信息。
下面我们实战一下`--no-ff`方式的`git merge`：
首先，仍然创建并切换`dev`分支：
```git
$ git switch -c dev
Switched to a new branch 'dev'
```
 修改`readme.txt`文件，并提交一个新的`commit`：  
```git
$ git add readme.txt 
$ git commit -m "add merge"
[dev f52c633] add merge
 1 file changed, 1 insertion(+)
```
 现在，我们切换回`master`：  
```git
$ git switch master
Switched to branch 'master'
```
 准备合并`dev`分支，请注意`--no-ff`参数，表示禁用`Fast forward`：  
```git
$ git merge --no-ff -m "merge with no-ff" dev
Merge made by the 'recursive' strategy.
 readme.txt | 1 +
 1 file changed, 1 insertion(+)
```
因为本次合并要创建一个新的`commit`，所以加上`-m`参数，把`commit`描述写进去。
合并后，我们用`git log`看看分支历史：
```git
$ git log --graph --pretty=oneline --abbrev-commit
*   e1e9c68 (HEAD -> master) merge with no-ff
|\  
| * f52c633 (dev) add merge
|/  
*   cf810e4 conflict fixed
...
```
 可以看到，不使用`Fast forward`模式，`merge`后就像这样：  
![](https://cdn.nlark.com/yuque/0/2023/png/32665636/1677749511116-166df6cd-3363-4497-88bd-c22669ce153c.png#averageHue=%23fcfbfb&clientId=uc1171269-b8db-4&from=paste&id=ufea1aabc&originHeight=257&originWidth=480&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ubdaf3a47-f197-417e-81b4-1cd18faf0f2&title=)
### 分支策略
在实际开发中，我们应该按照几个基本原则进行分支管理：
首先，`master`分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；
那在哪干活呢？干活都在`dev`分支上，也就是说，`dev`分支是不稳定的，到某个时候，比如`1.0`版本发布时，再把`dev`分支合并到`master`上，在`master`分支发布`1.0`版本；
你和你的小伙伴们每个人都在`dev`分支上干活，每个人都有自己的分支，时不时地往`dev`分支上合并就可以了。
所以，团队合作的分支看起来就像这样：
![](https://cdn.nlark.com/yuque/0/2023/png/32665636/1677749545110-907a28d4-20de-4b02-a8e7-741b5c4d4423.png#averageHue=%23f5f2f0&clientId=uc1171269-b8db-4&from=paste&id=u4f17a6c7&originHeight=125&originWidth=498&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u82a911b2-91b4-4996-9f36-bc12e60c2e4&title=)

### 小结
Git分支十分强大，在团队开发中应该充分应用。
合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并。
## Bug分支

## Featrue分支
## 多人协作
## Rebase
# 标签管理
