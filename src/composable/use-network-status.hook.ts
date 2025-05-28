import { onMounted, onUnmounted, ref } from "vue"

/**
 *  "reactive" hooks,
 *  returns a ref(Bolean)
 *  - true - when online 
 *  - false - when offline
 * 
 *  @example 
 * 
 *  const status = useNetworkStatus()
 */
export const useNetworkStatus = () => {
    const status = ref(true);

    const updateStatus = () => {
        status.value = navigator.onLine ? true : false;
    }

    onMounted( ()=> {
        window.addEventListener('online', updateStatus) 
        window.addEventListener('offline', updateStatus) 
    })

    onUnmounted(()=> {
        window.removeEventListener('online', updateStatus) 
        window.removeEventListener('offline', updateStatus) 
    })

    return status;
}