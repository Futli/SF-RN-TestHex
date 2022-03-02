export default function maskHex(text: string) { 
    // ## ## ## ##
    text = text.replace(/[^0-9a-fA-F]/g, "");       
    text = text.replace(/(^[0-9a-fA-F]{2})([0-9a-fA-F])/g, "$1 $2");
    text = text.replace(/([0-9a-fA-F]{2})([0-9a-fA-F]{2})/g, "$1 $2");
    text = text.replace(/([0-9a-fA-F]{2})([0-9a-fA-F]{2})/g, "$1 $2");
    return text;
  }