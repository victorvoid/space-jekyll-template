---
layout: post
title: logrotate usage
image: ''
date:   2021-6-3
tags:
- 
description: ''
categories:
- daily record
---
```
logrotate -vf /data00/PacMon/conf/pcap.conf -s /data00/PacMon/conf/state >> /data00/log/PacMon/pcap.log
```

```sh
/log {
    daily # 默认每天执行一次轮转
    rotate 30 # 默认保留三十个日志文件（轮转30次）
    compress # 压缩存储
    delaycompress # 和compress 一起使用时，转储的日志文件到下一次转储才压缩
    copytruncate # 用于还在打开中的日志文件，把当前日志备份并且截断；先拷贝再清空，拷贝和清空之间有时间差防止丢失数据
    dateext # 切割后的日志文件以当前日期为格式结尾
    dateformat -%Y%m%d.%s  # 配合dateext使用，定义切割后的文件名
    create 644 root root # 自动创建新的日志文件，新日志文件权限 用户名 用户组
}
```