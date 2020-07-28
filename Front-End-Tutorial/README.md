<h1 id="LFroJ">Front-End Tutorial with ST &amp; Aliyun IoT</h1>
<p>欢迎来到由ST和阿里云IoT共同和推出的基于STM32和阿里云物联网平台的全栈开发教程，此部分项目代码为系统的前端部分，在硬件设备数据上云后，服务端程序会将设备数据实时存储在数据库当中，前端应用则是后端数据和用户交互的直接接口。</p>
<p style="text-align: center;"><img alt="image.png" title="image.png" src="https://cdn.nlark.com/yuque/0/2019/png/106579/1562853530600-0298fc7f-da6c-477e-bff1-3bb7492e1f9f.png#align=left&amp;display=inline&amp;height=334&amp;name=image.png&amp;originHeight=1978&amp;originWidth=3104&amp;size=715863&amp;status=done&amp;width=525" style="max-width: 600px; width: 525px;" /></p>
<p><br /></p>
<h2 id="pDbJY">程序构成</h2>
<p>本项目由三个工程文件夹，exercise1，exercise2，exercise3，对应教程内容中前端开发的三个阶段，分别是：</p>
<ul>
  <li>exercise1：搭建好项目的UI骨架，实现项目的组件化拆解。</li>
</ul>
<p style="text-align: center;"><img alt="image.png" title="image.png" src="https://cdn.nlark.com/yuque/0/2019/png/106579/1562853761594-114829d0-a1d6-40d4-9acf-ca1df2cfdb06.png#align=left&amp;display=inline&amp;height=357&amp;name=image.png&amp;originHeight=961&amp;originWidth=1443&amp;size=185202&amp;status=done&amp;width=535" style="max-width: 600px; width: 535px;" /></p>
<ul>
  <li>exercise2：完成项目的UI部分，采用虚拟的数据。</li>
</ul>
<p style="text-align: center;"><img alt="image.png" title="image.png" src="https://cdn.nlark.com/yuque/0/2019/png/106579/1562853844327-f0d331af-3d29-4f7c-97fb-c67efebb4ef7.png#align=left&amp;display=inline&amp;height=344&amp;name=image.png&amp;originHeight=1916&amp;originWidth=2864&amp;size=568204&amp;status=done&amp;width=515" style="max-width: 600px; width: 515px;" /></p>
<p><br /></p>
<ul>
  <li>exercise3：基于dva和axios实现数据流转</li>
</ul>
<p style="text-align: center;"><img alt="image.png" title="image.png" src="https://cdn.nlark.com/yuque/0/2019/png/106579/1562853907660-b69d2e12-ba80-4811-886c-e4a144e4826f.png#align=left&amp;display=inline&amp;height=291&amp;name=image.png&amp;originHeight=1586&amp;originWidth=2692&amp;size=341816&amp;status=done&amp;width=494" style="max-width: 600px; width: 494px;" /></p>
<p><br /></p>
<h2 id="RYOSz">项目依赖</h2>
<p>本项目开发和运行依赖以下软件程序：</p>
<ul>
  <li>node.js（项目启动的环境）</li>
  <li>git（拉取项目代码）</li>
  <li>vscode（编辑和启动项目）</li>
</ul>
<p><br /></p>
<h2 id="HvaBO">项目启动</h2>
<p>下载本项目代码可以通过Git仓库直接下载项目压缩包解压，或通过git clone下载，当项目下载到本地后，需要使用vscode软件打开项目工程，呈现以下目录结构：</p>
<p style="text-align: center;"><img alt="image.png" title="image.png" src="https://cdn.nlark.com/yuque/0/2019/png/106579/1562854131879-4cea510f-e8ab-4c94-a10a-894722079633.png#align=left&amp;display=inline&amp;height=377&amp;name=image.png&amp;originHeight=1440&amp;originWidth=1940&amp;size=386870&amp;status=done&amp;width=508" style="max-width: 600px; width: 508px;" /></p>
<p style="text-align: left;">使用<code>control + `</code>组合键呼出命令行终端（windows环境默认cmd，linux/macOS环境默认terminal），执行<code>cd exercise1</code>即可进入 exercise1项目文件夹，其余同理，输入<code>npm install --save</code>命令下载载软件包环境依赖（需要等待几分钟，视网络而定），输入<code>npm start</code>本地启动项目，启动程序即会自动打开浏览器呈现前端项目页面。</p>
<p style="text-align: center;"><img alt="image.png" title="image.png" src="https://cdn.nlark.com/yuque/0/2019/png/106579/1562854413699-47f4c280-ce1f-4947-80ce-a6d3d71f2392.png#align=left&amp;display=inline&amp;height=353&amp;name=image.png&amp;originHeight=1440&amp;originWidth=1940&amp;size=389524&amp;status=done&amp;width=475" style="max-width: 600px; width: 475px;" /></p>
<p><br /></p>