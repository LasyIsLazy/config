function FindProxyForURL(url, host) {
  if (shExpMatch(url, ".mozilla.org")) {
    return "PROXY 127.0.0.1:2080";
  }
  return "DIRECT";
