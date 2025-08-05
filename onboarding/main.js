const app = document.getElementById('app');

const logo = `
<div id="ascenda-logo" class="relative overflow-hidden w-[324px] h-[65px]">
      <svg id="aa" xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="currentColor">
        <clipPath id="clip-shape">
          <path
            d="M26.0276 0.447898H35.2348L61.0021 59.8116H48.8342L43.1732 46.1215C35.7771 55.2482 25.0732 59.8116 11.0617 59.8116H0L26.0276 0.415405V0.447898ZM39.1498 36.1896L30.3547 12.99L13.8705 50.5404C18.9515 50.6619 23.9726 49.4241 28.4134 46.9554C32.9084 44.4155 36.6185 40.6915 39.139 36.1896H39.1498Z" />
        </clipPath>
      </svg>
      <svg id="aa-" xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
        <path id="line" d="M41.23,41.6c-1.2.5-1.93,1.57-2.89,2.5-6.85,6.61-14.18,12.09-31.47,12.09C24.87,15.78,30.7,2.02,30.87,1.68c0,0,22,53,26,62.5"
          stroke="currentColor" stroke-width="11.5" clip-path="url(#clip-shape)" />
      </svg>
      <svg id="s" xmlns="http://www.w3.org/2000/svg" width="35" height="43" viewBox="0 0 35 43" fill="currentColor">
        <path
          d="M28.064 12.1171C27.0701 10.8421 25.8219 9.78732 24.3984 9.01946C22.8195 8.14576 21.0413 7.69432 19.2363 7.70893C17.6815 7.69031 16.144 8.03526 14.7465 8.7162C14.0941 9.00393 13.5451 9.48374 13.173 10.0915C12.8009 10.6992 12.6234 11.4059 12.6643 12.1171C12.6351 12.8392 12.8369 13.5518 13.2406 14.1517C13.6442 14.7515 14.2287 15.2073 14.9092 15.453C17.0181 16.2964 19.1949 16.9595 21.4161 17.435C22.9839 17.7855 24.5272 18.2377 26.036 18.7889C27.5455 19.3266 28.9698 20.078 30.2655 21.02C31.5303 21.9432 32.5839 23.1247 33.3563 24.4859C34.1872 26.0058 34.6094 27.7149 34.5817 29.4464C34.6496 31.6278 34.1686 33.7913 33.1828 35.7391C32.2946 37.4062 31.019 38.8361 29.463 39.909C27.82 41.0221 25.9797 41.8124 24.0406 42.2376C21.9456 42.7182 19.8025 42.9581 17.653 42.9524C14.4988 42.9552 11.3721 42.3674 8.43486 41.2195C5.59948 40.1765 3.04794 38.4851 0.984467 36.2806L7.66488 30.0421C8.85393 31.5539 10.3558 32.7916 12.0679 33.6704C13.9218 34.6347 15.9858 35.1259 18.0759 35.1001C18.8305 35.0999 19.583 35.02 20.3208 34.8618C21.0798 34.7044 21.8109 34.4343 22.4898 34.0603C23.1257 33.7078 23.6627 33.2013 24.0514 32.5873C24.4677 31.8994 24.675 31.1054 24.6479 30.302C24.6694 29.5245 24.4481 28.7596 24.0148 28.1134C23.5814 27.4671 22.9575 26.9716 22.2295 26.6954C19.9796 25.7527 17.6446 25.0274 15.2563 24.5292C13.7461 24.1979 12.2605 23.7637 10.8099 23.2295C9.45697 22.7029 8.18901 21.9803 7.04672 21.085C5.92082 20.2079 4.99631 19.0999 4.33552 17.8357C3.61949 16.3363 3.27365 14.6873 3.32695 13.0269C3.26938 10.9965 3.74814 8.98681 4.71509 7.19988C5.61811 5.59785 6.88012 4.22627 8.40233 3.19248C9.97091 2.12571 11.7143 1.34129 13.5536 0.874688C15.486 0.365795 17.4765 0.110924 19.4749 0.11653C22.4051 0.111275 25.3131 0.624649 28.064 1.63284C30.6757 2.51632 32.9816 4.12421 34.7119 6.26843L28.064 12.1171Z" />
      </svg>
      <svg id="c" xmlns="http://www.w3.org/2000/svg" width="38" height="43" viewBox="0 0 38 43" fill="currentColor">
        <path
          d="M26.8691 9.71264C28.2763 10.3324 29.4982 11.3065 30.4153 12.5395V12.4853L37.356 6.40924C35.5672 4.33084 33.2853 2.73336 30.719 1.76282C25.2377 -0.417849 19.1385 -0.475786 13.6167 1.60036C11.0557 2.57953 8.71229 4.05149 6.71938 5.93268C4.71024 7.84316 3.1124 10.1428 2.02357 12.6911C0.837802 15.4927 0.246962 18.5094 0.288397 21.5507C0.238951 24.6488 0.829635 27.7238 2.02357 30.5836C3.10521 33.1291 4.70933 35.4198 6.73235 37.3077C8.75538 39.1957 11.1524 40.639 13.7685 41.5444C16.497 42.5154 19.3744 43.0029 22.2709 42.9849C25.1742 43.0092 28.0581 42.5102 30.784 41.5119C33.2481 40.6408 35.4757 39.2096 37.2909 37.3312L30.9467 30.9194C29.9298 32.1431 28.6046 33.074 27.1076 33.6162C25.6005 34.2213 23.9927 34.5373 22.3685 34.5477C20.6229 34.5885 18.8943 34.1978 17.3365 33.4105C15.9373 32.6761 14.7101 31.6535 13.736 30.4103C12.7662 29.159 12.0313 27.7425 11.567 26.2296C11.095 24.7146 10.8538 23.1374 10.8513 21.5507C10.8542 19.9637 11.0805 18.385 11.5236 16.861C11.9587 15.3585 12.6603 13.9461 13.595 12.6911C14.5392 11.4501 15.7465 10.433 17.1304 9.71264C18.6469 8.92907 20.3361 8.53805 22.0431 8.5754C23.7172 8.5845 25.3674 8.97337 26.8691 9.71264Z" />
      </svg>
      <svg id="e" xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M41.9956 23.4353C41.9991 23.8881 41.9701 24.3405 41.9088 24.7891H11.0227C11.1232 26.1901 11.5147 27.5549 12.1723 28.7965C12.8036 29.9873 13.6707 31.0375 14.7208 31.8833C15.8081 32.77 17.036 33.4692 18.3539 33.952C19.7061 34.4583 21.1392 34.7152 22.5833 34.7102C24.8081 34.7785 27.0158 34.3025 29.0143 33.3238C30.755 32.4181 32.245 31.0974 33.3522 29.4789L40.1302 34.8943C36.1177 40.2952 30.3049 42.9957 22.6918 42.9957C19.7356 43.0187 16.7985 42.5201 14.0159 41.5227C11.4681 40.5886 9.12849 39.1646 7.12947 37.3312C5.14912 35.4744 3.59199 33.2137 2.56378 30.7028C1.4253 27.8746 0.864847 24.8476 0.915384 21.7998C0.877176 18.7531 1.43719 15.7285 2.56378 12.8969C3.59393 10.3347 5.13641 8.00928 7.09693 6.06265C9.04585 4.15447 11.363 2.66206 13.9075 1.67617C16.6163 0.620486 19.5021 0.0911245 22.4098 0.116528C25.0836 0.0864706 27.7393 0.556689 30.2398 1.50287C32.5756 2.40311 34.683 3.80864 36.4105 5.61858C38.2473 7.58208 39.6479 9.91103 40.5207 12.4528C41.5636 15.5387 42.0626 18.7819 41.9956 22.0381V23.4353ZM31.8448 17.5325C31.8505 16.2733 31.664 15.0206 31.2917 13.8175C30.9414 12.6666 30.3499 11.6033 29.5565 10.6982C28.731 9.7598 27.7042 9.01938 26.5525 8.53207C25.1992 7.97221 23.7442 7.69928 22.2797 7.73059C19.4475 7.65205 16.6873 8.62883 14.5365 10.4708C13.5029 11.3493 12.6587 12.4281 12.0547 13.6419C11.4507 14.8557 11.0997 16.1792 11.0227 17.5325H31.8448Z" />
      </svg>
      <svg id="n" xmlns="http://www.w3.org/2000/svg" width="38" height="42" viewBox="0 0 38 42" fill="currentColor">
        <path
          d="M10.0522 1.28625H0.400314V41.8043H10.5511V19.5253C10.5519 18.1683 10.7492 16.8186 11.1367 15.5179C11.5065 14.2564 12.0936 13.0689 12.8719 12.0088C13.6595 10.98 14.6577 10.1307 15.8 9.51767C17.1066 8.84739 18.561 8.51591 20.0294 8.55373C21.4133 8.48567 22.7855 8.83677 23.9661 9.56099C24.9346 10.223 25.7304 11.1068 26.2869 12.1387C26.8585 13.2292 27.226 14.4148 27.3714 15.6371C27.5315 16.8691 27.6148 18.1098 27.6208 19.3521V41.8043H37.8475V16.4169C37.8509 14.362 37.5662 12.3168 37.0016 10.3408C36.4711 8.43869 35.5681 6.66059 34.3446 5.10953C33.083 3.55442 31.4899 2.30006 29.6813 1.43788C27.549 0.456035 25.2178 -0.0185139 22.8708 0.0515372C20.0578 -0.0195896 17.2931 0.790942 14.9649 2.36933C12.9249 3.70213 11.2984 5.57782 10.2691 7.78474H10.0522V1.28625Z" />
      </svg>
      <svg id="d" xmlns="http://www.w3.org/2000/svg" width="45" height="65" viewBox="0 0 45 65" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M44.623 63.7935H34.9711V57.7283H34.8084C33.4185 60.0701 31.371 61.9531 28.9197 63.1437C26.4071 64.3792 23.6409 65.0133 20.8403 64.9957C18.0904 65.054 15.3608 64.5146 12.8403 63.415C10.3198 62.3153 8.06882 60.6817 6.24313 58.6272C4.48676 56.6233 3.13526 54.2989 2.26309 51.7821C1.31564 49.0857 0.842317 46.2458 0.864091 43.3883C0.844697 40.5413 1.33312 37.7136 2.30646 35.0377C3.21518 32.537 4.60399 30.2376 6.39496 28.2684C8.19426 26.297 10.3919 24.7293 12.8427 23.6688C15.2936 22.6083 17.9418 22.0793 20.6125 22.1165C23.6973 22.0578 26.7439 22.8045 29.4511 24.2827C30.4705 24.8452 31.4204 25.5249 32.2816 26.3081C32.9936 26.9725 33.6467 27.6973 34.2336 28.4742H34.483V0H44.6447V63.8043L44.623 63.7935ZM11.1884 43.3774C11.1961 44.9822 11.441 46.5771 11.915 48.1105C12.3699 49.6371 13.1054 51.0659 14.0839 52.3237C15.0667 53.5824 16.3048 54.6196 17.717 55.3671C19.3018 56.13 21.0385 56.5262 22.7978 56.5262C24.5571 56.5262 26.2937 56.13 27.8785 55.3671C29.3169 54.6219 30.5953 53.6027 31.6417 52.367C32.6779 51.1345 33.4759 49.7206 33.9951 48.1971C34.5294 46.6947 34.8045 45.1126 34.8084 43.5182C34.8025 41.9064 34.5276 40.3067 33.9951 38.7852C32.9582 35.672 30.7651 33.0747 27.8677 31.5285C26.3247 30.728 24.6069 30.3223 22.8683 30.348C21.0809 30.3057 19.3098 30.6958 17.7061 31.4852C16.2895 32.2071 15.0492 33.2313 14.0731 34.4853C13.0992 35.7341 12.3639 37.1513 11.9041 38.666C11.4287 40.1805 11.1837 41.7578 11.1775 43.3449L11.1884 43.3774Z" />
      </svg>
      <svg id="a" xmlns="http://www.w3.org/2000/svg" width="38" height="43" viewBox="0 0 38 43" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M28.2505 36.6597C27.0942 38.5904 25.3875 40.1328 23.3487 41.0895C20.9562 42.2683 18.3162 42.8588 15.6488 42.8116C13.9238 42.8032 12.2058 42.5924 10.5301 42.1834C8.78082 41.7736 7.11774 41.0586 5.61734 40.0714C4.10532 39.0699 2.83484 37.7455 1.89758 36.194C0.854827 34.386 0.340117 32.3223 0.411864 30.237C0.274657 27.572 1.20309 24.9617 2.99292 22.9804C4.85226 21.0983 7.12985 19.6808 9.64078 18.843C12.556 17.8459 15.5826 17.2094 18.6528 16.9476C21.9063 16.6444 25.1597 16.4819 28.3373 16.4819V15.4746C28.4138 14.3812 28.2004 13.2869 27.7187 12.302C27.2371 11.3171 26.5041 10.4763 25.5935 9.86427C23.6531 8.62712 21.3882 7.99378 19.0866 8.04469C16.9523 8.04362 14.8431 8.50556 12.9051 9.39854C11.0882 10.1774 9.42752 11.2782 8.00323 12.6478L2.75433 6.48505C5.04758 4.36723 7.75375 2.74487 10.7036 1.7195C13.6505 0.66233 16.7578 0.120083 19.8892 0.116535C22.9364 0.0125749 25.973 0.528461 28.8145 1.63285C30.8607 2.43481 32.6874 3.70993 34.1447 5.35355C35.6019 6.99718 36.6481 8.96247 37.1975 11.0882C37.7251 13.0707 37.9948 15.1129 38 17.1642V41.8043H28.5216V36.6597H28.2505ZM29.5953 23.3161H27.307C25.6694 23.3161 23.9559 23.392 22.1448 23.5328C20.4514 23.6492 18.7774 23.9618 17.1562 24.4642C15.7601 24.8675 14.4636 25.5573 13.3497 26.4896C12.8399 26.9327 12.4375 27.4856 12.1726 28.1066C11.9077 28.7275 11.7874 29.4004 11.8206 30.0746C11.795 30.9197 12.0133 31.7544 12.4496 32.479C12.8714 33.1226 13.4401 33.6572 14.1089 34.0387C14.817 34.4419 15.5862 34.7273 16.3862 34.8835C17.2223 35.0468 18.072 35.1302 18.9239 35.1326C22.4268 35.1326 25.0838 34.2119 26.8841 32.349C27.8154 31.3271 28.5345 30.1308 28.9999 28.8294C29.4652 27.5281 29.6676 26.1475 29.5953 24.7675V23.3161Z" />
      </svg>
    </div>
`
const landing = `
<!--Main welcome tile-->
    <div id="welcome" class="max-w-[540px] m-4 flex flex-col items-center gap-6.25">
      <h1 class="text-2xl md:text-4xl font-bold">Welcome [f_name]</h1>
      <p class="text-center">Lorem ipsum dolor sit amet consectetur. Facilisis nisl cursus vitae ridiculus quis facilisi mauris. Tristique
        scelerisque arcu facilisi at augue facilisis amet mattis donec. Sapien semper eu tristique tellus facilisis. Sit
        ut fermentum faucibus ac facilisi id egestas ultrices.</p>
      <button onClick="logoReveal" class="py-3 px-6 bg-cloudburst-500 text-sm md:text-base text-white font-bold rounded flex justify-between w-[200px] cursor-pointer hover:bg-cloudburst-400 active:bg-cloudburst-700 focus-visible:outline-shakesphere-300 focus-within:outline-2">
        Get started
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98145 13.1763H19.4814V11.1763H4.98145V13.1763Z" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M14.6886 5.96912L13.2743 7.38333L18.0672 12.1762L13.2743 16.9691L14.6886 18.3833L20.8957 12.1762L14.6886 5.96912Z" />
        </svg>
      </button>
    </div>
    <!--Custom brand tile-->
    <div id="custom-brand" data-speed="36" class="tile absolute pointer-events-none rounded-2xl bg-white p-4.25 flex flex-col gap-3 items-center shadow-ascenda shadow-cloudburst-500/10 max-[1024px]:hidden top-[30%] left-[2.5%]">
      <h5 class="font-bold">Custom brand assets</h5>
      <img width="180" src="/custom-brand-assets.png" alt="">
    </div>
    <!--Redemption analytics tile-->
    <div id="redemption-analytics" data-speed="24" class="tile absolute pointer-events-none rounded-2xl bg-white p-4.25 flex flex-col gap-3 items-center shadow-ascenda shadow-cloudburst-500/10 bottom-[-5%] left-[5%]">
      <h5 class="font-bold">Redemption analytics</h5>
      <img width="140" src="/redemption-analytics.png" alt="">
    </div>
     <!--Points to cash tile-->
     <div id="points-cash" data-speed="20" class= "tile absolute pointer-events-none max-w-[310px] rounded-2xl bg-white p-4.25 flex flex-col gap-3 items-center shadow-ascenda shadow-cloudburst-500/10 top-[-5%] left-[15%] md:top-[2.5%] md:left-[25%]">
      <h5 class="font-bold">Points to cash</h5>
      <p class="text-sm">Determine increment percentage and maximum cash percentage allowed.</p>
      <div id="slider" class="flex items-center gap-2.5 w-full ">
        <span class="text-cloudburst-400">0%</span>
        <div class="h-[4px] grow bg-cloudburst-150 rounded relative before:absolute before:content-[''] before:rounded before:left-0 before:top-0 before:w-2/5 before:h-full before:bg-shakesphere-500 after:absolute after:w-3 after:h-3 after:rounded-full after:bg-shakesphere-500 after:-top-1 after:left-[35%]">
        </div>
        <span class="text-cloudburst-400">100%</span>
      </div>
    </div>
    <!--Virgin Australia tile-->
    <div id="virgin-australia" data-speed="36" class="tile absolute pointer-events-none rounded-2xl bg-white p-4.25 flex gap-4 items-center shadow-ascenda shadow-cloudburst-500/10 min-w-[360px] max-[882px]:hidden right-[-1.5%] top-[12.5%]">
      <img src="/velocity.svg" alt="">
      <div class="flex flex-col">
        <h5 class="font-bold">Virgin Australia</h5>
        <span class="text-sm text-cloudburst-400 uppercase">Transfer partners</span>
      </div>
    </div>
    <!--Singapore Airlines tile-->
    <div id="singapore-airlines" data-speed="24" class="tile absolute pointer-events-none rounded-2xl bg-white p-4.25 flex gap-4 items-center shadow-ascenda shadow-cloudburst-500/10 min-w-[360px] right-[-4.5%] top-[15%] md:top-[25%]">
      <img src="/krisflyer.svg" alt="">
      <div class="flex flex-col">
        <h5 class="font-bold">Singapore Airlines</h5>
        <span class="text-sm text-cloudburst-400 uppercase">Transfer partners</span>
      </div>
    </div>
    <!--Eligible users tile-->
    <div id="eligible-users" data-speed="36" class="tile absolute pointer-events-none rounded-2xl bg-white p-4.25 flex flex-col gap-4 shadow-ascenda shadow-cloudburst-500/10 min-w-[360px] max-[596px]:hidden bottom-[10%] right-[-1.5%]">
      <h5 class="font-bold">581,900 Eligible users</h5>
      <div class="grid use grid-cols-[auto_auto_auto] gap-3">
        <span class="bg-cloudburst-200 text-sm px-1.5 py-0.5 rounded-sm w-fit h-fit">Product type</span>
        <span class="text-cloudburst-400 uppercase text-sm">Equals</span>
        <span class="text-cloudburst-400 text-sm">Rewards Card</span>

        <span class="bg-cloudburst-200 text-sm px-1.5 py-0.5 rounded-sm w-fit h-fit">User age</span>
        <span class="text-cloudburst-400 text-sm uppercase">Is greater than</span>
        <span class="text-cloudburst-400 text-sm">25</span>
      </div>
    </div>
`
function preloadImages(imageUrls, callback) {
    let loaded = 0;
    const total = imageUrls.length;

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            loaded++;
            if (loaded === total) {
                callback();
            }
        };
    });
}

