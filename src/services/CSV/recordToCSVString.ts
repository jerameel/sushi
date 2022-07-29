export const recordToCSVString = (records: Record<string, any>[]) => {
  if (records.length > 0) {
    const headerString = `${Object.keys(records[0]).join(',')}\n`;
    const rowString = records
      .map((record) =>
        Object.values(record)
          .map((value) => `${value}`)
          .join(','),
      )
      .join('\n');
    return `${headerString}${rowString}`;
  }

  return '';
};
