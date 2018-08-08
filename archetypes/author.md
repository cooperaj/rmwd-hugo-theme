---
date: {{ .Date }}
name: "{{ replace .Name "-" " " | title }}"
photo: profile
title: "{{ replace .Name "-" " " | title }}"
---