#!/bin/bash
files=(./*)

ext="jpg"

for f in ${files[@]}; do
	# echo $f
	name=$(echo ${f##*/} | cut -d '.' -f1)
	if [ "$f" != "$0" ]; then
		echo "$f -> $name.$ext"
		convert "$f" "$name.$ext"
	fi
done


