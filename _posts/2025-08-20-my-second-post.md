---
layout: post
title: "JK杂图"
date: 2025-08-20 00:00:00 +0900
categories: 随笔
tags: [jk]
---
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/album1/' %}
      <img src="{{ site.baseurl }}{{ image.path }}" alt="album image" style="width:100%">
    {% endif %}
  {% endfor %}
</div>


![测试图片](/assets/img/IMG_9661.JPG)

- 回到主页 [点击](https://cannot5dme.github.io)
