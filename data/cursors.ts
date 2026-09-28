init(wrap: HTMLElement) {
  wrap.innerHTML = `
    <div id="cd" style="position:fixed;width:10px;height:10px;background:#60a5fa;border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .2s,height .2s"></div>
    <div id="cr" style="position:fixed;width:36px;height:36px;border:2px solid rgba(96,165,250,0.5);border-radius:50%;pointer-events:none;z-index:99998;transform:translate(-50%,-50%);transition:width .3s,height .3s,border-color .3s"></div>
  `;

  const dot = document.getElementById('cd') as HTMLElement;
  const ring = document.getElementById('cr') as HTMLElement;

  let rx = 0;
  let ry = 0;
  let mx = 0;
  let my = 0;

  document.onmousemove = e => {
    mx = e.clientX;
    my = e.clientY;
  };

  const lerp = () => {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;

    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';

    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';

    requestAnimationFrame(lerp);
  };

  requestAnimationFrame(lerp);

  return {
    enter: () => {
      dot.style.width = '6px';
      dot.style.height = '6px';

      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = '#60a5fa';
    },

    leave: () => {
      dot.style.width = '10px';
      dot.style.height = '10px';

      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(96,165,250,0.5)';
    },
  };
},
