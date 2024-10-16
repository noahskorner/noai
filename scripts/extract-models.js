function extractModels(ulString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(ulString, "text/html");

  const modelNames = [];

  const items = doc.querySelectorAll("li h2 span");
  items.forEach((item) => {
    const modelName = item.textContent.trim();
    modelNames.push(modelName);
  });

  return modelNames;
}

const ulString = `
<ul role="list" class="grid grid-cols-1 gap-y-3">
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama3.2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama3.2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Meta's Llama 3.2 goes small with 1B and 3B models. </p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        979.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        63<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      2 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama3.1" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama3.1
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Llama 3.1 is a new state-of-the-art model from Meta available in 8B, 70B and 405B parameter sizes.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">405B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        6.5M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        94<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      4 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/gemma2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              gemma2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Google Gemma 2 is a high-performing and efficient model available in three sizes: 2B, 9B, and 27B.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">2B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">9B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">27B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        1.5M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        94<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      4 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/qwen2.5" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              qwen2.5
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Qwen2.5 models are pretrained on Alibaba's latest large-scale dataset, encompassing up to 18 trillion tokens. The model supports up to 128K tokens and has multilingual support. </p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">0.5B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1.5B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">14B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">32B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">72B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        820.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        133<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/phi3.5" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              phi3.5
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A lightweight AI model with 3.8 billion parameters with performance overtaking similarly and larger sized models.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        82.2K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      7 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/nemotron-mini" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              nemotron-mini
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A commercial-friendly small language model by NVIDIA optimized for roleplay, RAG QA, and function calling.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        18.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/mistral-small" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              mistral-small
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Mistral Small is a lightweight model designed for cost-effective use in tasks like translation and summarization.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">22B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        20.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/mistral-nemo" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              mistral-nemo
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A state-of-the-art 12B model with 128k context length, built by Mistral AI in collaboration with NVIDIA.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">12B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        338.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/deepseek-coder-v2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              deepseek-coder-v2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">An open-source Mixture-of-Experts code language model that achieves performance comparable to GPT4-Turbo in code-specific tasks.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">16B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">236B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        354.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        65<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/mistral" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              mistral
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">The 7B model released by Mistral AI, updated to version 0.3.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        4M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        84<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      4 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/mixtral" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              mixtral
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A set of Mixture of Experts (MoE) model with open weights by Mistral AI in 8x7b and 8x22b parameter sizes.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8x7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8x22B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        451.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        69<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/codegemma" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              codegemma
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">CodeGemma is a collection of powerful, lightweight models that can perform a variety of coding tasks like fill-in-the-middle code completion, code generation, natural language understanding, mathematical reasoning, and instruction following.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">2B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        323.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        85<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/command-r" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              command-r
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Command R is a Large Language Model optimized for conversational interaction and long context tasks.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">35B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        229.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        32<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/command-r-plus" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              command-r-plus
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Command R+ is a powerful, scalable large language model purpose-built to excel at real-world enterprise use cases.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">104B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        99.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        21<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llava" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llava
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">🌋 LLaVA is a novel end-to-end trained large multimodal model that combines a vision encoder and Vicuna for general-purpose visual and language understanding. Updated to version 1.6.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Vision</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">34B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        1.5M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        98<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      8 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama3" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama3
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Meta Llama 3: The most capable openly available LLM to date</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        6.5M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        68<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/gemma" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              gemma
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Gemma is a family of lightweight, state-of-the-art open models built by Google DeepMind. Updated to version 1.1</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">2B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        4.1M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        102<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/qwen" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              qwen
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Qwen 1.5 is a series of large language models by Alibaba Cloud spanning from 0.5B to 110B parameters</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">0.5B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1.8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">4B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">32B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">72B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">110B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        4M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        379<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      4 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/qwen2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              qwen2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Qwen2 is a new series of large language models from Alibaba group</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">0.5B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1.5B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">72B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        3.9M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        97<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      4 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/phi3" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              phi3
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Phi-3 is a family of lightweight 3B (Mini) and 14B (Medium) state-of-the-art open models by Microsoft.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">14B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        2.6M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        72<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      4 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Llama 2 is a collection of foundation language models ranging from 7B to 70B parameters.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        2.2M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        102<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      8 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/codellama" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              codellama
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A large language model that can use text prompts to generate and discuss code.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">34B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        1.4M
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        199<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/nomic-embed-text" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              nomic-embed-text
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A high-performing open embedding model with a large token context window.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Embedding</span>
    
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        789.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        3<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      7 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/mxbai-embed-large" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              mxbai-embed-large
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">State-of-the-art large embedding model from mixedbread.ai</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Embedding</span>
    
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        476.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        4<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/dolphin-mixtral" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              dolphin-mixtral
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Uncensored, 8x7b and 8x22b fine-tuned models based on the Mixtral mixture of experts models that excels at coding tasks. Created by Eric Hartford.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8x7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8x22B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        413.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        87<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/starcoder2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              starcoder2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">StarCoder2 is the next generation of transparently trained open code LLMs that comes in three sizes: 3B, 7B and 15B parameters. </p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        385.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        67<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/phi" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              phi
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Phi-2: a 2.7B language model by Microsoft Research that demonstrates outstanding reasoning and language understanding capabilities.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        350.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      8 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/deepseek-coder" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              deepseek-coder
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">DeepSeek Coder is a capable coding model trained on two trillion code and natural language tokens.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">33B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        344.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        102<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama2-uncensored" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama2-uncensored
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Uncensored Llama 2 model by George Sung and Jarrad Hope.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        330.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        34<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/dolphin-mistral" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              dolphin-mistral
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">The uncensored Dolphin model based on Mistral that excels at coding tasks. Updated to version 2.8.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        239.2K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        120<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/qwen2.5-coder" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              qwen2.5-coder
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">The latest series of Code-Specific Qwen models, with significant improvements in code generation, code reasoning, and code fixing.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1.5B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        230.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        67<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/yi" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              yi
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Yi 1.5 is a high-performing, bilingual language model.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">6B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">9B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">34B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        221.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        174<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/dolphin-llama3" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              dolphin-llama3
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Dolphin 2.9 is a new model with 8B and 70B sizes by Eric Hartford based on Llama 3 that has a variety of instruction, conversational, and coding skills.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        220K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        53<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/zephyr" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              zephyr
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Zephyr is a series of fine-tuned versions of the Mistral and Mixtral models that are trained to act as helpful assistants.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8x22B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        216.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        40<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/orca-mini" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              orca-mini
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A general-purpose model ranging from 3 billion parameters to 70 billion, suitable for entry-level hardware.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        215.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        119<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llava-llama3" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llava-llama3
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A LLaVA model fine-tuned from Llama 3 Instruct with better scores in several benchmarks.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Vision</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        182.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        4<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/snowflake-arctic-embed" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              snowflake-arctic-embed
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A suite of text embedding models by Snowflake, optimized for performance.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Embedding</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">22M</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">33M</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        177K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        16<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/mistral-openorca" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              mistral-openorca
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Mistral OpenOrca is a 7 billion parameter model, fine-tuned on top of the Mistral 7B model using the OpenOrca dataset.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        157.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      12 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/tinyllama" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              tinyllama
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">The TinyLlama project is an open endeavor to train a compact 1.1B Llama model on 3 trillion tokens.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        154.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        36<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/starcoder" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              starcoder
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">StarCoder is a code generation model trained on 80+ programming languages.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">15B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        151.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        100<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      12 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/vicuna" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              vicuna
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">General use chat model based on Llama and Llama 2 with 2K to 16K context sizes.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">30B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        144.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        111<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/codestral" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              codestral
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Codestral is Mistral AI’s first-ever code model designed for code generation tasks.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">22B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        144.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama2-chinese" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama2-chinese
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Llama 2 based model fine tuned to improve Chinese dialogue ability.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        131.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        35<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      12 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/wizard-vicuna-uncensored" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              wizard-vicuna-uncensored
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Wizard Vicuna Uncensored is a 7B, 13B, and 30B parameter model based on Llama 2 uncensored by Eric Hartford.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">30B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        127.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        49<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/granite-code" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              granite-code
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A family of open foundation models by IBM for Code Intelligence</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">20B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">34B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        126.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        162<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/codegeex4" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              codegeex4
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A versatile model for AI software development scenarios, including code completion.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">9B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        118.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/nous-hermes2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              nous-hermes2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">The powerful family of models by Nous Research that excels at scientific discussion and coding tasks.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">34B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        110.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        33<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/all-minilm" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              all-minilm
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Embedding models on very large sentence level datasets.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Embedding</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">22M</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">33M</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        109.2K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        10<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      7 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/openchat" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              openchat
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A family of open-source models trained on a wide variety of data, surpassing ChatGPT on various benchmarks. Updated to version 3.5-0106.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        108K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        50<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/aya" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              aya
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Aya 23, released by Cohere, is a new family of state-of-the-art, multilingual models that support 23 languages. </p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">35B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        106.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        33<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/codeqwen" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              codeqwen
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">CodeQwen1.5 is a large language model pretrained on a large amount of code data.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        106.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        30<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/wizardlm2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              wizardlm2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">State of the art large language model from Microsoft AI with improved performance on complex chat, multilingual, reasoning and agent use cases.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8x22B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        103.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        22<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/tinydolphin" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              tinydolphin
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">An experimental 1.1B parameter model trained on the new Dolphin 2.8 dataset by Eric Hartford and based on TinyLlama.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        99.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      8 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/wizardcoder" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              wizardcoder
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">State-of-the-art code generation model</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">33B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">34B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        97.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        67<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/stable-code" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              stable-code
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Stable Code 3B is a coding model with instruct and code completion variants on par with models such as Code Llama 7B that are 2.5x larger.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        95.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        36<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/openhermes" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              openhermes
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">OpenHermes 2.5 is a 7B model fine-tuned by Teknium on Mistral with fully open datasets.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        94.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        35<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/qwen2-math" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              qwen2-math
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Qwen2 Math is a series of specialized math language models built upon the Qwen2 LLMs, which significantly outperforms the mathematical capabilities of open-source models and even closed-source models (e.g., GPT4o).</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1.5B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">72B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        91.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        52<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/bakllava" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              bakllava
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">BakLLaVA is a multimodal model consisting of the Mistral 7B base model augmented with the LLaVA  architecture.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Vision</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        90.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/mistral-large" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              mistral-large
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Mistral Large 2 is Mistral's new flagship model that is significantly more capable in code generation, mathematics, and reasoning with 128k context window and support for dozens of languages.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">123B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        88.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      2 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/stablelm2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              stablelm2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Stable LM 2 is a state-of-the-art 1.6B and 12B parameter language model trained on multilingual data in English, Spanish, German, Italian, French, Portuguese, and Dutch.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1.6B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">12B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        87.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        84<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama3-gradient" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama3-gradient
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">This model extends LLama-3 8B's context length from 8k to over 1m tokens.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        85.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        35<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/reflection" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              reflection
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A high-performing model trained with a new technique called Reflection-tuning that teaches a LLM to detect mistakes in its reasoning and correct course.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        84.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/deepseek-llm" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              deepseek-llm
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">An advanced language model crafted with 2 trillion bilingual tokens.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">67B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        83.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        64<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/wizard-math" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              wizard-math
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Model focused on math and logic problems</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        82.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        64<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/glm4" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              glm4
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A strong multi-lingual general language model with competitive performance to Llama 3.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">9B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        77.2K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        32<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/neural-chat" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              neural-chat
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A fine-tuned model based on Mistral with good coverage of domain and language.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        76.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        50<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama3-chatqa" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama3-chatqa
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A model from NVIDIA based on Llama 3 that excels at conversational question answering (QA) and retrieval-augmented generation (RAG).</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        72.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        35<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/moondream" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              moondream
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">moondream2 is a small vision language model designed to run efficiently on edge devices.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Vision</span>
    
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        71.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/xwinlm" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              xwinlm
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Conversational model based on Llama 2 that performs competitively on various benchmarks.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        70.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        80<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/nous-hermes" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              nous-hermes
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">General use models based on Llama and Llama 2 from Nous Research.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        69.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        63<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/phind-codellama" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              phind-codellama
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Code generation model based on Code Llama.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">34B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        69.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        49<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/sqlcoder" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              sqlcoder
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">SQLCoder is a code completion model fined-tuned on StarCoder for SQL generation tasks</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">15B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        69K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        48<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/smollm" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              smollm
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">🪐 A family of small models with 135M, 360M, and 1.7B parameters, trained on a new high-quality dataset.</p>
  
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        68.2K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        94<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      8 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/dolphincoder" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              dolphincoder
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A 7B and 15B uncensored variant of the Dolphin model family that excels at coding, based on StarCoder2.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        66.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        35<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/yarn-llama2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              yarn-llama2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">An extension of Llama 2 that supports a context of up to 128k tokens.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        66.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        67<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/wizardlm" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              wizardlm
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">General use model based on Llama 2.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">30B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        64.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        73<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/deepseek-v2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              deepseek-v2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A strong, economical, and efficient Mixture-of-Experts language model.</p>
  
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        60.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        34<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/starling-lm" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              starling-lm
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Starling is a large language model trained by reinforcement learning from AI feedback focused on improving chatbot helpfulness.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        58.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        36<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/samantha-mistral" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              samantha-mistral
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A companion assistant trained in philosophy, psychology, and personal relationships. Based on Mistral.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        55.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        49<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      12 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/falcon" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              falcon
            </span>
          </h2>
          
          <span class="inline-flex items-center rounded-full bg-yellow-50 ml-2 mt-1 px-2 py-1 text-xs font-medium text-yellow-900 ring-1 ring-inset ring-yellow-600/20 group-hover:no-underline">Archive</span>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A large language model built by the Technology Innovation Institute (TII) for use in summarization, text generation, and chat bots.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">40B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">180B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        55.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        38<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      12 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/solar" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              solar
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A compact, yet powerful 10.7B large language model designed for single-turn conversation.</p>
  
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        54K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        32<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/orca2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              orca2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Orca 2 is built by Microsoft research, and are a fine-tuned version of Meta's Llama 2 models.  The model is designed to excel particularly in reasoning.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        53.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        33<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/stable-beluga" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              stable-beluga
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Llama 2 based model fine tuned on an Orca-style dataset. Originally called Free Willy.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        49.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        49<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/yi-coder" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              yi-coder
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Yi-Coder is a series of open-source code language models that delivers state-of-the-art coding performance with fewer than 10 billion parameters.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">9B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        45.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        67<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/dolphin-phi" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              dolphin-phi
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">2.7B uncensored Dolphin model by Eric Hartford, based on the Phi language model by Microsoft Research.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        45.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        15<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/hermes3" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              hermes3
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Hermes 3 is the latest version of the flagship Hermes series of LLMs by Nous Research</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">405B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        45.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        49<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      7 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/internlm2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              internlm2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">InternLM2.5 is a 7B parameter model tailored for practical scenarios with outstanding reasoning capability.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        44.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        65<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llava-phi3" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llava-phi3
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A new small LLaVA model fine-tuned from Phi 3 Mini.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Vision</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        43.5K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        4<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/wizardlm-uncensored" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              wizardlm-uncensored
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Uncensored version of Wizard LM model </p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        43K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      13 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/yarn-mistral" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              yarn-mistral
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">An extension of Mistral to support context windows of 64K or 128K.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        38.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        33<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama-pro" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama-pro
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">An expansion of Llama 2 that specializes in integrating both general language understanding and domain-specific knowledge, particularly in programming and mathematics.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        38.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        33<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/medllama2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              medllama2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Fine-tuned Llama 2 model to answer medical questions based on an open source medical dataset. </p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        36.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      12 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/meditron" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              meditron
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Open-source medical large language model adapted from Llama 2 to the medical domain.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        35.2K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        22<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/nexusraven" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              nexusraven
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Nexus Raven is a 13B instruction tuned model for function calling tasks. </p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        34.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        32<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/nous-hermes2-mixtral" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              nous-hermes2-mixtral
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">The Nous Hermes 2 model from Nous Research, now trained over Mixtral.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8x7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        32.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/codeup" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              codeup
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Great code generation model based on Llama2.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        31.2K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        19<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama3-groq-tool-use" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama3-groq-tool-use
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A series of models from Groq that represent a significant advancement in open-source AI capabilities for tool use/function calling.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        30.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        33<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      2 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/everythinglm" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              everythinglm
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Uncensored Llama2 based model with support for a 16K context window.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        29.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/magicoder" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              magicoder
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">🎩 Magicoder is a family of 7B parameter models trained on 75K synthetic instruction data using OSS-Instruct, a novel approach to enlightening LLMs with open-source code snippets.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        26.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/minicpm-v" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              minicpm-v
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A series of multimodal LLMs (MLLMs) designed for vision-language understanding.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Vision</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        26.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/stablelm-zephyr" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              stablelm-zephyr
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A lightweight chat model allowing accurate, and responsive output without requiring high-end hardware.</p>
  
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        26.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      10 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/codebooga" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              codebooga
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A high-performing code instruct model created by merging two existing code models.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">34B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        25.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        16<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/wizard-vicuna" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              wizard-vicuna
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Wizard Vicuna is a 13B parameter model based on Llama 2 trained by MelodysDreamj.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        24.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      12 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/mistrallite" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              mistrallite
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">MistralLite is a fine-tuned model based on Mistral with enhanced capabilities of processing long contexts.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        24.2K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/falcon2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              falcon2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Falcon2 is an 11B parameters causal decoder-only model built by TII and trained over 5T tokens.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">11B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        24K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/duckdb-nsql" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              duckdb-nsql
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">7B parameter text-to-SQL model made by MotherDuck and Numbers Station.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        22.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      8 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/megadolphin" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              megadolphin
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">MegaDolphin-2.2-120b is a transformation of Dolphin-2.2-70b created by interleaving the model with itself.</p>
  
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        21.2K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        19<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/bge-m3" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              bge-m3
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">BGE-M3 is a new model from BAAI distinguished for its versatility in Multi-Functionality, Multi-Linguality, and Multi-Granularity.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Embedding</span>
    
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        20.8K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        3<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      2 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/notux" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              notux
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A top-performing mixture of experts model, fine-tuned with high-quality data.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8x7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        20.3K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/goliath" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              goliath
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A language model created by combining two fine-tuned Llama 2 70B models into one.</p>
  
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        19.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        16<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/open-orca-platypus2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              open-orca-platypus2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Merge of the Open Orca OpenChat model and the Garage-bAInd Platypus 2 model. Designed for chat and code generation.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">13B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        19.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      13 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/notus" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              notus
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A 7B chat model fine-tuned with high-quality data and based on Zephyr.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        19.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      9 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/mathstral" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              mathstral
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">MathΣtral: a 7B model designed for math reasoning and scientific discovery by Mistral AI.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        17.9K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      2 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/solar-pro" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              solar-pro
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Solar Pro Preview: an advanced large language model (LLM) with 22 billion parameters designed to fit into a single GPU</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">22B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        15.6K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        18<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/dbrx" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              dbrx
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">DBRX is an open, general-purpose LLM created by Databricks.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">132B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        15.4K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        7<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      6 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/nuextract" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              nuextract
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A 3.8B model fine-tuned on a private high-quality synthetic dataset for information extraction, based on Phi-3.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">3B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        14.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      2 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/alfred" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              alfred
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A robust conversational model designed to be used for both chat and instruct use cases.</p>
  
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        12.1K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        7<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      11 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/reader-lm" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              reader-lm
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A series of models that convert HTML content to Markdown content, which is useful for content conversion tasks.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">0.5B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1.5B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        12K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        33<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      4 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/firefunction-v2" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              firefunction-v2
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">An open weights function calling model based on Llama 3, competitive with GPT-4o function calling capabilities.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Tools</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">70B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        11.7K
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      2 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/bge-large" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              bge-large
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Embedding model from BAAI mapping texts to vectors.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Embedding</span>
    
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        7,815
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        3<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      2 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/deepseek-v2.5" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              deepseek-v2.5
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">An upgraded version of DeekSeek-V2  that integrates the general and coding abilities of both DeepSeek-V2-Chat and DeepSeek-Coder-V2-Instruct.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Code</span>
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">236B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        6,538
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        7<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      5 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/bespoke-minicheck" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              bespoke-minicheck
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">A state-of-the-art fact-checking model developed by Bespoke Labs.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">7B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        6,094
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        17<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      3 weeks ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/paraphrase-multilingual" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              paraphrase-multilingual
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Sentence-transformers model that can be used for tasks like clustering or semantic search.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-[2px] text-xs sm:text-[13px] font-medium text-indigo-600">Embedding</span>
    
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        4,585
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        3<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      2 months ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/shieldgemma" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              shieldgemma
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">ShieldGemma is set of instruction tuned models for evaluating the safety of text prompt input and text output responses against a set of defined safety policies.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">2B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">9B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">27B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        1,498
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        49<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      4 days ago
    </span>
  </p>
</div>

      </a>
    </li>
    
    <li class="flex items-baseline border-b border-neutral-200 py-6">
      <a href="/library/llama-guard3" class="group w-full">
        <div class="flex items-center mb-3">
          <h2 class="truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl">
            <span>
              llama-guard3
            </span>
          </h2>
          
        </div>
        
<div class="flex flex-col space-y-2">
  
  <p class="max-w-md break-words">Llama Guard 3 is a series of models fine-tuned for content safety classification of LLM inputs and responses.</p>
  
  
  <div class="flex flex-wrap space-x-2">
    
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">1B</span>
    
    <span class="inline-flex items-center rounded-md bg-[#ddf4ff] px-2 py-[2px] text-xs sm:text-[13px] font-medium text-blue-600">8B</span>
    
  </div>
  
  <p class="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>
        1,330
        <span class="hidden sm:flex">
          &nbsp;Pulls
        </span>
      </span>
    
    
      <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
        </svg>
        33<span class="hidden sm:flex">&nbsp;Tags</span>
      </span>
    
    <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
      <span class="hidden sm:flex">Updated&nbsp;</span>
      4 days ago
    </span>
  </p>
</div>

      </a>
    </li>
    
  </ul>
`;

console.log(extractModels(ulString));
