---
layout: post
title: "Liquid 渲染测试"
date: 2025-08-21 00:00:00 +0900
categories: [随笔]
---

可见吗？（应当能看到这行文字）

{% assign files = "a#1.jpg,b#2.jpg" | split: "," %}
数量：{{ files | size }}

{% for name in files %}
<p>{{ name }} → {{ name | url_encode }}</p>
{% endfor %}
