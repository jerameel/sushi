import RNFetchBlob from 'rn-fetch-blob';

// Default target directory
const targetDirectory = `${RNFetchBlob.fs.dirs.DownloadDir}`;

export const createCSV = (fileName: string, csvString: string) => {
  const pathToWrite = `${targetDirectory}/sushi_${fileName}.csv`;
  return RNFetchBlob.fs.createFile(pathToWrite, csvString, 'utf8');
};
