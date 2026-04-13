<!-- app/pages/drafting/sync-reports.vue -->
<template>
  <article>
    <header>
      <h2 style="margin-bottom: 0;">同步委員會報告（含回覆）</h2>
    </header>
    <p><mark>此功能開發中。</mark>未來將提供使用者按鈕，點擊後即可讓委員會報告及學生會回覆資料<mark>立刻</mark>與 Google Spreadsheets 來源（即委員會建議事項系統後台）同步，而無須等到每週一凌晨系統排程。敬請期待。</p>
    <footer>
      <small>現行委員會建議事項（含定稿報告、學生會回覆）資料同步時間：{待補}。</small>
    </footer>
  </article>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'congress' })
useHead({
  title: '同步委員會建議報告',
})
</script>