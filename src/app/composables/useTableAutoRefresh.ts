import { ref, onMounted, onUnmounted } from 'vue'
import preventHiddenPageCallsDecorator from '@webitel/ui-sdk/src/scripts/preventHiddenPageCallsDecorator'

export function useTableAutoRefresh(loadList: () => void) {
  const autoRefresh = ref(null)

  const makeAutoRefresh = () => {
    loadList()
  }

  const setAutoRefresh = () => {
    if (autoRefresh.value) clearInterval(autoRefresh.value)
    const timer = +localStorage.getItem('auto-refresh') || 5 * 60 * 1000
    const decoratedRefresh = preventHiddenPageCallsDecorator(makeAutoRefresh)
    autoRefresh.value = setInterval(decoratedRefresh, timer)
  }

  onMounted(() => {
    setAutoRefresh()
  })

  onUnmounted(() => {
    if (autoRefresh.value) clearInterval(autoRefresh.value)
  })

  return {
    setAutoRefresh,
    makeAutoRefresh,
    autoRefresh,
  }
}
