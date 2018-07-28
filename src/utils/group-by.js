export const group = (list, shouldGroup) => ({
  by(by) {
    if (!shouldGroup) {
      return {list};
    }

    return list.reduce((groups, item) => {
      (groups[item[by]] = groups[item[by]] || []).push(item);

      return groups;
    }, {});
  }
});
