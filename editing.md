# repo

> **A** **b**etter Deno framework to **c**reate web application

[![tag](https://img.shields.io/github/tag/victorgianvechio/repo.svg)](https://github.com/victorgianvechio/repo)
[![Build Status](https://github.com/victorgianvechio/repo/workflows/ci/badge.svg?branch=master)](https://github.com/victorgianvechio/repo/actions)
[![license](https://img.shields.io/github/license/victorgianvechio/repo.svg)](https://github.com/victorgianvechio/repo)
[![tag](https://img.shields.io/badge/deno->=1.0.0-green.svg)](https://github.com/denoland/deno)
[![tag](https://img.shields.io/badge/std-0.54.0-green.svg)](https://github.com/denoland/deno)

#### Quick links

- [API Reference](https://doc.deno.land/https/deno.land/x/repo/mod.ts)
- [Guides](https://deno.land/x/repo/docs/table_of_contents.md)
- [Examples](./examples)

## Hello World

```ts
import { Application } from "https://deno.land/x/repo@v1.0.0-rc10/mod.ts";

const app = new Application();

app
  .get("/hello", (c) => {
    return "Hello, repo!";
  })
  .start({ port: 8080 });
```