// ==UserScript==
// @name         kMax Mod Loader
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  Загружает и выполняет скрипт kMax Mod с кешированием и автоматическим обновлением
// @author       Your Name
// @match        *://*.max.ru/*
// @match        *://max.ru/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Конфигурация
    const CONFIG = {
        SCRIPT_URL: 'https://raw.githubusercontent.com/kiwinatra/kmax-builds/main/mod.min.user.js',
        CHECK_INTERVAL: 24 * 60 * 60 * 1000, // 24 часа
        CACHE_KEY: 'kmax_script_cache',
        VERSION_KEY: 'kmax_script_version',
        LAST_CHECK_KEY: 'kmax_last_check'
    };

    // Логгер
    const logger = {
        prefix: '[KMOD Loader]',
        log: (...args) => console.log(`${logger.prefix}`, ...args),
        info: (...args) => console.info(`${logger.prefix}`, ...args),
        warn: (...args) => console.warn(`${logger.prefix}`, ...args),
        error: (...args) => console.error(`${logger.prefix}`, ...args)
    };

    // Проверка, нужно ли обновление
    function needUpdate() {
        const lastCheck = GM_getValue(CONFIG.LAST_CHECK_KEY, 0);
        const now = Date.now();
        return now - lastCheck > CONFIG.CHECK_INTERVAL;
    }

    // Получение версии скрипта из кода
    function extractVersion(scriptContent) {
        const match = scriptContent.match(/@version\s+([\d.]+)/);
        return match ? match[1] : null;
    }

    // Загрузка скрипта с кешированием
    function loadScript() {
        // Проверяем кеш
        const cachedScript = GM_getValue(CONFIG.CACHE_KEY, null);
        const cachedVersion = GM_getValue(CONFIG.VERSION_KEY, null);

        // Если кеш есть и обновление не требуется — используем его
        if (cachedScript && !needUpdate()) {
            logger.info(`Используем кешированную версию ${cachedVersion || 'unknown'}`);
            executeScript(cachedScript);
            return;
        }

        // Загружаем свежий скрипт
        logger.info('Загрузка свежего скрипта...');
        GM_xmlhttpRequest({
            method: 'GET',
            url: CONFIG.SCRIPT_URL,
            cache: 'no-cache',
            onload: function(response) {
                if (response.status === 200) {
                    const scriptContent = response.responseText;
                    const version = extractVersion(scriptContent);

                    // Сохраняем в кеш
                    GM_setValue(CONFIG.CACHE_KEY, scriptContent);
                    GM_setValue(CONFIG.VERSION_KEY, version || 'unknown');
                    GM_setValue(CONFIG.LAST_CHECK_KEY, Date.now());

                    logger.info(`Скрипт загружен, версия ${version || 'unknown'}`);
                    executeScript(scriptContent);
                } else {
                    logger.error(`Ошибка загрузки: статус ${response.status}`);
                    // Если есть кеш — используем его как fallback
                    if (cachedScript) {
                        logger.warn('Используем кешированную версию как fallback');
                        executeScript(cachedScript);
                    }
                }
            },
            onerror: function(error) {
                logger.error('Ошибка сети при загрузке:', error);
                // Если есть кеш — используем его как fallback
                if (cachedScript) {
                    logger.warn('Используем кешированную версию как fallback');
                    executeScript(cachedScript);
                }
            }
        });
    }

    // Выполнение скрипта
    function executeScript(scriptContent) {
        try {
            // Проверяем, что это действительно скрипт
            if (!scriptContent || !scriptContent.includes('// ==UserScript==')) {
                logger.error('Полученный контент не является пользовательским скриптом');
                return;
            }

            // Выполняем скрипт в контексте страницы
            const scriptElement = document.createElement('script');
            scriptElement.textContent = scriptContent;
            scriptElement.setAttribute('data-kmax-loader', 'true');

            // Добавляем скрипт на страницу
            const target = document.head || document.documentElement;
            target.appendChild(scriptElement);

            logger.info('Скрипт успешно выполнен');
        } catch (error) {
            logger.error('Ошибка при выполнении скрипта:', error);
        }
    }

    // Регистрация глобальных функций
    function registerGlobalFunctions() {
        try {
            // Используем unsafeWindow для гарантированной записи в глобальный объект
            const target = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

            target.__kmaxForceUpdate = function() {
                console.log('[KMOD Loader] Принудительное обновление...');
                // Очищаем кеш
                GM_deleteValue(CONFIG.CACHE_KEY);
                GM_deleteValue(CONFIG.VERSION_KEY);
                GM_deleteValue(CONFIG.LAST_CHECK_KEY);
                // Загружаем свежую версию
                loadScript();
                return 'Обновление запущено. Проверьте консоль для отслеживания статуса.';
            };

            target.__kmaxStatus = function() {
                const cachedScript = GM_getValue(CONFIG.CACHE_KEY, null);
                const cachedVersion = GM_getValue(CONFIG.VERSION_KEY, null);
                const lastCheck = GM_getValue(CONFIG.LAST_CHECK_KEY, 0);
                const lastCheckDate = lastCheck ? new Date(lastCheck).toLocaleString() : 'никогда';
                const isFresh = cachedScript && !needUpdate();

                console.log('=== kMax Loader Status ===');
                console.log(`Кеш: ${cachedScript ? 'есть' : 'нет'}`);
                console.log(`Версия: ${cachedVersion || 'неизвестна'}`);
                console.log(`Последняя проверка: ${lastCheckDate}`);
                console.log(`Кеш актуален: ${isFresh ? 'да' : 'нет (требуется обновление)'}`);
                console.log(`Следующая проверка: ${isFresh ? 'через ' + Math.round((CONFIG.CHECK_INTERVAL - (Date.now() - lastCheck)) / 1000 / 60) + ' минут' : 'сейчас'}`);
                console.log('=== Для обновления выполните __kmaxForceUpdate() ===');
                return {
                    hasCache: !!cachedScript,
                    version: cachedVersion,
                    lastCheck: lastCheckDate,
                    isFresh: isFresh
                };
            };

            // Проверяем, что функции зарегистрированы
            if (typeof target.__kmaxForceUpdate === 'function') {
                logger.info('Глобальные функции успешно зарегистрированы');
                logger.info('Доступные команды:');
                logger.info('  __kmaxForceUpdate() - принудительное обновление скрипта');
                logger.info('  __kmaxStatus() - просмотр статуса кеша');
            } else {
                logger.error('Не удалось зарегистрировать глобальные функции');
            }
        } catch (error) {
            logger.error('Ошибка при регистрации глобальных функций:', error);
        }
    }

    // Инициализация
    function init() {
        logger.info('Инициализация загрузчика kMax Mod');

        // Регистрируем глобальные функции
        registerGlobalFunctions();

        // Загружаем скрипт
        loadScript();

        // Периодическая проверка при активной странице
        setInterval(() => {
            if (document.visibilityState === 'visible') {
                loadScript();
            }
        }, CONFIG.CHECK_INTERVAL);
    }

    // Ждём загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
