export function selectedElement<T>(obj: T, collection: T[]): boolean {
  const added = collection.find(o => o === obj);
  if (added)
    return true;

  return false;
}
