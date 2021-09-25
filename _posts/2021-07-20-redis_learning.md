---
layout: post
title: 
image: ''
date:   2021-07-20 23:00
tags:
- 笔记
description: ''
categories:
- daily record
---
> Redis是基于内存的非关系型数据库，具有极高的读写性能和丰富的数据类型，适用于多种场景，目前得到广泛的应用。
# redis的数据结构
## 1.简单动态字符串SDS

由于c语言是以字符数组的形式来实现字符串，效率比较低，因此Redis定义了SDS类型以更好地支持字符串的读写操作。 SDS定义如下：
```c
typedef struct sdshdr {

    int len;     //当前存buf数组中字符串长度

    int free;    //当前buf数组中未使用字节的数量

    char buf[];  //字符数组，存储字符串

}
```
例如，存储一个字符串hello，字符数组并未被完全占满。

相比C语言，SDS类型增加了len和free两个属性字段。len用于优化读取字符串长度的操作，free用于优化内存分配策略。这两个字段带来的好处有：