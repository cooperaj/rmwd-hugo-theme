---
date: {{ .Date }}
draft: true
image: 
ratio: 4by3
month: "{{ dateFormat "2006" .Date }}/{{ dateFormat "01" .Date }}"
tags: []
title: "{{ replace .Name "-" " " | title }}"
year: "{{ dateFormat "2006" .Date }}"
---