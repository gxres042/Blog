(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{317:function(s,a,t){"use strict";t.r(a);var e=t(38),r=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"记一次奇怪的-mysql-错误解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#记一次奇怪的-mysql-错误解决","aria-hidden":"true"}},[s._v("#")]),s._v(" 记一次奇怪的 MySQL 错误解决")]),s._v(" "),t("p",[s._v("今天部署一个 PHP 后端的时候，发现在本地（Windows）测试可以连上数据库，而在生产环境（Ubuntu 20.04）上却报 Permission denied 错误，密码都是正确的，看来还是 Ubuntu 的安全弄得好哟😅，随便去 Google 了一下发现如果要用 root 登录必须得加上 "),t("code",[s._v("sudo")]),s._v("？太奇妙了，于是一秒想到去创建一个新的用户。")]),s._v(" "),t("p",[t("em",[s._v("错误大概是这样的，一个很平凡的 Access denied。")])]),s._v(" "),t("div",{staticClass:"language-log extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("(HY000/1698): Access denied for user 'root'@'localhost'\n")])])]),t("p",[s._v("然后我就去创建新的用户了，具体流程老生常谈了")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rootp'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 不是 root 就可以，嘻嘻")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rootp'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("然后就离开了数据库。就在这个时候我突然不知道怎么想的想要重启一下数据库，虽然这种情况下不重启是完全可以的。重启就重启吧，反正不是甚么高危操作，可这一重启可给爷整麻了啊，出现了我从来没有见过的错误，甚至觉得 MariaDB 在逗我。报错信息大概是这样的：")]),s._v(" "),t("div",{staticClass:"language-log extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Aug 06 01:35:42 server systemd[1]: Starting MariaDB 10.1.47 database server...\n-- Subject: Unit mariadb.service has begun start-up\n-- Defined-By: systemd\n-- Support: http://www.ubuntu.com/support\n--\n-- Unit mariadb.service has begun starting up.\nAug 06 01:35:43 server mysqld[4431]: 2021-08-06  1:35:43 140103940127872 [Note] /usr/sbin/mysqld (mysqld 10.1.47-MariaDB-0ubuntu0.18.04.1) starting as process 4431 ...\nAug 06 01:35:46 server systemd[1]: mariadb.service: Main process exited, code=exited, status=7/NOTRUNNING\nAug 06 01:35:46 server systemd[1]: mariadb.service: Failed with result 'exit-code'.\nAug 06 01:35:46 server systemd[1]: Failed to start MariaDB 10.1.47 database server.\n-- Subject: Unit mariadb.service has failed\n-- Defined-By: systemd\n-- Support: http://www.ubuntu.com/support\n--\n-- Unit mariadb.service has failed.\n--\n-- The result is RESULT.\n")])])]),t("p",[s._v("看看高亮的行，说的是 SQL 话吗？啥叫作 "),t("code",[s._v("Failed with result 'exit-code'")]),s._v("、"),t("code",[s._v("The result is RESULT")]),s._v("？笑死，听君一席话，如听一席话！无论怎么去查，得到的结果都不是完全符合，但是它们都有一个共性就是——你要重装你的 MySQL。确实，重装是一个完美的办法，我也很喜欢，干脆利落不用费事费力想办法，可是——我的数据！MySQL 死了，所以 "),t("code",[s._v("mysqldump")]),s._v(" 也用不了...这是个悖论，我的数据可能取不回来了，那真是够恐怖。但是我忽然又想到，MySQL 一定是通过文件来存储数据的，于是我搜到了下面这段话。")]),s._v(" "),t("blockquote",[t("p",[s._v("What you should do is image your drive, copy it to something else, in preparation for your reinstall. I'd recommend copying everything as authentically as you can, even if that takes a while. That feeling you get when you realize you forgot to salvage something important that is now gone forever is not good.")]),s._v(" "),t("p",[s._v("MySQL generally stores data in the data directory. It may take some work to get your MySQL back into the same configuration as before, so be sure to grab the appropriate my.cnf file.")]),s._v(" "),t("p",[s._v("It can be really difficult to extract data from a bunch of MySQL data files without the MySQL process actually running. This is why tools like mysqldump exist. If you can get it running, even limping along, that'll be good enough to snapshot it.\n"),t("br"),t("br"),s._v(" "),t("em",[s._v("来自 "),t("a",{attrs:{href:"https://stackoverflow.com/questions/20130706/backup-dead-mysql-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stackoverflow.com/questions/20130706/backup-dead-mysql-server"),t("OutboundLink")],1)])])]),s._v(" "),t("p",[s._v("这段话告诉我，将来的路会很坎坷...啊这，我只是想要重启个 MySQL，用得着这样对我吗。束手无策的时候，我突然想到，既然要重装，要不把数据都换个位置试试？也就是说把整个 MySQL 用来存放数据的文件夹换到另外一个地方，嗯，换个新的环境，没准就可以了。就是这个奇妙的脑回路拯救了我。")]),s._v(" "),t("p",[s._v("首先，遇到了一个很坑的地方，那就是不确定数据在哪里。网上说的默认在 "),t("code",[s._v("/var/lib/mysql")]),s._v("，虽然我也发现那里有很多文件，也是不敢确定。然后又有的说可以在配置文件 "),t("code",[s._v("/etc/mysql/mysql.conf.d/mysqld.cnf")]),s._v(" 里面看，结果并没有这个文件，也许是因为我是 MariaDB，所以应该在 "),t("code",[s._v("/etc/mysql/my.cnf")]),s._v(" 里面。确实有这个文件，但是里面并没有 "),t("code",[s._v("datadir")]),s._v(" 这个参数，真是醉了。到后来我鼓起勇气把 "),t("code",[s._v("datadir")]),s._v(" 设置成了 "),t("code",[s._v("/mysql-db")]),s._v("，开始了迁移之路。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /mysql-db\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av /var/lib/mysql/ /mysql-db\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /mysql-db\n")])])]),t("p",[s._v("盘点一下这里的坑，首先 "),t("code",[s._v("rsync")]),s._v(" 的第二个参数 "),t("code",[s._v("/var/lib/mysql/")]),s._v(" 的最后带不带 "),t("code",[s._v("/")]),s._v(" 是有区别的。带上了就代表 "),t("code",[s._v("/var/lib/mysql/*")]),s._v("，不带上就代表这个目录本身。刚开始没有带，复制了以后也没有去 "),t("code",[s._v("ls /mysql-db")]),s._v(" 导致启动的时候刷了一大堆 not found 报错...然后就是权限问题，应该是 "),t("code",[s._v("755")]),s._v("。")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("为啥不用 "),t("code",[s._v("mv *")]),s._v("？因为当时想不到 "),t("code",[s._v("mv")]),s._v("，别骂了")])]),s._v(" "),t("p",[s._v("然后还有一个点就是要去 apparmor 里面创建一个别名。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/apparmor.d/tunables/alias\n")])])]),t("p",[s._v("添加 "),t("code",[s._v("alias /var/lib/mysql -> /mysql-db")]),s._v("，然后 "),t("code",[s._v("systemctl restart apparmor")]),s._v("。接下来就可以准备启动 MySQL 了。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl start mysql\n")])])]),t("p",[s._v("让我震惊的是这次启动没有报错了。原理还待解释，不过我一秒就去全量备份了一下，因为有了备份就可以直接重装就没有这么多破事了😅")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysqldump -u root --all-databases "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /alldb.sql\n")])])]),t("p",[s._v("然后还可以在 cron 里面加一个定时的备份，为了避免输入密码，可以创建一个 "),t("code",[s._v("~/my.cnf")]),s._v(" 然后写入内容")]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[mysqldump]\nuser=root\npassword=...\n")])])]),t("p",[s._v("然后在 "),t("code",[s._v("crontab -e")]),s._v(" 里面加入")]),s._v(" "),t("div",{staticClass:"language-crontab extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("10 * * * * mysqldump -u root --all-databases > /alldb.sql\n")])])]),t("p",[s._v("就可以了。")])])},[],!1,null,null,null);a.default=r.exports}}]);