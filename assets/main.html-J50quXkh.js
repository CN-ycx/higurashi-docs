import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,c as p,b as l,e as n,d as a,w as e,a as u,o as d}from"./app-Kec1IZuq.js";const h={},g=l("div",{class:"hint-container tip"},[l("p",{class:"hint-container-title"},"本文译自 07th-mod 官网"),l("p",null,[n("如需阅读原文，请点击"),l("a",{href:"https://07th-mod.com/wiki/Higurashi/Manual-Installation/",target:"_blank",rel:"noopener noreferrer"},"这里"),n("。")])],-1),m={class:"hint-container caution"},_=l("p",{class:"hint-container-title"},"阅读前请注意！",-1),f=l("p",null,"本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁或仅语音补丁，并不包含汉化补丁的安装教程。",-1),y=u('<div class="hint-container warning"><p class="hint-container-title">注意存档的兼容性！</p><p>打了旧版本补丁或是由原版游戏保存的存档没法兼容打了新版补丁的游戏。虽然加载之后大多数情况下看着还好，但玩着玩着最后肯定是会遇到问题的。我们的建议是从头开始游戏，或者使用 “章节跳跃” 功能跳转到之前玩到的章节。也可以通过按 <code>Ctrl</code> 键跳过阅读过的文本。</p></div><div class="hint-container info"><p class="hint-container-title">如何解压 .7z 压缩包？</p><ul><li><p>Windows：下载 <a href="https://7-zip.org/" target="_blank" rel="noopener noreferrer">7-zip</a>、<a href="https://www.bandisoft.com/bandizip/" target="_blank" rel="noopener noreferrer">Bandizip</a>、<a href="https://www.win-rar.com/start.html?&amp;L=7" target="_blank" rel="noopener noreferrer">WinRAR</a> 等解压软件</p></li><li><p>Linux：使用包管理器安装 <code>p7zip</code></p></li><li><p>Mac：下载 <a href="https://www.keka.io/zh-cn/" target="_blank" rel="noopener noreferrer">Keka</a></p></li></ul></div><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2><p>打开 <a href="https://07th-mod.com" target="_blank" rel="noopener noreferrer">07th-mod 官网</a>。</p><p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-main.jpg" alt=""></p><p>点击 <code>INSTALL THE PATCH</code>。页面跳转后，在左侧的导航栏找到 <code>Higurashi</code> 标签并点击展开。</p><p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-wiki.jpg" alt=""></p><p>子标签从上到下分别为 <code>介绍</code>、<code>自动安装器</code>、<code>手动安装</code>、<code>快捷键与设置</code>、<code>仅语音补丁</code>、<code>常见问题解答</code> (包含 <code>Linux 系统与 Steam Deck</code>、<code>背景音乐与音效</code> 以及 <code>澪尽篇</code>)、<code>获得支持</code>、<code>卸载 Mod 及游戏</code>。</p><p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-higurashi.jpg" alt=""></p><p>由于 07th-mod 网站的服务器架设在国外，在国内使用自动安装器的体验不佳，且安装器容易被杀毒软件误删，因此我们推荐使用手动安装 (Manual Installation)，本文也将只介绍手动安装的方法。</p><h2 id="安装完整高清语音补丁" tabindex="-1"><a class="header-anchor" href="#安装完整高清语音补丁"><span>安装完整高清语音补丁</span></a></h2><p>请选择 <strong>手动安装 (Manual Installation)</strong> 标签，滚动到网页的下方可以找到各个文件的下载地址。</p><p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-full-patch.jpg" alt=""></p><p>以下分别对应了 Windows/Linux 和 Mac OSX 的安装教程。</p>',14),x=l("div",{class:"hint-container caution"},[l("p",{class:"hint-container-title"},"注意"),l("p",null,[l("strong",null,"我们已经在 2022 年 11 月 13 日的更新中修复了这个问题。如果在最新版的补丁上仍然会崩溃，请联系我们。")]),l("details",{class:"hint-container details"},[l("summary",null,"[已修复] Linux 用户：使用窗口模式会导致游戏或 GNOME/MATE 桌面崩溃"),l("hr"),l("h4",{id:"复现问题",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#复现问题"},[l("span",null,"复现问题")])]),l("p",null,"这个问题会在以下情况被复现："),l("ul",null,[l("li",null,"从全屏幕模式切到窗口模式"),l("li",null,"游戏以窗口模式启动"),l("li",null,"拖动游戏窗口")]),l("p",null,"如果始终以全屏幕模式进行游戏，那应该都不会出现这个问题。"),l("p",null,"这个问题似乎只会影响到《第三章》到《第六章》，尽管理论上在《第一章》和《第二章》也会出现，甚至在原版游戏上也会发生这个问题。"),l("p",null,"不是所有的桌面环境都会出现问题，不过已知 GNOME 桌面环境会受到影响。"),l("h4",{id:"问题症状",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#问题症状"},[l("span",null,"问题症状")])]),l("p",null,"当错误发生时，游戏窗口将会变得非常大或者非常小，并且整个屏幕将变为黑色或蓝色。"),l("p",null,"错误发生之后，游戏可能会卡死、崩溃，甚至会让你的桌面环境崩溃。"),l("h4",{id:"引发问题的原因",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#引发问题的原因"},[l("span",null,"引发问题的原因")])]),l("p",null,[n("这个问题是由于 Unity 引擎 ≤ "),l("code",null,"5.5.3p3"),n(" 版本的调整窗口大小函数损坏，此函数会发送未初始化的栈数据给 "),l("code",null,"XSetWMNormalHints"),n("。")]),l("p",null,"想了解更多信息，请阅读以下文章："),l("ul",null,[l("li",null,[l("p",null,[l("a",{href:"https://github.com/07th-mod/higurashi-assembly/pull/93",target:"_blank",rel:"noopener noreferrer"},"Merged PR: Fix Unity killing window managers with insane window size (英文)")])]),l("li",null,[l("p",null,[l("a",{href:"https://github.com/07th-mod/higurashi-assembly/pull/91",target:"_blank",rel:"noopener noreferrer"},"Draft PR: Linux gnome crash workaround (英文)")])]),l("li",null,[l("p",null,[l("a",{href:"https://github.com/07th-mod/higurashi-patch-compiler/issues/58",target:"_blank",rel:"noopener noreferrer"},"Issue: Linux GNOME desktop environment crash / corrupted configuration file issue (英文)")])])])])],-1),v=l("ol",null,[l("li",null,[l("p",null,"找到并打开游戏根目录"),l("ul",null,[l("li",null,[n("Steam 用户：打开 Steam 游戏库，从列表中选择游戏，"),l("code",null,"右键点击游戏"),n("→"),l("code",null,"管理"),n("→"),l("code",null,"浏览本地文件"),n("。")])])]),l("li",null,[l("p",null,[n("在 "),l("code",null,"下载 (Download)"),n(" 区域的表格中，你需要下载"),l("strong",null,"每种类型的文件"),n("各一个。也就是说，你需要下载以下文件：")]),l("ul",null,[l("li",null,[l("p",null,"Patch (补丁主程序)")]),l("li",null,[l("p",null,"Graphics patch (图像资源文件)")]),l("li",null,[l("p",null,"Voices (语音文件)")]),l("li",null,[l("p",null,"BGM & SE (背景音乐与音效文件)")]),l("li",null,[l("p",null,"Movies (影片文件, 根据自己的系统选择一个)")]),l("li",null,[l("p",null,"UI Mod (用户界面资源文件, 根据自己的系统和游戏版本选择一个)")]),l("li",null,[l("p",null,"Update (其他修复文件)")]),l("li",null,[l("p",null,"仅主机版追加篇章 (如《凭落篇》、《澪尽篇》等)：System Files (根据自己的系统选择一个)")])])]),l("li",null,[l("p",null,[n("进入 "),l("code",null,"HigurashiEp0X_Data/StreamingAssets"),n(" 目录 ("),l("code",null,"X"),n(" 是游戏篇章的编号)，并"),l("strong",null,"删除"),n(),l("code",null,"CG"),n(" 和 "),l("code",null,"CGAlt"),n(" 文件夹。")]),l("ul",null,[l("li",null,[l("p",null,"这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。")]),l("li",null,[l("p",null,[l("strong",null,"汉化组提示"),n("：说白了就是不用删，除非你的硬盘空间不够，否则在后面安装补丁的时候直接"),l("strong",null,"覆盖文件"),n("即可。")])])])]),l("li",null,[l("p",null,[n("查看 "),l("code",null,"下载 (Download)"),n(" 区域的表格，并按照如下方式操作：")]),l("ul",null,[l("li",null,[l("p",null,[n("将"),l("strong",null,"不带特殊符号"),n("的所有压缩文件解压到游戏根目录。")])]),l("li",null,[l("p",null,[l("strong",null,"汉化组提示"),n("：")]),l("ul",null,[l("li",null,[l("p",null,[n("打开压缩包，正常你会看到 "),l("code",null,"HigurashiEp0X_Data"),n(" 文件夹，把它"),l("strong",null,"替换到根目录"),n("即可。"),l("strong",null,"如果你看到的不是这个文件夹，请看第三点。")])]),l("li",null,[l("p",null,[n("一般带有表情符号的只有 Patch、BGM & SE、Update 三个压缩包。"),l("strong",null,"除了出题篇的四章外，其他章节可能还有其他需要额外覆盖的文件，请自行检查下表格。")])]),l("li",null,[l("p",null,[n("BGM & SE 需要解压到 "),l("code",null,"HigurashiEp0X_Data/StreamingAssets"),n(" 下面，"),l("strong",null,"而不是游戏根目录"),n("。")])]),l("li",null,[l("p",null,[n("Patch 和 Update 需要在"),l("strong",null,"解压完所有压缩包之后最后安装"),n("，并且正常的话会提示"),l("strong",null,"有文件需要覆盖"),n("，选择"),l("strong",null,"替换"),n("即可。")])])])])])]),l("li",null,[l("p",null,"在确定游戏可以运行后，删除所有下载的压缩包。")])],-1),w=l("ol",null,[l("li",null,[l("p",null,"找到并打开游戏根目录"),l("ul",null,[l("li",null,[l("p",null,[n("Steam 用户：打开 Steam 游戏库，从列表中选择游戏，"),l("code",null,"右键点击游戏"),n("→"),l("code",null,"管理"),n("→"),l("code",null,"浏览本地文件"),n("。")])]),l("li",null,[l("p",null,[n("如果你只看到了叫做 "),l("code",null,"HigurashiEp0X"),n(" ("),l("code",null,"X"),n(" 是游戏篇章的编号)，右击它，然后点击 "),l("code",null,"显示包内容 (Show Package Contents)"),n(" 来打开 "),l("code",null,"Contents"),n(" 文件夹。")])]),l("li",null,[l("p",null,[n("游戏文件夹 ("),l("code",null,"Contents"),n(" 文件夹) 应该包括 "),l("code",null,"Resources"),n("、"),l("code",null,"MacOS"),n("、"),l("code",null,"Plugins"),n("、"),l("code",null,"Frameworks"),n(" 以及其它文件夹。我们只会修改 "),l("code",null,"Resources"),n(" 文件夹。")])])])]),l("li",null,[l("p",null,[n("在 "),l("code",null,"下载 (Download)"),n(" 区域的表格中，你需要下载"),l("strong",null,"每种类型的文件"),n("各一个。也就是说，你需要下载以下文件：")]),l("ul",null,[l("li",null,[l("p",null,"Patch (补丁主程序)")]),l("li",null,[l("p",null,"Graphics patch (图像资源文件)")]),l("li",null,[l("p",null,"Voices (语音文件)")]),l("li",null,[l("p",null,"BGM & SE (背景音乐与音效文件)")]),l("li",null,[l("p",null,"Movies (影片文件, 根据自己的系统选择一个)")]),l("li",null,[l("p",null,"UI Mod (用户界面资源文件, 根据自己的系统和游戏版本选择一个)")]),l("li",null,[l("p",null,"Update (其他修复文件)")]),l("li",null,[l("p",null,"仅主机版追加篇章 (如《凭落篇》、《澪尽篇》等)：System Files (根据自己的系统选择一个)")])])]),l("li",null,[l("p",null,[n("进入 "),l("code",null,"Resources/Data/StreamingAssets"),n(" 文件夹，并"),l("strong",null,"删除"),n(),l("code",null,"CG"),n(" 和 "),l("code",null,"CGAlt"),n(" 文件夹。")]),l("ul",null,[l("li",null,[l("p",null,"这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。")]),l("li",null,[l("p",null,[l("strong",null,"汉化组提示"),n("：说白了就是不用删，除非你的硬盘空间不够，否则在后面安装补丁的时候直接"),l("strong",null,"覆盖文件"),n("即可。")])])])]),l("li",null,[l("p",null,[n("返回 "),l("code",null,"Resources/Data"),n(" 文件夹，用以下方法解压所有下载的文件：")]),l("ul",null,[l("li",null,[l("p",null,[n("将"),l("strong",null,"不带特殊符号"),n("的所有压缩文件解压到 "),l("code",null,"Resources/Data"),n(" (与游戏可执行文件 "),l("code",null,".exe"),n(" 同级)，"),l("strong",null,"BGM & SE 的压缩文件先不操作"),n("。")])]),l("li",null,[l("p",null,[n("Patch 和 Update 需要在"),l("strong",null,"解压完所有压缩包之后，BGM&SE 的压缩包之前解压"),n("，并且正常的话会提示"),l("strong",null,"有文件需要覆盖"),n("，选择"),l("strong",null,"替换"),n("即可。")])]),l("li",null,[l("p",null,[l("strong",null,"汉化组提示"),n("：打开压缩包，正常你会看到 "),l("code",null,"HigurashiEp0X_Data"),n(" 文件夹。把它"),l("strong",null,[n("解压到 "),l("code",null,"Resources/Data")]),n(" 即可。")])]),l("li",null,[l("p",null,[n("一般带有表情符号的只有 Patch、BGM & SE、Update 三个压缩包。没有额外说明的话，都是解压到 "),l("code",null,"Resources/Data"),n(" 目录下。"),l("strong",null,"除了出题篇的四章外，其他章节可能还有其他需要额外覆盖的文件，请自行检查下表格。")])])])]),l("li",null,[l("p",null,[n("完成后，应该会生成一个 "),l("code",null,"HigurashiEp0X_Data"),n(" 文件夹 ("),l("code",null,"X"),n(" 是游戏篇章的编号)，完整路径应该是 "),l("code",null,"Resources/Data/HigurashiEp0X_Data"),n("。")])]),l("li",null,[l("p",null,[n("在 "),l("code",null,"Resources/Data"),n(" 文件夹下打开终端窗口，输入 "),l("code",null,"rsync -avP HigurashiEp*/* ."),n(" 并按下回车。等待文件复制完成。如果不知道如何操作，可以查看下方的教程，或者访问"),l("a",{href:"https://stackoverflow.com/a/7054045",target:"_blank",rel:"noopener noreferrer"},"这篇文章 (英文)"),n("。")])])],-1),b=l("details",{class:"hint-container details"},[l("summary",null,"启用 “在当前位置打开终端” 功能并执行命令的图文教程"),l("ol",null,[l("li",null,[n("进入 "),l("code",null,"键盘快捷键"),n(" 的 "),l("code",null,"服务"),n(" 分类，此处有两种操作方法：")])]),l("ul",null,[l("li",null,[l("p",null,[n("点击位于屏幕顶部的 “访达” 菜单栏，选择 "),l("code",null,"服务"),n("→"),l("code",null,"服务设置…"),n("。")])]),l("li",null,[l("p",null,[n("进入 "),l("code",null,"系统设置"),n("，找到在菜单栏最底部的 "),l("code",null,"键盘"),n("，选择 "),l("code",null,"键盘快捷键"),n("，然后再选择 "),l("code",null,"服务"),n("。")])])]),l("ol",{start:"2"},[l("li",null,[n("在 "),l("code",null,"服务"),n(" 窗口中展开 "),l("code",null,"文件和文件夹"),n("，勾选上 "),l("code",null,"新建位于文件夹位置的终端标签页/窗口"),n(" (可以只勾选其中一个，也可以都勾选上)，然后点击 "),l("code",null,"完成"),n("。")])]),l("p",null,[l("img",{src:"https://cdn.iycx.top/higurashi/guide/install-mac-1.png",alt:""})]),l("ol",{start:"3"},[l("li",null,[n("回到 "),l("code",null,"Resources/Data"),n(" 文件夹，右键点击 "),l("code",null,"Data"),n(" 文件夹，选择 "),l("code",null,"服务"),n("→"),l("code",null,"新建位于文件夹位置的终端标签页/窗口"),n(" (两个选项都可以)。")])]),l("p",null,[l("img",{src:"https://cdn.iycx.top/higurashi/guide/install-mac-2.png",alt:""})]),l("ol",{start:"4"},[l("li",null,[n("打开的终端应该会显示 "),l("code",null,"用户名@主机名 Data % █"),n("，输入 "),l("code",null,"rsync -avP HigurashiEp*/* ."),n(" 并按下回车键，等待命令执行结束即可。")])])],-1),k=l("ol",{start:"7"},[l("li",null,[l("p",null,[n("解压 BGM & SE 压缩包到 "),l("code",null,"Resources/Data/StreamingAssets"),n(" 文件夹下。")])]),l("li",null,[l("p",null,[n("在确定游戏可以运行后，删除所有下载的压缩包以及 "),l("code",null,"HigurashiEp0X_Data"),n(" 文件夹。")])])],-1),S=u('<h2 id="安装仅语音补丁-不推荐" tabindex="-1"><a class="header-anchor" href="#安装仅语音补丁-不推荐"><span>安装仅语音补丁 (不推荐)</span></a></h2><div class="hint-container caution"><p class="hint-container-title">我们不推荐安装仅语音补丁</p><p>仅语音补丁提供了最小的文件修改，即仅为原版游戏添加了语音的支持。</p><p>如果你遇到了问题，07th-mod 可能不会为你提供帮助。</p><p>不过如果你遇到了有关于汉化补丁的问题，汉化组仍然可以为你提供支持。</p></div><p>请选择 <strong>仅语音补丁 (Voice-only Patch)</strong> 标签。</p><p>找到下载页面。</p><p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-voice-only-patch.jpg" alt=""></p><p>Patch 和 Voices 必须下载，最后一个 HD Ryukishi Sprites 是高清龙绘补丁，可选择下载。</p><p>下载完毕后，可按照上方的安装教程安装。</p><h2 id="下载相关" tabindex="-1"><a class="header-anchor" href="#下载相关"><span>下载相关</span></a></h2><p>由于 07th-mod 网站的服务器架设在国外，在国内下载速度并不是很理想，所以我们做了所有文件的镜像。</p><p>虽然不能保证文件及时更新，但是我们会保证与我们汉化补丁支持的版本保持一致。</p><p>可以在导航栏的 <code>下载中心</code> 处找到链接，链接里能找到 07th-mod 所需的安装文件以及汉化补丁安装包。</p><p><strong>下载站是纯公益提供，是为了让玩家能有好的文件下载体验，希望大家不要滥用。</strong></p><p><strong>如果可以的话，我们仍然希望可以保存到自己的网盘，然后使用自己的账号下载。</strong></p><p>另外，如果你有好的文件下载分流方案，可以联系我们，在这里十分感谢。</p>',14);function M(D,E){const r=i("RouteLink"),c=i("Tabs");return d(),p("div",null,[g,l("div",m,[_,f,l("p",null,[n("如果你想安装我们的汉化补丁，请查看"),a(r,{to:"/patch/list.html"},{default:e(()=>[n("补丁列表")]),_:1}),n("。")])]),y,a(c,{id:"73",data:[{id:"Windows/Linux"},{id:"Mac OSX"}]},{title0:e(({value:t,isActive:o})=>[n("Windows/Linux")]),title1:e(({value:t,isActive:o})=>[n("Mac OSX")]),tab0:e(({value:t,isActive:o})=>[x,v]),tab1:e(({value:t,isActive:o})=>[w,b,k]),_:1}),S])}const H=s(h,[["render",M],["__file","main.html.vue"]]),P=JSON.parse('{"path":"/guide/07th-mod/main.html","title":"安装指南","lang":"zh-CN","frontmatter":{"icon":"file-arrow-down","title":"安装指南","author":"Lancher, ycx","category":"使用指南","tag":["07th-mod","安装指南"],"article":false,"order":2,"description":"本文译自 07th-mod 官网 如需阅读原文，请点击这里。 阅读前请注意！ 本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁或仅语音补丁，并不包含汉化补丁的安装教程。 如果你想安装我们的汉化补丁，请查看。 注意存档的兼容性！ 打了旧版本补丁或是由原版游戏保存的存档没法兼容打了新版补丁的游戏。虽然加载之后大多数情况下看着还好，但玩着玩着最...","head":[["meta",{"property":"og:url","content":"https://higurashi.ycx-studios.site/guide/07th-mod/main.html"}],["meta",{"property":"og:site_name","content":"《寒蝉鸣泣之时》系列简体中文汉化补丁官方网站"}],["meta",{"property":"og:title","content":"安装指南"}],["meta",{"property":"og:description","content":"本文译自 07th-mod 官网 如需阅读原文，请点击这里。 阅读前请注意！ 本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁或仅语音补丁，并不包含汉化补丁的安装教程。 如果你想安装我们的汉化补丁，请查看。 注意存档的兼容性！ 打了旧版本补丁或是由原版游戏保存的存档没法兼容打了新版补丁的游戏。虽然加载之后大多数情况下看着还好，但玩着玩着最..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://cdn.iycx.top/higurashi/guide/07th-mod-main.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-24T09:54:11.000Z"}],["meta",{"property":"article:author","content":"Lancher, ycx"}],["meta",{"property":"article:tag","content":"07th-mod"}],["meta",{"property":"article:tag","content":"安装指南"}],["meta",{"property":"article:modified_time","content":"2024-04-24T09:54:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"安装指南\\",\\"description\\":\\"本文译自 07th-mod 官网 如需阅读原文，请点击这里。 阅读前请注意！ 本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁或仅语音补丁，并不包含汉化补丁的安装教程。 如果你想安装我们的汉化补丁，请查看。 注意存档的兼容性！ 打了旧版本补丁或是由原版游戏保存的存档没法兼容打了新版补丁的游戏。虽然加载之后大多数情况下看着还好，但玩着玩着最...\\"}"]]},"headers":[{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"安装完整高清语音补丁","slug":"安装完整高清语音补丁","link":"#安装完整高清语音补丁","children":[]},{"level":2,"title":"安装仅语音补丁 (不推荐)","slug":"安装仅语音补丁-不推荐","link":"#安装仅语音补丁-不推荐","children":[]},{"level":2,"title":"下载相关","slug":"下载相关","link":"#下载相关","children":[]}],"git":{"createdTime":1627407938000,"updatedTime":1713952451000,"contributors":[{"name":"ycx","email":"ycx1287984258@163.com","commits":12}]},"readingTime":{"minutes":9.31,"words":2792},"filePathRelative":"guide/07th-mod/main.md","localizedDate":"2021年7月27日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">本文译自 07th-mod 官网</p>\\n<p>如需阅读原文，请点击<a href=\\"https://07th-mod.com/wiki/Higurashi/Manual-Installation/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">这里</a>。</p>\\n</div>\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">阅读前请注意！</p>\\n<p>本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁或仅语音补丁，并不包含汉化补丁的安装教程。</p>\\n<p>如果你想安装我们的汉化补丁，请查看<a href=\\"/patch/list.html\\" target=\\"_blank\\">补丁列表</a>。</p>\\n</div>","copyright":{"author":"Lancher, ycx"},"autoDesc":true}');export{H as comp,P as data};
