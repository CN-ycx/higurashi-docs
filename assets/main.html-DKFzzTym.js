import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as d,c as h,b as l,e as n,d as t,w as o,a as c}from"./app-BuvWM2am.js";const _={},m={class:"hint-container tip"},g=l("p",{class:"hint-container-title"},"本文译自 07th-mod 官网",-1),f={href:"https://07th-mod.com/wiki/Higurashi/Manual-Installation/",target:"_blank",rel:"noopener noreferrer"},y={class:"hint-container caution"},x=l("p",{class:"hint-container-title"},"阅读前请注意！",-1),k=l("p",null,"本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁，并不包含本汉化补丁的安装教程。",-1),w=l("div",{class:"hint-container warning"},[l("p",{class:"hint-container-title"},"多当心旧的存档！"),l("p",null,[n("由旧版本补丁或是原版游戏保存的存档可能无法与新版的补丁正常工作。虽然有时候看起来可能很正常，但加载后最终肯定会遇到问题。我们的建议是从头开始游戏，或者使用 “章节跳跃” 功能跳转到之前玩到的章节。也可以通过按 "),l("code",null,"Ctrl"),n(" 键跳过阅读过的文本。")])],-1),b={class:"hint-container info"},v=l("p",{class:"hint-container-title"},"如何解压 .7z 压缩包？",-1),S={href:"https://7-zip.org/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.bandisoft.com/bandizip/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.win-rar.com/start.html?&L=7",target:"_blank",rel:"noopener noreferrer"},D=l("li",null,[l("p",null,[n("Linux：在包管理器中安装 "),l("code",null,"p7zip")])],-1),L={href:"https://www.keka.io/",target:"_blank",rel:"noopener noreferrer"},R=l("h2",{id:"准备工作",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#准备工作"},[l("span",null,"准备工作")])],-1),G={href:"https://07th-mod.com",target:"_blank",rel:"noopener noreferrer"},H=c('<p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-main.jpg" alt=""></p><p>点击 <code>INSTALL THE PATCH</code>。</p><p>页面跳转后，在左侧找到 <code>Higurashi</code> 的标签并点击。</p><p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-wiki.jpg" alt=""></p><p>子标签从上到下分别为 <code>介绍</code>、<code>自动安装器</code>、<code>手动安装</code>、<code>快捷键与设置</code>、<code>仅语音补丁</code>、<code>常见问题解答</code> (包含 <code>Linux 系统与 Steam Deck 部分</code>、<code>Linux 系统与 Steam Deck 部分</code> 以及 <code>澪尽篇部分</code>)、<code>获得支持</code>、<code>卸载 Mod 及游戏</code>。</p><p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-higurashi.jpg" alt=""></p><p>由于 07th-mod 网站的服务器架设在国外，在国内使用自动安装器的体验不佳，且安装器容易被杀毒软件误删，因此我们推荐使用手动安装 (Manual Installation)，本文也将只介绍手动安装的方法。</p><h2 id="安装完整高清语音补丁" tabindex="-1"><a class="header-anchor" href="#安装完整高清语音补丁"><span>安装完整高清语音补丁</span></a></h2><p>请选择 <strong>手动安装 (Manual Installation)</strong> 标签，滚动到网页的下方可以找到各个文件的下载地址。</p><p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-full-patch.jpg" alt=""></p><p>以下分别对应了 Windows/Linux 和 Mac OSX 的安装教程。</p>',11),P={class:"hint-container caution"},X=l("p",{class:"hint-container-title"},"注意",-1),A=l("p",null,[l("strong",null,"我们已经在 2022 年 11 月 13 日的更新中修复了这个问题。如果在最新版的补丁上仍然会崩溃，请联系我们。")],-1),C={class:"hint-container details"},B=l("summary",null,"[已修复] Linux 用户：使用窗口模式会导致游戏或 GNOME/MATE 桌面崩溃",-1),N=l("hr",null,null,-1),T=l("h4",{id:"复现问题",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#复现问题"},[l("span",null,"复现问题")])],-1),z=l("p",null,"这个问题会在以下情况被复现：",-1),I=l("ul",null,[l("li",null,"从全屏幕模式切到窗口模式"),l("li",null,"游戏以窗口模式启动"),l("li",null,"拖动游戏窗口")],-1),U=l("p",null,"如果始终以全屏幕模式进行游戏，那应该都不会出现这个问题。",-1),O=l("p",null,"这个问题似乎只会影响到第三章到第六章，尽管理论上在第一章和第二章也会出现，甚至在原版游戏上也会发生这个问题。",-1),V=l("p",null,"不是所有的桌面环境都会出现问题，不过已知 GNOME 桌面环境会受到影响。",-1),j=l("h4",{id:"问题症状",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#问题症状"},[l("span",null,"问题症状")])],-1),W=l("p",null,"当错误发生时，游戏窗口将会变得非常大或者非常小，并且整个屏幕将变为黑色或蓝色。",-1),F=l("p",null,"错误发生之后，游戏可能会卡死、崩溃，甚至会让你的桌面环境崩溃。",-1),Z=l("h4",{id:"引发问题的原因",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#引发问题的原因"},[l("span",null,"引发问题的原因")])],-1),J=l("p",null,[n("这个问题是由于 Unity 引擎 ≤ "),l("code",null,"5.5.3p3"),n(" 版本的调整窗口大小函数损坏，此函数会发送未初始化的栈数据给 "),l("code",null,"XSetWMNormalHints"),n("。")],-1),K=l("p",null,"想了解更多信息，请阅读以下文章：",-1),q={href:"https://github.com/07th-mod/higurashi-assembly/pull/93",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/07th-mod/higurashi-assembly/pull/91",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/07th-mod/higurashi-patch-compiler/issues/58",target:"_blank",rel:"noopener noreferrer"},$=l("ol",null,[l("li",null,[l("p",null,"找到并打开游戏根目录"),l("ul",null,[l("li",null,[n("Steam 用户：打开 Steam 游戏库，从列表中选择游戏，右键点击"),l("code",null,"游戏"),n("→"),l("code",null,"管理"),n("→"),l("code",null,"浏览本地文件"),n("。")])])]),l("li",null,[l("p",null,[n("在"),l("code",null,"下载"),n("区域的表格中，你需要下载"),l("strong",null,"每种类型的文件"),n("各一个。也就是说，你需要下载以下文件：")]),l("ul",null,[l("li",null,[l("p",null,"Patch (补丁主程序)")]),l("li",null,[l("p",null,"Graphics patch (图像资源文件)")]),l("li",null,[l("p",null,"Voices (语音文件)")]),l("li",null,[l("p",null,"BGM & SE (背景音乐和音效文件)")]),l("li",null,[l("p",null,"Movies (影片文件, 根据自己的系统选择一个)")]),l("li",null,[l("p",null,"UI Mod (用户界面资源文件, 根据自己的系统和游戏版本选择一个)")]),l("li",null,[l("p",null,"Update (其他修复文件)")]),l("li",null,[l("p",null,"仅主机版追加篇章 (如凭落篇、澪尽篇等)：System Files (根据自己的系统选择一个)")])])]),l("li",null,[l("p",null,[n("进入 "),l("code",null,"HigurashiEp0X_Data/StreamingAssets"),n(" 目录 ("),l("code",null,"X"),n("是游戏篇章的编号)，并"),l("strong",null,"删除"),n(),l("code",null,"CG"),n(" 和 "),l("code",null,"CGAlt"),n(" 文件夹。")]),l("ul",null,[l("li",null,[l("p",null,"这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。")]),l("li",null,[l("p",null,[l("strong",null,"汉化组提示"),n("：说白了就是不用删，除非你的硬盘空间不够，否则在后面安装补丁的时候直接"),l("strong",null,"覆盖文件"),n("即可。")])])])]),l("li",null,[l("p",null,[n("查看"),l("code",null,"下载"),n("区域的表格，并按照如下方式操作：")]),l("ul",null,[l("li",null,[l("p",null,[n("将"),l("strong",null,"不带特殊符号"),n("的所有压缩文件解压到游戏根目录。")])]),l("li",null,[l("p",null,[l("strong",null,"汉化组提示"),n("：")]),l("ul",null,[l("li",null,[l("p",null,[n("打开压缩包，正常你会看到 "),l("code",null,"HigurashiEp0X_Data"),n(" 文件夹，把它"),l("strong",null,"替换到根目录"),n("即可。"),l("strong",null,"如果你看到的不是这个文件夹，请看第三点。")])]),l("li",null,[l("p",null,[n("一般带有表情符号的只有 Patch、BGM & SE、Update 三个压缩包。"),l("strong",null,"除了出题篇的四章外，其他章节可能还有其他需要额外覆盖的文件，请自行检查下表格。")])]),l("li",null,[l("p",null,[n("BGM & SE 需要解压到 "),l("code",null,"HigurashiEp0X_Data/StreamingAssets"),n(" 下面，而"),l("strong",null,"不是游戏根目录"),n("。")])]),l("li",null,[l("p",null,[n("Patch 和 Update 需要在"),l("strong",null,"解压完所有压缩包之后最后安装"),n("，并且正常的话会提示"),l("strong",null,"有文件需要覆盖，选择替换即可。")])])])])])]),l("li",null,[l("p",null,"在确定游戏可以运行后，删除所有下载的压缩包。")])],-1),ll=l("li",null,[l("p",null,"找到并打开游戏根目录"),l("ul",null,[l("li",null,[l("p",null,[n("Steam 用户：打开 Steam 游戏库，从列表中选择游戏，右键点击"),l("code",null,"游戏"),n("→"),l("code",null,"管理"),n("→"),l("code",null,"浏览本地文件"),n("。")])]),l("li",null,[l("p",null,[n("如果你只看到了叫做 "),l("code",null,"HigurashiEp0X"),n(" ("),l("code",null,"X"),n(" 是游戏篇章的编号)，右击它，然后点击 "),l("code",null,"显示包内容 (Show Package Contents)"),n(" 来打开 "),l("code",null,"Contents"),n(" 文件夹。")])]),l("li",null,[l("p",null,[n("游戏文件夹 ("),l("code",null,"Contents"),n(" 文件夹) 应该包括 "),l("code",null,"Resources"),n("、"),l("code",null,"MacOS"),n("、"),l("code",null,"Plugins"),n("、"),l("code",null,"Frameworks"),n(" 以及其它文件夹。我们只会修改 "),l("code",null,"Resources"),n(" 文件夹。")])])])],-1),nl=l("li",null,[l("p",null,[n("在"),l("code",null,"下载"),n("区域的表格中，你需要下载"),l("strong",null,"每种类型的文件"),n("各一个。也就是说，你需要下载以下文件：")]),l("ul",null,[l("li",null,[l("p",null,"Patch (补丁主程序)")]),l("li",null,[l("p",null,"Graphics patch (图像资源文件)")]),l("li",null,[l("p",null,"Voices (语音文件)")]),l("li",null,[l("p",null,"BGM & SE (背景音乐和音效文件)")]),l("li",null,[l("p",null,"Movies (影片文件, 根据自己的系统选择一个)")]),l("li",null,[l("p",null,"UI Mod (用户界面资源文件, 根据自己的系统和游戏版本选择一个)")]),l("li",null,[l("p",null,"Update (其他修复文件)")]),l("li",null,[l("p",null,"仅主机版追加篇章 (如凭落篇、澪尽篇等)：System Files (根据自己的系统选择一个)")])])],-1),tl=l("li",null,[l("p",null,[n("进入 "),l("code",null,"Resources/Data/StreamingAssets"),n(" 文件夹，并"),l("strong",null,"删除"),n(),l("code",null,"CG"),n(" 和 "),l("code",null,"CGAlt"),n(" 文件夹。")]),l("ul",null,[l("li",null,[l("p",null,"这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。")]),l("li",null,[l("p",null,[l("strong",null,"汉化组提示"),n("：说白了就是不用删，除非你的硬盘空间不够，否则在后面安装补丁的时候直接"),l("strong",null,"覆盖文件"),n("即可。")])])])],-1),el=l("li",null,[l("p",null,[n("返回 "),l("code",null,"Resources/Data"),n(" 文件夹，用以下方法解压所有下载的文件：")]),l("ul",null,[l("li",null,[l("p",null,[n("将"),l("strong",null,"不带特殊符号"),n("的所有压缩文件解压到 "),l("code",null,"Resources/Data"),n(" (与游戏可执行文件 "),l("code",null,".exe"),n(" 同级)，"),l("strong",null,"BGM & SE 的压缩文件先不操作"),n("。")])]),l("li",null,[l("p",null,[n("Patch 和 Update 需要在"),l("strong",null,"解压完所有压缩包之后，BGM&SE 的压缩包之前解压"),n("，并且正常的话会提示"),l("strong",null,"有文件需要覆盖，选择替换即可。")])]),l("li",null,[l("p",null,[l("strong",null,"汉化组提示"),n("：打开压缩包，正常你会看到 "),l("code",null,"HigurashiEp0X_Data"),n(" 文件夹。把它"),l("strong",null,[n("解压到 "),l("code",null,"Resources/Data")]),n(" 即可。")])]),l("li",null,[l("p",null,[n("一般带有表情符号的只有 Patch、BGM & SE、Update 三个压缩包。没有额外说明的话，都是解压到 "),l("code",null,"Resources/Data"),n(" 目录下。"),l("strong",null,"除了出题篇的四章外，其他章节可能还有其他需要额外覆盖的文件，请自行检查下表格。")])])])],-1),ol=l("li",null,[l("p",null,[n("完成后，应该会生成一个 "),l("code",null,"HigurashiEp0X_Data"),n(" 文件夹 ("),l("code",null,"X"),n(" 是游戏篇章的编号)，完整路径应该是 "),l("code",null,"Resources/Data/HigurashiEp0X_Data"),n("。")])],-1),il=l("code",null,"Resources/Data",-1),sl=l("code",null,"rsync -avP HigurashiEp*/* .",-1),al={href:"https://stackoverflow.com/a/7054045",target:"_blank",rel:"noopener noreferrer"},cl=l("li",null,[l("p",null,[n("解压 BGM & SE 压缩包到 "),l("code",null,"Resources/Data/StreamingAssets"),n(" 文件夹下。")])],-1),ul=l("li",null,[l("p",null,[n("在确定游戏可以运行后，删除所有下载的压缩包以及 "),l("code",null,"HigurashiEp0X_Data"),n(" 文件夹。")])],-1),rl=c('<h2 id="安装仅语音补丁" tabindex="-1"><a class="header-anchor" href="#安装仅语音补丁"><span>安装仅语音补丁</span></a></h2><div class="hint-container caution"><p class="hint-container-title">我们不推荐安装仅语音补丁</p><p>仅语音补丁提供了最小的文件修改，即仅为原版游戏添加了语音的支持。</p><p>如果你遇到了问题，07th-mod 可能不会为你提供帮助。</p><p>不过如果你遇到了有关于汉化补丁的问题，汉化组仍然可以为你提供支持。</p></div><p>请选择 <strong>仅语音补丁 (Voice-only Patch)</strong> 标签。</p><p>找到下载页面。</p><p><img src="https://cdn.iycx.top/higurashi/guide/07th-mod-voice-only-patch.jpg" alt=""></p><p>Patch 和 Voices 必须下载，最后一个 HD Ryukishi Sprites 是高清龙绘补丁，可选择下载。</p><p>下载完毕后，可按照上方的安装教程安装。</p><h2 id="下载相关" tabindex="-1"><a class="header-anchor" href="#下载相关"><span>下载相关</span></a></h2><p>由于 07th-mod 网站的服务器架设在国外，在国内下载速度并不是很理想，所以我们做了所有文件的镜像。</p><p>虽然不能保证文件及时更新，但是我们会保证与我们汉化补丁的版本保持一致。</p><p>可以在导航栏的 <code>下载中心</code> 处找到链接，能在里面找到所有 07th-mod 所需的安装文件以及汉化补丁安装包。</p><p><strong>下载站是纯公益提供，是为了让玩家能有好的文件下载体验，希望大家不要滥用下载。</strong></p><p><strong>如果可以的话，我们仍然希望可以保存到自己的网盘，用自己的账号下载。</strong></p><p>另外，如果你有好的下载分流方案，可以联系我们，在这里十分感谢。</p>',14);function pl(dl,hl){const e=a("ExternalLinkIcon"),u=a("RouteLink"),r=a("Tabs");return d(),h("div",null,[l("div",m,[g,l("p",null,[n("如需阅读原文，请点击"),l("a",f,[n("这里"),t(e)]),n("。")])]),l("div",y,[x,k,l("p",null,[n("如果你想安装本汉化补丁，请查看"),t(u,{to:"/patch/list.html"},{default:o(()=>[n("补丁列表")]),_:1}),n("。")])]),w,l("div",b,[v,l("ul",null,[l("li",null,[l("p",null,[n("Windows：下载 "),l("a",S,[n("7-zip"),t(e)]),n("、"),l("a",M,[n("Bandizip"),t(e)]),n("、"),l("a",E,[n("WinRAR"),t(e)]),n("等解压软件")])]),D,l("li",null,[l("p",null,[n("Mac：下载 "),l("a",L,[n("Keka"),t(e)])])])])]),R,l("p",null,[l("a",G,[n("点此打开 07th-mod 官网"),t(e)])]),H,t(r,{id:"76",data:[{id:"Windows/Linux"},{id:"Mac OSX"}]},{title0:o(({value:i,isActive:s})=>[n("Windows/Linux")]),title1:o(({value:i,isActive:s})=>[n("Mac OSX")]),tab0:o(({value:i,isActive:s})=>[l("div",P,[X,A,l("details",C,[B,N,T,z,I,U,O,V,j,W,F,Z,J,K,l("ul",null,[l("li",null,[l("p",null,[l("a",q,[n("Merged PR: Fix Unity killing window managers with insane window size"),t(e)])])]),l("li",null,[l("p",null,[l("a",Q,[n("Draft PR: Linux gnome crash workaround"),t(e)])])]),l("li",null,[l("p",null,[l("a",Y,[n("Issue: Linux GNOME desktop environment crash / corrupted configuration file issue"),t(e)])])])])])]),$]),tab1:o(({value:i,isActive:s})=>[l("ol",null,[ll,nl,tl,el,ol,l("li",null,[l("p",null,[n("在 "),il,n(" 文件夹下打开终端窗口，输入 "),sl,n(" 并按下回车。等待文件复制完成。如果不知道如何操作，可以访问"),l("a",al,[n("这篇文章"),t(e)]),n("。")])]),cl,ul])]),_:1}),rl])}const gl=p(_,[["render",pl],["__file","main.html.vue"]]),fl=JSON.parse('{"path":"/guide/07th-mod/main.html","title":"安装指南","lang":"zh-CN","frontmatter":{"icon":"file-arrow-down","title":"安装指南","author":"Lancher, ycx","category":"使用指南","tag":["07th-mod","安装指南"],"article":false,"order":2,"description":"本文译自 07th-mod 官网 如需阅读原文，请点击这里。 阅读前请注意！ 本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁，并不包含本汉化补丁的安装教程。 如果你想安装本汉化补丁，请查看。 多当心旧的存档！ 由旧版本补丁或是原版游戏保存的存档可能无法与新版的补丁正常工作。虽然有时候看起来可能很正常，但加载后最终肯定会遇到问题。我们的建...","head":[["meta",{"property":"og:url","content":"https://higurashi.ycx-studios.site/guide/07th-mod/main.html"}],["meta",{"property":"og:site_name","content":"《寒蝉鸣泣之时》系列简体中文汉化补丁官方网站"}],["meta",{"property":"og:title","content":"安装指南"}],["meta",{"property":"og:description","content":"本文译自 07th-mod 官网 如需阅读原文，请点击这里。 阅读前请注意！ 本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁，并不包含本汉化补丁的安装教程。 如果你想安装本汉化补丁，请查看。 多当心旧的存档！ 由旧版本补丁或是原版游戏保存的存档可能无法与新版的补丁正常工作。虽然有时候看起来可能很正常，但加载后最终肯定会遇到问题。我们的建..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://cdn.iycx.top/higurashi/guide/07th-mod-main.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T09:28:53.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"安装指南"}],["meta",{"property":"article:author","content":"Lancher, ycx"}],["meta",{"property":"article:tag","content":"07th-mod"}],["meta",{"property":"article:tag","content":"安装指南"}],["meta",{"property":"article:modified_time","content":"2024-04-19T09:28:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"安装指南\\",\\"description\\":\\"本文译自 07th-mod 官网 如需阅读原文，请点击这里。 阅读前请注意！ 本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁，并不包含本汉化补丁的安装教程。 如果你想安装本汉化补丁，请查看。 多当心旧的存档！ 由旧版本补丁或是原版游戏保存的存档可能无法与新版的补丁正常工作。虽然有时候看起来可能很正常，但加载后最终肯定会遇到问题。我们的建...\\"}"]]},"headers":[{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"安装完整高清语音补丁","slug":"安装完整高清语音补丁","link":"#安装完整高清语音补丁","children":[]},{"level":2,"title":"安装仅语音补丁","slug":"安装仅语音补丁","link":"#安装仅语音补丁","children":[]},{"level":2,"title":"下载相关","slug":"下载相关","link":"#下载相关","children":[]}],"git":{"createdTime":1689665342000,"updatedTime":1713518933000,"contributors":[{"name":"ycx","email":"ycx1287984258@163.com","commits":10}]},"readingTime":{"minutes":8.33,"words":2500},"filePathRelative":"guide/07th-mod/main.md","localizedDate":"2023年7月18日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">本文译自 07th-mod 官网</p>\\n<p>如需阅读原文，请点击<a href=\\"https://07th-mod.com/wiki/Higurashi/Manual-Installation/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">这里</a>。</p>\\n</div>\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">阅读前请注意！</p>\\n<p>本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁，并不包含本汉化补丁的安装教程。</p>\\n<p>如果你想安装本汉化补丁，请查看<a href=\\"/patch/list.html\\" target=\\"_blank\\">补丁列表</a>。</p>\\n</div>","copyright":{"author":"Lancher, ycx"},"autoDesc":true}');export{gl as comp,fl as data};
