export function addIfNotContains<T>(collection: T[], objToAdd: T): T[] {
  if (objToAdd) {
    const hasObj = collection.find(value => value === objToAdd);
    if (hasObj) {
      collection = collection.filter(value => value !== objToAdd);
    } else {
      collection.push(objToAdd);
    }
  }

  return collection;
}
