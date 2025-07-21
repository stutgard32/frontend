<template>
  <div class="tabs">
    <div class="tabs__nav">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        :class="['tabs__btn', { active: activeTab === tab.value }]"
        @click="activeTab = tab.value"
        type="button"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tabs__content">
      <div v-if="activeTab === 'description'">
        <div class="tabs__description" v-html="htmlDescription"></div>
      </div>
      <div v-else-if="activeTab === 'specs'">
        <p class="tabs__specs-title">Характеристики</p>
        <ul class="specs-list">
          <li v-for="spec in specs" :key="spec.name" class="specs-list__item">
            <span class="specs-list__name">{{ spec.name }}</span>
            <span class="specs-list__line"></span>
            <span class="specs-list__value">{{ spec.value }}</span>
          </li>
        </ul>
      </div>
      <div v-else-if="activeTab === 'docs'">
        <ul class="tabs__docs-list">
          <li
            class="tabs__docs-item"
            v-for="doc in normalizedDocuments"
            :key="doc.id"
          >
            <div class="tabs__docs-row">
              <span class="tabs__docs-icon">
                <img src="/svg/document.svg" alt="doc" />
              </span>
              <span class="tabs__docs-name">{{ doc.name }}</span>
              <a
                :href="doc.url"
                target="_blank"
                download
                class="tabs__docs-download"
                aria-label="Скачать"
              >
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V8.58579L2.70711 6.29289C2.31658 5.90237 1.68342 5.90237 1.29289 6.29289C0.902369 6.68342 0.902369 7.31658 1.29289 7.70711L5.29289 11.7071C5.68342 12.0976 6.31658 12.0976 6.70711 11.7071L10.7071 7.70711C11.0976 7.31658 11.0976 6.68342 10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289L7 8.58579V1Z"
                    fill="#B8B8B8"
                  ></path>
                  <path
                    d="M1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16H11C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H1Z"
                    fill="#B8B8B8"
                  ></path>
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import type { Document } from '~/types/types'
const htmlDescription = computed(() =>
  props.prevdescription ? marked.parse(props.prevdescription) : ''
)
function parseSpecsMarkdown(md: string) {
  return md
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line)
    .map((line) => {
      const match = line.match(/- \*\*(.+?)\*\*\s*(.+)/)
      if (match) {
        return {
          name: match[1].replace(/[*]/g, '').trim(),
          value: match[2].trim(),
        }
      }
      return null
    })
    .filter(Boolean) as { name: string; value: string }[]
}
const specs = computed(() => {
  if (!props.prevspecifications) return []
  return parseSpecsMarkdown(props.prevspecifications)
})
const normalizedDocuments = computed(() => {
  if (!props.documents) return []
  if (Array.isArray(props.documents)) return props.documents
  return [props.documents]
})
const tabs = [
  { label: 'Описание', value: 'description' },
  { label: 'Характеристики', value: 'specs' },
  { label: 'Документация', value: 'docs' },
]
const activeTab = ref('description')
const props = defineProps<{
  prevdescription?: string
  prevspecifications?: string
  documents?: Document[]
}>()

defineExpose({
  setTab: (tab: string) => {
    activeTab.value = tab
  },
})
</script>

<style scoped>
.tabs__nav {
  display: flex;
  gap: 15px;
  margin-bottom: 24px;
  @media (max-width: 950px) {
    flex-wrap: wrap;
  }
}
.tabs__btn {
  padding: 10px 24px;
  border: 1px solid #e0e0e0;
  background: #fff;
  border-radius: 7px 7px 0 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  transition: background 0.2s, color 0.2s;
  @media (max-width: 874px) {
    padding: 10px 10px;
    font-size: 14px;
  }
}
.tabs__btn.active {
  color: #2c4a6b;
  border-bottom: 1px solid #6fa7d4;
  background: #f8fefb;
}
.tabs__content {
  padding: 24px 0 0 0;
}
.tabs__description {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  @media (max-width: 874px) {
    font-size: 14px;
  }
}
:deep(p) {
  margin-bottom: 15px;
}
:deep(h3) {
  margin-bottom: 15px;
}
:deep(a) {
  text-decoration: none;
  color: #2c4a6b;
  font-weight: 600;
}
.tabs__specs-title {
  color: #333;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
  @media (max-width: 874px) {
    font-size: 16px;
  }
}
.tabs__specs {
  border: 1px solid #e5e5e5;
  border-color: #e5e5e5;
  padding: 10px;
  border-radius: 5px;
}
:deep(.tabs__specs-marker) {
  ul {
    list-style: none;
    li {
      margin-bottom: 10px;
    }
  }
}
.specs-list {
  border: 1px solid #e5e5e5;
  border-color: #e5e5e5;
  border-radius: 5px;
  padding: 30px;
  width: 100%;
  max-width: 1000px;
}
.specs-list__item {
  color: #333;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
  @media (max-width: 874px) {
    flex-direction: column;

    align-items: flex-start;
  }
}
.specs-list__name {
  color: #333;
  font-size: 16px;
  white-space: nowrap;
  font-weight: 600;
  @media (max-width: 874px) {
    font-size: 14px;
  }
}
.specs-list__line {
  flex: 1 1 auto;
  border-bottom: 1px dotted #bbb;
  margin: 0 8px;
  height: 1em;
  @media (max-width: 874px) {
    display: none;
  }
}
.specs-list__value {
  white-space: nowrap;
  font-weight: 400;
  color: #333;
  font-size: 16px;
  text-align: right;
  @media (max-width: 874px) {
    font-size: 14px;
    white-space: normal;
    text-align: left;
  }
}
.tabs__docs-list {
  width: 100%;
  max-width: 1200px;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
}
.tabs__docs-item {
  border-bottom: 1px solid #ececec;
  padding: 0;
  &:last-child {
    border-bottom: none;
  }
}
.tabs__docs-row {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 24px;
  transition: background 0.2s;
}
.tabs__docs-item:hover .tabs__docs-row {
  background: #f8fefb;
}
.tabs__docs-icon {
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 874px) {
    flex: 0 0 30px;
  }
}
.tabs__docs-name {
  flex: 1 1 auto;
  font-size: 15px;
  font-weight: 600;
  color: #222;
  word-break: break-word;
  @media (max-width: 874px) {
    font-size: 14px;
  }
}
.tabs__docs-download {
  flex: 0 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bdbdbd;
  transition: color 0.2s;
  text-decoration: none;
  @media (max-width: 874px) {
    flex: 0 0 20px;
  }
}
.tabs__docs-download:hover {
  color: #22c55e;
}
</style>
