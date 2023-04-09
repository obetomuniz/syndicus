# syndicus

A library to help developers implement [content syndication](https://www.parse.ly/glossary/content-syndication/).

## Installation

```bash
npm install syndicus
```

## Usage

```tsx
"use client"

import { DevTo, Title, Content } from "syndicus"

const Article = () => {
  return (
    // Repalce {POST_ID} by the Post ID of the post published on DEV.to
    <DevTo article="{POST_ID}">
      <Title />
      <Content />
    </DevTo>
  )
}

export default Article
```

## Supported Platforms

- DEV.to

## Supported Content

- Article

## Roadmap

The short-term roadmap is defined by the issues open. If you want something implemented, make sure to open a issue in this repository.
