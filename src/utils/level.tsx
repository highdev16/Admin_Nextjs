module.exports = (level) => {
  if (level == 'admin') return 'SH';
  if (level == 'SH') return 'SSMA';
  if (level == 'SSMA') return 'SMA';
  if (level == 'SMA') return 'MA';
  return 'Agent';
};
