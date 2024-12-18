<template>
    <div
        class="w-full grid grid-cols-[0.65fr_0.35fr] grid-rows-[repeat(2,_auto)] gap-[--gap] lg:grid-cols-1"
    >
        <div class="flex flex-col gap-[--gap]">
            <div
                class="flex flex-col gap-4 justify-between h-[150px] bg-white p-5 shadow-md w-full"
            >
                <div class="h-4 w-1/6 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-2/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-1/4 mt-4 bg-gray-300 rounded-md skeleton-shimmer"></div>
            </div>

            <div
                class="flex flex-col gap-4 justify-between h-[220px] bg-white p-5 shadow-md w-full"
            >
                <div class="h-4 w-1/6 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-4/4 mt-4 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-3/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-1/4 mt-4 bg-gray-300 rounded-md skeleton-shimmer"></div>
            </div>
        </div>
        <div class="w-full row-span-2 flex flex-col gap-[--gap]">
            <div
                class="flex flex-col gap-4 justify-between min-h-[420px] bg-white p-5 shadow-md w-full"
            >
                <div class="h-4 w-1/3 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-1/2 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-4/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-3/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-2/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-4/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-4 w-4/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
            </div>
            <div
                class="flex flex-col gap-4 justify-between min-h-[172px] bg-white p-5 shadow-md w-full"
            >
                <div class="h-4 w-1/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-8 w-4/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
                <div class="h-8 w-4/4 bg-gray-300 rounded-md skeleton-shimmer"></div>
            </div>
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
