/**
 * Google Style Start Homepage JavaScript
 * Seoul Digital University (SDU) Edition
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Data Store: Quotes Database (오늘의 명언 30선)
  // =========================================================================
  const QUOTES = [
    {
      text: "지식보다 중요한 것은 상상력이며, 배움은 끝없는 성장이다.",
      author: "알베르트 아인슈타인",
      category: "배움 & 통찰"
    },
    {
      text: "미래를 예측하는 가장 좋은 방법은 스스로 미래를 만들어가는 것이다.",
      author: "피터 드러커",
      category: "도전 & 비전"
    },
    {
      text: "오늘 할 수 있는 일에 온 힘을 다하라. 그것이 내일의 기적을 만든다.",
      author: "아이작 뉴턴",
      category: "열정 & 실천"
    },
    {
      text: "배움에는 끝이 없고, 스스로 한계를 정하지 않는 자만이 멀리 갈 수 있다.",
      author: "공자",
      category: "지혜 & 배움"
    },
    {
      text: "성공이란 실패를 거듭하면서도 열정을 잃지 않는 능력이다.",
      author: "윈스턴 처칠",
      category: "용기 & 끈기"
    },
    {
      text: "꿈을 이루고자 하는 용기만 있다면 우리 모두의 꿈은 실현될 수 있다.",
      author: "월트 디즈니",
      category: "꿈 & 도전"
    },
    {
      text: "가장 위대한 영광은 한 번도 쓰러지지 않는 것이 아니라, 쓰러질 때마다 일어나는 것이다.",
      author: "넬슨 만델라",
      category: "회복 & 성장"
    },
    {
      text: "인생은 스스로 만들어가는 예술작품이다. 매일 새로운 붓질을 두려워 마라.",
      author: "빈센트 반 고흐",
      category: "인생 & 창의"
    },
    {
      text: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 당신이 옳다.",
      author: "헨리 포드",
      category: "마인드셋"
    },
    {
      text: "작은 일에 충실한 것이 곧 위대한 성취를 이루는 징검다리가 된다.",
      author: "마더 테레사",
      category: "성실 & 인내"
    },
    {
      text: "길을 아는 것과 그 길을 직접 걷는 것은 완전히 다르다.",
      author: "매트릭스 (영화)",
      category: "실천 & 통찰"
    },
    {
      text: "어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병의 초기 증세다.",
      author: "알베르트 아인슈타인",
      category: "변화 & 혁신"
    },
    {
      text: "교육은 세상을 바꿀 수 있는 가장 강력한 무기이다.",
      author: "넬슨 만델라",
      category: "배움 & 교육"
    },
    {
      text: "끝없이 배우고, 끊임없이 새로워져라. 그것이 디지털 시대의 진정한 힘이다.",
      author: "서울디지털대학교 가치",
      category: "SDU & 배움"
    },
    {
      text: "모든 기회에는 어려움이 있고, 모든 어려움 속에는 기회가 숨어있다.",
      author: "존 F. 케네디",
      category: "기회 & 희망"
    }
  ];

  // =========================================================================
  // 2. Default Shortcuts
  // =========================================================================
  const DEFAULT_SHORTCUTS = [
    {
      name: "SDU 포털",
      url: "https://portal.sdu.ac.kr",
      customIcon: "SDU",
      bg: "linear-gradient(135deg, #002D72, #0066B2)",
      textColor: "#ffffff"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      iconUrl: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64"
    },
    {
      name: "Gmail",
      url: "https://mail.google.com",
      iconUrl: "https://www.google.com/s2/favicons?domain=mail.google.com&sz=64"
    },
    {
      name: "네이버",
      url: "https://www.naver.com",
      iconUrl: "https://www.google.com/s2/favicons?domain=naver.com&sz=64"
    },
    {
      name: "ChatGPT",
      url: "https://chatgpt.com",
      iconUrl: "https://www.google.com/s2/favicons?domain=openai.com&sz=64"
    },
    {
      name: "GitHub",
      url: "https://github.com",
      iconUrl: "https://www.google.com/s2/favicons?domain=github.com&sz=64"
    },
    {
      name: "Google 지도",
      url: "https://maps.google.com",
      iconUrl: "https://www.google.com/s2/favicons?domain=maps.google.com&sz=64"
    }
  ];

  // =========================================================================
  // 3. Weather Service Configuration & Codes
  // =========================================================================
  const CITIES = {
    seoul: {
      name: "서울",
      fullName: "서울특별시",
      lat: 37.5665,
      lon: 126.9780,
      cached: null
    },
    jeju: {
      name: "제주",
      fullName: "제주특별자치도",
      lat: 33.4996,
      lon: 126.5312,
      cached: null
    }
  };

  const WEATHER_CODES = {
    0: { desc: "맑음", icon: "sun" },
    1: { desc: "대체로 맑음", icon: "sun-cloud" },
    2: { desc: "구름 조금", icon: "sun-cloud" },
    3: { desc: "흐림", icon: "cloud" },
    45: { desc: "안개", icon: "fog" },
    48: { desc: "짙은 안개", icon: "fog" },
    51: { desc: "이슬비", icon: "drizzle" },
    53: { desc: "약한 비", icon: "rain" },
    55: { desc: "비", icon: "rain" },
    56: { desc: "진눈깨비", icon: "snow-rain" },
    57: { desc: "진눈깨비", icon: "snow-rain" },
    61: { desc: "약한 비", icon: "rain" },
    63: { desc: "비", icon: "rain" },
    65: { desc: "강한 비", icon: "heavy-rain" },
    71: { desc: "약한 눈", icon: "snow" },
    73: { desc: "눈", icon: "snow" },
    75: { desc: "폭설", icon: "heavy-snow" },
    77: { desc: "눈 날림", icon: "snow" },
    80: { desc: "소나기", icon: "rain" },
    81: { desc: "강한 소나기", icon: "heavy-rain" },
    82: { desc: "폭우", icon: "heavy-rain" },
    85: { desc: "눈 소나기", icon: "snow" },
    86: { desc: "강한 눈", icon: "heavy-snow" },
    95: { desc: "뇌우", icon: "thunder" },
    96: { desc: "우박 동반 뇌우", icon: "thunder" },
    99: { desc: "강한 뇌우", icon: "thunder" }
  };

  function getWeatherIconSvg(iconType) {
    switch (iconType) {
      case 'sun':
        return `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="#FBBC04" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5" fill="#FBBC04"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
      case 'sun-cloud':
        return `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="#9AA0A6" stroke="#5F6368"/><circle cx="16" cy="7" r="3" fill="#FBBC04" stroke="#FBBC04"/></svg>`;
      case 'cloud':
      case 'fog':
        return `<svg class="icon-svg" viewBox="0 0 24 24" fill="#9AA0A6" stroke="#5F6368" stroke-width="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`;
      case 'drizzle':
      case 'rain':
      case 'heavy-rain':
        return `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="#4285F4" stroke-width="2"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="#9AA0A6" stroke="#5F6368"/><path d="M8 19v2M12 19v2M16 19v2"/></svg>`;
      case 'snow':
      case 'heavy-snow':
      case 'snow-rain':
        return `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="#8AB4F8" stroke-width="2"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" fill="#9AA0A6" stroke="#5F6368"/><circle cx="8" cy="20" r="1" fill="#8AB4F8"/><circle cx="12" cy="20" r="1" fill="#8AB4F8"/><circle cx="16" cy="20" r="1" fill="#8AB4F8"/></svg>`;
      case 'thunder':
        return `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="#EA4335" stroke-width="2"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" fill="#9AA0A6" stroke="#5F6368"/><polygon points="13 11 9 17 15 17 11 23 18 15 12 15 13 11" fill="#FBBC04" stroke="#FBBC04"/></svg>`;
      default:
        return `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="#FBBC04" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2"/></svg>`;
    }
  }

  // =========================================================================
  // 4. State Management
  // =========================================================================
  const state = {
    theme: localStorage.getItem('sdu_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    shortcuts: JSON.parse(localStorage.getItem('sdu_shortcuts')) || DEFAULT_SHORTCUTS,
    searchHistory: JSON.parse(localStorage.getItem('sdu_search_history')) || ['서울디지털대학교 수강신청', '구글 날씨', '유튜브 최신 트렌드'],
    activeWeatherTab: 'seoul',
    currentQuoteIndex: Math.floor(Math.random() * QUOTES.length)
  };

  // =========================================================================
  // 5. DOM Element References
  // =========================================================================
  const elements = {
    // Clock
    currentTime: document.getElementById('current-time'),
    currentDate: document.getElementById('current-date'),

    // Weather
    seoulTemp: document.getElementById('seoul-weather-temp'),
    seoulDesc: document.getElementById('seoul-weather-desc'),
    seoulIcon: document.getElementById('seoul-weather-icon'),
    jejuTemp: document.getElementById('jeju-weather-temp'),
    jejuDesc: document.getElementById('jeju-weather-desc'),
    jejuIcon: document.getElementById('jeju-weather-icon'),
    weatherPill: document.getElementById('weather-pill-container'),
    weatherRefreshBtn: document.getElementById('weather-refresh-btn'),
    weatherModal: document.getElementById('weather-modal'),
    weatherModalClose: document.getElementById('weather-modal-close'),
    weatherModalContent: document.getElementById('weather-modal-content'),
    tabSeoul: document.getElementById('tab-seoul'),
    tabJeju: document.getElementById('tab-jeju'),

    // Theme & Apps
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    appsLauncherBtn: document.getElementById('apps-launcher-btn'),
    appsDropdown: document.getElementById('apps-dropdown'),

    // Search
    searchForm: document.getElementById('search-form'),
    searchInput: document.getElementById('search-input'),
    searchBoxWrapper: document.getElementById('search-box-wrapper'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    voiceSearchBtn: document.getElementById('voice-search-btn'),
    lensSearchBtn: document.getElementById('lens-search-btn'),
    searchSuggestions: document.getElementById('search-suggestions'),
    btnLucky: document.getElementById('btn-lucky'),

    // Voice Modal
    voiceModal: document.getElementById('voice-modal'),
    voiceCancelBtn: document.getElementById('voice-cancel-btn'),
    voiceStatusText: document.getElementById('voice-status-text'),

    // Shortcuts
    shortcutsGrid: document.getElementById('shortcuts-grid'),
    addShortcutModal: document.getElementById('add-shortcut-modal'),
    shortcutForm: document.getElementById('shortcut-form'),
    shortcutNameInput: document.getElementById('shortcut-name'),
    shortcutUrlInput: document.getElementById('shortcut-url'),
    shortcutModalClose: document.getElementById('shortcut-modal-close'),
    btnCancelShortcut: document.getElementById('btn-cancel-shortcut'),

    // Quotes
    quoteText: document.getElementById('quote-text'),
    quoteAuthor: document.getElementById('quote-author'),
    quoteCategory: document.getElementById('quote-category'),
    quoteRefreshBtn: document.getElementById('quote-refresh-btn'),
    quoteCopyBtn: document.getElementById('quote-copy-btn'),
    quoteCard: document.getElementById('quote-card'),

    // Toast
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message')
  };

  // =========================================================================
  // 6. UI Notification / Toast
  // =========================================================================
  let toastTimer = null;
  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('show');
    toastTimer = setTimeout(() => {
      elements.toast.classList.remove('show');
    }, 2500);
  }

  // =========================================================================
  // 7. Theme Controller
  // =========================================================================
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sdu_theme', theme);
    state.theme = theme;
  }

  function initTheme() {
    applyTheme(state.theme);
    elements.themeToggleBtn.addEventListener('click', () => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`${newTheme === 'dark' ? '다크' : '라이트'} 모드로 전환되었습니다.`);
    });
  }

  // =========================================================================
  // 8. Live Clock & Date Function
  // =========================================================================
  function updateClock() {
    const now = new Date();

    // Time: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    elements.currentTime.textContent = `${hours}:${minutes}:${seconds}`;

    // Korean Date format
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayName = dayNames[now.getDay()];

    elements.currentDate.textContent = `${year}년 ${month}월 ${date}일 ${dayName}`;
  }

  function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
  }

  // =========================================================================
  // 9. Weather Logic (Open-Meteo Integration for Seoul & Jeju)
  // =========================================================================
  async function fetchCityWeather(cityKey) {
    const city = CITIES[cityKey];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,uv_index_max&timezone=Asia%2FSeoul`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Weather fetch error for ${city.name}`);
      const data = await response.json();

      const current = data.current;
      const daily = data.daily;
      const codeInfo = WEATHER_CODES[current.weather_code] || { desc: "맑음", icon: "sun" };

      city.cached = {
        temp: Math.round(current.temperature_2m),
        feelsLike: Math.round(current.apparent_temperature),
        humidity: current.relative_humidity_2m,
        windSpeed: current.wind_speed_10m,
        precipitation: current.precipitation,
        maxTemp: Math.round(daily.temperature_2m_max[0]),
        minTemp: Math.round(daily.temperature_2m_min[0]),
        uvIndex: daily.uv_index_max ? daily.uv_index_max[0] : 4.5,
        desc: codeInfo.desc,
        icon: codeInfo.icon
      };

      return city.cached;
    } catch (error) {
      console.warn(`Fallback weather data used for ${cityKey}:`, error);
      // Graceful offline fallback
      const fallback = cityKey === 'seoul' 
        ? { temp: 22, feelsLike: 23, humidity: 55, windSpeed: 2.5, precipitation: 0, maxTemp: 26, minTemp: 18, uvIndex: 5.2, desc: "맑음", icon: "sun" }
        : { temp: 24, feelsLike: 25, humidity: 65, windSpeed: 3.8, precipitation: 0, maxTemp: 27, minTemp: 20, uvIndex: 6.0, desc: "구름 조금", icon: "sun-cloud" };
      city.cached = fallback;
      return fallback;
    }
  }

  async function updateAllWeather() {
    elements.weatherRefreshBtn.classList.add('spinning');

    const [seoulData, jejuData] = await Promise.all([
      fetchCityWeather('seoul'),
      fetchCityWeather('jeju')
    ]);

    // Update Header Seoul Pill
    if (seoulData) {
      elements.seoulTemp.textContent = `${seoulData.temp}°C`;
      elements.seoulDesc.textContent = seoulData.desc;
      elements.seoulIcon.innerHTML = getWeatherIconSvg(seoulData.icon);
    }

    // Update Header Jeju Pill
    if (jejuData) {
      elements.jejuTemp.textContent = `${jejuData.temp}°C`;
      elements.jejuDesc.textContent = jejuData.desc;
      elements.jejuIcon.innerHTML = getWeatherIconSvg(jejuData.icon);
    }

    // Update detailed modal if open
    renderWeatherDetailModal(state.activeWeatherTab);

    setTimeout(() => {
      elements.weatherRefreshBtn.classList.remove('spinning');
    }, 600);
  }

  function renderWeatherDetailModal(cityKey) {
    state.activeWeatherTab = cityKey;
    const city = CITIES[cityKey];
    const data = city.cached;
    if (!data) return;

    // Toggle tab active state
    if (cityKey === 'seoul') {
      elements.tabSeoul.classList.add('active');
      elements.tabJeju.classList.remove('active');
    } else {
      elements.tabJeju.classList.add('active');
      elements.tabSeoul.classList.remove('active');
    }

    elements.weatherModalContent.innerHTML = `
      <div class="weather-detail-top">
        <div>
          <div class="detail-main-temp">${data.temp}°C</div>
          <div class="detail-sub-info">
            <span>${city.fullName}</span> • <span>${data.desc}</span>
          </div>
          <div class="detail-sub-info" style="font-size: 12px; margin-top: 2px;">
            최고 ${data.maxTemp}° / 최저 ${data.minTemp}° • 체감 ${data.feelsLike}°
          </div>
        </div>
        <div class="detail-icon-large">
          ${getWeatherIconSvg(data.icon)}
        </div>
      </div>

      <div class="weather-grid-metrics">
        <div class="metric-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          <div class="metric-text-group">
            <span class="metric-label">습도</span>
            <span class="metric-val">${data.humidity}%</span>
          </div>
        </div>
        <div class="metric-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>
          <div class="metric-text-group">
            <span class="metric-label">풍속</span>
            <span class="metric-val">${data.windSpeed} m/s</span>
          </div>
        </div>
        <div class="metric-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2"/></svg>
          <div class="metric-text-group">
            <span class="metric-label">자외선 지수</span>
            <span class="metric-val">${data.uvIndex} (보통)</span>
          </div>
        </div>
        <div class="metric-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><path d="M8 19v2M12 19v2M16 19v2"/></svg>
          <div class="metric-text-group">
            <span class="metric-label">강수량</span>
            <span class="metric-val">${data.precipitation} mm</span>
          </div>
        </div>
      </div>
    `;
  }

  function initWeather() {
    updateAllWeather();

    // Refresh button event
    elements.weatherRefreshBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateAllWeather();
      showToast('날씨 정보를 최신으로 갱신했습니다.');
    });

    // Pill click -> Open modal
    elements.weatherPill.addEventListener('click', () => {
      elements.weatherModal.classList.toggle('active');
      elements.appsDropdown.classList.remove('active');
      renderWeatherDetailModal(state.activeWeatherTab);
    });

    // Modal tabs
    elements.tabSeoul.addEventListener('click', () => renderWeatherDetailModal('seoul'));
    elements.tabJeju.addEventListener('click', () => renderWeatherDetailModal('jeju'));
    elements.weatherModalClose.addEventListener('click', () => {
      elements.weatherModal.classList.remove('active');
    });
  }

  // =========================================================================
  // 10. Daily Quotes Logic (오늘의 명언)
  // =========================================================================
  function renderQuote(index, isAnimated = true) {
    state.currentQuoteIndex = (index + QUOTES.length) % QUOTES.length;
    const quote = QUOTES[state.currentQuoteIndex];

    if (isAnimated) {
      elements.quoteText.style.opacity = '0';
      elements.quoteText.style.transform = 'translateY(4px)';
      setTimeout(() => {
        elements.quoteText.textContent = `"${quote.text}"`;
        elements.quoteAuthor.textContent = quote.author;
        elements.quoteCategory.textContent = quote.category;
        elements.quoteText.style.opacity = '1';
        elements.quoteText.style.transform = 'translateY(0)';
      }, 200);
    } else {
      elements.quoteText.textContent = `"${quote.text}"`;
      elements.quoteAuthor.textContent = quote.author;
      elements.quoteCategory.textContent = quote.category;
    }
  }

  function initQuotes() {
    renderQuote(state.currentQuoteIndex, false);

    // Refresh Quote Button
    elements.quoteRefreshBtn.addEventListener('click', () => {
      elements.quoteRefreshBtn.classList.add('spin');
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * QUOTES.length);
      } while (nextIndex === state.currentQuoteIndex && QUOTES.length > 1);

      renderQuote(nextIndex, true);
      setTimeout(() => elements.quoteRefreshBtn.classList.remove('spin'), 600);
    });

    // Copy Quote Button
    elements.quoteCopyBtn.addEventListener('click', async () => {
      const quote = QUOTES[state.currentQuoteIndex];
      const textToCopy = `"${quote.text}" - ${quote.author}`;
      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast('명언이 클립보드에 복사되었습니다.');
      } catch (err) {
        // Fallback copy
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('명언이 클립보드에 복사되었습니다.');
      }
    });
  }

  // =========================================================================
  // 11. Google Search & Voice Search & History
  // =========================================================================
  function saveSearchQuery(query) {
    if (!query || !query.trim()) return;
    const clean = query.trim();
    state.searchHistory = [clean, ...state.searchHistory.filter(item => item !== clean)].slice(0, 8);
    localStorage.setItem('sdu_search_history', JSON.stringify(state.searchHistory));
    renderSuggestions();
  }

  function renderSuggestions() {
    const val = elements.searchInput.value.trim().toLowerCase();
    const filtered = val 
      ? state.searchHistory.filter(item => item.toLowerCase().includes(val))
      : state.searchHistory;

    if (filtered.length === 0) {
      elements.searchSuggestions.classList.remove('active');
      return;
    }

    elements.searchSuggestions.innerHTML = filtered.map(query => `
      <div class="suggestion-item" data-query="${escapeHtml(query)}">
        <div class="suggestion-left">
          <span class="suggestion-icon">
            <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </span>
          <span>${escapeHtml(query)}</span>
        </div>
        <button type="button" class="suggestion-remove-btn" title="기록 삭제" data-remove="${escapeHtml(query)}">삭제</button>
      </div>
    `).join('');

    elements.searchSuggestions.classList.add('active');
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }

  function initSearch() {
    const { searchInput, searchBoxWrapper, searchClearBtn, searchForm, btnLucky } = elements;

    // Input changes
    searchInput.addEventListener('input', () => {
      if (searchInput.value.trim().length > 0) {
        searchClearBtn.classList.add('visible');
      } else {
        searchClearBtn.classList.remove('visible');
      }
      renderSuggestions();
    });

    // Focus & Blur
    searchInput.addEventListener('focus', () => {
      searchBoxWrapper.classList.add('has-focus');
      renderSuggestions();
    });

    document.addEventListener('click', (e) => {
      if (!searchBoxWrapper.contains(e.target)) {
        searchBoxWrapper.classList.remove('has-focus');
        elements.searchSuggestions.classList.remove('active');
      }
    });

    // Clear Button
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchClearBtn.classList.remove('visible');
      searchInput.focus();
      elements.searchSuggestions.classList.remove('active');
    });

    // Suggestion item click or delete
    elements.searchSuggestions.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('[data-remove]');
      if (removeBtn) {
        e.stopPropagation();
        const toRemove = removeBtn.getAttribute('data-remove');
        state.searchHistory = state.searchHistory.filter(item => item !== toRemove);
        localStorage.setItem('sdu_search_history', JSON.stringify(state.searchHistory));
        renderSuggestions();
        return;
      }

      const item = e.target.closest('[data-query]');
      if (item) {
        const query = item.getAttribute('data-query');
        searchInput.value = query;
        searchForm.submit();
      }
    });

    // Form submit
    searchForm.addEventListener('submit', (e) => {
      const query = searchInput.value.trim();
      if (!query) {
        e.preventDefault();
        searchInput.focus();
        return;
      }
      saveSearchQuery(query);
    });

    // "I'm Feeling Lucky" button
    btnLucky.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
      } else {
        // If empty, surprise with SDU official page or trending
        window.location.href = 'https://www.google.com/doodles';
      }
    });

    // Shortcut key '/' to focus search input
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape') {
        elements.weatherModal.classList.remove('active');
        elements.appsDropdown.classList.remove('active');
        elements.addShortcutModal.classList.remove('active');
        elements.voiceModal.classList.remove('active');
        elements.searchSuggestions.classList.remove('active');
        searchInput.blur();
      }
    });

    // Google Lens Button
    elements.lensSearchBtn.addEventListener('click', () => {
      window.open('https://lens.google.com', '_blank');
    });

    // Voice Search
    initVoiceSearch();
  }

  function initVoiceSearch() {
    const { voiceSearchBtn, voiceModal, voiceCancelBtn, voiceStatusText, searchInput, searchForm } = elements;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    let recognition = null;
    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.lang = 'ko-KR';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        voiceStatusText.textContent = "듣고 있습니다...";
        voiceModal.classList.add('active');
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        voiceStatusText.textContent = `"${transcript}"`;
        searchInput.value = transcript;
        setTimeout(() => {
          voiceModal.classList.remove('active');
          saveSearchQuery(transcript);
          searchForm.submit();
        }, 800);
      };

      recognition.onerror = (event) => {
        voiceStatusText.textContent = "음성을 인식하지 못했습니다.";
        setTimeout(() => voiceModal.classList.remove('active'), 1500);
      };

      recognition.onend = () => {
        setTimeout(() => voiceModal.classList.remove('active'), 500);
      };
    }

    voiceSearchBtn.addEventListener('click', () => {
      if (recognition) {
        try {
          recognition.start();
        } catch (e) {
          recognition.stop();
        }
      } else {
        voiceStatusText.textContent = "브라우저에서 마이크를 지원하지 않아 키보드 검색을 이용해주세요.";
        voiceModal.classList.add('active');
        setTimeout(() => voiceModal.classList.remove('active'), 2000);
      }
    });

    voiceCancelBtn.addEventListener('click', () => {
      if (recognition) recognition.stop();
      voiceModal.classList.remove('active');
    });
  }

  // =========================================================================
  // 12. Quick Shortcuts System (즐겨찾기 관리)
  // =========================================================================
  function renderShortcuts() {
    const listHtml = state.shortcuts.map((sc, idx) => {
      const iconHtml = sc.iconUrl 
        ? `<img src="${sc.iconUrl}" alt="${sc.name}" onerror="this.parentElement.innerHTML='${sc.name.charAt(0)}'">`
        : (sc.customIcon 
            ? `<span style="font-size:13px; font-weight:800; color:${sc.textColor || '#fff'}">${sc.customIcon}</span>`
            : sc.name.charAt(0));

      const bgStyle = sc.bg ? `style="background: ${sc.bg}"` : '';

      return `
        <div class="shortcut-card" title="${sc.name} (${sc.url})">
          <a href="${sc.url}" target="_blank" rel="noopener noreferrer" style="display:flex; flex-direction:column; align-items:center; width:100%;">
            <div class="shortcut-icon-circle" ${bgStyle}>
              ${iconHtml}
            </div>
            <span class="shortcut-title">${escapeHtml(sc.name)}</span>
          </a>
          <button type="button" class="shortcut-delete-btn" data-delete-idx="${idx}" title="바로가기 삭제" aria-label="삭제">&times;</button>
        </div>
      `;
    }).join('');

    // Add Shortcut Button
    const addBtnHtml = `
      <div class="shortcut-card" id="btn-open-add-shortcut" style="cursor: pointer;">
        <div class="shortcut-icon-circle add-shortcut-circle">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
        <span class="shortcut-title">바로가기 추가</span>
      </div>
    `;

    elements.shortcutsGrid.innerHTML = listHtml + addBtnHtml;
  }

  function initShortcuts() {
    renderShortcuts();

    // Event delegation for delete & add shortcut
    elements.shortcutsGrid.addEventListener('click', (e) => {
      const deleteBtn = e.target.closest('[data-delete-idx]');
      if (deleteBtn) {
        e.preventDefault();
        e.stopPropagation();
        const idx = parseInt(deleteBtn.getAttribute('data-delete-idx'), 10);
        const removed = state.shortcuts.splice(idx, 1);
        localStorage.setItem('sdu_shortcuts', JSON.stringify(state.shortcuts));
        renderShortcuts();
        showToast(`"${removed[0].name}" 바로가기가 삭제되었습니다.`);
        return;
      }

      const addBtn = e.target.closest('#btn-open-add-shortcut');
      if (addBtn) {
        elements.addShortcutModal.classList.add('active');
        elements.shortcutNameInput.value = '';
        elements.shortcutUrlInput.value = '';
        elements.shortcutNameInput.focus();
      }
    });

    // Modal actions
    elements.shortcutModalClose.addEventListener('click', () => {
      elements.addShortcutModal.classList.remove('active');
    });

    elements.btnCancelShortcut.addEventListener('click', () => {
      elements.addShortcutModal.classList.remove('active');
    });

    elements.shortcutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = elements.shortcutNameInput.value.trim();
      let url = elements.shortcutUrlInput.value.trim();
      if (!name || !url) return;

      if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
      }

      let domain = '';
      try {
        domain = new URL(url).hostname;
      } catch (err) {
        domain = url;
      }

      const newShortcut = {
        name,
        url,
        iconUrl: `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
      };

      state.shortcuts.push(newShortcut);
      localStorage.setItem('sdu_shortcuts', JSON.stringify(state.shortcuts));
      renderShortcuts();
      elements.addShortcutModal.classList.remove('active');
      showToast(`"${name}" 바로가기가 추가되었습니다.`);
    });
  }

  // =========================================================================
  // 13. Google Apps 9-Dot Launcher
  // =========================================================================
  function initAppsLauncher() {
    elements.appsLauncherBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      elements.appsDropdown.classList.toggle('active');
      elements.weatherModal.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
      if (!elements.appsDropdown.contains(e.target) && e.target !== elements.appsLauncherBtn) {
        elements.appsDropdown.classList.remove('active');
      }
      if (!elements.weatherModal.contains(e.target) && !elements.weatherPill.contains(e.target)) {
        elements.weatherModal.classList.remove('active');
      }
    });
  }

  // =========================================================================
  // 14. Initialization
  // =========================================================================
  function init() {
    initTheme();
    initClock();
    initWeather();
    initQuotes();
    initSearch();
    initShortcuts();
    initAppsLauncher();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
