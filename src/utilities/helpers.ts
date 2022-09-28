import { GameContextType, StoreItem } from './types';

export const getRandomNumber = (minNum: number, maxNum: number) => {
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);

  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

export const get3RandomNumbers = (minNum: number, maxNum: number) => {
  let num1 = getRandomNumber(minNum, maxNum);
  let num2 = num1;
  let num3 = num1;
  do {
    num2 = getRandomNumber(minNum, maxNum);
  } while (num2 === num1);
  do {
    num3 = getRandomNumber(minNum, maxNum);
  } while (num3 === num2 || num3 === num1);

  return [num1, num2, num3];
};

export const filterResults = (data: any, artistId: number) => {
  return data.filter((value: any) => {
    return value.hasOwnProperty('artworkUrl100') && value.artistId === artistId;
  });
};

// function to get items from localstorage
export const getFromLocatStorage = (key: StoreItem, defaultValue: any) => {
  const item = JSON.parse(localStorage.getItem(key) as string);
  if (item) return item;
  return defaultValue;
};

export const saveToLocatStorage: GameContextType['editStore'] = (
  key,
  payload
) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const initalizeLocalStorage = () => {
  const items = [
    { name: StoreItem.artistName, value: '' },
    { name: StoreItem.artistId, value: null },
    { name: StoreItem.round, value: 1 },
    { name: StoreItem.tries, value: 1 },
    { name: StoreItem.albums, value: [] },
    { name: StoreItem.albumArt, value: '' },
    { name: StoreItem.pointsTobeAwarded, value: 5 },
    { name: StoreItem.hint, value: false },
    { name: StoreItem.gameOver, value: false },
    { name: StoreItem.totalScore, value: 0 },
  ];

  items.map(({ name, value }) => saveToLocatStorage(name, value));
};
