initSidebarItems({"struct":[["Give","Writer adapter which limits the bytes written to an underlying writer. Intended to be a [`std::io::Write`] counterpart to [`std::io::Take`] for [`std::io::Read`]. This does not force the write limit, for example `give.get_mut()` can be used to write directly to the underlying writer without updating the internal state of the `Give` object."]]});