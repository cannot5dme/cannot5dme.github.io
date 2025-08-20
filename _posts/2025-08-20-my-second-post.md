---
layout: post
title: "A2-JK杂图"
date: 2025-08-20 00:00:00 +0900
categories: 随笔
tags: [jk,free]
---

<!-- 一行一张大图的样式（只影响本页） -->
<style>
  .gallery-onecol {
    display: grid;
    grid-template-columns: 1fr;  /* 一行一张 */
    gap: 25px;                   /* 间距大一点 */
    margin: 1rem 0 2rem;
  }
  .gallery-onecol a { display:block; border-radius:12px; overflow:hidden; box-shadow:0 6px 18px rgba(0,0,0,.15); }
  .gallery-onecol img { width:100%; height:auto; object-fit:contain; display:block; }
</style>

<div class="gallery-onecol">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/album1/' and (image.path contains '.jpeg' or image.path contains '.jpg') %}
      <a href="{{ site.baseurl }}{{ image.path }}" target="_blank" rel="noopener">
        <img src="{{ site.baseurl }}{{ image.path }}" alt="album image" loading="lazy">
      </a>
    {% endif %}
  {% endfor %}
</div>

![测试图片](/assets/img/IMG_9661.JPG)

- 回到主页 [点击](https://cannot5dme.github.io)
