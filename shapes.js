// Fantasy Map Editor — Help Panel
// Full reference guide content and UI.

  // ── Help Panel ───────────────────────────────────────────────────────────────
  const HELP_CONTENT = {
    start: {
      title: 'Getting Started',
      html: `
<h3>Welcome to Fantasy Map Editor v2.9</h3>
<p>This is a single-file browser app — no installation, no account, no server. Everything lives in this HTML file. Open it locally, create your world, save a project JSON.</p>

<div class="help-highlight">
  <strong>Quick start:</strong> Click <em>Load Map</em> to load your map image, then click the map to place your first pin.
</div>

<h4>The Toolbar</h4>
<p>The toolbar at the top contains all your tools. Modes on the left, actions in the middle, export on the right. The active mode button is highlighted in gold.</p>

<h4>Your Workflow</h4>
<ul>
  <li>Load a map image (PNG, JPG, SVG — any size)</li>
  <li>Set up categories in the <strong>Categories</strong> panel (colors, names)</li>
  <li>Place pins with <strong>Place Pin</strong> mode or right-click anywhere</li>
  <li>Draw regions to mark territories, biomes, or kingdoms</li>
  <li>Link pins to show relationships</li>
  <li>Save your project as a JSON file — this preserves everything</li>
</ul>

<div class="help-tip">
  💡 Your project file is a standard JSON and can be loaded back at any time. Keep it alongside your map image.
</div>

<h4>Saving vs Exporting</h4>
<p><strong>Save Project</strong> creates a .json file you can reload for continued editing. <strong>Export Viewer</strong> creates a standalone read-only HTML file you can share with anyone.</p>
`
    },
    pins: {
      title: 'Pins',
      html: `
<h3>Pins</h3>
<p>Pins are the main content of your map — cities, dungeons, points of interest, characters, events, anything you want to place and describe.</p>

<h4>Placing Pins</h4>
<ul>
  <li>Select <strong>Place Pin</strong> mode and click anywhere on the map</li>
  <li>Or <strong>right-click</strong> any empty area to quick-place a pin</li>
  <li>The pin modal opens — give it a name, type, description, tags, and image</li>
</ul>

<h4>Pin Fields</h4>
<ul>
  <li><strong>Name</strong> — shown on the map as a label</li>
  <li><strong>Type</strong> — sets the category (color and icon). Add new types with ＋ New type…</li>
  <li><strong>Shape</strong> — 69 shapes available: teardrop, sword, skull, mountain, castle, and more</li>
  <li><strong>Group</strong> — nest pins under a named group, collapsible in the Categories panel</li>
  <li><strong>Description</strong> — supports <code>**bold**</code>, <code>*italic*</code>, <code>---</code> dividers, <code>• bullets</code>, <code>![alt](url)</code> images, and markdown tables. Use the toolbar above the text box.</li>
  <li><strong>Tags</strong> — comma-separated keywords, searchable</li>
  <li><strong>Image</strong> — attach a photo or illustration shown in the reader</li>
</ul>

<h4>Edit History</h4>
<p>Every time you save changes to a pin, the previous version is stored (up to 20 snapshots). Open the pin's edit modal and scroll to <em>Edit History</em> to restore an older version.</p>

<h4>Moving Pins</h4>
<p>Switch to <strong>Move Pin</strong> mode and drag any pin to reposition it. Use <strong>Select</strong> mode to move multiple pins at once.</p>

<h4>Deleting Pins</h4>
<p>Right-click a pin and type <code>delete</code>. Or select multiple with Select mode and press <span class="help-key">Delete</span>.</p>

<h4>Duplicating</h4>
<p>Right-click a pin and type <code>dup</code> to create a copy offset slightly from the original.</p>

<h4>Templates</h4>
<p>Save a pin's current type, tags, description, and group as a reusable template using the <strong>★ Template</strong> button in the modal. Access templates via the ▾ dropdown beside the Place Pin button to stamp the same configuration repeatedly.</p>

<div class="help-tip">💡 Templates are perfect for placing 20 dungeons that all share the same description structure or tag set.</div>
`
    },
    links: {
      title: 'Links',
      html: `
<h3>Links</h3>
<p>Links draw lines between pins to show relationships, routes, or connections.</p>

<h4>Creating Links</h4>
<ul>
  <li>Switch to <strong>Link</strong> mode</li>
  <li>Click the first pin — it highlights</li>
  <li>Click the second pin — the link is created</li>
  <li>Click the first pin again to cancel</li>
</ul>

<h4>Link Labels</h4>
<p>In Link mode, click an existing link line to select it. Click it again to open a prompt where you can:</p>
<ul>
  <li>Set a label (shown at the midpoint of the line)</li>
  <li>Clear the label (enter blank)</li>
  <li>Delete the link (type <code>delete</code>)</li>
</ul>

<h4>Links in the Reader</h4>
<p>When reading a pin, connected pins appear in a <em>Connected locations</em> section at the bottom. Link labels appear beside each connection. Click any entry to jump to that pin's reader.</p>

<h4>Relationship Graph</h4>
<p>The <strong>⬡ Graph</strong> button opens a full force-directed graph showing all pins and their links as a constellation. Useful for seeing which locations are hubs and how everything connects. See the <em>Graph</em> tab for details.</p>
`
    },
    regions: {
      title: 'Regions',
      html: `
<h3>Regions</h3>
<p>Regions are filled polygon overlays for marking territories, biomes, kingdoms, or any named area on your map.</p>

<h4>Drawing Regions</h4>
<p>Switch to <strong>Region</strong> mode. A shape toolbar appears at the bottom:</p>
<ul>
  <li><strong>✏ Freehand</strong> — click to place polygon vertices, double-click to close</li>
  <li><strong>○ Circle</strong> — click center, drag to set radius, release</li>
  <li><strong>★ Star</strong> — click center, drag to set size</li>
  <li><strong>⌒ Arc</strong> — click three points (start, midpoint, end) to draw a pie-slice arc</li>
  <li><strong>▭ Rect</strong> — drag to draw a rectangle</li>
</ul>
<p>After closing a shape, the edit modal opens to name it and set its category.</p>

<h4>Editing Region Vertices</h4>
<p>Right-click a region and type <code>edit</code> to enter vertex edit mode. Gold handles appear at each corner — drag them to reshape. Right-click a handle to delete that vertex. Click outside to finish.</p>

<h4>Region Labels</h4>
<p>Named regions show an italic label at their centroid. Clicking the label opens the region's edit modal (or reader in Read mode).</p>

<h4>Deleting / Duplicating</h4>
<p>Right-click a region and type <code>delete</code> or <code>dup</code>.</p>
`
    },
    drawings: {
      title: 'Drawings',
      html: `
<h3>Drawings</h3>
<p>Freehand paths you draw on the map — roads, rivers, borders, routes, coastlines.</p>

<h4>Drawing</h4>
<ul>
  <li>Switch to <strong>Draw</strong> mode</li>
  <li>Click and drag to draw a freehand path</li>
  <li>Release to finish — the path is simplified automatically</li>
  <li>The edit modal opens to name it, set its category, and adjust stroke width</li>
</ul>

<h4>Color</h4>
<p>Drawings are colored by their category. Change the category color in the Categories panel to update all drawings of that type.</p>

<h4>Labels</h4>
<p>Named drawings show a small label near their centroid, toggled by the <strong>Labels</strong> button.</p>

<h4>Duplicating</h4>
<p>Right-click a drawing and type <code>dup</code>.</p>
`
    },
    categories: {
      title: 'Categories',
      html: `
<h3>Categories</h3>
<p>Categories give your pins, drawings, and regions their color identity and organize them in the panel.</p>

<h4>Opening the Panel</h4>
<p>Click <strong>◆ Categories</strong> in the toolbar. It slides in from the right.</p>

<h4>Colors</h4>
<p>Each category has two color swatches:</p>
<ul>
  <li><strong>Primary</strong> (left) — the main fill color of the pin icon</li>
  <li><strong>Secondary / Accent</strong> (right) — the inner highlight color, used for the inner circle, eyes, gems, etc.</li>
</ul>
<p>Click either swatch to open the color picker.</p>

<h4>Managing Categories</h4>
<ul>
  <li><strong>Rename</strong> — click the name field and type</li>
  <li><strong>Reorder</strong> — drag the ⠿ handle</li>
  <li><strong>Show/Hide on map</strong> — the ◉ eye checkbox</li>
  <li><strong>Delete</strong> — the × button</li>
  <li><strong>Add new</strong> — scroll down in the panel and use <em>Add New Category</em>. Or use ＋ New type… inside a pin's edit modal.</li>
</ul>

<h4>Pin Groups</h4>
<p>Pins can have a <strong>Group</strong> name set in their edit modal. The Categories panel shows a <em>Pin Groups</em> section where you can collapse/expand each group to hide or show those pins on the map.</p>

<h4>Sorting</h4>
<p>Use the <strong>Sort</strong> dropdown at the top of the panel to sort visible pins alphabetically, by type, or by group.</p>

<h4>Export Visibility</h4>
<p>The ◉ button per category controls whether that category's pins appear in exported viewers. Hidden categories are stripped from exports.</p>
`
    },
    maps: {
      title: 'Multi-Map',
      html: `
<h3>Multi-Map Projects</h3>
<p>One project file can contain multiple maps — a world map, a regional map, a city map, a dungeon floor plan — all with their own pins, layers, drawings, regions, and fog.</p>

<h4>The Map Switcher Bar</h4>
<p>The thin bar above the toolbar shows one tab per map. Click a tab to switch to that map. Your current map's state is saved automatically before switching.</p>

<h4>Adding Maps</h4>
<p>Click the <strong>＋</strong> button at the left of the switcher bar. You'll be prompted for a name. The new map starts blank — load a map image for it.</p>

<h4>Renaming Maps</h4>
<p>Click the active tab's name to edit it inline.</p>

<h4>Deleting Maps</h4>
<p>Click the ✕ on any tab. The last map cannot be deleted.</p>

<h4>What's Shared</h4>
<p>The following are shared across all maps in a project:</p>
<ul>
  <li>Categories and their colors</li>
  <li>Pin templates</li>
  <li>Export visibility settings</li>
</ul>
<p>Each map has its own pins, links, drawings, regions, layers, fog of war, and scenes.</p>
`
    },
    graph: {
      title: 'Relationship Graph',
      html: `
<h3>Relationship Graph</h3>
<p>The graph opens a full-screen view showing all pins as nodes and all links as edges, arranged by a physics simulation into a readable constellation.</p>

<h4>Opening</h4>
<p>Click <strong>⬡ Graph</strong> in the toolbar. You need at least one pin — pins with links form the center cluster, unlinked pins drift to an outer ring.</p>

<h4>Reading the Graph</h4>
<ul>
  <li><strong>Node size</strong> — larger nodes have more connections (hubs)</li>
  <li><strong>Node color</strong> — matches the pin's category color</li>
  <li><strong>Inner circle</strong> — the category's accent color</li>
  <li><strong>Edge labels</strong> — if you've set labels on links, they appear at the midpoint</li>
</ul>

<h4>Interacting</h4>
<ul>
  <li><strong>Click a node</strong> — closes the graph, jumps the map to that pin, and opens the reader</li>
  <li><strong>Drag a node</strong> — repositions it; physics respects the new position</li>
  <li><strong>Scroll</strong> — zoom in/out</li>
  <li><strong>Drag empty space</strong> — pan the graph</li>
  <li><strong>Search bar</strong> — highlights matching nodes in gold, dims everything else. Searches name, description, and tags.</li>
</ul>

<h4>Controls</h4>
<ul>
  <li><strong>⊡ Fit</strong> — frames all nodes in view</li>
  <li><strong>↺ Reset</strong> — randomizes layout and reruns physics</li>
  <li><strong>Repulsion</strong> — how hard nodes push each other apart. Increase for sparse maps, decrease for dense ones.</li>
  <li><strong>Link dist</strong> — the natural resting length of link edges</li>
</ul>

<div class="help-tip">💡 The physics runs for ~300 ticks then goes idle. Drag nodes to nudge the layout if something overlaps.</div>
`
    },
    fog: {
      title: 'Fog of War',
      html: `
<h3>Fog of War</h3>
<p>A dark overlay that obscures parts of your map. Paint it away to reveal areas. Useful for running games where players shouldn't see the whole map.</p>

<h4>Enabling</h4>
<p>Click <strong>🌫 Fog</strong> in the toolbar. The map starts fully fogged (dark). A toolbar appears at the bottom.</p>

<h4>Painting and Erasing</h4>
<ul>
  <li><strong>◌ Erase</strong> mode — click and drag to reveal the map beneath</li>
  <li><strong>🖌 Paint</strong> mode — click and drag to re-fog an area</li>
  <li><strong>Size slider</strong> — controls the brush radius</li>
  <li><strong>Reveal All</strong> — clears all fog instantly</li>
  <li><strong>Hide All</strong> — re-fogs the entire map</li>
</ul>

<h4>Saving</h4>
<p>The fog state is saved with your project as a PNG encoded in the JSON. It restores when you load the project.</p>

<h4>Exporting</h4>
<p>When you export a viewer, the fog is baked in as a static PNG overlay. Viewers will only see what you revealed.</p>

<div class="help-tip">💡 Use the fog to do a "session by session" reveal — save the project after each session with a bit more fog removed.</div>
`
    },
    tour: {
      title: 'Tour Mode',
      html: `
<h3>Tour / Slideshow Mode</h3>
<p>Tour mode lets you define an ordered sequence of pins and play through them as a presentation, with the camera automatically panning and zooming to each one.</p>

<h4>Building a Tour</h4>
<ul>
  <li>Click <strong>▶ Tour</strong> in the toolbar</li>
  <li>Use the dropdown to pick a pin and click <strong>+ Add Stop</strong></li>
  <li>Reorder stops with the ▲▼ arrows</li>
  <li>Remove a stop with ✕</li>
  <li>Click <strong>▶ Play</strong> to start</li>
</ul>

<h4>Playing</h4>
<p>The camera animates to each pin and opens its reader. A control bar appears at the bottom:</p>
<ul>
  <li><strong>‹ ›</strong> — step forward and backward</li>
  <li><strong>✕ End</strong> — stop the tour</li>
</ul>

<h4>Scenes (Saved Camera Positions)</h4>
<p>Click <strong>📷 Scenes</strong> to save your current pan/zoom position with a name. Click any saved scene to animate back to it. Useful for bookmarking key areas without creating pins.</p>
`
    },
    export: {
      title: 'Export',
      html: `
<h3>Export Options</h3>

<h4>📷 Save Project</h4>
<p>Saves everything — all maps, pins, links, drawings, regions, categories, fog, templates — as a <code>.json</code> file. Load it back with <strong>Load Project</strong> to continue editing. This is your working file.</p>

<h4>⬇ Export Viewer</h4>
<p>Creates a standalone read-only HTML file. Anyone can open it in a browser — no app needed. It includes:</p>
<ul>
  <li>All visible pins, links, drawings, and regions</li>
  <li>The fog overlay (if active)</li>
  <li>The grid overlay (if active)</li>
  <li>A legend showing category colors</li>
  <li>Full reader panel for descriptions and images</li>
</ul>
<p>Hidden categories and hidden layers are stripped from the export.</p>

<h4>⬆ Export Editable</h4>
<p>Exports a copy of the full editor pre-loaded with your current project. Share this with a collaborator who wants to continue editing.</p>

<h4>⭐ Pin Card</h4>
<p>Exports a single pin as a styled HTML card. Enter a pin name to search for it, or leave blank to get a full <strong>pin index</strong> — a printable table of all pins with types, tags, and description previews.</p>

<h4>🖼 PNG</h4>
<p>Composites all visible layers, drawings, regions, links, and pins onto a single image and downloads it at full map resolution. Fog is included if active.</p>

<h4>Export Visibility</h4>
<p>Control which categories appear in exports using the ◉ buttons in the Categories panel. The fog, grid, and layer visibility are also respected.</p>
`
    },
    keyboard: {
      title: 'Keyboard & Mouse',
      html: `
<h3>Keyboard Shortcuts</h3>

<h4>Global</h4>
<ul>
  <li><span class="help-key">Ctrl+Z</span> — Undo</li>
  <li><span class="help-key">Ctrl+Y</span> or <span class="help-key">Ctrl+Shift+Z</span> — Redo</li>
  <li><span class="help-key">Ctrl+S</span> — Save project</li>
  <li><span class="help-key">Escape</span> — Return to Pin mode / close panels</li>
</ul>

<h4>Navigation</h4>
<ul>
  <li><span class="help-key">Arrow keys</span> — Pan the map</li>
  <li><span class="help-key">+</span> / <span class="help-key">=</span> — Zoom in</li>
  <li><span class="help-key">-</span> — Zoom out</li>
  <li><span class="help-key">0</span> — Fit map to window</li>
  <li><span class="help-key">Scroll wheel</span> — Zoom at cursor</li>
</ul>

<h4>In Read Mode</h4>
<ul>
  <li><span class="help-key">Tab</span> — Next pin</li>
  <li><span class="help-key">Shift+Tab</span> — Previous pin</li>
  <li><span class="help-key">← →</span> — Prev/next description page</li>
</ul>

<h4>In Select Mode</h4>
<ul>
  <li><span class="help-key">Delete</span> — Delete selected pins</li>
  <li><span class="help-key">Escape</span> — Clear selection</li>
  <li>Click + drag empty area — drag-select box</li>
  <li>Shift+click a pin — add/remove from selection</li>
</ul>

<h4>Mouse</h4>
<ul>
  <li><strong>Right-click empty map</strong> — Quick place pin at that location</li>
  <li><strong>Right-click pin</strong> — Delete / Duplicate menu</li>
  <li><strong>Right-click region</strong> — Delete / Duplicate / Edit vertices</li>
  <li><strong>Right-click drawing</strong> — Delete / Duplicate</li>
</ul>

<h4>Description Formatting</h4>
<ul>
  <li><code>**text**</code> — Bold</li>
  <li><code>*text*</code> — Italic</li>
  <li><code>---</code> — Horizontal rule</li>
  <li><code>• item</code> — Bullet point</li>
  <li><code>![alt](url)</code> — Inline image</li>
  <li><code>| col | col |</code> — Markdown table (use ⊞ Table button)</li>
</ul>
`
    },
  };

  let helpOpen = false;
  let helpCurrentTab = 'start';

  document.getElementById('btn-help').addEventListener('click', () => {
    helpOpen = true;
    document.getElementById('help-overlay').classList.add('visible');
    document.getElementById('help-version').textContent = 'Fantasy Map Editor v' + VERSION;
    renderHelpTab(helpCurrentTab);
    document.getElementById('help-search').value = '';
  });

  document.getElementById('help-close').addEventListener('click', closeHelp);
  document.getElementById('help-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('help-overlay')) closeHelp();
  });

  function closeHelp() {
    helpOpen = false;
    document.getElementById('help-overlay').classList.remove('visible');
  }

  document.querySelectorAll('.help-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('help-search').value = '';
      renderHelpTab(btn.dataset.tab);
    });
  });

  document.getElementById('help-search').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) { renderHelpTab(helpCurrentTab); return; }
    // Search all tabs
    const results = [];
    Object.entries(HELP_CONTENT).forEach(([key, tab]) => {
      const text = tab.html.replace(/<[^>]+>/g, ' ').toLowerCase();
      if (text.includes(q)) {
        // Extract matching snippets
        const plain = tab.html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
        const idx = plain.toLowerCase().indexOf(q);
        const snippet = plain.slice(Math.max(0, idx - 60), idx + 100).trim();
        results.push({ tab: key, title: tab.title, snippet, q });
      }
    });
    const content = document.getElementById('help-content');
    if (!results.length) {
      content.innerHTML = `<div class="help-search-none">No results for "<strong>${q}</strong>"</div>`;
      return;
    }
    content.innerHTML = results.map(r => {
      const hi = r.snippet.replace(new RegExp(r.q, 'gi'), m => `<mark style="background:#3a2c10;color:#e8c060;border-radius:2px;padding:0 2px;">${m}</mark>`);
      return `<div style="margin-bottom:16px;cursor:pointer;padding:10px;border-radius:4px;border:1px solid #2a2010;" onclick="renderHelpTab('${r.tab}')">
        <div style="font-size:11px;color:#6a5a40;margin-bottom:4px;text-transform:uppercase;letter-spacing:.06em;">${r.title}</div>
        <div style="font-size:12px;color:#9a8a70;">…${hi}…</div>
      </div>`;
    }).join('');
  });

  function renderHelpTab(tabKey) {
    helpCurrentTab = tabKey;
    document.querySelectorAll('.help-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tabKey));
    const tab = HELP_CONTENT[tabKey];
    if (!tab) return;
    document.getElementById('help-content').innerHTML = tab.html;
  }

  // Expose for search onclick
  window.renderHelpTab = renderHelpTab;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && helpOpen) { closeHelp(); return; }
  });

