// Fantasy Map Editor — Tour / Slideshow
// Ordered pin tour with animated transitions.

  // ── Tour / Slideshow ──────────────────────────────────────────────────────
  const tourPanel = document.getElementById('tour-panel');
  const tourBar   = document.getElementById('tour-bar');
  let tourActive  = false;
  let tourIdx     = 0;

  document.getElementById('btn-tour').addEventListener('click', () => {
    tourPanel.classList.toggle('visible');
    snapshotsPanel.classList.remove('visible');
    if (tourPanel.classList.contains('visible')) renderTourPanel();
  });

  function renderTourPanel() {
    // Populate pin select
    const sel = document.getElementById('tour-pin-select');
    sel.innerHTML = '';
    pins.forEach(p => {
      const o = document.createElement('option');
      o.value = p.id; o.textContent = p.name || '(unnamed)';
      sel.appendChild(o);
    });
    renderTourStopList();
  }

  function renderTourStopList() {
    const list = document.getElementById('tour-stop-list');
    list.innerHTML = '';
    if (!tourStops.length) {
      list.innerHTML = '<div style="font-size:11px;color:#4a3a28;font-style:italic;">No stops yet.</div>';
      return;
    }
    tourStops.forEach((pinId, i) => {
      const pin = pins.find(p => p.id === pinId);
      if (!pin) return;
      const row = document.createElement('div');
      row.className = 'tour-stop-row';
      const num  = document.createElement('span'); num.className  = 'tour-stop-num';  num.textContent = i+1+'.';
      const name = document.createElement('span'); name.className = 'tour-stop-name'; name.textContent = pin.name || '(unnamed)';
      const up   = document.createElement('span'); up.className   = 'tour-stop-up';   up.textContent = '▲';
      const dn   = document.createElement('span'); dn.className   = 'tour-stop-down'; dn.textContent = '▼';
      const del  = document.createElement('span'); del.className  = 'tour-stop-del';  del.textContent = '✕';
      up.addEventListener('click', () => { if (i>0){[tourStops[i-1],tourStops[i]]=[tourStops[i],tourStops[i-1]]; renderTourStopList();} });
      dn.addEventListener('click', () => { if (i<tourStops.length-1){[tourStops[i+1],tourStops[i]]=[tourStops[i],tourStops[i+1]]; renderTourStopList();} });
      del.addEventListener('click', () => { tourStops.splice(i,1); renderTourStopList(); });
      row.append(num, name, up, dn, del);
      list.appendChild(row);
    });
  }

  document.getElementById('tour-add-stop').addEventListener('click', () => {
    const sel = document.getElementById('tour-pin-select');
    if (!sel.value) return;
    tourStops.push(+sel.value);
    renderTourStopList();
  });

  document.getElementById('tour-clear-btn').addEventListener('click', () => {
    if (confirm('Clear all tour stops?')) { tourStops = []; renderTourStopList(); }
  });

  document.getElementById('tour-play-btn').addEventListener('click', () => {
    if (!tourStops.length) { alert('Add at least one stop first.'); return; }
    tourActive = true;
    tourIdx = 0;
    tourPanel.classList.remove('visible');
    tourBar.classList.add('visible');
    showSideView(null);
    tourGoTo(0);
  });

  function tourGoTo(idx) {
    tourIdx = Math.max(0, Math.min(tourStops.length - 1, idx));
    const pin = pins.find(p => p.id === tourStops[tourIdx]);
    if (!pin) return;
    document.getElementById('tour-title').textContent = pin.name || '(unnamed)';
    document.getElementById('tour-progress').textContent = `${tourIdx+1} / ${tourStops.length}`;
    zoomToPin(pin, Math.max(scale, 1.2), () => openReader(pin));
  }

  document.getElementById('tour-bar-prev').addEventListener('click', () => tourGoTo(tourIdx - 1));
  document.getElementById('tour-bar-next').addEventListener('click', () => tourGoTo(tourIdx + 1));
  document.getElementById('tour-bar-stop').addEventListener('click', () => {
    tourActive = false;
    tourBar.classList.remove('visible');
    closeReader();
  });

