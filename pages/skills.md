---
layout: page
title: Skills
permalink: /skills/
---

<h1>Your Skills</h1>

<ul>
{% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
