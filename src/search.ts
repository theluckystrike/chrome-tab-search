/**
 * Tab Search — Fuzzy search and filter tabs
 */
export class TabSearch {
    /** Fuzzy search tabs by title or URL */
    static async search(query: string): Promise<chrome.tabs.Tab[]> {
        const tabs = await chrome.tabs.query({});
        const q = query.toLowerCase();
        return tabs.filter((t) => (t.title?.toLowerCase().includes(q) || t.url?.toLowerCase().includes(q))).sort((a, b) => {
            const aTitle = (a.title?.toLowerCase().indexOf(q) ?? 999); const bTitle = (b.title?.toLowerCase().indexOf(q) ?? 999);
            return aTitle - bTitle;
        });
    }

    /** Filter tabs by domain */
    static async filterByDomain(domain: string): Promise<chrome.tabs.Tab[]> {
        const tabs = await chrome.tabs.query({});
        return tabs.filter((t) => { try { return new URL(t.url || '').hostname.includes(domain); } catch { return false; } });
    }

    /** Get duplicate tabs (same URL) */
    static async findDuplicates(): Promise<Map<string, chrome.tabs.Tab[]>> {
        const tabs = await chrome.tabs.query({});
        const urlMap = new Map<string, chrome.tabs.Tab[]>();
        tabs.forEach((t) => { if (t.url) { const list = urlMap.get(t.url) || []; list.push(t); urlMap.set(t.url, list); } });
        const dupes = new Map<string, chrome.tabs.Tab[]>();
        urlMap.forEach((tabs, url) => { if (tabs.length > 1) dupes.set(url, tabs); });
        return dupes;
    }

    /** Close duplicate tabs (keep first) */
    static async closeDuplicates(): Promise<number> {
        const dupes = await this.findDuplicates();
        let closed = 0;
        for (const [, tabs] of dupes) {
            for (let i = 1; i < tabs.length; i++) { if (tabs[i].id) { await chrome.tabs.remove(tabs[i].id!); closed++; } }
        }
        return closed;
    }

    /** Get tabs sorted by last access */
    static async getRecent(limit: number = 10): Promise<chrome.tabs.Tab[]> {
        const tabs = await chrome.tabs.query({});
        return tabs.sort((a, b) => ((b as any).lastAccessed || 0) - ((a as any).lastAccessed || 0)).slice(0, limit);
    }

    /** Get audible tabs */
    static async getAudible(): Promise<chrome.tabs.Tab[]> { return chrome.tabs.query({ audible: true }); }

    /** Get pinned tabs */
    static async getPinned(): Promise<chrome.tabs.Tab[]> { return chrome.tabs.query({ pinned: true }); }

    /** Switch to tab matching query */
    static async switchTo(query: string): Promise<boolean> {
        const results = await this.search(query);
        if (results.length > 0 && results[0].id) { await chrome.tabs.update(results[0].id, { active: true }); return true; }
        return false;
    }
}
