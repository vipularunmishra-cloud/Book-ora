/* Final script.js - Glassmorphism layout - links to separate pages in /topics/ */

/* Topic file map — professional filenames (30 topics) */
const topicFiles = [
  { title: "Introduction to Programming", file: "1-introduction-to-programming.html" },
  { title: "What is C Language", file: "2-c-language-basics.html" },
  { title: "Variables & Data Types", file: "3-variables-and-data-types.html" },
  { title: "Operators", file: "4-operators.html" },
  { title: "Conditional Statements", file: "5-conditional-statements.html" },
  { title: "Loops", file: "6-loops.html" },
  { title: "Arrays", file: "7-arrays.html" },
  { title: "Functions", file: "8-functions.html" },
  { title: "Pointers", file: "9-pointers.html" },
  { title: "Structures & Unions", file: "10-structures-unions.html" },
  { title: "CPU (How it works)", file: "11-cpu.html" },
  { title: "GPU & Graphics Processing", file: "12-gpu.html" },
  { title: "RAM", file: "13-ram.html" },
  { title: "ROM", file: "14-rom.html" },
  { title: "Storage (HDD / SSD)", file: "15-storage.html" },
  { title: "Motherboard", file: "16-motherboard.html" },
  { title: "Input & Output Devices", file: "17-io-devices.html" },
  { title: "Operating System (Basics)", file: "18-os-basics.html" },
  { title: "Process Management", file: "19-process-management.html" },
  { title: "Memory Management", file: "20-memory-management.html" },
  { title: "File Systems", file: "21-filesystems.html" },
  { title: "System vs Application Software", file: "22-system-vs-app.html" },
  { title: "What is a Network", file: "23-network-basics.html" },
  { title: "Internet Architecture", file: "24-internet-architecture.html" },
  { title: "IP Address, DNS & Routing", file: "25-ip-dns-routing.html" },
  { title: "Databases (SQL & NoSQL)", file: "26-databases.html" },
  { title: "Web Technology (HTML-CSS-JS)", file: "27-web-technology.html" },
  { title: "APIs (How apps communicate)", file: "28-apis.html" },
  { title: "AI & Machine Learning", file: "29-ai-ml.html" },
  { title: "Cloud Computing", file: "30-cloud-computing.html" }
];

const topicListEl = document.getElementById('topicList');
const searchInput = document.getElementById('searchInput');
const toggleBtn = document.getElementById('toggleSidebar');
const darkBtn = document.getElementById('darkToggle');

/* populate sidebar with anchor links to pages in /topics/ */
topicFiles.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item.title;
  li.className = 'topic-item';
  li.tabIndex = 0;
  // open separate page in same tab:
  li.addEventListener('click', () => {
    window.location.href = `topics/${item.file}`;
  });
  li.addEventListener('keypress', (e) => { if(e.key === 'Enter') window.location.href = `topics/${item.file}`; });
  topicListEl.appendChild(li);
});

/* search filter */
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  const items = topicListEl.querySelectorAll('li');
  items.forEach(li => {
    const show = li.textContent.toLowerCase().includes(q);
    li.style.display = show ? '' : 'none';
  });
});

/* sidebar collapse */
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const sb = document.getElementById('sidebar');
    if (sb.style.transform === 'translateX(-260px)') {
      sb.style.transform = '';
      toggleBtn.textContent = 'Collapse';
    } else {
      sb.style.transform = 'translateX(-260px)';
      toggleBtn.textContent = 'Expand';
    }
  });
}

/* dark toggle (soft: add .dark to html) */
if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    darkBtn.textContent = isDark ? 'Light' : 'Dark';
    // small style tweak for dark: set CSS variables via class
    if(isDark){
      document.documentElement.style.setProperty('--bg','#0b1220');
      document.documentElement.style.setProperty('--card','#0f1724');
      document.documentElement.style.setProperty('--muted','#9CA3AF');
      document.documentElement.style.setProperty('--accent','#60A5FA');
      document.documentElement.style.setProperty('--border','#111827');
    } else {
      document.documentElement.style.setProperty('--bg','#F5F7FA');
      document.documentElement.style.setProperty('--card','#FFFFFF');
      document.documentElement.style.setProperty('--muted','#6B7280');
      document.documentElement.style.setProperty('--accent','#2563EB');
      document.documentElement.style.setProperty('--border','#E5E7EB');
    }
  });
}

/* accessibility: allow keyboard navigation focus style */
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    // if sidebar collapsed, expand
    const sb = document.getElementById('sidebar');
    if(sb.style.transform === 'translateX(-260px)'){ sb.style.transform = ''; toggleBtn.textContent = 'Collapse'; }
  }
});