function trackAnimations(selector, total, callback) {
    let completedAnimations = 0;

    document.querySelectorAll(selector).forEach(el => {
        el.addEventListener("animationend", () => {
            completedAnimations++;
            if (completedAnimations === total) {
                callback();
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    logoReveal();
});

function logoReveal() {
    app.innerHTML = logo;

    const line = document.getElementById('line');
    if (line) {
        document.documentElement.style.setProperty("--total-length", line.getTotalLength());
    }

    // Preload assets before transitioning
    const imageList = [
        "/custom-brand-assets.png",
        "/redemption-analytics.png",
        "/krisflyer.svg",
        "/velocity.svg"
    ];

    preloadImages(imageList, () => {
        // Track animations on the logo andtransition to landing
        trackAnimations("#ascenda-logo", 9, landingReveal);
    });
}

function landingReveal() {
    app.innerHTML = landing;
    enableParallax();

    const restartButton = document.querySelector('button');
    if (restartButton) {
        restartButton.addEventListener("click", logoReveal);
    }
}

function enableParallax() {
    const tiles = document.querySelectorAll(".absolute");

    function handleMouseMove(e) {
        const { clientX: mouseX, clientY: mouseY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        tiles.forEach(tile => {
            const speed = tile.dataset.speed * 2 || 10;
            const offsetX = -(mouseX - centerX) / speed;
            const offsetY = -(mouseY - centerY) / speed;
            tile.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    }

    // Avoid adding duplicate event listeners
    document.removeEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousemove", handleMouseMove);
}