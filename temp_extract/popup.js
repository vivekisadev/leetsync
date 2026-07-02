document.addEventListener('DOMContentLoaded', () => {
  const postStyleSelect = document.getElementById('postStyle');
  const imageThemeSelect = document.getElementById('imageTheme');

  if (postStyleSelect) {
    chrome.storage.local.get(['linkedInStyle'], (result) => {
      postStyleSelect.value = result.linkedInStyle || 'random';
    });
    postStyleSelect.addEventListener('change', (e) => {
      chrome.storage.local.set({ linkedInStyle: e.target.value });
    });
  }

  const THEMES = {
    tokyoNight: { bg:'#1a1b26', chrome:'#16161e', text:'#a9b1d6', string:'#9ece6a', keyword:'#bb9af7', func:'#7aa2f7', dots:['#f7768e','#e0af68','#9ece6a'] },
    dracula: { bg:'#282a36', chrome:'#21222c', text:'#f8f8f2', string:'#f1fa8c', keyword:'#ff79c6', func:'#50fa7b', dots:['#ff5555','#f1fa8c','#50fa7b'] },
    nord: { bg:'#2e3440', chrome:'#272c36', text:'#d8dee9', string:'#a3be8c', keyword:'#81a1c1', func:'#88c0d0', dots:['#bf616a','#ebcb8b','#a3be8c'] },
    monokai: { bg:'#272822', chrome:'#1e1f1c', text:'#f8f8f2', string:'#e6db74', keyword:'#f92672', func:'#a6e22e', dots:['#f92672','#e6db74','#a6e22e'] },
    githubDark: { bg:'#0d1117', chrome:'#161b22', text:'#c9d1d9', string:'#a5d6ff', keyword:'#ff7b72', func:'#d2a8ff', dots:['#ff5f56','#ffbd2e','#27c93f'] },
    githubLight: { bg:'#ffffff', chrome:'#f6f8fa', text:'#24292e', string:'#032f62', keyword:'#d73a49', func:'#6f42c1', dots:['#ff5f56','#ffbd2e','#27c93f'] },
  };

  function updatePreview(themeName) {
    const preview = document.getElementById('themePreview');
    if (!preview) return;
    
    if (themeName === 'random') {
      const keys = Object.keys(THEMES);
      themeName = keys[Math.floor(Math.random() * keys.length)];
    }
    
    const theme = THEMES[themeName];
    if (!theme) return;

    document.getElementById('previewHeader').style.background = theme.chrome;
    document.getElementById('previewBody').style.background = theme.bg;
    document.getElementById('previewBody').style.color = theme.text;
    
    const dots = document.getElementById('previewHeader').querySelectorAll('div');
    if (dots.length === 3) {
      dots[0].style.background = theme.dots[0];
      dots[1].style.background = theme.dots[1];
      dots[2].style.background = theme.dots[2];
    }

    document.getElementById('previewKeyword').style.color = theme.keyword;
    document.getElementById('previewFunc').style.color = theme.func;
    document.getElementById('previewMethod').style.color = theme.func;
    document.getElementById('previewString').style.color = theme.string;
  }

  if (imageThemeSelect) {
    chrome.storage.local.get(['imageTheme'], (result) => {
      imageThemeSelect.value = result.imageTheme || 'random';
      updatePreview(imageThemeSelect.value);
    });
    imageThemeSelect.addEventListener('change', (e) => {
      chrome.storage.local.set({ imageTheme: e.target.value });
      updatePreview(e.target.value);
    });
  }

  // Report Issue Logic
  const toggleBtn = document.getElementById('toggleReportBtn');
  const formContainer = document.getElementById('reportFormContainer');
  const submitBtn = document.getElementById('submitReportBtn');
  const statusDiv = document.getElementById('reportStatus');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      formContainer.style.display = formContainer.style.display === 'none' ? 'flex' : 'none';
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', async () => {
      const type = document.getElementById('reportType').value;
      const description = document.getElementById('reportDesc').value;
      
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;
      submitBtn.style.cursor = 'not-allowed';

      try {
        // Fetch logs from background script
        const response = await new Promise((resolve) => {
          chrome.runtime.sendMessage({ type: "GET_CONSOLE_LOGS" }, resolve);
        });
        
        const logs = response?.logs || [];
        
        // Timeout for fetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        // POST to our endpoint
        const apiRes = await fetch("https://codeship-bay.vercel.app/api/report", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type,
            description,
            consoleLogs: logs.join('\n'),
            source: 'extension'
          }),
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);

        if (apiRes.ok) {
          statusDiv.textContent = 'Report submitted!';
          statusDiv.style.color = '#10b981';
          setTimeout(() => { formContainer.style.display = 'none'; }, 2000);
        } else {
          statusDiv.textContent = 'Failed to submit report.';
          statusDiv.style.color = '#ef4444';
        }
      } catch (e) {
        statusDiv.textContent = 'Error: ' + (e.name === 'AbortError' ? 'Request timed out' : e.message);
        statusDiv.style.color = '#ef4444';
      } finally {
        submitBtn.textContent = 'Submit with Logs';
        submitBtn.disabled = false;
        submitBtn.style.cursor = 'pointer';
      }
    });
  }
});
