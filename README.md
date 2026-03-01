# chrome-tab-search — Tab Search & Filter for Extensions
> **Built by [Zovo](https://zovo.one)** | `npm i chrome-tab-search`

Fuzzy search, domain filter, duplicate finder, recent tabs, and smart switch.

```typescript
import { TabSearch } from 'chrome-tab-search';
const tabs = await TabSearch.search('github');
const closed = await TabSearch.closeDuplicates();
await TabSearch.switchTo('gmail');
```
MIT License
