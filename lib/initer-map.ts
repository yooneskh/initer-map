

export class IniterMap<K, V> {

  private map: Map<K, V>;

  constructor(private initializer: (key: K) => V) {
    this.map = new Map<K, V>();
  }

  public clear() {
    this.map.clear();
  }

  public delete(key: K) {
    this.map.delete(key);
  }

  public entries() {
    return this.map.entries();
  }

  public forEach(callback: (value: V, key: K, map: Map<K, V>) => void) {
    this.map.forEach(callback);
  }

  public get(key: K) {

    if (this.map.has(key)) {
      return this.map.get(key)!;
    }

    const value = this.initializer(key);
    this.map.set(key, value);

    return value;

  }

  public has(_key: K) {
    return true;
  }

  public keys() {
    return this.map.keys();
  }

  public set(key: K, value: V) {
    this.map.set(key, value);
  }

  public size() {
    return this.map.size;
  }

  public values() {
    return this.map.values();
  }

}
