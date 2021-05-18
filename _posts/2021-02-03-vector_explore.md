---
layout: post
title:  "vector explore"
image: ''
date:   2021-02-03 00:15:31
tags:
- C++
- STL
description: ''
categories:
- Learn  stl 
---
## push_back：

将 finsh 和 end_of_storage 比较，如果不等，则尚有备用空间，finsh++，调整水位高度

如果没有备用空间：如果原大小为 0，则分配 1，如果原大小不为0，分配原大小而被，前半段放置原数据，后半段放置新数据。将原 vector 内容拷贝到新的 vector 中，为新元素设定初值，拷贝安插点后的原内容，每次成长会大量调用拷贝构造函数和析构函数，成本很大。

均摊（Amortized）时间复杂度为O(1)，m * n 次操作，但是每 n 次操作才会进行这样的复制，所以相当于 n 次操作进行 (m + 1) * n 次操作，每次就是均摊 (m + 10)，也就是常数时间 O(1)

## iterator：

~~~cpp
vector<int>::iterator ite = vec.begin();
~~~

