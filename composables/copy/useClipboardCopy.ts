export function useClipboardCopy() {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    console.log("copied to clipboard", text);
    
  }
  return { copyToClipboard }
}