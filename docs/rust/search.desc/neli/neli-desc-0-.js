searchState.loadedDescShard("neli", 0, "neli: Type safety for netlink\nA <code>u64</code> data type that will always be serialized as big …\nA trait defining how to convert from a byte buffer to a …\nDerives the neli <code>FromBytes</code> trait for a struct.\nTakes an arbitrary input which serves as additional …\nDerives the neli <code>FromBytesWithInput</code> trait for a struct.\nDefined for data structures that contain a header.\nDerives the neli <code>Header</code> trait for a struct or enum. Unlike …\nThe type of the additional input.\nA trait defining methods that apply to all netlink data …\nDerives the neli <code>Size</code> trait for a struct or enum.\nA trait defining a netlink data structure’s conversion to\nDerives the neli <code>ToBytes</code> trait for a struct or enum.\nA trait defining methods that apply to constant-sized data …\nAs native endian <code>u64</code>\nShared attribute code for all types of netlink attributes.\nHigh level notes\nThis is the module that contains the error types used in …\nReturns the argument unchanged.\nTakes a byte buffer and returns the deserialized data …\nTakes a byte buffer and an additional input and returns …\nThis module contains generic netlink parsing data …\nReturn the size in bytes of the data structure header.\nImplement a container for bit flag enums where the set of …\nFor generating a marker trait that flags a new enum as …\nCalls <code>U::from(self)</code>.\nModule for iteration over netlink responses\nConverts an enum from the form:\nCreate a big endian <code>u64</code> type from a native endian <code>u64</code>\nThis module contains the top level netlink header code. …\nPad a netlink message to the appropriate alignment.\nGet the size of of the payload and align it to the …\nThis module provides an implementation of routing netlink …\nThis module provides code that glues all of the other …\nStrip padding from a netlink message.\nTakes a byte buffer and serializes the data structure into …\nGet the size of a constant-sized data type.\nModule containing various types used across the various …\nSize of the unpadded data structure. This will usually …\nA module containing utilities for working with constructs …\nHandle returned for traversing nested attribute structures\nHandle for traversing nested attribute structures mutably\nTrait that defines shared operations for netlink …\nVector reference\nVector reference\nOwned vector\nOwned vector\nReturns the argument unchanged.\nReturns the argument unchanged.\nParse binary payload as a type that implements <code>FromBytes</code>.\nParse binary payload as a type that implements <code>FromBytes</code>.\nParse binary payload as a type that implements …\nParse binary payload as a type that implements …\nGet nested attributes from a parsed handle\nGet nested attributes from a parsed handle.\nGet the underlying owned value as a reference\nGet the underlying owned value as a mutable reference or …\nGet the payload of an attribute as a handle for parsing …\nGet the payload of an attribute as a handle for parsing …\nGet an <code>Nlattr</code> payload as the provided type parameter, <code>R</code>.\nGet an <code>Nlattr</code> payload as the provided type parameter, <code>R</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPass back iterator over attributes\nPass back iterator over attributes\nCreate new <code>AttrHandle</code>\nCreate new <code>AttrHandle</code>\nCreate new borrowed <code>AttrHandle</code>\nCreate new borrowed <code>AttrHandleMut</code>\nGet the payload of the given attribute.\nSet the payload to a data type that implements <code>ToBytes</code> - …\nMax supported message length for netlink messages …\nReimplementation of alignto macro in C\nConstants related to generic netlink\nConstants related to netfilter netlink integration …\nConstants related to generic netlink top level headers\nConstants related to rtnetlink\nConstants related to netlink socket operations\nTrait marking constants valid for use in <code>Genlmsghdr</code> field, …\nValues for <code>nla_type</code> in <code>Nlattr</code>\nValues for <code>nla_type</code> in <code>Nlattr</code>\nValues for <code>cmd</code> in <code>Genlmsghdr</code>.\nType representing attribute list types as indices\nMarker trait for types usable in the <code>Nlattr</code> field, <code>nla_type</code>\nWrapper that is usable with all values in the <code>Nlattr</code> …\nConstant could not be parsed into a type\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nParameters for the <code>NfLogCfg::Cmd</code>.\nWrapper that is valid anywhere that accepts a value …\nCommand value for the <code>NfLogCfg::Cmd</code>.\nCopy mode of the logged packets.\nMessages related to the netfilter netlink protocols.\nAttributes inside a netfilter log packet message.\nConfiguration attributes for netfilter logging.\nConstant could not be parsed into a type\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nValues for <code>nl_type</code> in <code>Nlmsghdr</code>\nTrait marking constants valid for use in <code>Nlmsghdr</code> field, …\nWrapper that is usable with all values in <code>Nlmsghdr</code> field, …\nValues for <code>nl_flags</code> in <code>Nlmsghdr</code>\nValues for <code>nl_type</code> in <code>Nlmsghdr</code>\nThis flag is required for all kernel requests\nConstant could not be parsed into a type\nContains a flag\nCreate an empty flag container\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a flag container from a bitmask.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nInitialize a flag container with the given flags\nAdd a flag\nAdd a flag\nInternet address families\nInterface types\nEnum usable with <code>Rtattr</code> field, <code>rta_type</code>. Values are …\nInterface address flags\nValues for <code>ifi_flags</code> in <code>Ifinfomsg</code>.\nEnum usable with <code>Rtattr</code> field, <code>rta_type</code>. Values are …\nEnum usable with <code>Rtattr</code> field, <code>rta_type</code>. Values are nested …\nEnum usable with <code>Rtattr</code> field, <code>rta_type</code>. Values specify …\nArp neighbor cache entry flags\nArp neighbor cache entry states\nGeneral address families for sockets\n<code>rtm_scope</code> The distance between destinations\n<code>rt_class_t</code> Reserved route table identifiers\nEnum usable with <code>Rtattr</code> field, <code>rta_type</code>. Values are …\nMarker trait for <code>Rtattr</code> field, <code>rta_type</code>.\nWrapper that is usable for all values in <code>Rtattr</code> field, …\nrtnetlink-related values for <code>nl_type</code> in <code>Nlmsghdr</code>.\n<code>rtm_flags</code> Flags for rtnetlink messages\n<code>rtm_type</code> The results of a lookup from a route table\n<code>rtm_protocol</code> The origins of routes that are defined in the …\nEnum usable with <code>Rtattr</code> field, <code>rta_type</code>. Values specify …\nConstant could not be parsed into a type\nContains a flag\nContains a flag\nContains a flag\nContains a flag\nContains a flag\nCreate an empty flag container\nCreate an empty flag container\nCreate an empty flag container\nCreate an empty flag container\nCreate an empty flag container\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a flag container from a bitmask.\nCreate a flag container from a bitmask.\nCreate a flag container from a bitmask.\nCreate a flag container from a bitmask.\nCreate a flag container from a bitmask.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nInitialize a flag container with the given flags\nInitialize a flag container with the given flags\nInitialize a flag container with the given flags\nInitialize a flag container with the given flags\nInitialize a flag container with the given flags\nAdd a flag\nAdd a flag\nAdd a flag\nAdd a flag\nAdd a flag\nAdd a flag\nAdd a flag\nAdd a flag\nAdd a flag\nAdd a flag\nGeneral address families for sockets\nValues for <code>nl_family</code> in <code>NlSocket</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck whether a given method is an unrecognized constant …\nCheck whether a given method is an unrecognized constant …\nIncorrect PID socket identifier in received message.\nThe sequence number for the response did not match the …\nSerialization did not fill the buffer.\nDeserialization did not fill the buffer.\nA deserialization error.\nDeserialization error\nWrapper for <code>std::ffi::FromBytesWithNulError</code>\nWrapper for <code>std::io::Error</code>\nVariant for <code>String</code>-based messages.\nAbitrary error message.\nAbitrary error message.\nGeneral netlink error\nStruct representing netlink packets containing errors\nAn error packet sent back by netlink.\nA special struct that represents the contents of an error …\nNo ack was received when <code>NlmF::Ack</code> was specified in the …\nA null byte was not found at the end of the serialized …\nA null byte was found before the end of the serialized …\nA serialization error.\nSerialization error\nWrapper for <code>std::str::Utf8Error</code>\nWrapper for <code>std::string::FromUtf8Error</code>\nThe end of the buffer was reached before serialization …\nThe end of the buffer was reached before deserialization …\nA wrapped error from lower in the call stack.\nA wrapped error from lower in the call stack.\nA wrapped error from lower in the call stack.\nAn error to wrap all system level errors in a single, …\nError code\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate new error from a data type implementing <code>Display</code>\nCreate new error from a data type implementing <code>Display</code>\nCreate a new error with the given message as description.\nCreate new error from a type implementing <code>Display</code>\nFlags indicating properties of the request or response\nLength of the netlink message\nPayload of netlink message\nID of the netlink destination for requests and source for …\nSequence number for netlink protocol\nType of the netlink message\nPacket header for request that failed\nThe infomation packed into <code>nla_type</code> field of <code>nlattr</code> for …\nStruct representing generic netlink header and payload\nStruct representing netlink attributes and payloads\nStruct indicating that no user header is in the generic …\nAdd a nested attribute to the end of the payload.\nGeneric netlink message command\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet handle for attribute parsing and traversal\nReturn an <code>AttrHandle</code> for attributes nested in the given …\nGet handle for attribute mutable and traversal\nReturn a mutable <code>AttrHandle</code> for attributes nested in the …\nUser specific header to send with netlink packet; defaults …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate new generic netlink packet\nCreate a new <code>Nlattr</code> with parameters for setting bitflags …\nCreate a new netlink struct with a user header\nLength of the attribute header and payload together\nIf true, the payload contains nested attributes.\nIf true, the payload is in net work byte order.\nPayload of the attribute - either parsed or a binary buffer\nEnum representing the type of the attribute payload\nType information for the netlink attribute\nVersion of generic netlink family protocol\nEnd iteration of multi-part messages when a DONE message is\nIterate indefinitely. Mostly useful for multicast …\nDefine iteration behavior when traversing a stream of …\nIterator over messages in an <code>NlSocketHandle</code> type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new iterator that yields <code>Nlmsghdr</code> structs from …\nRepresents an ACK returned by netlink.\nIndicates an empty payload.\nRepresents an application level error returned by netlink.\nAn enum representing either the desired payload as …\nTop level netlink header and payload\nRepresents the requested payload.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the payload of the netlink packet and return <code>None</code> if …\nGet the payload if there is one or return an error.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new top level netlink packet with a payload.\nFlags indicating properties of the request or response\nLength of the netlink message\nPayload of netlink message\nID of the netlink destination for requests and source for …\nSequence number for netlink protocol\nType of the netlink message\nStruct representing interface address messages\nStruct representing interface information messages\nStruct representing ARP cache info\nRepresents an ARP (neighbor table) entry\nStruct representing route netlink attributes\nGeneral form of address family dependent message.  Used for\nRoute message\nMessage in response to queuing discipline operations\nAdd a nested attribute to the end of the payload.\nSet the link with the given index down (equivalent to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn an <code>AttrHandle</code> for attributes nested in the given …\nReturn an <code>AttrHandleMut</code> for attributes nested in the given …\nInterface address family\nInterface address flags\nInterface address index\nInterface address prefix length\nInterface address scope\nInterface change mask\nInterface address family\nInterface flags\nInterface index\nInterface type\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConfirmed\nAddress family of entry\nFlags for entry\nIndex of entry\nReference count\nState of entry\nType of entry\nUpdated\nUsed\nCreate a fully initialized interface info struct\nCreate a fully initialized neighbor table struct\nCreate a new <code>Tcmsg</code> structure handling the necessary …\nCreate a new <code>Rtattr</code>.\nLength of the attribute\nPayload of the attribute\nType of the attribute\nPayload of <code>Rtattr</code>s\nPayload of <code>Rtattr</code>s\nPayload of <code>Rtattr</code>s\nPayload of <code>Rtattr</code>s\nPayload of <code>Rtattr</code>s\nAddress family for the request\nLength of destination\nAddress family of route\nRouting flags\nRouting protocol\nRouting scope\nLength of source\nRouting table ID\nTOS filter\nRouting type\nFamily\nQueuing discipline handle\nInterface index\nInfo\nParent queuing discipline\nSet the link with the given index up (equivalent to …\nLow level access to a netlink socket.\nHigher level handle for socket operations.\nJoin multicast groups for a socket.\nJoin multicast groups for a socket.\nUse this function to bind to a netlink ID and subscribe to …\nUse this function to bind to a netlink ID and subscribe to …\nSet underlying socket file descriptor to be blocking.\nSet underlying socket file descriptor to be blocking.\nEquivalent of <code>socket</code> and <code>bind</code> calls.\nEquivalent of <code>socket</code> and <code>bind</code> calls.\nCloses underlying file descriptor to avoid file descriptor …\nLeave multicast groups for a socket.\nLeave multicast groups for a socket.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDetermines if underlying file descriptor is blocking.\nDetermines if underlying file descriptor is blocking.\nReturn an iterator object\nList joined groups for a socket.\nList joined groups for a socket.\nLook up netlink family and multicast group name by ID.\nWrapper around <code>socket()</code> syscall filling in the …\nWrapper around <code>socket()</code> syscall filling in the …\nSet underlying socket file descriptor to be non blocking.\nSet underlying socket file descriptor to be non blocking.\nGet the PID for this socket.\nGet the PID for the current socket.\nReceive message encoded as byte slice from the netlink …\nConvenience function to read a stream of <code>Nlmsghdr</code> structs …\nParse all <code>Nlmsghdr</code> structs sent in one network packet and …\nConvenience function for resolving a <code>str</code> containing the …\nConvenience function for resolving a <code>str</code> containing the …\nSend message encoded as byte slice to the netlink ID …\nConvenience function to send an <code>Nlmsghdr</code> struct\nA buffer of bytes.\nA buffer of flag constants.\nA buffer of generic netlink attributes.\nA buffer of netlink messages.\nA buffer of rtnetlink attributes.\nCheck whether the set of flags contains the given flag.\nCreate an empty set of flags.\nExtend the given buffer with the contents of another slice.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a <code>FlagBuffer</code> from a bitmask.\nGet a data structure with an immutable reference to the …\nGet a data structure with an immutable reference to the …\nGet a data structure with a mutable reference to the …\nGet a data structure with a mutable reference to the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck whether the buffer is empty.\nReturns whether the number of elements in the buffer is 0.\nReturns whether the number of elements in the buffer is 0.\nReturns whether the number of elements in the buffer is 0.\nReturn an iterator over immutable references to the …\nReturn an iterator over immutable references to the …\nReturn an iterator over immutable references to the …\nReturn an iterator over mutable references to the elements …\nReturn an iterator over mutable references to the elements …\nReturn an iterator over mutable references to the elements …\nGet the current length of the buffer.\nReturns the number of elements in the buffer.\nReturns the number of elements in the buffer.\nReturns the number of elements in the buffer.\nCreate a new general purpose byte buffer.\nCreate a new buffer of netlink messages.\nCreate a new buffer of generic netlink attributes.\nCreate a new buffer of routing netlink attributes.\nGet a netlink message from the end of the buffer.\nGet a generic netlink attribute from the end of the buffer.\nGet a routing netlink attribute from the end of the buffer.\nAdd a new netlink message to the end of the buffer.\nAdd a new generic netlink attribute to the end of the …\nAdd a new routing netlink attribute to the end of the …\nAdd a flag to the set of flags.\nRemove a flag from the set of flags.\nA bit array meant to be compatible with the bit array …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns true if the <code>n</code>th bit is set.\nReturn the length in bytes for this bit array.\nReturn the number of bits that can be contained in this bit\nCreate a new bit array.\nResize the underlying vector to have enough space for the …\nResize the underlying vector to have enough space for the …\nSet the <code>n</code>th bit.\nGet a vector representation of all of the bit positions set")