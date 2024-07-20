export function generateRandomString(): string {
    var serialNumber = () => Cypress._.random(0, 1e6);
    var id = serialNumber();
    var result = `New Computer: ${id}`;
    return result;
  }

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options).replace(',', ''); // 'en-GB' for DD MMM YYYY format
  }