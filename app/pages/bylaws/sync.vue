<!-- app/pages/bylaws/sync.vue -->
<template>
  <article>
    <header>
      <h2 style="margin-bottom: 0;">同步法規</h2>
    </header>
    <p><mark>此功能開發中。</mark>未來將提供使用者按鈕，點擊後即可讓法規資料庫與 Google Drive 來源<mark>立刻</mark>同步，而無須等到每日凌晨系統排程。敬請期待。</p>
    <footer>
      <small>現行法規資料同步時間：{待補}。</small>
    </footer>
  </article>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'congress' })
useHead({
  title: '同步法規',
})
</script>