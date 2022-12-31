#!/usr/bin/env bash

emcc='docker run --rm -u $(id -u):$(id -g) -v $(pwd):/src emscripten/emsdk emcc'

build01='01-hello-world.c -s WASM=1 -o 01-hello-world.html'

#cmd01="$emcc $build01"

eval "$emcc $build01"
