(function() {
    var type_impls = Object.fromEntries([["boring_sys",[]],["linux_raw_sys",[]],["shadow_rs",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[17,21,17]}