import { getRandomInt } from './getRandomInt';

export const splitToRandomChunks = <T>(oldArr: T[]) => {
  const newArr: T[][] = [];
  let chunkSize = 0;

  oldArr.forEach((_: T, index: number) => {
    const shouldSplitRand = getRandomInt(1, 9) % 2 === 0;
    const shouldSplitLastChunk = oldArr.length === index + 1;
    const shouldSplitMaxChunk = chunkSize === 4;
    const shouldSplitMinChunk = chunkSize >= 2;

    if (
      shouldSplitMaxChunk ||
      (shouldSplitRand && shouldSplitMinChunk) ||
      shouldSplitLastChunk
    ) {
      const indexPrev = index - chunkSize;
      const chunk = shouldSplitLastChunk
        ? oldArr.slice(indexPrev, index + 1)
        : oldArr.slice(indexPrev, index);
      newArr.push(chunk);
      chunkSize = 1;
    } else {
      chunkSize += 1;
      return;
    }
  });

  return newArr;
};
