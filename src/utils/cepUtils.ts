export const formatCEP = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d{0,3})/, '$1-$2')
    .slice(0, 9);
};

export const cleanCEP = (value: string) => {
  return value.replace(/\D/g, '');
};
