---
layout: post
title:  "container classification and testing"
image: ''
date:   2021-02-02 00:15:31
tags:
- C++
- STL
description: ''
categories:
- Learn  stl 
---

## sequences containers:

array：连续空间，无法扩充

~~~cpp
const long ASIZE  =   500000L;
void test_array()
{
array<long,ASIZE> c;  				
clock_t timeStart = clock();									
    for(long i=0; i< ASIZE; ++i) {
        c[i] = rand(); 
    }
	cout << "milli-seconds : " << (clock()-timeStart) << endl;	
	cout << "array.size()= " << c.size() << endl;	
	cout << "array.front()= " << c.front() << endl;	//数组第一个元素
	cout << "array.back()= " << c.back() << endl;//数组最后一个元素
	cout << "array.data()= " << c.data() << endl;//这个数组在内存起点的位置
	
~~~

![image-20210201235625838](/home/miant/.config/Typora/typora-user-images/image-20210201235625838.png)



vector：后面自动扩充

deque：前后都可以扩充

list：双向链表

forward_list(c++11)：单向链表（节省内存）

## associative containers:

内部都是红黑树实现

set/multiset：key即是value

map/multimap：key和value不同

map和set存储的是独一无二的，multiset和multimap可以放入重复的

## unordered contaioners:

hashtable实现

unordered set/multiset：

unordered map/multimap：