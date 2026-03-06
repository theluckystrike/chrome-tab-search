# chrome-tab-search

Tab search and filter utilities for Chrome extensions. Fuzzy search, filter by domain, duplicate detection, and smart tab switching.

## Overview

chrome-tab-search provides a TypeScript API for Chrome extension developers to search, filter, and manage browser tabs. It supports fuzzy text matching, domain-based filtering, duplicate tab detection, and quick tab switching.

## Features

- Fuzzy search across tab titles and URLs
- Filter tabs by domain
- Detect and close duplicate tabs
- Get recently accessed tabs
- Filter by audio and pinned status
- Quick tab switching

## Installation

```bash
npm install chrome-tab-search
```

## Usage

```typescript
import { TabSearch } from 'chrome-tab-search';

// Search tabs by title or URL
const results = await TabSearch.search('github');
console.log(results.map(t => t.title));

// Filter by domain
const githubTabs = await TabSearch.filterByDomain('github.com');

// Get recent tabs
const recent = await TabSearch.getRecent(10);

// Switch to first matching tab
await TabSearch.switchTo('documentation');
```

## API Reference

### TabSearch.search(query: string): Promise<Tab[]>

Performs a fuzzy search across all open tabs. Matches against both title and URL. Results are sorted by relevance (matches in title appear first).

```typescript
const tabs = await TabSearch.search('google');
```

### TabSearch.filterByDomain(domain: string): Promise<Tab[]>

Returns all tabs from the specified domain.

```typescript
const tabs = await TabSearch.filterByDomain('github.com');
```

### TabSearch.findDuplicates(): Promise<Map<string, Tab[]>>

Finds all duplicate tabs (tabs with the same URL). Returns a Map where keys are URLs and values are arrays of Tab objects.

```typescript
const duplicates = await TabSearch.findDuplicates();
for (const [url, tabs] of duplicates) {
  console.log(`${url} has ${tabs.length} duplicate(s)`);
}
```

### TabSearch.closeDuplicates(): Promise<number>

Closes all duplicate tabs, keeping the first occurrence of each URL. Returns the number of tabs closed.

```typescript
const closed = await TabSearch.closeDuplicates();
console.log(`Closed ${closed} duplicate tabs`);
```

### TabSearch.getRecent(limit?: number): Promise<Tab[]>

Returns the most recently accessed tabs. Defaults to 10 tabs if no limit is specified.

```typescript
const recent = await TabSearch.getRecent(20);
```

### TabSearch.getAudible(): Promise<Tab[]>

Returns all tabs that are currently playing audio.

```typescript
const audible = await TabSearch.getAudible();
```

### TabSearch.getPinned(): Promise<Tab[]>

Returns all pinned tabs.

```typescript
const pinned = await TabSearch.getPinned();
```

### TabSearch.switchTo(query: string): Promise<boolean>

Searches for tabs matching the query and switches to the first result. Returns true if a match was found and switched to, false otherwise.

```typescript
const found = await TabSearch.switchTo('email');
if (found) {
  console.log('Switched to matching tab');
}
```

## Requirements

- Chrome or Chromium browser with extension support
- Manifest V3 compatible
- TypeScript 5.x

## Related

- Part of the Zovo developer tools ecosystem. Visit [zovo.one](https://zovo.one) for more information.

## License

MIT License - Copyright (c) 2025 theluckystrike
