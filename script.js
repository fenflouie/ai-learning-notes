// ===== 搜尋篩選功能 =====
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    const keyword = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.note-card');
    let visibleCount = 0;

    cards.forEach(function (card) {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('p').textContent.toLowerCase();
      const tags = card.getAttribute('data-tags') || '';

      const match =
        title.includes(keyword) ||
        desc.includes(keyword) ||
        tags.toLowerCase().includes(keyword);

      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    // 顯示 / 隱藏空狀態
    let emptyState = document.querySelector('.empty-state');
    if (visibleCount === 0) {
      if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML =
          '<div class="empty-icon">🔍</div><p>找不到符合的筆記，試試其他關鍵字吧！</p>';
        document.getElementById('notes-grid').appendChild(emptyState);
      }
      emptyState.style.display = '';
    } else if (emptyState) {
      emptyState.style.display = 'none';
    }
  });
});
