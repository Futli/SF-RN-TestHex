export default function maskHex(text: string) { 
    // ## ## ## ##
    text = text.replace(/[^0-9A-F]/g, "");       
    text = text.replace(/(^[0-9A-F]{2})([0-9A-F])/g, "$1 $2");
    text = text.replace(/([0-9A-F]{2})([0-9A-F]{2})/g, "$1 $2");
    text = text.replace(/([0-9A-F]{2})([0-9A-F])/g, "$1 $2");
    return text;
  }