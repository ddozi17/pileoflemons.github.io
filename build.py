// Fantasy Map Editor — Snapshots & Animation
// Saved scenes and smooth pan/zoom animation.

  // ── Snapshots / Scenes ───────────────────────────────────────────────────────
  const snapshotsPanel = document.getElementById('snapshots-panel');

  document.getElementById('btn-snapshots').addEventListener('click', () => {
    snapshotsPanel.classList.toggle('visible');
    tourPanel.classList.remove('visible');
    if (snapshotsPanel.classList.contains('visible')) renderSnapList();
  });

  document.getElementById('snap-save-btn').addEventListener('click', () => {
    const name = prompt('Scene name:', 'Scene ' + (snapshots.length + 1));
    if (!name) return;
    snapshots.push({ id: Date.now(), name: name.trim(), x: offsetX, y: offsetY, scale });
    renderSnapList();
  });

  function renderSnapList() {
    const list = document.getElementById('snap-list');
    list.innerHTML = '';
    if (!snapshots.length) {
      list.innerHTML = '<div style="font-size:11px;color:#4a3a28;font-style:italic;">No scenes yet.</div>';
      return;
    }
    snapshots.forEach(snap => {
      const row = document.createElement('div');
      row.className = 'snap-row';
      const name = document.createElement('span');
      name.className = 'snap-name';
      name.textContent = snap.name;
      const del = document.createElement('span');
      del.className = 'snap-del';
      del.textContent = '✕';
      del.title = 'Delete scene';
      del.addEventListener('click', (e) => {
        e.stopPropagation();
        snapshots = snapshots.filter(s => s.id !== snap.id);
        renderSnapList();
      });
      row.append(name, del);
      row.addEventListener('click', () => animateTo(snap.x, snap.y, snap.scale, 400));
      list.appendChild(row);
    });
  }

  // ── Smooth pan/zoom animation ─────────────────────────────────────────────
  function animateTo(tx, ty, ts, duration = 600, onDone) {
    const startX = offsetX, startY = offsetY, startS = scale;
    const startTime = performance.now();
    function ease(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
    function step(now) {
      const t = Math.min(1, (now - startTime) / duration);
      const e = ease(t);
      offsetX = startX + (tx - startX) * e;
      offsetY = startY + (ty - startY) * e;
      scale   = startS + (ts - startS) * e;
      applyTransform();
      if (t < 1) requestAnimationFrame(step);
      else { if (onDone) onDone(); }
    }
    requestAnimationFrame(step);
  }

  function zoomToPin(pin, targetScale, onDone) {
    const rect = mapArea.getBoundingClientRect();
    const cx = rect.width / 2, cy = rect.height / 2;
    const tx = cx - pin.x * targetScale;
    const ty = cy - pin.y * targetScale;
    animateTo(tx, ty, targetScale, 700, onDone);
  }

