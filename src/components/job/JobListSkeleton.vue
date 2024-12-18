<template>
    <div class="w-full flex flex-col gap-4 bg-white shadow-md p-5">
        <div class="h-4 w-3/5 bg-gray-300 rounded-md skeleton-shimmer"></div>
        <div class="h-3 w-1/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
        <div class="h-3 w-4/4 mt-4 bg-gray-300 rounded-md skeleton-shimmer"></div>
        <div class="h-3 w-3/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
        <div class="h-3 w-2/4 mt-4 bg-gray-300 rounded-md skeleton-shimmer"></div>
        <div class="flex gap-4 mt-4 justify-between">
            <div class="h-3 w-1/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
            <div class="h-3 w-1/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
        </div>
    </div>
</template>

<style scoped>
.skeleton-shimmer {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 7s infinite linear;
}

@keyframes shimmer {
    0% {
        background-position: -400px 0;
    }
    50% {
        background-position: 200px 0;
    }
    100% {
        background-position: -400px 0;
    }
}
</style>
