<!-- app/pages/drafting/sync-bills.vue -->
<template>
  <article>
    <header>
      <h2 style="margin-bottom: 0;">同步議案</h2>
    </header>
    <p><mark>此功能開發中。</mark>未來將提供使用者按鈕，點擊後即可讓議案資料<mark>立刻</mark>與 Google Spreadsheets 來源（即提案系統後台）同步，而無須等到每日凌晨系統排程。敬請期待。</p>
    <footer>
      <small>現行議案資料同步時間：{待補}。</small>
    </footer>
  </article>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'congress' })
useHead({
  title: '同步議案',
})
</script>