---
layout: page
title: Blogs
permalink: /blogs/
---

<h1>My All Blogs</h1>

<ul>
{% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
