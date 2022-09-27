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
