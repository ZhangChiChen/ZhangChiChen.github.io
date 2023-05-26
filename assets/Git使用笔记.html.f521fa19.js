import{_ as i,o as t,c as e,d as l}from"./app.2bb7c9ba.js";const g={},p=l('<h1 id="git使用笔记" tabindex="-1"><a class="header-anchor" href="#git使用笔记" aria-hidden="true">#</a> Git使用笔记</h1><ul><li><p>git init 初始化一个仓库</p></li><li><p>git add . 将当前工作区的修改保存到暂存区</p></li><li><p>git commit -m &#39;注释&#39; 将修改提交到本地仓库</p></li><li><p>git status 查看库的当前状态</p></li><li><p>git diff &lt;文件&gt; 查看具体修改了哪些内容</p></li><li><p>git log 查看近期的提交日志</p></li><li><p>git log --pretty=oneline 查看简化日志</p></li><li><p>git reset --hard HEAD^ 返回上一个版本</p></li><li><p>cat &lt;文件名&gt; 查看文件内容</p></li><li><p>git reset --hard &lt;版本号前4位&gt; 返回到指定版本</p></li><li><p>git reflog 查阅每一次命令</p></li><li><p>git checkout --&lt;文件名&gt; 让这个文件回到最近一次git commit或者git add的状态</p></li><li><p>git reset HEAD &lt;文件名&gt; 把暂存区的修改撤销(unstage)，重新放回工作区</p></li><li><p>git rm &lt;文件名&gt;</p><p>git commit -m &quot;remove &lt;文件名&gt;&quot; 删除本地库里的文件</p></li><li><p>git checkout --&lt; 文件名&gt; 误删文件后，用版本库里的版本替换工作区的版本</p></li><li><p>git remote add origin git@gitee.com:ZcczCC123/learngit.git 将本地库与远程库关联，git@。。。由远程库的SSH格式的地址提供</p></li><li><p>git remote rm origin 删除已关联的名为origin的远程库</p></li><li><p>git remote add gitee git@gitee.com:ZcczCC123/learngit.git 关联到gitee的远程库</p></li><li><p>git remote add github git@github.com:ZhangChiChen/ZhangChiChen.github.io 关联到github的远程库</p></li><li><p>git remote -v 查看当前关联的远程库</p></li><li><p>git push gitee master 推送到gitee</p></li><li><p>git push github master 推送到github</p></li></ul>',2),o=[p];function r(a,c){return t(),e("div",null,o)}const n=i(g,[["render",r],["__file","Git使用笔记.html.vue"]]);export{n as default};
