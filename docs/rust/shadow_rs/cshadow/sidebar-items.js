initSidebarItems({"constant":[["CONFIG_PIPE_BUFFER_SIZE",""],["InterposeMethod_INTERPOSE_METHOD_PRELOAD",""],["InterposeMethod_INTERPOSE_METHOD_PTRACE",""],["ProtocolTCPFlags_PTCP_ACK",""],["ProtocolTCPFlags_PTCP_DUPACK",""],["ProtocolTCPFlags_PTCP_FIN",""],["ProtocolTCPFlags_PTCP_NONE",""],["ProtocolTCPFlags_PTCP_RST",""],["ProtocolTCPFlags_PTCP_SACK",""],["ProtocolTCPFlags_PTCP_SYN",""],["QDiscMode_Q_DISC_MODE_FIFO",""],["QDiscMode_Q_DISC_MODE_ROUND_ROBIN",""],["SHADOW_SOMAXCONN",""],["SYSCALL_IO_BUFSIZE",""],["SchedulerPolicyType_SP_PARALLEL_HOST_SINGLE",""],["SchedulerPolicyType_SP_PARALLEL_HOST_STEAL",""],["SchedulerPolicyType_SP_PARALLEL_THREAD_PERHOST",""],["SchedulerPolicyType_SP_PARALLEL_THREAD_PERTHREAD",""],["SchedulerPolicyType_SP_PARALLEL_THREAD_SINGLE",""],["StraceFmtMode_STRACE_FMT_MODE_DETERMINISTIC",""],["StraceFmtMode_STRACE_FMT_MODE_OFF",""],["StraceFmtMode_STRACE_FMT_MODE_STANDARD",""],["SysCallReturnState_SYSCALL_BLOCK",""],["SysCallReturnState_SYSCALL_DONE",""],["SysCallReturnState_SYSCALL_NATIVE",""],["_LogInfoFlags_LOG_INFO_FLAGS_NODE",""],["_LogInfoFlags_LOG_INFO_FLAGS_NONE",""],["_LogInfoFlags_LOG_INFO_FLAGS_RAM",""],["_LogInfoFlags_LOG_INFO_FLAGS_SOCKET",""],["_LogLevel_LOGLEVEL_DEBUG",""],["_LogLevel_LOGLEVEL_ERROR",""],["_LogLevel_LOGLEVEL_INFO",""],["_LogLevel_LOGLEVEL_TRACE",""],["_LogLevel_LOGLEVEL_UNSET",""],["_LogLevel_LOGLEVEL_WARNING",""],["_ProtocolType_PLOCAL",""],["_ProtocolType_PNONE",""],["_ProtocolType_PTCP",""],["_ProtocolType_PUDP",""],["_Status_STATUS_DESCRIPTOR_ACTIVE",""],["_Status_STATUS_DESCRIPTOR_CLOSED",""],["_Status_STATUS_DESCRIPTOR_READABLE",""],["_Status_STATUS_DESCRIPTOR_WRITABLE",""],["_Status_STATUS_FUTEX_WAKEUP",""],["_Status_STATUS_NONE",""],["_Status_STATUS_SOCKET_ALLOWING_CONNECT",""],["_TriggerType_TRIGGER_DESCRIPTOR",""],["_TriggerType_TRIGGER_FILE",""],["_TriggerType_TRIGGER_FUTEX",""],["_TriggerType_TRIGGER_NONE",""]],"fn":[["affinity_getGoodWorkerAffinity",""],["affinity_initPlatformInfo",""],["affinity_setProcessAffinity",""],["controller_free",""],["controller_new",""],["controller_run",""],["descriptor_close",""],["descriptor_getHandle",""],["descriptor_setHandle",""],["descriptor_setOwnerProcess",""],["descriptor_shutdownHelper",""],["descriptor_unref",""],["host_addApplication",""],["host_autotuneReceiveBuffer",""],["host_autotuneSendBuffer",""],["host_boot",""],["host_compare",""],["host_detachAllPlugins",""],["host_doesInterfaceExist",""],["host_freeAllApplications",""],["host_getAbstractUnixNamespace",""],["host_getCPU",""],["host_getConfiguredRecvBufSize",""],["host_getConfiguredSendBufSize",""],["host_getDataPath",""],["host_getDefaultAddress",""],["host_getDefaultIP",""],["host_getFutexTable",""],["host_getID",""],["host_getLogLevel",""],["host_getName",""],["host_getNativeTID",""],["host_getNewEventID",""],["host_getNewPacketID",""],["host_getNewProcessID",""],["host_getNextDeterministicSequenceValue",""],["host_getNextPacketPriority",""],["host_getProcess",""],["host_getRandom",""],["host_getRandomFreePort",""],["host_getSharedMem",""],["host_getShimShmemLock",""],["host_getThread",""],["host_getTracker",""],["host_getTsc",""],["host_getUpstreamRouter",""],["host_isEqual",""],["host_isInterfaceAvailable",""],["host_lock",""],["host_lockShimShmemLock",""],["host_new",""],["host_ref",""],["host_returnHandleHack",""],["host_setup",""],["host_shutdown",""],["host_unlock",""],["host_unlockShimShmemLock",""],["host_unref",""],["main_checkGlibVersion",""],["main_logBuildInfo",""],["main_printBuildInfo",""],["main_runShadow",""],["main_sidechannelMitigationsEnabled",""],["packet_copyPayloadShadow",""],["packet_getDestinationIP",""],["packet_getDestinationPort",""],["packet_getHeaderSize",""],["packet_getPayloadLength",""],["packet_getProtocol",""],["packet_getSourceIP",""],["packet_getSourcePort",""],["packet_getTCPHeader",""],["process_addThread",""],["process_continue",""],["process_deregisterCompatDescriptor",""],["process_deregisterLegacyDescriptor",""],["process_detachPlugin",""],["process_findNativeTID",""],["process_flushPtrs",""],["process_freePtrsWithoutFlushing",""],["process_getDescriptorTable",""],["process_getHostId",""],["process_getInterposeMethod",""],["process_getMemoryManager",""],["process_getMutablePtr",""],["process_getName",""],["process_getNativePid",""],["process_getPhysicalAddress",""],["process_getPluginName",""],["process_getProcessID",""],["process_getReadablePtr",""],["process_getReadableString",""],["process_getRegisteredCompatDescriptor",""],["process_getRegisteredLegacyDescriptor",""],["process_getSharedMem",""],["process_getStraceFd",""],["process_getThread",""],["process_getWorkingDir",""],["process_getWriteablePtr",""],["process_hasStarted",""],["process_interruptWithSignal",""],["process_isRunning",""],["process_markAsExiting",""],["process_new",""],["process_parseArgStr",""],["process_parseArgStrFree",""],["process_readPtr",""],["process_readString",""],["process_ref",""],["process_registerCompatDescriptor",""],["process_registerLegacyDescriptor",""],["process_schedule",""],["process_setMemoryManager",""],["process_stop",""],["process_straceLoggingMode",""],["process_unref",""],["process_writePtr",""],["return_code_for_signal",""],["runConfigHandlers",""],["rustlogger_new",""],["statuslistener_onStatusChanged",""],["statuslistener_ref",""],["statuslistener_unref",""],["syscallcondition_getActiveFile",""],["syscallcondition_new",""],["syscallcondition_setActiveFile",""],["syscallcondition_unref",""],["syscallhandler_accept",""],["syscallhandler_accept4",""],["syscallhandler_bind",""],["syscallhandler_connect",""],["syscallhandler_dup",""],["syscallhandler_exit_group",""],["syscallhandler_fcntl",""],["syscallhandler_getpeername",""],["syscallhandler_getpid",""],["syscallhandler_getppid",""],["syscallhandler_getsockname",""],["syscallhandler_getsockopt",""],["syscallhandler_ioctl",""],["syscallhandler_listen",""],["syscallhandler_pread64",""],["syscallhandler_pwrite64",""],["syscallhandler_read",""],["syscallhandler_recvfrom",""],["syscallhandler_sendto",""],["syscallhandler_set_tid_address",""],["syscallhandler_setsockopt",""],["syscallhandler_shutdown",""],["syscallhandler_socket",""],["syscallhandler_socketpair",""],["syscallhandler_uname",""],["syscallhandler_write",""],["thread_clone",""],["thread_getHost",""],["thread_getHostId",""],["thread_getID",""],["thread_getIPCBlock",""],["thread_getNativePid",""],["thread_getNativeTid",""],["thread_getProcess",""],["thread_getProcessId",""],["thread_getReturnCode",""],["thread_getShMBlock",""],["thread_getSignalSet",""],["thread_getSysCallCondition",""],["thread_getSysCallHandler",""],["thread_getTidAddress",""],["thread_handleProcessExit",""],["thread_isLeader",""],["thread_isRunning",""],["thread_nativeSyscall",""],["thread_ref",""],["thread_resume",""],["thread_run",""],["thread_setTidAddress",""],["thread_unblockedSignalPending",""],["thread_unref",""],["worker_add_syscall_counts",""],["worker_clearCurrentTime",""],["worker_getAffinity",""],["worker_getChildPidWatcher",""],["worker_getConfig",""],["worker_getCurrentEmulatedTime",""],["worker_getCurrentSimulationTime",""],["worker_getDNS",""],["worker_getLatency",""],["worker_getLatencyForAddresses",""],["worker_getNodeBandwidthDown",""],["worker_getNodeBandwidthUp",""],["worker_getReliability",""],["worker_getReliabilityForAddresses",""],["worker_incrementPacketCount",""],["worker_incrementPluginError",""],["worker_increment_object_alloc_counter",""],["worker_increment_object_dealloc_counter",""],["worker_isAlive",""],["worker_isBootstrapActive",""],["worker_isFiltered",""],["worker_isRoutable",""],["worker_maxEventRunaheadTime",""],["worker_newForThisThread",""],["worker_resolveIPToAddress",""],["worker_resolveNameToAddress",""],["worker_runEvent",""],["worker_scheduleTaskAtEmulatedTime",""],["worker_scheduleTaskWithDelay",""],["worker_sendPacket",""],["worker_setActiveHost",""],["worker_setActiveProcess",""],["worker_setActiveThread",""],["worker_setCurrentEmulatedTime",""],["worker_setMinEventTimeNextRound",""],["worker_setRoundEndTime",""],["worker_threadID",""],["worker_updateMinHostRunahead",""],["workerpool_updateMinHostRunahead",""]],"struct":[["ChildPidWatcher",""],["Counter",""],["SyscallHandler",""],["TaskRef",""],["_Address",""],["_CPU",""],["_Controller",""],["_DNS",""],["_Epoll",""],["_Event",""],["_Futex",""],["_FutexTable",""],["_GTimer",""],["_Host",""],["_HostParameters",""],["_NetworkInterface",""],["_Packet",""],["_PacketTCPHeader",""],["_PluginPhysicalPtr",""],["_PluginVirtualPtr",""],["_Process",""],["_Router",""],["_ShMemBlock",""],["_ShimHostProtectedSharedMem",""],["_ShimShmemHost",""],["_ShimShmemProcess",""],["_ShimShmemThread",""],["_StatusListener",""],["_SysCallArgs",""],["_SysCallCondition",""],["_SysCallHandler",""],["_SysCallReturn",""],["_Thread",""],["_Tracker",""],["_Transport",""],["_TransportFunctionTable",""],["_Trigger",""],["_Tsc",""],["__sigset_t",""]],"type":[["Address","An Address structure holds information used to identify nodes, allowing for easy extraction of both integer and string forms of an IP address as well as the string hostname associated with the IP. Address is an opaque structure and should only be accessed using the functions in this class."],["CPU",""],["Controller",""],["DNS",""],["DescriptorCleanupFunc",""],["DescriptorCloseFunc",""],["DescriptorFreeFunc",""],["EmulatedTime","Emulation time in nanoseconds. Allows for a consistent representation of time throughput the simulator. Emulation time is the simulation time plus the EMULATION_TIME_OFFSET. This type allows us to explicitly distinguish each type of time in the code.,"],["Epoll",""],["Event",""],["Futex",""],["FutexTable",""],["GList",""],["GQuark",""],["GTimer",""],["Host",""],["HostId",""],["HostParameters",""],["InterposeMethod",""],["LegacyDescriptor",""],["NetworkInterface",""],["Packet",""],["PacketTCPHeader",""],["PluginPhysicalPtr",""],["PluginPtr",""],["PluginVirtualPtr",""],["Process",""],["ProtocolTCPFlags",""],["QDiscMode",""],["Router",""],["SchedulerPolicyType",""],["ShMemBlock",""],["ShimShmemHost",""],["ShimShmemHostLock",""],["ShimShmemProcess",""],["ShimShmemThread",""],["SimulationTime","Simulation time in nanoseconds. Allows for a consistent representation of time throughput the simulator."],["StatusListener",""],["StraceFmtMode",""],["SysCallArgs",""],["SysCallCondition",""],["SysCallHandler",""],["SysCallReg",""],["SysCallReturn",""],["SysCallReturnState",""],["Thread",""],["Tracker",""],["Transport",""],["TransportFunctionTable",""],["TransportReceiveFunc",""],["TransportSendFunc",""],["Trigger",""],["TriggerObject",""],["Tsc",""],["WorkerPool",""],["_LogInfoFlags",""],["_LogLevel",""],["_ProtocolType",""],["_Status",""],["_TriggerType",""],["__int32_t",""],["__int64_t",""],["__pid_t",""],["__ssize_t",""],["__uint16_t",""],["__uint32_t",""],["__uint64_t",""],["gboolean",""],["gchar",""],["gconstpointer",""],["gdouble",""],["gint",""],["gpointer",""],["gsize",""],["gssize",""],["guint",""],["guint32",""],["guint64",""],["in_addr_t",""],["in_port_t",""],["pid_t",""],["sa_family_t",""],["sigset_t",""],["size_t",""],["ssize_t",""]],"union":[["_SysCallReg",""],["_TriggerObject",""]]});