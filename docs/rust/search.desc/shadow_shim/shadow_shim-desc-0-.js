searchState.loadedDescShard("shadow_shim", 0, "Release this thread’s shim thread local storage and exit …\nno_std thread-local storage\nExecute a native <code>clone</code> syscall, creating a new thread, …\nAllocates and installs a signal stack. This is to ensure …\nSafety\nWait for start event from shadow, from a newly spawned …\nSafety\nSafety\nSafety\nSafety\nSafety\nSafety\nWhether syscall interposition is currently enabled.\nShould be used to exit every thread in the shim.\nSets the flag determining whether syscalls are passed …\nThis thread’s IPC channel. Panics if it hasn’t been …\nThis thread’s IPC channel. Panics if it hasn’t been …\nAnalogous to <code>alloc::boxed::Box</code>, but directly uses <code>mmap</code> …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nImplementation of <code>log::Log</code> for use in the shim. Includes …\nReturns the argument unchanged.\nInstall a <code>ShimLogger</code> as  the logging backend in the Rust …\nCalls <code>U::from(self)</code>.\nHandle pending unblocked signals, and return whether <em>all</em> …\nSafety\nSafety\nThis needs to be big enough to store all thread-local …\nThis mode is similar to <code>NativeTlsId</code>, but instead of using …\nModes of operation for this module.\nDelegate back to ELF native thread local storage. This is …\nThis mode takes advantage of ELF native thread local …\nThread local storage for a variable of type <code>T</code>, initialized …\nProvider for thread local storage. For non-test usage, …\nAn opaque, per-thread identifier. These are only …\nThis is a “proxy” type to <code>TlsOneThreadStorage</code> with the …\nA reference to a single thread’s instance of a TLS …\nAn opaque key referencing this thread’s …\nReassigns storage from <code>prev_id</code> to the current thread, and …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAccess the inner value.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSafety\nCreate a variable that will be uniquely instantiated for …\nRelease this thread’s thread local storage and exit the …")