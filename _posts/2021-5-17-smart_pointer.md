---
layout: post
title: "smart pointer"
image: ''
date:   2021-5-17
tags:
- 
description: ''
categories:
- daily record
---
# Smart pointer

> shared_ptr, unique_ptr, weak_ptr

## make_uinque 取代 new
~~~cpp
auto upw1(std::make_unique<Widget>());     // 使用make函数
std::unique_ptr<Widget> upw2(new Widget);  // 不使用make函数

~~~
使用new的版本重复需要常见的类型，（即出现了两次Widget），而使用make函数不需要。

## unique_ptr 与 shared_ptr

unique_ptr 某个时刻只能有一个unique_ptr指向管理的动态内存上的对象，当指针销毁，只想对象也会销毁

unique_ptr内部存储一个内置指针，当unique_ptr析构时，它的析构函数将会负责析构它持有的对象。

unique_ptr提供了operator*()和operator->()成员函数，像内置指针一样，我们可以使用 * 解引用unique_ptr，使用 -> 来访问unique_ptr所持有对象的成员。

unique_ptr并不提供 copy 操作，这是为了防止多个unique_ptr指向同一对象。

但unique_ptr提供了 move 操作，因此我们可以用std::move()来转移unique_ptr。

两种构造函数，一种传入内置指针，一种传入unique_ptr的右值。第一种是explicit的，第二种不是。
