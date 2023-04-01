export const getColumns = <T>(arr: T[], nrOfColumns: number) => {
  const middleColsIndex = new Array(nrOfColumns - 1)
    .fill(null)
    .map((_, index) => {
      const fraction = (index + 1) / nrOfColumns;
      return Math.round(arr.length * fraction);
    });

  const breakpoints = [0, ...middleColsIndex, arr.length];

  // split the images to chunks of random sizes from 1 to 3
  const columns = new Array(nrOfColumns)
    .fill(null)
    .map((_, index: number) =>
      arr.slice(breakpoints[index], breakpoints[index + 1]),
    )
    .filter(el => el.length);

  return columns;
};
