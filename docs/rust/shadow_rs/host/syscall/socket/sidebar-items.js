initSidebarItems({"fn":[["bind",""],["empty_sockaddr","Returns a nix socket address object where only the family is set."],["getpeername",""],["getsockname",""],["read_sockaddr","Reads a sockaddr pointer from the plugin. Returns `None` if the pointer is null, otherwise returns a nix `SockAddr`. The address length must be at most the size of [`nix::sys::socket::sockaddr_storage`]."],["recvfrom",""],["recvfrom_helper",""],["sendto",""],["sendto_helper",""],["socket",""],["socketpair",""],["write_sockaddr","Copy the socket address to the plugin. Will return an error if either the address or address length pointers are NULL. The plugin’s address length will be updated to store the size of the socket address, even if greater than the provided buffer size. If the address is `None`, the plugin’s address length will be set to 0."]],"mod":[["export",""]]});