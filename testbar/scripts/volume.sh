#!/bin/bash

osascript -e 'get volume settings' | awk '{split($2, a, ":"); print substr(a[2], 1, length(a[2])-1); split($8, b, ":"); print b[2]}'
