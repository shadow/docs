initSidebarItems({"fn":[["check_recvfrom_call",""],["check_sendto_call",""],["fd_test_helper","A helper function to call sendto() and recvfrom() with valid values and a user-provided fd."],["get_tests",""],["main",""],["simple_recvfrom_helper","Call `recvfrom()` with a provided fd and buffer and check that the result is as expected. An empty flag mask and a null sockaddr are used. Returns an `Error` if the errno doesn’t match an errno in `errnos`, or if `verify_num_bytes` is `true` and the number of bytes received (the return value) does not match the buffer length."],["simple_sendto_helper","Call `sendto()` with a provided fd and buffer and check that the result is as expected. An empty flag mask and a null sockaddr are used. Returns an `Error` if the errno doesn’t match an errno in `errnos`, or if `verify_num_bytes` is `true` and the number of bytes sent (the return value) does not match the buffer length."],["test_flag_dontwait","Test sendto() and recvfrom() using the `MSG_DONTWAIT` flag."],["test_invalid_fd","Test sendto() and recvfrom() using an argument that cannot be a fd."],["test_invalid_flag","Test sendto() and recvfrom() using an unused flag."],["test_large_buf","Test sendto() and recvfrom() for sockets using large buffers (10^6 bytes)."],["test_large_buf_udp","Test sendto() and recvfrom() for UDP sockets just above the message limit of 65507 bytes."],["test_msg_order_dgram","Test sendto() and recvfrom() using a dgram socket and make sure that all sent messages are received as expected."],["test_non_existent_fd","Test sendto() and recvfrom() using an argument that could be a fd, but is not."],["test_non_socket_fd","Test sendto() and recvfrom() using a valid fd that is not a socket."],["test_nonblocking_stream","Test sendto() and recvfrom() using a non-blocking stream socket."],["test_nonnull_addr","Test sendto() using a connected socket, but also with a different non-null destination address."],["test_not_connected","Test sendto() and recvfrom() using a socket that is not conneected, but using a non-null address argument."],["test_null_addr","Test sendto() and recvfrom() using a null sockaddr, and non-zero or null sockaddr length."],["test_null_addr_len","Test recvfrom() using a null sockaddr length, and non-null sockaddr."],["test_null_addr_not_connected","Test sendto() and recvfrom() using a socket that is not connected, while using a null address argument."],["test_null_both","Test recvfrom() using a null sockaddr and a null sockaddr length."],["test_null_buf","Test sendto() and recvfrom() using a null buffer, and non-zero buffer length."],["test_recv_addr","Test recvfrom() using a socket and verify that the returned sockaddr is correct."],["test_short_recv_buf_dgram","Test recvfrom() using a dgram socket with a buffer that is too small to contain all of received the data."],["test_zero_len_buf","Test sendto() and recvfrom() using a buffer length of zero, and a non-null buffer."]],"struct":[["RecvfromArguments",""],["SendtoArguments",""]]});