# chrome-tab-search

Search across tabs in Chrome extensions.

## Overview

chrome-tab-search provides utilities to search and filter tabs by title, URL, or content.

## Installation

```bash
npm install chrome-tab-search
```

## Usage

```javascript
import { TabSearch } from 'chrome-tab-search';

const results = await TabSearch.query('github');
console.log(results.map(t => t.title));
```

## API

- `query(term)` - Search tabs
- `searchByUrl(pattern)` - Search by URL pattern

## License

MIT
