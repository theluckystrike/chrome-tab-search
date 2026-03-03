# chrome-tab-search

[![npm version](https://img.shields.io/npm/v/chrome-tab-search)](https://npmjs.com/package/chrome-tab-search)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/chrome-tab-search/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-tab-search/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-tab-search?style=social)](https://github.com/theluckystrike/chrome-tab-search)

> Search across tabs in Chrome extensions.

**chrome-tab-search** provides utilities to search and filter tabs by title, URL, or content. Part of the Zovo Chrome extension utilities.

Part of the [Zovo](https://zovo.one) developer tools family.

## Overview

chrome-tab-search provides utilities to search and filter tabs by title, URL, or content.

## Features

- ✅ **Text Search** - Search by tab title and URL
- ✅ **Fuzzy Matching** - Smart matching with typos
- ✅ **URL Pattern Search** - Search by URL patterns
- ✅ **Quick Switch** - Switch to matching tab
- ✅ **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install chrome-tab-search
```

## Usage

### Basic Search

```javascript
import { TabSearch } from 'chrome-tab-search';

const results = await TabSearch.query('github');
console.log(results.map(t => t.title));
```

### Search by URL Pattern

```javascript
const results = await TabSearch.searchByUrl('*.github.com/*');
```

### Get Recent Tabs

```javascript
const recent = await TabSearch.getRecent(10);
```

## API

### Methods

| Method | Description |
|--------|-------------|
| `TabSearch.query(term)` | Search tabs by text |
| `TabSearch.searchByUrl(pattern)` | Search by URL pattern |
| `TabSearch.getRecent(count)` | Get recent tabs |
| `TabSearch.switchTo(tabId)` | Switch to tab |

## License

MIT — [Zovo](https://zovo.one)

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/search-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/search-feature`
7. **Submit** a Pull Request

## See Also

### Related Zovo Repositories

- [webext-tabs-overview](https://github.com/theluckystrike/webext-tabs-overview) - Tab dashboard
- [chrome-tab-discard](https://github.com/theluckystrike/chrome-tab-discard) - Tab discarding
- [chrome-tab-sort](https://github.com/theluckystrike/chrome-tab-sort) - Tab sorting

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.
