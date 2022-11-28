---
author:
coverimage:
date: {{ .Date }}
description:
draft: true
month: "{{ dateFormat "2006" .Date }}/{{ dateFormat "01" .Date }}"
tags: []
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .Name }}"
year: "{{ dateFormat "2006" .Date }}"
---