# Git使用笔记  
* git init  初始化一个仓库  

* git add .   将当前工作区的修改保存到暂存区  

* git commit -m '注释'   将修改提交到本地仓库  

* git status   查看库的当前状态  

* git diff <文件>   查看具体修改了哪些内容  

* git log   查看近期的提交日志  

* git log --pretty=oneline   查看简化日志  

* git reset --hard HEAD^   返回上一个版本

* cat <文件名>   查看文件内容

* git reset --hard <版本号前4位>   返回到指定版本

* git reflog   查阅每一次命令

* git checkout --<文件名>   让这个文件回到最近一次git commit或者git add的状态

* git reset HEAD <文件名>   把暂存区的修改撤销(unstage)，重新放回工作区

* git rm <文件名>   

  git commit -m "remove <文件名>"   删除本地库里的文件

* git checkout --< 文件名>   误删文件后，用版本库里的版本替换工作区的版本

* git remote add origin git@gitee.com:ZcczCC123/learngit.git   将本地库与远程库关联，git@。。。由远程库的SSH格式的地址提供

* git remote rm origin   删除已关联的名为origin的远程库

* git remote add gitee git@gitee.com:ZcczCC123/learngit.git   关联到gitee的远程库

* git remote add github git@github.com:ZhangChiChen/ZhangChiChen.github.io   关联到github的远程库

* git remote -v   查看当前关联的远程库

* git push gitee master 推送到gitee

* git push github master 推送到github 

  