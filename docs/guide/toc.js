// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="shadow.html">The Shadow Simulator</a></li><li class="chapter-item expanded "><a href="design_2x.html"><strong aria-hidden="true">1.</strong> Design Overview</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> Installation Guide</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="supported_platforms.html"><strong aria-hidden="true">2.1.</strong> Supported Platforms</a></li><li class="chapter-item expanded "><a href="install_dependencies.html"><strong aria-hidden="true">2.2.</strong> Dependencies</a></li><li class="chapter-item expanded "><a href="install_shadow.html"><strong aria-hidden="true">2.3.</strong> Shadow</a></li><li class="chapter-item expanded "><a href="system_configuration.html"><strong aria-hidden="true">2.4.</strong> System Configuration</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> Usage Guide</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="run_shadow_overview.html"><strong aria-hidden="true">3.1.</strong> Running Your First Simulations</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="getting_started_basic.html"><strong aria-hidden="true">3.1.1.</strong> Basic File Transfer</a></li><li class="chapter-item expanded "><a href="getting_started_tgen.html"><strong aria-hidden="true">3.1.2.</strong> Traffic Generation</a></li><li class="chapter-item expanded "><a href="getting_started_tor.html"><strong aria-hidden="true">3.1.3.</strong> Simple Tor Network</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> Simulation Configuration</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="shadow_config_overview.html"><strong aria-hidden="true">3.2.1.</strong> Shadow Config Overview</a></li><li class="chapter-item expanded "><a href="shadow_config_spec.html"><strong aria-hidden="true">3.2.2.</strong> Shadow Config Specification</a></li><li class="chapter-item expanded "><a href="shadow_config_complex.html"><strong aria-hidden="true">3.2.3.</strong> Managing Complex Configurations</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> Network Configuration</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="network_graph_overview.html"><strong aria-hidden="true">3.3.1.</strong> Network Graph Overview</a></li><li class="chapter-item expanded "><a href="network_graph_spec.html"><strong aria-hidden="true">3.3.2.</strong> Network Graph Specification</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> Performance Tuning</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="sidechannels.html"><strong aria-hidden="true">3.4.1.</strong> Disabling Side-channel Mitigations</a></li><li class="chapter-item expanded "><a href="parallel_sims.html"><strong aria-hidden="true">3.4.2.</strong> Parallel Simulations</a></li><li class="chapter-item expanded "><a href="perf_config_options.html"><strong aria-hidden="true">3.4.3.</strong> Configuration options</a></li><li class="chapter-item expanded "><a href="profiling.html"><strong aria-hidden="true">3.4.4.</strong> Profiling</a></li></ol></li><li class="chapter-item expanded "><a href="semver.html"><strong aria-hidden="true">3.5.</strong> Stability Guarantees</a></li><li class="chapter-item expanded "><a href="security.html"><strong aria-hidden="true">3.6.</strong> Non-goal: Security</a></li><li class="chapter-item expanded "><a href="limitations.html"><strong aria-hidden="true">3.7.</strong> Known limitations and workarounds</a></li><li class="chapter-item expanded "><a href="compatibility_notes.html"><strong aria-hidden="true">3.8.</strong> Compatibility Notes</a></li></ol></li><li class="chapter-item expanded "><a href="contributing.html"><strong aria-hidden="true">4.</strong> Contributing</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="coding_style.html"><strong aria-hidden="true">4.1.</strong> Coding style</a></li><li class="chapter-item expanded "><a href="writing_tests.html"><strong aria-hidden="true">4.2.</strong> Writing tests</a></li><li class="chapter-item expanded "><a href="pull_requests.html"><strong aria-hidden="true">4.3.</strong> Pull requests</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> Developer Guide</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="coding.html"><strong aria-hidden="true">5.1.</strong> Coding</a></li><li class="chapter-item expanded "><a href="debugging.html"><strong aria-hidden="true">5.2.</strong> Debugging</a></li><li class="chapter-item expanded "><a href="profiling.html"><strong aria-hidden="true">5.3.</strong> Profiling</a></li><li class="chapter-item expanded "><a href="testing_determinism.html"><strong aria-hidden="true">5.4.</strong> Testing for Nondeterminism</a></li><li class="chapter-item expanded "><a href="extra_tests.html"><strong aria-hidden="true">5.5.</strong> Extra Tests</a></li><li class="chapter-item expanded "><a href="ci.html"><strong aria-hidden="true">5.6.</strong> Continuous integration tests</a></li><li class="chapter-item expanded "><a href="maintainer_playbook.html"><strong aria-hidden="true">5.7.</strong> Maintainer playbook</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.8.</strong> Shadow Output</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="log_format.html"><strong aria-hidden="true">5.8.1.</strong> Format of the Log Messages</a></li><li class="chapter-item expanded "><a href="parsing_shadow_logs.html"><strong aria-hidden="true">5.8.2.</strong> Parsing Statistics from the Logs</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="nsf_sponsorship.html"><strong aria-hidden="true">6.</strong> NSF Sponsorship</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
