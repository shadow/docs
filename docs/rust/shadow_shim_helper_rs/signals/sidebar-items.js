window.SIDEBAR_ITEMS = {"constant":[["SHD_SIGRT_MAX",""],["SHD_SIGRT_MIN","Lowest and highest valid realtime signal, according to signal(7).  We don’t use libc’s SIGRTMIN and SIGRTMAX directly since those may omit some signal numbers that libc reserves for its internal use. We still need to handle those signal numbers in Shadow."],["SHD_STANDARD_SIGNAL_MAX_NO",""],["SS_AUTODISARM","Definition is sometimes missing in the userspace headers. We could include the kernel signal header, but it has definitions that conflict with the userspace headers."]],"enum":[["ShdKernelDefaultAction",""]],"fn":[["defaultaction",""]],"struct":[["shd_kernel_sigaction","Compatible with kernel’s definition of `struct sigaction`. Different from libc’s in that `ksa_handler` and `ksa_sigaction` are explicitly in a union, and that `ksa_mask` is the kernel’s mask size (64 bits) vs libc’s larger one (~1000 bits for glibc)."],["shd_kernel_sigset_t","Compatible with the Linux kernel’s definition of sigset_t on x86_64."]],"union":[["ShdKernelSigactionUnion","In C this is conventioanlly an anonymous union, but those aren’t supported in Rust. https://github.com/rust-lang/rust/issues/49804"]]};