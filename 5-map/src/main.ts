class MyMap<K, V> {
    private _entries: [K, V][] = [];

    set(key: K, value: V): void {
        const index = this._entries.findIndex(entry => entry[0] === key);
        
        if (index >= 0) {
            this._entries[index][1] = value; // update value
        } else {
            this._entries.push([key, value]); // add new item
        }
    }

    get(key: K): V | undefined {
        const entry = this._entries.find(entry => entry[0] === key);
        
        return entry ? entry[1] : undefined;
    }

    delete(key: K): boolean {
        const index = this._entries.findIndex(entry => entry[0] === key);
        
        if (index >= 0) {
            this._entries.splice(index, 1); // delete item
            return true;
        }
        
        return false;
    }

    clear(): void {
        this._entries = [];
    }
}

const map = new MyMap<string, number>();

map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // 1

map.delete('a');
console.log(map.get('a')); // undefined

map.clear();
console.log(map); // _entries: []
